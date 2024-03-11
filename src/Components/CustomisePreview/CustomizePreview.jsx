import React from 'react'
import Styles from './Customize.module.css'
import Button from '../Buttons/ButtonJson/MainButton'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkIcon from '@mui/icons-material/Link';
import MenuButton from '../Buttons/MenuButton/MenuButton';
import EditIcon from '@mui/icons-material/Edit';
import WidgetsTwoToneIcon from '@mui/icons-material/WidgetsTwoTone';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import SimpleHeader from '../../Components/Simpleheader/SimpleHeader';
export default function CustomizePreview() {
  return (
    <>
      <div className={Styles.PreviewContainer}>
        <div className={Styles.Navbar}>
          <SimpleHeader />
        </div>
        <div className={Styles.ContentContainer}>
          <div className={Styles.leftContainer}>
            <MenuButton Title={"Customize"} Icon={EditIcon} bcColor={"#00257B"} />
            <MenuButton Title={"Widgets"} Icon={WidgetsTwoToneIcon} />
            <MenuButton Title={"Account"} Icon={AccountCircleOutlinedIcon} />
            <MenuButton Title={"Payment"} Icon={PaidOutlinedIcon} />
          </div>
          <div className={Styles.RightContainer}>
            <h1 className={Styles.Title}>Customize</h1>
            <h1 className={Styles.ActiveText}>Active messaging apps</h1>
            <div className={Styles.ButtonContainer}>
              <Button IconColor={"#36DC73"} Title={"WhatsApp"} Svg={WhatsAppIcon} Class={"PrimaryButton"} />
              <Button Title={"Email"} Svg={MailOutlineIcon} Class={"NormalButton"} />
              <Button Title={"Location"} Svg={LocationOnIcon} Class={"NormalButton"} />
              <Button IconColor={"#2276FF"} Title={"Facebook"} Svg={FacebookRoundedIcon} Class={"NormalButton"} />
              <Button Title={"Instagram"} Svg={InstagramIcon} Class={"PrimaryButton"} />
              <Button Title={"Twitter"} Svg={XIcon} Class={"NormalButton"} />
              <Button Title={"TikTok"} Svg={InstagramIcon} Class={"NormalButton"} />
              <Button IconColor={"#FF1C1C"} Title={"YouTube"} Svg={YouTubeIcon} Class={"NormalButton"} />
              <Button IconColor={"#1E78A4"} Title={"Telegram"} Svg={TelegramIcon} Class={"NormalButton"} />
              <Button Title={"Custom link"} Svg={LinkIcon} Class={"PremiumButton"} />
            </div>
              <h2>Customize your button</h2>
              <h2>Color</h2>
          </div>
        </div>
      </div>
    </>
  )
}
