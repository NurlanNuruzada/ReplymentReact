import React from 'react'
import Styles from './PrivacyPolicy.module.css'
import TextConponent from '../../Components/TextComponents/TextConponent'
import ListComponet from '../../Components/TextComponents/ListComponet'

export default function PrivacyPolicy() {
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
        <TextConponent header={"Information We Collect"} text={"a. Personal Information: When you use our services or interact with our website, we may collect personal information such as your name, email address, postal address, phone number, and other relevant contact details."} />
        <div className={Styles.MainText}>
          <p className={Styles.text}>b. Usage Data: We may also gather information about how you use our services and website, including your IP address, device information, browser type, pages visited, and other usage data.</p>
        </div>
        <TextConponent header={"How We Use Your Information"} />
        <div className={Styles.MainText}>
          <p className={Styles.text}>a. Providing Services: We use the information collected to deliver our services, process transactions, and respond to your inquiries and support requests.</p>
        </div>
        <div className={Styles.MainText}>
          <p className={Styles.text}>b. Improving Services: Your feedback and usage data help us improve our services, customize your experience, and enhance the functionality of our website.</p>
        </div>
        <div className={Styles.MainText}>
          <p className={Styles.text}>c. Communication: We may use your contact information to send you updates, newsletters, promotional materials, and other relevant communications about our services.</p>
        </div>
      </div>
      <TextConponent header={"Information Sharing"} />
      <div className={Styles.MainText}>
        <p className={Styles.text}>a. Third-Party Service Providers: We may engage third-party service providers to assist us in delivering our services, processing payments, analyzing data, and performing other tasks. These providers are obligated to safeguard your information and only use it for authorized purposes.</p>
      </div>
      <div className={Styles.MainText}>
        <p className={Styles.text}>b. Legal Compliance: We may disclose your information if required to comply with applicable laws, regulations, legal processes, or governmental requests.</p>
      </div>
      <TextConponent header={"Data Security"} text={"We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is completely secure, so we cannot guarantee absolute security."} />
      <TextConponent header={"Your Choices"} text={"You have the right to access, update, or delete your personal information stored with us. You can also opt out of receiving promotional communications from us by following the instructions provided in such communications."} />
      <TextConponent header={"Contact Us"} text={"If you have any questions, concerns, or requests regarding this Privacy Policy or the handling of your personal information, please contact us at info@replyment.com."} />
      <TextConponent header={"Changes to This Policy"} text={"We reserve the right to update or revise this Privacy Policy from time to time. Any changes will be posted on this page with a revised effective date. We encourage you to review this policy periodically for the latest information on our privacy practices." +
        "By using our services or visiting our website, you consent to the collection, use, and disclosure of your information as described in this Privacy Policy."} />
    </div>
  )
}
