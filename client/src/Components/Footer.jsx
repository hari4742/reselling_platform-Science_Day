
import React,{Fragment} from 'react';


import { GrInstagram } from "react-icons/gr";
import { BsFacebook } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

import '../Styles/footer.css';

function Footer() {
  return (
    <div className="footer-out">
      <div className="footer">
        <div className="foot-col">
          <p className='foot-hd'>POPULAR LOCATIONS</p>
          <p>Wifi Park</p>
          <p>PG Hostel</p>
          <p>UG Hostel</p>
          <p>Academic Block</p>
        </div>
        <div className="foot-col">
          <p className="foot-hd">
            TRENDING PRODUCTS
          </p>
          <p>Books</p>
          <p>Phones</p>
          <p>Buckets</p>
          <p>Beds</p>
        </div>
        <div className="foot-col">
          <p className="foot-hd">ABOUT US</p>
          <p>Team</p>
          <p>Contact Us</p>
          <p>Queries</p>
        </div>
        <div className="foot-col">
          <p className="foot-hd">
            OLX-Reselling
          </p>
          <p>Help</p>
          <p>Privacy</p>
        </div>
        <div className="foot-col ">
          <p className="foot-hd">FOLLOW US</p>
          <div className="icons">
            <BsFacebook className='icon'/>
            <GrInstagram className="icon"/>
            <MdEmail className="icon"/>
            <FaTwitterSquare className="icon"/>
          </div>
        </div>
      </div>
     <div className="last">
       Central Reselling Platform <AiOutlineCopyrightCircle /> 2022
     </div>
    </div>
    // <Fragment>
    //   <div className="footer">
    //   <hr></hr>
    //   <div className="first">
    //     <table className="middle">
    //       <tr>
    //         <th id="see">POPULAR LOCATIONS</th>
    //         <th id="see">TRENDING PRODUCTS</th>
    //         <th>ABOUT US</th>
    //         <th>OLX-Reselling</th>
    //         <th>FOLLOW US</th>
    //       </tr>
    //       <tr>
    //         <td id="see">Wifi-Park</td>
    //         <td id="see">Books</td>
    //         <td>
    //           <a href="#">Team</a>
    //         </td>

    //         <td>
    //           <a href="#">Help</a>
    //         </td>
    //         <td id="gap">
    //           <a href="www.facebook.com">
    //             <BsFacebook id="icon"
    //               style={{ fontSize: "30px", color: "aliceblue", margin: "7px" }}
    //             />
    //           </a>
    //           <br />
    //           <a href="www.instagram.com">
    //             <GrInstagram id="icon"
    //               style={{ fontSize: "30px", color: "aliceblue", margin: "7px" }}
    //             />
    //           </a>
    //           <br />
    //           <a href="www.twitter.com">
    //             <FaTwitterSquare id="icon"
    //               style={{ fontSize: "30px", color: "aliceblue", margin: "7px" }}
    //             />
    //           </a>
    //           <br />
    //           <a href="#">
    //             <MdEmail id="icon"
    //               style={{ fontSize: "30px", color: "aliceblue", margin: "7px" }}
    //             />
    //           </a>
    //         </td>
    //       </tr>
    //       <tr>
    //         <td id="see">PG Hostel</td>
    //         <td id="see">Phones</td>
    //         <td>
    //           <a href="#">Contact Us</a>
    //         </td>
    //         <td>
    //           <a href="#">Privacy</a>
    //         </td>
    //         <td></td>
    //       </tr>
    //       <tr>
    //         <td id="see">UG Hostel</td>
    //         <td id="see">Buckets</td>
    //         <td>
    //           <a href="#">Queries</a>
    //         </td>
    //         <td></td>
    //         <td></td>
    //       </tr>
    //       <tr>
    //         <td id="see">Academic Block</td>
    //         <td>Beds</td>
    //         <td>
              
    //         </td>
    //         <td></td>
    //         <td></td>
    //       </tr>
    //     </table>
      
    //   </div>
    //   <div className="last">
       
    //    Central Reselling Platform <AiOutlineCopyrightCircle /> 2022
    //   </div>
    // </div>
    // </Fragment>
  );
}

export default Footer;