import React from 'react'
import LastSection from '../../Components/LastSection/LastSection'
import './Home.scss'
import Section1 from './HomePageComponents/Section1/Section1'
import WhyReplyment from './HomePageComponents/Section2/WhyReplyment'


export default function Home() {
  return (
    <>  
      <div id="Home">
        <Section1 />
        <WhyReplyment />
      </div>
    </>
  )
}
