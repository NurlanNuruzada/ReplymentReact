import React from 'react'
import Styles from './Terms.module.css'
import TextConponent from '../../Components/TextComponents/TextConponent'
import ListComponet from '../../Components/TextComponents/ListComponet'

export default function Terms() {
    const DataOfKeyContent = [
        "Member Content: Content, including but not limited to text, images, videos, and other materials, that you upload, submit, or display on or through Replyment.",
        "Replyment Content: Content provided by Replyment, including but not limited to text, images, videos, and other materials, except Member Content."
    ]
    const GeneralProhibitions = [
        "Use our services for any unlawful purpose or in violation of these Terms.",
        "Upload, submit, or display any Member Content that infringes or violates the rights of any third party.",
        "Interfere with or disrupt the operation of our services.",
        "Attempt to gain unauthorized access to our services or any related systems or networks."
    ]
    return (
        <div className={Styles.Main}>
            <div className={Styles.MainTitleConatiner}>
                <div className={Styles.Header}>Terms of Service</div>
                <div className={Styles.ButtonDate}>
                    <button>Last Updated:22.03.2024</button>
                    <button>Effective date:22.03.2024</button>
                </div>
            </div>
            <div className={Styles.TextConatiner}>
                <ListComponet list={DataOfKeyContent} header={"Key Content-related Terms"} />
                <TextConponent header={"Modification"} text={"Replyment reserves the right to modify or revise these Terms at any time. We will provide notice of any material changes by posting the updated Terms on our website or notifying you through other means. Your continued use of our services after such modifications constitutes acceptance of the revised Terms."} />
                <TextConponent header={"Eligibility"} text={"You must be at least 18 years old to use our services. By using our services, you represent and warrant that you are at least 18 years old and have the legal capacity to enter into these Terms."} />
                <TextConponent header={"Using Replyment, End Users"}
                    text={"You may use Replyment services solely for lawful purposes and in accordance with these Terms. You are responsible for ensuring that your use of our services complies with applicable laws and regulations. End users accessing your content through Replyment are subject to these Terms and any additional terms and conditions you may impose."} />
                <TextConponent header={"Account Registration"} text={"To access certain features of our services, you may be required to register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete."} />
                <TextConponent header={"Subscriptions and Payment Terms"} text={"Some features of our services may require payment of fees. By subscribing to these features, you agree to pay all applicable fees as described on our website. All fees are non-refundable unless otherwise stated."} />
                <TextConponent header={"Fees"} text={"You agree to pay all fees and charges incurred in connection with your account. All fees are exclusive of applicable taxes and duties, and you are solely responsible for paying such taxes and duties."} />
                <TextConponent header={"Ownership"} text={"You retain ownership of all intellectual property rights in your Member Content. By uploading, submitting, or displaying Member Content on or through Replyment, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, distribute, and display such content."} />
                <TextConponent header={"Licenses Granted by Replyment to Replyment Content and Member Content"} text={"Replyment grants you a limited, non-exclusive, non-transferable license to access and use Replyment Content and Member Content solely for your personal and non-commercial use in accordance with these Terms."} />
                <TextConponent header={"License granted by Member"} text={"By posting Member Content on or through Replyment, you represent and warrant that you have the right to grant the licenses granted in these Terms, and that such content does not violate the rights of any third party."} />
                <TextConponent header={"Feedback"} text={"If you provide us with any feedback or suggestions regarding our services, you grant us the right to use such feedback or suggestions without any obligation to you."} />
                <ListComponet list={GeneralProhibitions} not={true} header={"General Prohibitions:"} />
                <TextConponent header={"Copyright Policy"} text={"We respect the intellectual property rights of others. If you believe that any content on our website infringes your copyrights, please contact us at info@replyment.com."} />
                <TextConponent header={"Promotions"} text={"From time to time, Replyment may offer promotions or discounts on our services. Such promotions are subject to additional terms and conditions, which will be communicated to you at the time of the offer."} />
                <TextConponent header={"Links"} text={"Our services may contain links to third-party websites or resources. Replyment is not responsible for the content, products, or services offered by such third parties."} />
                <TextConponent header={"Termination and Account Cancellation:"} text={"We reserve the right to suspend or terminate your account and access to our services at any time for any reason, without prior notice or liability."} />
                <TextConponent header={"Refunds"} text={"All fees paid to Replyment are non-refundable unless otherwise stated in these Terms or required by law."} />
                <TextConponent header={"Disclaimers"} text={'OUR SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT ANY WARRANTIES OF ANY KIND. WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.'} />
                <TextConponent header={"Indemnity"} text={"You agree to indemnify and hold Replyment and its affiliates, officers, directors, employees, and agents harmless from any claims, losses, liabilities, damages, costs, or expenses, including reasonable attorneys' fees, arising out of or in connection with your use of our services or violation of these Terms."} />
                <TextConponent header={"Limitation of Liability"} text={'IN NO EVENT SHALL REPLYMENT OR ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO DAMAGES FOR LOSS OF PROFITS, DATA, USE, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF OUR SERVICES.'} />
                <TextConponent header={"Proprietary Rights Notices"} text={"All trademarks, service marks, logos, and trade names displayed on our website are the property of their respective owners and may not be used without prior written permission."} />
                <TextConponent header={"Controlling Law and Jurisdiction:"} text={"These Terms shall be governed by and construed in accordance with the laws of courts of Azerbaijan Republic, without regard to its conflict of law provisions. Any dispute arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of courts of Azerbaijan Republic."} />
                <TextConponent header={"Entire Agreement:"} text={"These Terms constitute the entire agreement between you and Replyment regarding your use of our services, superseding any prior agreements between you and us."} />
                <TextConponent header={"Assignment"} text={"You may not assign or transfer these Terms or any of your rights or obligations hereunder without our prior written consent. Replyment may freely assign these Terms without restriction."} />
                <TextConponent header={"Notices"} text={"Any notices or other communications provided by Replyment under these Terms, including those regarding modifications to these Terms, will be given: (i) via email; or (ii) by posting to our website."} />
                <TextConponent header={"Dispute Resolution"} text={"If you have any concerns or disputes about our services, please contact us at info@replyment.com. We will make every effort to resolve any disputes amicably and in good faith."} />
                <TextConponent header={"General"} text={"If any provision of these Terms is held to be invalid or unenforceable, such provision shall be struck and the remaining provisions shall be enforced to the fullest extent permitted by law. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights."} />
                <TextConponent header={"Payments. Paying online with a bank card"} text={"Payments made on our website are processed securely through reputable payment gateways. We do not store or have access to your credit card details."} />
                <TextConponent header={"Security guarantee"} text={"We take the security of your personal information seriously and implement appropriate measures to protect it from unauthorized access, disclosure, alteration, or loss. However, please be aware that no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee the absolute security of your information."} />
                <TextConponent header={"Online payments safety"} text={'When making payments online, ensure that you are using a secure and reputable platform. Look for indicators such as a locked padlock symbol in the address bar and "https" at the beginning of the website address to ensure a secure connection.'} />
                <TextConponent header={"Contacting Replyment"} text={'If you have any questions, concerns, or feedback regarding these Terms or our services, please contact us at info@replyment.com. We strive to respond to all inquiries promptly and efficiently.'} />
                <div className={Styles.MainText}>
                    <p className={Styles.text}>By using Replyment's services, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, please do not use our services. These Terms were last updated on none.</p>
                </div>
            </div>
        </div>
    )
}
