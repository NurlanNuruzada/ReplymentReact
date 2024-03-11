import React from 'react'
import Styles from "./Navbar.module.css";
import Img from "./NavbarMainIcon.png";

const Navbar = () => {
  return (
    <div className={Styles.NavbarMainDiv}>
        <div className={Styles.MainButton}>
            <div className={Styles.MainButton_Icon}>
                <img src={Img} />
            </div>
            <div className={Styles.MainButton_Text}>
                <strong>Replyment</strong>
            </div>
        </div>
    </div>
  )
}

export default Navbar