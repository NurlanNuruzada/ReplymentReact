import React from 'react'
import "./WhyReplyment.css";
import ReplymentCard from './Card/ReplymentCard';


export default function WhyReplyment() {
    return (
        <>
            <div className='whyReplymentMain'>
                <div id="whyReplyment">
                    <div className="whyReplyment_tite">
                        <strong>Why Replyment?</strong>
                    </div>
                    <div className='whyReplyment_cards'>
                        <ReplymentCard title={"Customizable Branding"} desc={"Allow users to customize the chat interface to match their brand, including colors, logos, and fonts, maintaining a consistent look and feel."} />
                        <ReplymentCard title={"Multi-Platform Integration"} desc={"Seamlessly connect with visitors on various messaging platforms such as WhatsApp, Facebook Messenger, Telegram, and other."} />
                        <ReplymentCard title={"Welcome Messages"} desc={"Implement personalized welcome messages or greetings to engage users and provide a friendly introduction to the chat experience.."} />
                    </div>
                </div>
            </div>
        </>
    )
}