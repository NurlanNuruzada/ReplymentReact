import React from 'react';
import Styles from './Section3.module.css';
import IntegrationsCard from './IntegrationsCard';
import IconDatabase from '../../../../Images/database.svg';
import Inteqrations from '../../../../Images/integration_instructions.svg';
import Support from '../../../../Images/support_agent.svg';
import Image from '../../../../Images/gradientEffect.jpg';

export default function Section3() {
    return (
        <div className={Styles.Container}>
            <div className={Styles.GradientImage}></div> {/* Empty div for the gradient background */}
            <div className={Styles.MainContainer}>
                <div className={Styles.UpContainer}>
                    <h1 className={Styles.MainTitle}>Integrations</h1>
                </div>
                <div className={Styles.DownContainer}>
                    <IntegrationsCard Title={'Integrate apps'} Desc={'Effortlessly connect messaging applications to your website, enhancing user interaction and streamlining communication.'} icon={Inteqrations} />
                    <IntegrationsCard Title={'Google Analytics'} Desc={'Google Analytics gives you the tools, free of charge, to understand the customer journey and improve marketing ROI.'} icon={IconDatabase} />
                    <IntegrationsCard Title={'Agent customization'} Desc={'From assigning unique names to defining specific roles and positions, showcase the expertise and professionalism of your agents.'} icon={Support} />
                </div>
            </div>
        </div>
    );
}
