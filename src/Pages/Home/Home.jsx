import React from 'react'
import SignBanner from '../../Components/HomePageComponents/SignBanner'
import Section2 from '../../Components/Section2/Section2'
import LastSection from '../../Components/LastSection/LastSection'
import Whyreplyent from '../../Components/WhyReplyment/WhyReplyment'
import FrequentlyAsked from '../../Components/FrequentlyQuestions/Questions'
import Integrations from '../../Components/Integrations/Integrations'
import './Home.scss'


export default function Home() {
  return (
    <>
      <div id="Home">
        {/* <SignBanner /> */}
        <Section2 />
        <Whyreplyent />
        <Integrations />
        <FrequentlyAsked />
        <LastSection />
      </div>
    </>
  )
}
