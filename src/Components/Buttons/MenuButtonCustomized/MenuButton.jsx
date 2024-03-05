import React from 'react';
import Styles from './MenuButton.module.css';

export default function MenuButton({ Title, Icon, HighIcon, isSelected, highColor, onClick }) {
    return (
        <div className={Styles.Main}>
            <button 
                className={Styles.Button} 
                style={{ backgroundColor: isSelected ? "rgba(201, 217, 255, 1)" : "" }} 
                onClick={onClick}
            >
                <div className={Styles.ImgContainer}>
                    <img className={Styles.Img} src={isSelected ? HighIcon : Icon} alt="" />
                </div>
                <p style={{ color: isSelected ? highColor : "" }} className={Styles.text}>
                    {Title}
                </p>
            </button>
        </div>
    );
}
