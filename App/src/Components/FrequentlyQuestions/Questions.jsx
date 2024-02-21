import React from 'react'
import Styles from "./Questions.module.css";

export default function Questions() {
    return (
        <>
            <div className={Styles.FreQuestionsMain}>
                <div className={Styles.FreQuestions}>
                    <div className={Styles.FreQuestions_title}>
                        <div>
                            <strong>Frequently asked questions</strong>
                        </div>
                    </div>
                    <div className={Styles.FreQuestions_question}>
                        <div className={Styles.accordionWrapper}>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}