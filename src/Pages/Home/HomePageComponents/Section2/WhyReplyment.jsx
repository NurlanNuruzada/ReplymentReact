import React from 'react'
import Styles from './WhyReplyment.module.css'
import LearnMoreCard from './LearnMoreCard.module'
import { useSelector } from 'react-redux';
export default function WhyReplyment() {
    const { token, username } = useSelector((state) => state.auth);
    return (
        <div className={Styles.MainContainer}>
            <div className={Styles.UpContainer}>
                <h1 className={Styles.MainTitle}>
                Why Replyment?
                </h1>
            </div>
            <div className={Styles.DownContainer}>
                <LearnMoreCard Price={"Free"} Title={"Customizable Branding"}
                 Desc={"Allow users to customize the chat interface to match their brand, including colors, logos, and fonts, maintaining a consistent look and feel."}
                 ButtonInnerText={"Learn more"} />
                <LearnMoreCard Price={"Free"} Title={"Multi-Platform Integration"}
                 Desc={"Seamlessly connect with visitors on various messaging platforms such as WhatsApp, Facebook Messenger, Telegram  other."}
                 ButtonInnerText={"Learn more"} />
                <LearnMoreCard Price={"Free"} Title={"Welcome Messages"}
                 Desc={"Implement personalized welcome messages or greetings to engage users and provide a friendly introduction to the chat experience.."}
                 ButtonInnerText={"Learn more"} />
            </div>
        </div>
    )
}