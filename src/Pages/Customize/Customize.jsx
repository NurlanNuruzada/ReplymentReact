import React from 'react'
import Styles from './Customize.module.css'
import PlusImage from '../../Images/add.svg'

export default function Customize() {
  return (
    <div className={Styles.MainContainer}>
      <div className={Styles.Header}>
        <h1 className={Styles.Title}>Customize</h1>
        <button className={Styles.AddDomainButton} ><img className={Styles.PlusIcon} src={PlusImage} alt="" />Add new domain</button>
      </div>
      <div className={Styles.ContentContainer}>
      <button className={Styles.AddDomainButtonLarge}><img className={Styles.PlusIconLarge} src={PlusImage} alt="" />Add new domain</button>
      </div>
    </div>
  )
}
