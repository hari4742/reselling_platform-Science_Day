
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
      <div className="first">
        <table className="middle">
          <tr>
            <th>POPULAR LOCATIONS</th>
            <th>TRENDING LOCATIONS</th>
            <th>ABOUT US</th>
            <th>OLX</th>
            <th>FOLLOW US</th>
          </tr>
          <tr>
            <td>Kolkata</td>
            <td>Kolkata</td>
            <td>
              <a href="#">Kolkata</a>
            </td>

            <td>
              <a href="#">Kolkata</a>
            </td>
            <td id="gap">
              <a href="www.facebook.com">
                <BsFacebook
                  style={{ fontSize: "200%", color: "black", margin: "7px" }}
                />
              </a>
              <br />
              <a href="www.instagram.com">
                <GrInstagram
                  style={{ fontSize: "200%", color: "black", margin: "7px" }}
                />
              </a>
              <br />
              <a href="www.twitter.com">
                <FaTwitterSquare
                  style={{ fontSize: "200%", color: "black", margin: "7px" }}
                />
              </a>
              <br />
              <a href="#">
                <MdEmail
                  style={{ fontSize: "200%", color: "black", margin: "7px" }}
                />
              </a>
            </td>
          </tr>
          <tr>
            <td>Kolkata</td>
            <td>Kolkata</td>
            <td>
              <a href="#">Kolkata</a>
            </td>
            <td>
              <a href="#">Kolkata</a>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>Kolkata</td>
            <td>Kolkata</td>
            <td>
              <a href="#">Kolkata</a>
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Kolkata</td>
            <td></td>
            <td>
              <a href="#">Kolkata</a>
            </td>
            <td></td>
            <td></td>
          </tr>
        </table>
      
      </div>
      <div className="last">
       
       Central University of Haryana,
        <AiOutlineCopyrightCircle /> 2022
      </div>
    </div></Fragment>
  );
}

export default Footer;