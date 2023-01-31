import React, { useState } from "react";
import { Avatar } from "@mui/material";
import style from "./RightContainer2.module.css";
import CustomButton from "../../../Atom/Button/CustomButton";
import VerifiedIcon from '@mui/icons-material/Verified';

function Righthomebox2() {
  const [ show , setShow]= useState(false)
 
  const [followContainer, setFollowContainer] = useState([
    
    {
      id: 1,
      tag: <i class="far fa-solid fa-badge-check"></i>,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjj_oz7crwHtUQj0jJuvLq-ILk5oikP_3FFL-mDJqk&s",
      text: "virat",
      text2: "Virat@gmail.com",
    },
    {
      id: 2,
      tag: <i class="fa fa-solid fa-badge-check"></i>,
      src: "https://img.freepik.com/free-vector/cute-happy-smiling-child-isolated-white_1308-32243.jpg?size=338&ext=jpg",
      text: "John",
      text2: "rjhon@gmail.com",
    },
    {
      id: 3,
      tag: <i class="fa fa-solid fa-badge-check"></i>,
      src: "https://img.freepik.com/free-photo/fun-3d-cartoon-teenage-boy_183364-81184.jpg?w=826&t=st=1675157088~exp=1675157688~hmac=417e4d3d1444cdc971d8e30268f62613dc4b826a4118eb89a88efeee40545d1e",
      text: "Tony",
      text2: "KKtony@gmail.com",
    },
    {
      id: 4,
      tag: <i class="fa fa-solid fa-badge-check"></i>,
      src: "https://as1.ftcdn.net/v2/jpg/03/53/56/78/1000_F_353567854_pexeqnP7GtKoHUaV7aP1Nw0DvskiH6Vx.jpg",
      text: "Peter",
      text2: "Ypeter@gmail.com",
    },  {
      id: 5,
      // tag: <i class="fa fa-solid fa-badge-check"></i>,
      src: "https://img.freepik.com/free-vector/cute-cool-boy-dabbing-pose-cartoon-vector-icon-illustration-people-fashion-icon-concept-isolated_138676-5680.jpg?w=740&t=st=1675157193~exp=1675157793~hmac=f28af8d7dce60fda9cfd451124ecd9c851059b1d12345578e1b4d00f701e42ae",
      text: "Yash",
      text2: "Jyash@gmail.com",
    },
    {
      id: 6,
      tag: <i class="fa fa-solid fa-badge-check"></i>,
      src: "https://img.freepik.com/premium-vector/cute-boy-playing-football-cartoon_96373-233.jpg?w=740",
      text: "User123",
      text2: "Kmal@gmail.com",
    },  {
      id: 7,
      tag: <i class="fa fa-solid fa-badge-check"></i>,
      src: "https://img.freepik.com/premium-vector/cute-boy-playing-volleyball-cartoon_96373-316.jpg?w=740",
      text: "Random",
      text2: "RpS@gmail.com",
    },
  ]);
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
        {trending.map((menu) => {
          return (
            <div className={style.wrapper}>
              <Avatar alt="Remy Sharp" src={menu.src} />
              <div className={style.img}>
                <h3>
                  {menu.text}
                  <span style={{ color: "blue" }}> {menu.tag} </span><VerifiedIcon style={{color:"#1A8CD8",fontSize:"20px"}}/>
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