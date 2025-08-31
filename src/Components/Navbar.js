import { Link } from "react-router-dom";
import React, {useState} from 'react'
import Logo from "../Assets/Logo.svg";
import {BsCart2} from "react-icons/bs"
import {HiOutlineBars3} from "react-icons/hi2"
import {Box, Drawer,List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home"
import InfoIcon from "@mui/icons-material/Info"
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";


 const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false)
    const menuOptions = [
        {
            text:"Home",
            icon : <HomeIcon/>
        },
        {
            text:"About",
            icon : <InfoIcon/>
        },
        {
            text:"Testimonials",
            icon : <CommentRoundedIcon/>
        },
        {
            text:"Contact",
            icon : <PhoneRoundedIcon/>
        },
        {
            text:"Cart",
            icon : <ShoppingCartRoundedIcon/>
        },
    ]


  return (
    <nav>
     <div className = "nav-logo-container">
       <img src={Logo} alt = ""/>
     </div>
     <div className="navbar-links-container">
  <Link to="/">Home</Link>
  <Link to="/about">About</Link>
  <Link to="/testimonials">Testimonials</Link>
  <Link to="/contact">Contact</Link>
  <Link to="/cart">
    <BsCart2 className="navbar-cart-icon" />
  </Link>
  <button className="primary-button">
    Bookings Now
  </button>
</div>
     <div className="navbar-menu-conatiner">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)}/>
     </div>
     <Drawer open={openMenu} onClose={() => setOpenMenu(false)}
        anchor = "right">
        <Box sx={{ width : 250}}
        role = "presentation"
        onClick = {() => setOpenMenu(false)}
        onKeyDown = {() => setOpenMenu(false)}>

            <List>
  {menuOptions.map((item) => (
    <ListItem key={item.text} disablePadding>
      <ListItemButton component={Link} to={`/${item.text.toLowerCase()}`}>
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText primary={item.text} />
      </ListItemButton>
    </ListItem>
  ))}
</List>

        </Box>
     </Drawer>
    </nav>
  )
}
export default Navbar;