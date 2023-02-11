import React, { useState } from "react";
import style from "./Navbar.module.css";
import { FaHashtag, FaHouseUser, FaTwitter } from "react-icons/fa";
import { Avatar } from "@mui/material";
import { Button, Drawer, Space } from 'antd';
import { VscBellDot } from "react-icons/vsc";
import { HiOutlineMail } from "react-icons/hi";
import { BsBookmark, BsPerson } from "react-icons/bs";
import { TbFileText } from "react-icons/tb";
import { CgMoreO } from "react-icons/cg";
import { forLocalStorageIndex } from "../../Recoil/Atom";
import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState('left');
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const nevigate = useNavigate();
  let Data = JSON.parse(localStorage.getItem("user"));
  const getLocalStorageIndex=useRecoilValue(forLocalStorageIndex)
  var paramsValue=Data[getLocalStorageIndex]?.Name
  const menu = [
    { id: 1, icon: <p onClick={()=> nevigate("/Home") }><FaHouseUser /></p> , Name: <p onClick={()=> nevigate("/Home") }>Home</p> },
    { id: 2, icon: <FaHashtag />, Name: "Explore" },
    { id: 3, icon: <VscBellDot />, Name: "Notifications" },
    { id: 4, icon: <HiOutlineMail />, Name: "Message" },
    { id: 5, icon: <BsBookmark />, Name: "Bookmarks" },
    { id: 6, icon: <TbFileText />, Name: "Lists" },
    { id: 7, icon: <p onClick={()=> nevigate( `/Profile/${paramsValue}`) }><BsPerson /></p>, Name: <p onClick={()=> nevigate( `/Profile/${paramsValue}`) }>Profile</p> },
    { id: 8, icon: <CgMoreO />, Name: "More" },
  ];
  return (
    <>
      <div className={style.feed__header}>
        <h2>Home</h2>
        <>
          <Space>
            <div onClick={showDrawer} className={style.mobicon}>
              <Avatar
                alt="Remy Sharp"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgBhcplevwUKGRs1P-Ps8Mwf2wOwnW_R_JIA&usqp=CAU"
              />   <FaTwitter className={style.logo} /> </div>
          </Space>
          <Drawer
            bodyStyle={{ backgroundColor: 'black' }}
            title="Profile"
            contentWrapperStyle={true}
            placement={placement}
            closable={true}
            onClose={onClose}
            open={open}
            key={placement}
          >
          <Avatar
                alt="Remy Sharp"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgBhcplevwUKGRs1P-Ps8Mwf2wOwnW_R_JIA&usqp=CAU"
              />
          {menu.map((Data,id)=>{
            return (   <div className={style.drawer} key={id}>
             <div className={style.menuDot}>{Data.icon}</div>
             {console.log(Data.icon)}
             <p className="clasName">{Data.Name}</p>
            </div>
            )
          })}
          </Drawer>
        </>
        <div className={style.innercontainer}>
          <h3>For you</h3>
          <h3>Following</h3>
        </div>
      </div>
    </>
  );
}
export default Navbar;