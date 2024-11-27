import React from "react";
import { Link } from "react-router-dom";

function Nav () {
    return(
        <nav className="nav-bar">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link to="/" className="navlink">
            ℌ𝔬𝔪𝔢
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/casestudies" className="navlink">
            𝙲𝚊𝚜𝚎𝚂𝚝𝚞𝚍𝚒𝚎𝚜
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/textimonial" className="navlink">
            𝚃𝚎𝚡𝚝𝚒𝚖𝚘𝚗𝚊𝚒𝚕
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="navlink">
            𝚁𝚎𝚌𝚎𝚗𝚝 𝚆𝚘𝚛𝚔𝚜
            </Link>
          </li>
          <li className="nav-item">
            <Link to="https://www.linkedin.com/in/sumin-raj-d-8592a62a0/" className="navlink">
            𝙶𝚎𝚝 𝙸𝚗 𝚃𝚘𝚞𝚌𝚑
            </Link>
          </li>
          <li className="item">
            <Link to="https://www.instagram.com/haurn_vein/profilecard/?igsh=b3RlaWFjMWtydWN1">
            <img src="\instagram.png"  className="logo logset"/>
            </Link>
          </li>
          <li className="item">
            <Link to="https://www.linkedin.com/in/sumin-raj-d-8592a62a0/" >
               <img src="https://cdn-icons-png.flaticon.com/128/2111/2111499.png" className="logo"></img>
            </Link>
          </li>
          <li className="item">
            <Link to="https://x.com/SuminRaj9061?t=VVkyoRtt2YSlDQkgYro9yg&s=08">
               <img src="https://cdn-icons-png.flaticon.com/128/733/733579.png" className="logo"></img>
            </Link>
          </li>
        </ul>
      </nav>
    );
};
export default Nav;