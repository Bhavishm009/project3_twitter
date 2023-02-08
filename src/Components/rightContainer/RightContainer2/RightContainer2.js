import React, { useState } from "react";
import { Avatar } from "@mui/material";
import style from "./RightContainer2.module.css";
import CustomButton from "../../../Atom/Button/CustomButton";
import VerifiedIcon from '@mui/icons-material/Verified';

function Righthomebox2() {
  // const [ show , setShow]= useState(false)
 
  const [followContainer, setFollowContainer] = useState([
    
    {
      id: 1,
      tag: <i className="far fa-solid fa-badge-check"></i>,
      src: "https://img.freepik.com/premium-vector/brunette-man-avatar-portrait-young-guy-vector-illustration-face_217290-1035.jpg?w=740",
      text: "John",
      text2: "John@gmail.com",
    },
    {
      id: 2,
      tag: <i className="fa fa-solid fa-badge-check"></i>,
      src: "https://www.cricketsoccer.com/wp-content/uploads/2020/09/i.jpg",
      text: "Tom",
      text2: "Tom@gmail.com",
    },
    {
      id: 3,
      tag: <i className="fa fa-solid fa-badge-check"></i>,
      src: "https://img.freepik.com/premium-vector/brunette-man-avatar-portrait-young-guy-vector-illustration-face_217290-1035.jpg?w=740",
      text: "Jems",
      text2: "Jems@gmail.com",
    },
    {
      id: 4,
      tag: <i className="fa fa-solid fa-badge-check"></i>,
      src: "https://img.freepik.com/premium-vector/brunette-man-avatar-portrait-young-guy-vector-illustration-face_217290-1035.jpg?w=740",
      text: "Peter",
      text2: "Peter@gmail.com",
    },
    {
      id: 5,
      tag: <i className="fa fa-solid fa-badge-check"></i>,
      src: "https://img.freepik.com/premium-vector/brunette-man-avatar-portrait-young-guy-vector-illustration-face_217290-1035.jpg?w=740",
      text: "Wish",
      text2: "Wish@gmail.com",
    },
    {
      id: 6,
      tag: <i className="fa fa-solid fa-badge-check"></i>,
      src: "https://img.freepik.com/premium-vector/brunette-man-avatar-portrait-young-guy-vector-illustration-face_217290-1035.jpg?w=740",
      text: "Jenny",
      text2: "Jenny@gmail.com",
    },
  ]
);
  const [trending , setTrendings] = useState(followContainer.slice(0,4))
  const [isShowingAllTrendings , setIsShowingAllTrendings] = useState(false)

  const handleClick = (id) => {
    const updatedFollowContainer = followContainer.map((item) => {
      if (item.id === id) {
        item.followed = !item.followed;
      }
      return item;
    });
    setFollowContainer(updatedFollowContainer);
  };

  // handle seeAll request
  function handleRequestSeeAll () {
      setIsShowingAllTrendings(!isShowingAllTrendings)
      if(isShowingAllTrendings) {
         return setTrendings(followContainer.slice(0,4))
      }
      setTrendings(followContainer)
  }
  return (
    <div className={style.container}>
      <h1>Who to follow</h1>
      <div className={style.main}>
        {trending.map((menu,id) => {
          return (
            <div key={id} className={style.wrapper}>
              <Avatar alt="Remy Sharp" src={menu.src} />
              <div className={style.img}>
                <h3>
                  {menu.text}
                  <span style={{ color: "blue" }}> {menu.tag} </span><VerifiedIcon style={{color: "#1D9BF0" , width:"1rem"}}/>
                </h3>
                <h6>{menu.text2}</h6>
              </div>
              <div className={style.btntxt}>
                <CustomButton
                  buttonText={menu.followed ? "Following" : "Follow"}
                  btnNext={() => handleClick(menu.id)}
                  key={menu.id}
                  customCss={style.follwButton}
                  disabled={menu.followed}
                />
              </div>
            </div>
          );
        })}
        <div className={style.btn2}>
          <CustomButton
            customCss={style.btn2}
            buttonText=   {isShowingAllTrendings ? 'Show Less' : 'Show More'}
            btnNext={handleRequestSeeAll}
          />
        </div>
      </div>
    </div>
  );
}


export default Righthomebox2;
