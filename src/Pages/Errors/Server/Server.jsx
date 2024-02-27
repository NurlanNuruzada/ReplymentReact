import React from 'react';
import Styles from './Server.module.css';
import Navbar from '../../../Navbar/Navbar';

const Server = () => {
    return (
        <div className={Styles.NotFoundMain}>
            <Navbar />
            <div className={Styles.content}>
                <div className={Styles.statusCode}>
                    <h1>500</h1>
                </div>
                <div className={Styles.goBack}>
                    <button>Go Back</button>
                </div>
            </div>
        </div>
    );
}

export default Server;
