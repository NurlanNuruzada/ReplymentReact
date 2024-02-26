import React from 'react';
import Styles from './NotFound.module.css';
import Navbar from '../../../Navbar/Navbar';

const NotFound = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return (
        <div style={{ width: width, height: height }} className={Styles.NotFoundMain}>
            <Navbar />
            <div className={Styles.dordSifirDordMain}>
                <div className={Styles.dordSifirDord}>
                    <div className={Styles.dordSifirDord_satusCode}>
                        <h1>404</h1>
                    </div>
                    <div className={Styles.dordSifirDord_goBack}>
                        <button>Go Back</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NotFound;
