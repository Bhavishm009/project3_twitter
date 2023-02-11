import React from "react";
import style from "./Navbar.module.css";
import { FaTwitter } from "react-icons/fa";
import { Avatar } from "@mui/material";
import AppDrawer from "../../Atom/Drawer/Drawer";
function Navbar() {
  return (
    <>
      <div className={style.feed__header}>
        <h2>Home</h2>
        <div className={style.mobicon}>
          <AppDrawer><Avatar
            alt="Remy Sharp"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgBhcplevwUKGRs1P-Ps8Mwf2wOwnW_R_JIA&usqp=CAU"
          /> </AppDrawer>

          <FaTwitter className={style.logo} />

        </div>

        <div className={style.innercontainer}>
          <h3>For you</h3>
          <h3>Following</h3>
        </div>
      </div>
    </>
  );
}
export default Navbar;