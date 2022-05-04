import React, { useEffect, useState } from "react";
import User from "../images/user.jpg";
import Logo from "../images/netflix-logo.png";
import {ImSearch} from "react-icons/im";
import {MdNotifications} from "react-icons/md";
import "../style/Nav.scss";


function NavBar() {
  const [show, handleShow] = useState(false);
  const transitionNav = () => {
    if (window.scrollY > 10) {
      handleShow(true);
    }
    else {
      handleShow(false);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", transitionNav);
    return () => {
      window.removeEventListener("scroll", transitionNav);
    }
  },[])

    return (
      
      <div className={`nav-container ${show && 'nav-black'}`}>
        <div className="left-nav">
          <img src={Logo} alt="" className="logo"/>    
            <div>
              <ul>
                <li>
                  Home 
                </li>
                <li>
                  TV Shows
                </li>
                <li>
                  Movies
                </li>
                <li>
                  Watchlist
                </li>
                      
              </ul>
            </div>
        </div>
        <div className="right-nav">
          <div className="padding">
            <ImSearch className="nav-search"/>
            <MdNotifications className="nav-notif" />
          </div>
          <img src={User} alt="User" className="user" />
        </div>
      </div>
       
    )
}
export default NavBar;