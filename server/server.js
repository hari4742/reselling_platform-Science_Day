const express = require("express");
const app = express();
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const fileUpload = require("express-fileupload");
const db = require("./db/db");

const jwtTokenPass = "reselling";
// Middle wares
app.use(cors());
app.use(express.json());
app.use(fileUpload());

app.use("/public", express.static(__dirname + "/public"));

// Testing file upload
app.post("/upload", function (req, res) {
  let sampleFile;
  let uploadPath;

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }
  let currentDate = new Date();
  let uniqName =
    currentDate.getFullYear().toString() +
    currentDate.getMonth().toString() +
    currentDate.getDay().toString() +
    currentDate.getHours().toString() +
    currentDate.getMinutes().toString() +
    currentDate.getSeconds().toString();
  sampleFile = req.files.pro_pic;
  uploadPath = "/public/Images/profile_pic/" + uniqName + sampleFile.name;

  sampleFile.mv(__dirname + uploadPath, function (err) {
    if (err) return res.status(500).send(err);

    res.send("File uploaded!");
  });
});

// Testing multiple file upload
app.post("/upload/multiple", function (req, res) {
  let sampleFile;
  let uploadPath;

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }
  let currentDate = new Date();
  let uniqName =
    currentDate.getFullYear().toString() +
    currentDate.getMonth().toString() +
    currentDate.getDay().toString() +
    currentDate.getHours().toString() +
    currentDate.getMinutes().toString() +
    currentDate.getSeconds().toString();
  sampleFile = req.files.prod_imgs;
  sampleFile.forEach((img) => {
    uploadPath = "/public/Images/product_imgs/" + uniqName + img.name;

    img.mv(__dirname + uploadPath, function (err) {
      if (err) return res.status(500).send(err);
    });
  });
  res.send("Files uploaded!");
});

//          Product Apis

// Get all products
app.get("/products", async (req, res) => {
  try {
    const result = await db.query(
      "select prod_id,user_id,product_name,category,price,to_char(posted_date::date,'Mon dd yyyy') as posted_date,description,display_img from products;"
    );
    res.status(200).json({
      status: "success",
      total_items: result.rowCount,
      data: result.rows,
    });
  } catch (err) {
    console.log(err);
    res.status(502).json({ status: "failed" });
  }
});

// Get a specific product
app.get("/product/:prod_id/details", async (req, res) => {
  try {
    const { prod_id } = req.params;
    const result = await db.query(
      "select prod_id,user_id,product_name,category,price,to_char(posted_date::date,'Mon dd yyyy') as posted_date,description from products where prod_id = $1;",
      [prod_id]
    );
    res.status(200).json({
      status: "success",
      total_items: result.rowCount,
      data: result.rows,
    });
  } catch (err) {
    console.log(err);
    res.status(502).json({ status: "failed" });
  }
});

// Delete a specific product
app.delete("/product/:prod_id/delete", async (req, res) => {
  try {
    const { prod_id } = req.params;
    await db.query("delete from wish_list where prod_id = $1;", [prod_id]);
    await db.query("delete from product_imgs where prod_id = $1;", [prod_id]);
    const result = await db.query(
      "delete from products where prod_id = $1 returning *;",
      [prod_id]
    );
    res.status(200).json({
      status: "success",
      total_items: result.rowCount,
      data: result.rows,
    });
  } catch (err) {
    console.log(err);
    res.status(502).json({ status: "failed" });
  }
});

// add a product
app.post("/product/add", async (req, res) => {
  try {
    const { user_id, product_name, category, price, posted_date, description } =
      req.body;
    let sampleFile;
    let uploadPath;

    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send("No files were uploaded.");
    }
    let currentDate = new Date();
    let uniqName =
      currentDate.getFullYear().toString() +
      currentDate.getMonth().toString() +
      currentDate.getDay().toString() +
      currentDate.getHours().toString() +
      currentDate.getMinutes().toString() +
      currentDate.getSeconds().toString();
    sampleFile = req.files.display_img;
    uploadPath = "/public/Images/product_imgs/" + uniqName + sampleFile.name;

    sampleFile.mv(__dirname + uploadPath, function (err) {
      if (err) return res.status(500).send(err);
    });
    const result = await db.query(
      "INSERT INTO products(user_id,product_name,category,price,posted_date,description,display_img) VALUES ($1,$2,$3,$4,$5,$6,$7) returning *;",
      [
        user_id,
        product_name,
        category,
        price,
        posted_date,
        description,
        uploadPath,
      ]
    );
    res.status(200).json({
      status: "success",
      total_items: result.rowCount,
      data: result.rows,
    });
  } catch (err) {
    console.log(err);
    res.status(502).json({ status: "failed" });
  }
});

