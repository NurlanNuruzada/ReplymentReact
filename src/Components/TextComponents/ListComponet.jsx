import React from 'react'
import Styles from './ListComponent.module.css'
export default function ListComponet({ header, list, not }) {
    return (
        <div className={Styles.Main}>
            <div className={Styles.TitleConatiner}>
                <h1 className={Styles.MainTitle}>{header}:</h1>
            </div>
            {not && <p className={Styles.text2}>You agree not to:</p>}
            <ul className={Styles.UnorderedList}>
                {list.map((data, index) => {
                    return (
                        <li  key={index}><p className={Styles.text}>{data}</p></li>
                    )
                })}
            </ul>
        </div>
    )
}
