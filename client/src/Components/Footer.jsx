
import React,{Fragment} from 'react';


import { GrInstagram } from "react-icons/gr";
import { BsFacebook } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

import '../Styles/footer.css';

function Footer() {
  return (
    <Fragment>
      <div className="footer">
      <hr></hr>
      <div className="first">
        <table className="middle">
          <tr>
            <th id="see">POPULAR LOCATIONS</th>
            <th id="see">TRENDING PRODUCTS</th>
            <th>ABOUT US</th>
            <th>OLX-Reselling</th>
            <th>FOLLOW US</th>
          </tr>
          <tr>
            <td id="see">wi-fi park</td>
            <td id="see">Books</td>
            <td>
              <a href="#">Team</a>
            </td>

            <td>
              <a href="#">Help</a>
            </td>
            <td id="gap">
              <a href="www.facebook.com">
                <BsFacebook id="icon"
                  style={{ fontSize: "200%", color: "black", margin: "7px" }}
                />
              </a>
              <br />
              <a href="www.instagram.com">
                <GrInstagram id="icon"
                  style={{ fontSize: "200%", color: "black", margin: "7px" }}
                />
              </a>
              <br />
              <a href="www.twitter.com">
                <FaTwitterSquare id="icon"
                  style={{ fontSize: "200%", color: "black", margin: "7px" }}
                />
              </a>
              <br />
              <a href="#">
                <MdEmail id="icon"
                  style={{ fontSize: "200%", color: "black", margin: "7px" }}
                />
              </a>
            </td>
          </tr>
          <tr>
            <td id="see">PG Hostel</td>
            <td id="see">Phones</td>
            <td>
              <a href="#">Contact Us</a>
            </td>
            <td>
              <a href="#">Privacy</a>
            </td>
            <td></td>
          </tr>
          <tr>
            <td id="see">UG Hostel</td>
            <td id="see">Buckets</td>
            <td>
              <a href="#">Queries</a>
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td id="see">Academic Block</td>
            <td>Beds</td>
            <td>
              
            </td>
            <td></td>
            <td></td>
          </tr>
        </table>
      
      </div>
      <div className="last">
       
       Central Reselling Platform,
        <AiOutlineCopyrightCircle /> 2022
      </div>
    </div>
    </Fragment>
  );
}

export default Footer;