// Search product by product name
app.get("/products/search", async (req, res) => {
  try {
    const name = req.query.q;
    const result = await db.query(
      `select prod_id,user_id,product_name,category,price,to_char(posted_date::date,'Mon dd yyyy') as posted_date,description from products where product_name ilike '%${name}%';`
    );
    res.status(200).json({
      status: "success",
      total_items: result.rowCount,
      data: result.rows,
    });
  } catch (err) {
    console.log(err);
    res.status(502).json({ status: "failed" });
  }
});
// Search product by Category
app.get("/products/search/category", async (req, res) => {
  try {
    const category = req.query.q;
    const result = await db.query(
      "select prod_id,user_id,product_name,category,price,to_char(posted_date::date,'Mon dd yyyy') as posted_date,description from products where category = $1;",
      [category]
    );
    res.status(200).json({
      status: "success",
      total_items: result.rowCount,
      data: result.rows,
    });
  } catch (err) {
    console.log(err);
    res.status(502).json({ status: "failed" });
  }
});

// Wishlist
// Add a wish list
app.post("/user/add/wishlist", async (req, res) => {
  try {
    const { user_id, prod_id } = req.body;
    const result = await db.query(
      "INSERT INTO wish_list(user_id,prod_id)VALUES ($1,$2) returning *;",
      [user_id, prod_id]
    );
    res.status(200).json({
      status: "success",
      total_items: result.rowCount,
      data: result.rows,
    });
  } catch (err) {
    console.log(err);
    res.status(502).json({ status: "failed" });
  }
});
// Delete a wish list
app.delete("/user/delete/wishlist", async (req, res) => {
  try {
    const { user_id, wish_id } = req.body;
    const result = await db.query(
      "Delete from wish_list where user_id =$1 and wish_id = $2 returning *;",
      [user_id, wish_id]
    );
    res.status(200).json({
      status: "success",
      total_items: result.rowCount,
      data: result.rows,
    });
  } catch (err) {
    console.log(err);
    res.status(502).json({ status: "failed" });
  }
});

// Get wish list of a specific person
app.get("/user/:user_id/wish_list", async (req, res) => {
  try {
    const { user_id } = req.params;
    const result = await db.query(
      "select * from wish_list where user_id = $1",
      [user_id]
    );
    res.status(200).json({
      status: "success",
      total_items: result.rowCount,
      data: result.rows,
    });
  } catch (err) {
    console.log(err);
    res.status(502).json({ status: "failed" });
  }
});

// Users Api
// Get Info of a specific person
app.get("/user/:user_id/details", async (req, res) => {
  try {
    const { user_id } = req.params;
    const result = await db.query(
      "select user_id,first_name,last_name,email,mobile,department,propic from users where user_id = $1",
      [user_id]
    );
    res.status(200).json({
      status: "success",
      total_items: result.rowCount,
      data: result.rows,
    });
  } catch (err) {
    console.log(err);
    res.status(502).json({ status: "failed" });
  }
});
// Update Profile Pic
app.put("/user/:user_id/update/profilepic", async (req, res) => {
  try {
    const { user_id } = req.params;
    let sampleFile;
    let uploadPath;

    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send("No files were uploaded.");
    }
    let currentDate = new Date();
    let uniqName =
      currentDate.getFullYear().toString() +
      currentDate.getMonth().toString() +
      currentDate.getDay().toString() +
      currentDate.getHours().toString() +
      currentDate.getMinutes().toString() +
      currentDate.getSeconds().toString();
    sampleFile = req.files.propic;
    uploadPath = "/public/Images/profile_pic/" + uniqName + sampleFile.name;

    sampleFile.mv(__dirname + uploadPath, function (err) {
      if (err) return res.status(500).send(err);
    });
    const result = await db.query(
      "update users set propic = $1 where user_id = $2",
      [uploadPath, user_id]
    );
    res.status(200).json({
      status: "success",
      total_items: result.rowCount,
      data: result.rows,
    });
  } catch (err) {
    console.log(err);
    res.status(502).json({ status: "failed" });
  }
});

