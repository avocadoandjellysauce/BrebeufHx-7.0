/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Logo from "../Assets/Logo.svg";
import profile from "../Assets/profile.png"
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      text: "About",
      icon: <InfoIcon />,
    },
    {
      text: "Testimonials",
      icon: <CommentRoundedIcon />,
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
    },
    {
      text: "Cart",
      icon: <ShoppingCartRoundedIcon />,
    }
    
  ];
  const scrollToAbout = () => {
    const scrollAmount = 800; // Adjust this value based on how much you want to scroll down
    window.scrollBy({ top: scrollAmount, behavior: 'smooth' });
  }
  const scrollToMaker = () => {
    const scrollAmount = 2600; // Adjust this value based on how much you want to scroll down
    window.scrollBy({ top: scrollAmount, behavior: 'smooth' });
  };
  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">
        <a href="">Home</a>
        <a onClick={() => scrollToMaker('aboutSection')}>CV Maker </a>
        <a href="">Discussion</a>
        <a className="about-button" onClick={() => scrollToAbout('aboutSection')}>About</a>
        
        <a href="">
          <profile className="profile-icon" />
        </a>
        <button className="primary-button">Sign In</button>
      </div>
      
      
    </nav>
  );
};

export default Navbar;
