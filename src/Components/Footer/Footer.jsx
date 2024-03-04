import React from "react";
import Styles from './Footer.module.css'
import MainLogo from '../../Images/BannerLogo.png'
const Footer = () => {
  return (
    <>
      <div className={Styles.MainContainer}>
        <div className={Styles.LeftContainer}>
          <img alt="banner" className={Styles.MainLogo} src={MainLogo} />
          <h1 className={Styles.Title}>
            Replyment
          </h1>
        </div>
        <div className={Styles.RightContainer}>
          <h1 className={Styles.RightsTitle}>Copyright © 2024 Replyment. All rights reserved. </h1>
          <div className={Styles.termsContainer}>
            <h1 className={Styles.RightsTitleRight}>Terms and Conditions</h1>
            <h1 className={Styles.terms}>Privacy Policy</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
