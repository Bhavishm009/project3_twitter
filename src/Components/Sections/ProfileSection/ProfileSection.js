import React from "react";
import style from "./ProfileSection.module.css";
// import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import WestIcon from "@mui/icons-material/West";
import CustomButton from "../../../Atom/Button/CustomButton";
import { useNavigate } from "react-router-dom";
import UserTweet from "./UserTweet/UserTweet";
// import RightContainer2 from "../../rightContainer/RightContainer2/RightContainer2"

function ProfileSection() {
   const nevigate = useNavigate();

  
  let Data = JSON.parse(localStorage.getItem("user0"));
 
  return (
    <>
    <div className={style.wrapper}>
      <div className={style.feed__header}>
        <p onClick={()=> nevigate("/") }><WestIcon /></p>
        <h2>{Data.Name}</h2>
      </div>
        <img className={style.container} src="https://www.shutterstock.com/image-illustration/abstract-wave-design-on-transparent-600w-1145979968.jpg" />
      <div>
        <span className={style.Avatarsection}>
          <img
            className={style.img}
            src="https://simg.nicepng.com/png/small/73-730077_verify-users-via-e-mail-verified-user.png"/>
          <CustomButton customCss={style.btn} buttonText={"Edit profile"} />
        </span>
      </div>

      <div key={Data.id} className={style.textcontaint}>
        <h4>{`${"Name:-"}${Data.Name}`}</h4>
        <h5>{`${"@"}${Data.Email}`}</h5>
        <h5>&#x1F4F1;  {`${Data.Phone}`}</h5>
        <h5>&#x1F4C6;{`${Data.Date} ${Data.Year} ${Data.Month}`}</h5>
        <h5>followers :- 2000</h5>
        <h5>likesCount :- 154 likes</h5>
      </div>
    </div>
    {/* <RightContainer2
    /> */}
    <UserTweet/>
    </>
  );
}

export default ProfileSection;
