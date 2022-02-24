CREATE DATABASE reselling_platform;

CREATE TABLE users(
    user_id BIGSERIAL PRIMARY KEY NOT NULL,
    first_name VARCHAR(200) NOT NULL,
    last_name VARCHAR(200) NOT NULL,
    email VARCHAR(200) NOT NULL,
    mobile VARCHAR(13) NOT NULL,
    user_password TEXT NOT NULL,
    department TEXT NOT NULL,
    propic TEXT
);

CREATE TABLE products(
    prod_id BIGSERIAL PRIMARY KEY NOT NULL,
    user_id BIGINT REFERENCES users(user_id),
    product_name TEXT NOT NULL,
    category VARCHAR(200) NOT NULL,
    price INT NOT NULL,
    posted_date DATE NOT NULL,
    description TEXT NOT NULL,
    display_img TEXT
);

CREATE TABLE wish_list(
    wish_id BIGSERIAL PRIMARY KEY NOT NULL,
    user_id BIGINT REFERENCES users(user_id),
    prod_id BIGINT REFERENCES products(prod_id)
);

CREATE TABLE product_imgs(
    img_id BIGSERIAL PRIMARY KEY NOT NULL,
    user_id BIGINT REFERENCES users(user_id),
    prod_id BIGINT REFERENCES products(prod_id),
    img_loc TEXT NOT NULL
);

-- Users
INSERT INTO users (first_name,last_name,email,mobile,user_password,department) 
VALUES ('hari','kiran','hari@mail.com','1234567890','sdiwene','CSE');
INSERT INTO users (first_name,last_name,email,mobile,user_password,department) 
VALUES ('asd','sdffw','qwe@mail.com','1234567890','sdiwene','CSE');
INSERT INTO users (first_name,last_name,email,mobile,user_password,department) 
VALUES ('sdfwe','wew','fqwe@mail.com','1234567890','sdiwene','CSE');
INSERT INTO users (first_name,last_name,email,mobile,user_password,department) 
VALUES ('dgsrr','egrg','hrts@mail.com','1234567890','sdiwene','PPT');
INSERT INTO users (first_name,last_name,email,mobile,user_password,department) 
VALUES ('wert','kirasan','rte@mail.com','1234567890','sdiwene','CSE');
INSERT INTO users (first_name,last_name,email,mobile,user_password,department) 
VALUES ('hds','ewtr','dsgf@mail.com','1234567890','sdiwene','ECE');

-- Produts
INSERT INTO products(user_id,product_name,category,price,posted_date,description)
VALUES (2,'Physics Book','Book','200','2022-02-17','12th Edition Published on 2000');
INSERT INTO products(user_id,product_name,category,price,posted_date,description)
VALUES (2,'I phone 12','Mobile','1200','2022-02-01','8GB RAM, 64GB ROM');
INSERT INTO products(user_id,product_name,category,price,posted_date,description)
VALUES (1,'Samsung Charger','Accessories','500','2022-02-12','Model 12');
INSERT INTO products(user_id,product_name,category,price,posted_date,description)
VALUES (4,'Buckets','Utility','300','2022-01-17','No breakage');
INSERT INTO products(user_id,product_name,category,price,posted_date,description)
VALUES (6,'Cricket Kit','Games','600','2022-02-07','sdlfkjo fsadjfo');
INSERT INTO products(user_id,product_name,category,price,posted_date,description)
VALUES (1,'Product 2342','Book','200','2022-02-17','12th Edition Published on 2000');
INSERT INTO products(user_id,product_name,category,price,posted_date,description)
VALUES (1,'Some Product','Book','200','2021-02-17','12th Edition Published on 2000');
INSERT INTO products(user_id,product_name,category,price,posted_date,description)
VALUES (1,'Some Book','Book','200','2021-02-17','12th Edition Published on 2000');

--Wish list
INSERT INTO wish_list(user_id,prod_id)
VALUES (1,2),(1,3),(2,6),(2,5),(6,1),(3,2);