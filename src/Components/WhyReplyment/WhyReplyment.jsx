import React from 'react'
import "./WhyReplyment.css";


export default function WhyReplyment() {
    return (
        <>
            <div className='whyReplymentMain'>
                <div id="whyReplyment">
                    <div class="whyReplyment_title">
                        <span>Why Replyment ?</span>
                    </div>
                    <div class="whyReplyment_in_cards">


                        <div style={{ backgroundColor: '#EEF1FF' }} class="replymentMyCard">
                            <div class="replymentMyCard_in">
                                <div class="mycard_title">
                                    <span class="mycard_title_text">Multi-Platform Integration</span>
                                </div>
                                <img src={require('../../Images/filter_none.png')} alt="Multi-Platform Integration" class="mycard_image" />
                                <div class="mycard_descrption">
                                    <p>Seamlessly connect with visitors on various messaging platforms such as WhatsApp, Facebook
                                        Messenger, Telegram, and others to cater to a diverse audience.</p>
                                </div>
                            </div>
                        </div>
                        <div style={{ backgroundColor: '#FFFCEE' }} class="replymentMyCard">
                            <div class="replymentMyCard_in">
                                <div class="mycard_title">
                                    <span class="mycard_title_text">User-Friendly Chat Widget</span>
                                </div>
                                <img src={require('../../Images/face_6.png')} alt="Multi-Platform Integration" class="mycard_image" />
                                <div class="mycard_descrption">
                                    <p>Implement an intuitive and visually appealing chat widget that is easy to locate and use,
                                        ensuring a positive user experience.</p>
                                </div>
                            </div>
                        </div>
                        <div style={{ backgroundColor: '#FFEEEE' }} class="replymentMyCard">
                            <div class="replymentMyCard_in">
                                <div class="mycard_title">
                                    <span class="mycard_title_text">Customizable Branding</span>
                                </div>
                                <img src={require('../../Images/instant_mix.png')} alt="Multi-Platform Integration" class="mycard_image" />
                                <div class="mycard_descrption">
                                    <p>Allow users to customize the chat interface to match their brand, including colors, logos,
                                        and fonts, maintaining a consistent look and feel.</p>
                                </div>
                            </div>
                        </div>
                        <div style={{ backgroundColor: '#EEFFF9' }} class="replymentMyCard">
                            <div class="replymentMyCard_in">
                                <div class="mycard_title">
                                    <span class="mycard_title_text">Welcome Messages and Greetings</span>
                                </div>
                                <img src={require('../../Images/3p.png')} alt="Multi-Platform Integration" class="mycard_image" />
                                <div class="mycard_descrption">
                                    <p>Implement personalized welcome messages or greetings to engage users and provide a friendly
                                        introduction to the chat experience.</p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}