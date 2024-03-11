import React from 'react';
import Styles from './PrimaryButton.module.css';
import { SvgIcon } from '@mui/material';

export default function MainButton({ Class, Svg, Title,IconColor }) {
  return (
    <div className={Styles.MainContainer}>
      <button className={Styles[Class]}>
        <SvgIcon style={{color:[IconColor]}} component={Svg} className={Styles.Img} data-testid={Title} /> {Title}
      </button>
    </div>
  );
}
