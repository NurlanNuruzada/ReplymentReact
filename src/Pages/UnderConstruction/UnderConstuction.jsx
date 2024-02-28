import React from 'react'
import Styles from "./UnderConstruction.module.css"
import CustomizePreview from '../../Components/CustomisePreview/CustomizePreview'
import SimpleHeader from '../../Components/Header/SimpleHeader'

export default function UnderConstuction() {
  return (
    <>
      <div className={Styles.Main}>
        <SimpleHeader />
        <div className={Styles.Line}></div>
        <div className={Styles.FlexContainer}>
          <div className={Styles.UpContainer}>
            <h1 className={Styles.WelcomeTitle}>Under</h1>
            <h1 className={Styles.WelcomeTitle}>Constuction</h1>
          </div>
          <div>
            
          </div>
          <div className={Styles.DownContainer}>
            <CustomizePreview />
          </div>
        </div>
      </div>
    </>
  )
}
