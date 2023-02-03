import React from "react";
import style from "./ProfileSection.module.css";
import UserTweet from "./UserTweet/UserTweet";
import WestIcon from "@mui/icons-material/West";
import CustomButton from "../../../Atom/Button/CustomButton";
import { useNavigate } from "react-router-dom";


function ProfileSection() {
   const nevigate = useNavigate();

  
  let Data = JSON.parse(localStorage.getItem("user"));
  console.log(Data[localStorage.length-1].Name)
 
  return (
    <>
    <div className={style.wrapper}>
      <div className={style.feed__header}>
        <p onClick={()=> nevigate("/") }><WestIcon /></p>
        <h2>{Data[localStorage.length-1].Name}</h2>
      </div>
        <img className={style.container} alt="img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png" />
      <div>
        <span className={style.Avatarsection}>
          <img
            className={style.img}
            alt="img"
            src="https://tinypng.com/images/social/website.jpg"/>
          <CustomButton customCss={style.btn} buttonText={"Edit profile"} />
        </span>
      </div>
      

      <div key={Data.id} className={style.textcontaint}>
        <h4>{`${"Name:-"}${Data[localStorage.length-1].Name}`}</h4>
        <h5>{`${"@"}${Data[localStorage.length-1].Email}`}</h5>
        <h5>followers :- 2000</h5>
        <h5>likesCount :- 154 likes</h5>
      </div>
    </div>
    <UserTweet />
   
    </>
  );
}

export default ProfileSection;
