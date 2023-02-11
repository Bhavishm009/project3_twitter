import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { FaHashtag, FaHouseUser, FaTwitter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import TwitterIcon from "@mui/icons-material/Twitter";
import TopicIcon from "@mui/icons-material/Topic";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { VscBellDot } from "react-icons/vsc";
import { HiOutlineMail } from "react-icons/hi";
import { BsBookmark, BsPerson } from "react-icons/bs";
import { TbFileText } from "react-icons/tb";
import { CgMoreO } from "react-icons/cg";
import { useParams } from "react-router-dom";
import { forLocalStorageIndex } from "../../Recoil/Atom";
import { useRecoilValue } from "recoil";
import { Avatar } from "@mui/material";

import style from './Drawer.module.css'
export default function AppDrawer() {
  const [state, setState] = React.useState({
    left: false
  });
  const nevigate = useNavigate();
  let Data = JSON.parse(localStorage.getItem("user"));
  const getLocalStorageIndex=useRecoilValue(forLocalStorageIndex)
  console.log( getLocalStorageIndex)
  var paramsValue=Data[getLocalStorageIndex]?.Name
   
    //  const useStyles = makeStyles({
    //         list:{
    //             width : 250;
    //         },
    //         fullList:{
    //             width: 'auto'
    //         },
    //         paper:{
    //             background:'black'
    //         }
    //  });
    //  const classes = useStyles();
  const item = [
    { id: 1, icon: <p onClick={()=> nevigate("/Home") }><FaHouseUser /></p> , Name: <p onClick={()=> nevigate("/Home") }>Home</p> },
    { id: 2, icon: <FaHashtag />, Name: "Explore" },
    { id: 3, icon: <VscBellDot />, Name: "Notifications" },
    { id: 4, icon: <HiOutlineMail />, Name: "Message" },
    { id: 5, icon: <BsBookmark />, Name: "Bookmarks" },
    { id: 6, icon: <TbFileText />, Name: "Lists" },
    { id: 7, icon: <p onClick={()=> nevigate( `/Profile/${paramsValue}`) }><BsPerson /></p>, Name: <p onClick={()=> nevigate( `/Profile/${paramsValue}`) }>Profile</p> },
    { id: 8, icon: <CgMoreO />, Name: "More" },
  ];
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {item.map((data, index) => (
        <div ClassName={style.drawer} >
          {data.icon} {data.name}
        </div>
      ))}
    </Box>
  );

  return (
    <div>
      {["logo"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
    
  );
}