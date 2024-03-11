import React from 'react';
import Styles from './CustomizeButton.module.css';

export default function CustomizeButton({ Icon, Text, Style }) {
    return (
        <div className={Styles[Style]}>
            <div className={Styles.imgContainer}>
                <img src={Icon} alt="" />
            </div> 
            {Text}
        </div>
    );
}
