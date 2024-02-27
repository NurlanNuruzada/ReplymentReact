import React from 'react';
import Styles from './Button.module.css';

const Button = (props) => {
    const backgroundColor = props.bcColor ? props.bcColor : 'transparent';
    return (
        <div style={{ backgroundColor: `rgba(${hexToRgb(backgroundColor)}, 0.4)`, border: '2.25px solid gray' }} className={Styles.MainBtn}>
            <img src={props.img} alt={props.title} />
            <p>{props.title}</p>
        </div>
    );
};

function hexToRgb(hex) {
    hex = hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (m, r, g, b) => {
        return r + r + g + g + b + b;
    });

    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16)
    ].join() : null;
}

export default Button;