// Authentication
// Sign Up
app.post("/auth/signup", async (req, res) => {
  const { first_name, last_name, email, password, mobile, department } =
    req.body;
  let response = await db.query(`SELECT * FROM users WHERE email=$1;`, [email]);
  if (response.rows.length >= 1) {
    res.json({
      status: "failed",
      msg: "User already exits with that mail id..",
    });
  } else {
    try {
      let sampleFile;
      let uploadPath;

      if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send("No files were uploaded.");
      }
      let currentDate = new Date();
      let uniqName =
        currentDate.getFullYear().toString() +
        currentDate.getMonth().toString() +
        currentDate.getDay().toString() +
        currentDate.getHours().toString() +
        currentDate.getMinutes().toString() +
        currentDate.getSeconds().toString();
      sampleFile = req.files.propic;
      uploadPath = "/public/Images/profile_pic/" + uniqName + sampleFile.name;

      sampleFile.mv(__dirname + uploadPath, function (err) {
        if (err) return res.status(500).send(err);
      });
      let encryted = await bcrypt.hash(password, 10);
      let insert = await db.query(
        "INSERT INTO users (first_name,last_name,email,user_password,mobile,department,propic) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING user_id ;",
        [first_name, last_name, email, encryted, mobile, department, uploadPath]
      );
      let payload = insert.rows ? insert.rows[0] : res.send("Rows are empty");
      let token = await jwt.sign(payload, jwtTokenPass, {
        expiresIn: "1hr",
      });
      res.json({
        status: "success",
        token,
      });
    } catch (err) {
      console.log(err);
      res.status(502).json({ status: "failed" });
    }
  }
});
//        Verify a User
app.post("/auth/verify", async (req, res) => {
  const { token } = req.body;
  try {
    if (token) {
      try {
        const verify = jwt.verify(token, jwtTokenPass);
        res.json({
          status: "success",
          user_id: verify.user_id,
        });
      } catch (err) {
        res.json({
          status: "failed",
          msg: err.message,
        });
      }
    } else {
      res.json({
        status: "failed",
        msg: "No token found ",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(502).json({ status: "failed" });
  }
});

//      Login Form
app.post("/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const response = await db.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    if (response.rows.length === 0) {
      res.json({
        status: "login failed!",
        msg: "No user exits with that mail.",
      });
    } else {
      const verify = await bcrypt.compare(
        password,
        response.rows[0].user_password
      );
      if (verify) {
        const user_id = response.rows[0].user_id;
        const token = jwt.sign({ user_id }, jwtTokenPass, {
          expiresIn: "1hr",
        });
        res.json({
          status: "success",
          token,
        });
      } else {
        res.json({
          status: "login failed!",
          msg: "Incorrect Password",
        });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(502).json({ status: "failed" });
  }
});

// Product Images
// upload images
app.post("/user/:user_id/prod/:prod_id/upload/product/images", (req, res) => {
  try {
    const { user_id, prod_id } = req.params;
    let sampleFile;
    let uploadPath;
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send("No files were uploaded.");
    }
    let currentDate = new Date();
    let uniqName =
      currentDate.getFullYear().toString() +
      currentDate.getMonth().toString() +
      currentDate.getDay().toString() +
      currentDate.getHours().toString() +
      currentDate.getMinutes().toString() +
      currentDate.getSeconds().toString();
    sampleFile = req.files.prod_imgs;

    sampleFile.forEach(async (img) => {
      uploadPath = "/public/Images/product_imgs/" + uniqName + img.name;
      img.mv(__dirname + uploadPath, function (err) {
        if (err) return res.status(500).send(err);
      });
      await db.query(
        "insert into product_imgs(user_id,prod_id,img_loc) values ($1,$2,$3);",
        [user_id, prod_id, uploadPath]
      );
    });
    res.send("Files uploaded!");
  } catch (err) {
    console.log(err);
    res.status(502).json({ status: "failed" });
  }
});
// get images of a specific product
app.get("/product/:prod_id/images", async (req, res) => {
  try {
    const { prod_id } = req.params;
    const result = await db.query(
      "select img_id,prod_id,img_loc from product_imgs where prod_id = $1;",
      [prod_id]
    );
    res.status(200).json({
      status: "success",
      total_items: result.rowCount,
      data: result.rows,
    });
  } catch (err) {
    console.log(err);
    res.status(502).json({ status: "failed" });
  }
});
// Delete a specific Image
app.delete("/product/:prod_id/delete/image/:img_id", async (req, res) => {
  try {
    const { prod_id, img_id } = req.params;
    const result = await db.query(
      "delete from product_imgs where prod_id = $1 and img_id = $2 returning *;",
      [prod_id, img_id]
    );
    res.status(200).json({
      status: "success",
      total_items: result.rowCount,
      data: result.rows,
    });
  } catch (err) {
    console.log(err);
    res.status(502).json({ status: "failed" });
  }
});
app.listen(5000, () => {
  console.log("Server is up and running on port 5000...");
});
