import React from 'react';
import Styles from './NotFound.module.css';
import Navbar from '../../../Navbar/Navbar';

const NotFound = () => {
    return (
        <div className={Styles.NotFoundMain}>
            <Navbar />
            <div className={Styles.content}>
                <div className={Styles.statusCode}>
                    <h1>404</h1>
                </div>
                <div className={Styles.goBack}>
                    <button>Go Back</button>
                </div>
            </div>
        </div>
    );
}

export default NotFound;
