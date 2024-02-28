import React from 'react'
import Styles from './Integrations.module.css'
import Image from './integration_instructions.png'
import Image2 from './database.png'
import Image3 from './support_agent.png'
import IntegrationsCard from './Card/IntegrationsCard'


export default function Integrations() {
    return (
        <div className={Styles.MainContainer}>
            <div>
                <div className={Styles.Integrations_title}>
                    <strong>Integrations</strong>
                </div>
                <div className={Styles.Integrations_cards}>
                    <IntegrationsCard img={Image} title={"Integrate apps"} desc={"Effortlessly connect messaging applications to your website, enhancing user interaction and streamlining communication."} />
                    <IntegrationsCard img={Image2} title={"Google Analytics"} desc={"Google Analytics gives you the tools, free of charge, to understand the customer journey and improve marketing ROI."} />
                    <IntegrationsCard img={Image3} title={"Agent customation"} desc={"From assigning unique names to defining specific roles and positions, showcase the expertise and professionalism of your agents."} />
                </div>
            </div>
        </div>
    )
}
