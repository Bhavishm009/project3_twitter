import Dialog from "@mui/material/Dialog";
import CustomButton from "../../Atom/Button/CustomButton";
import style from "./Dialog.module.css";
import React from "react";
import { useSetRecoilState } from "recoil";
import { isLoginAtom } from "../../Recoil/Atom1/Atom";


function DialogBox(props) {
  

  const setLoginStatus = useSetRecoilState(isLoginAtom);
  const { onClose, selectedValue, open } = props;
  const handleClose = () => {
    onClose(selectedValue);
  };
  function handaleClick() {
    let text = 'Do You Logout ! \n Ok or Cancel';
      if(window.confirm (text) == true){
          setLoginStatus(false);
    alert("successfully Logout");
      } else {
        text = " Cancel"
      }
  }
  return (
    <Dialog title="Loading"  onClose={handleClose} open={open}
    style={{width:'40px',width:'60px',color:'white'}}>
      <div className={style.container}>
        <CustomButton
          buttonText="Add an existing user"
          customCss={style.button}
        />
        <CustomButton
          btnNext={handaleClick}
          buttonText="Logout"
          customCss={style.button}
        />
      </div>
  
    </Dialog>
  );
}
export default DialogBox;