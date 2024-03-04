import React from 'react'
import LastSection from '../Home/HomePageComponents/Section4/LastSection'
import Styles from './Home.module.scss'
import Section1 from './HomePageComponents/Section1/Section1'
import WhyReplyment from './HomePageComponents/Section2/WhyReplyment'
import Section3 from './HomePageComponents/Section3/Section3'
import Questions from './HomePageComponents/FrequentlyQuestions/Questions'


export default function Home() {
  return (
    <>
      <div className={Styles.MainContainer}>
        <Section1 />
        <WhyReplyment />
        <Section3  />
        <Questions />
        <LastSection />
      </div>
    </>
  )
}
