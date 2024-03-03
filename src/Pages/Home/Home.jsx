import React from 'react'
import Section2 from '../../Components/Section2/Section2'
import LastSection from '../../Components/LastSection/LastSection'
import Whyreplyent from '../../Components/WhyReplyment/WhyReplyment'
import FrequentlyAsked from '../../Components/FrequentlyQuestions/Questions'
import Integrations from '../../Components/Integrations/Integrations'
import Header from '../../Components/Header/Header'
import './Home.scss'
import Section1 from './HomePageComponents/Section1'


export default function Home() {
  return (
    <>  
      <div id="Home">
        <Section1 />
        <LastSection />
      </div>
    </>
  )
}
