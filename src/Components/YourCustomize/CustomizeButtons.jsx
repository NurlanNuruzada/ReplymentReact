import React, { useEffect, useState } from 'react'
import Styles from "./CustomizeButtons.module.css"
import Whatsapp from '../../Images/IconImage/whatsapp.svg';
import Youtube from '../../Images/IconImage/youtube.svg';
import Messenger from '../../Images/IconImage/Mesenger.svg';
import Snapchat from '../../Images/IconImage/Snapchat.svg';
import Telegram from '../../Images/IconImage/Teleqram.svg';
import CustomLink from '../../Images/IconImage/link.svg';
import Instagram from '../../Images/IconImage/instagram.png';
import Skype from '../../Images/IconImage/Group.svg';
import Linkedin from '../../Images/IconImage/Linkein.svg';
import Twitter from '../../Images/IconImage/Twitter.svg';
import Waze from '../../Images/IconImage/waze_logo_icon_249220 1.svg';
import Tiktok from '../../Images/IconImage/tikTok.svg';
import Discord from '../../Images/IconImage/discord.svg';
import Call from '../../Images/IconImage/call (1).svg';
import GoogleMaps from '../../Images/IconImage/GoogleMaps-Icon-alone-1 1.svg';
import CheckImage from '../../Images/check.svg';
import { useQuery, useMutation, useQueryClient } from "react-query";
import { UserGetAllCustomizeButtons } from "../../Services/CustomizeService";
import { SocialIcon } from 'react-social-icons'


const CustomizeButtons = () => {


    const { data: AllCustomizeButton } = useQuery(["AllCustomizeButtons", '9a524e9c-2507-4721-adaa-f762fa842e2a'], () =>
        UserGetAllCustomizeButtons('9a524e9c-2507-4721-adaa-f762fa842e2a')
    );

    const [apiData, setApiData] = useState({
        ButtonStyle: false, //classic;  //rectangle
        ButtonSize: 100,
        BorderRadius: AllCustomizeButton[0]?.borderRadius,
        Shadow: AllCustomizeButton[0].shadow,
        Opacity: AllCustomizeButton[0]?.opacity,
        Greeting: true,
        buttonLenght: AllCustomizeButton[0]?.getCustomButtons?.length,
        widgetColor: AllCustomizeButton[0]?.widgetColor,
    });


    const widgetHeight = (apiData.buttonLenght * 80) + (apiData.buttonLenght * 12);
    const buttonWidghtSize = apiData.ButtonStyle ? (80 * apiData.ButtonSize / 100) : (240 * apiData.ButtonSize / 100);
    const buttonHeightSize = (80 * apiData.ButtonSize) / 100;
    const widgetWidth = apiData.ButtonStyle ? 80 : (240 * apiData.ButtonSize / 100);
    const buttonBorderRadius = apiData.BorderRadius;
    const buttonShadow = apiData.Shadow;

    console.log("AllCustomizeButton", AllCustomizeButton);
    const [openWidget, setOpenWidget] = useState(false);
    console.log('openWidget', openWidget);

    return (
        // <div className={Styles.FullPageMain}>
            <div style={{boxShadow: buttonShadow, width: widgetHeight, width: widgetWidth }} className={Styles.YourCustomize}>
                <button style={{ borderRadius: buttonBorderRadius, backgroundColor: 'rgb(77, 194, 71)', width: buttonWidghtSize, height: buttonHeightSize, opacity: openWidget ? 0 : 1 }} className={Styles.yourButton}>
                    <div style={{ display: apiData.ButtonStyle ? 'flex' : '', justifyContent: apiData.ButtonStyle ? 'center' : '' }}>
                        <div><SocialIcon bgColor="white" fgColor='green' url="https://www.whatsapp.com" /></div>
                        <p style={{ display: apiData.ButtonStyle ? 'none' : '' }}>WhatsApp</p>
                    </div>
                </button>
                <button style={{ borderRadius: buttonBorderRadius, backgroundColor: '#E74339', width: buttonWidghtSize, height: buttonHeightSize, opacity: openWidget ? 0 : 1 }} className={Styles.yourButton}>
                    <div style={{ display: apiData.ButtonStyle ? 'flex' : '', justifyContent: apiData.ButtonStyle ? 'center' : '' }}>
                        <div><SocialIcon bgColor="white" fgColor='red' url="https://www.youtube.com/watch?v=OJKv9YMfpbc&list=RDMMOJKv9YMfpbc&start_radio=1" /></div>
                        <p style={{ display: apiData.ButtonStyle ? 'none' : '' }}>YouTube</p>
                    </div>
                </button>
                <button style={{ borderRadius: buttonBorderRadius, backgroundColor: '#007EBB', width: buttonWidghtSize, height: buttonHeightSize, opacity: openWidget ? 0 : 1 }} className={Styles.yourButton}>
                    <div style={{ display: apiData.ButtonStyle ? 'flex' : '', justifyContent: apiData.ButtonStyle ? 'center' : '' }}>
                        <div><SocialIcon bgColor="white" fgColor='blue' url="https://www.linkedin.com" /></div>
                        <p style={{ display: apiData.ButtonStyle ? 'none' : '' }}>LinkedIn</p>
                    </div>
                </button>
                <button onClick={() => setOpenWidget((prev) => !prev)} style={{ borderRadius: buttonBorderRadius, backgroundColor: apiData?.widgetColor, width: buttonWidghtSize, height: buttonHeightSize }} className={Styles.yourButton}>
                    <div style={{ display: apiData.ButtonStyle ? 'flex' : '', justifyContent: apiData.ButtonStyle ? 'center' : '' }}>
                        <div style={{ fontSize: '40px' }}>X</div>
                        <p style={{ display: apiData.ButtonStyle ? 'none' : '' }}>Close</p>
                    </div>
                </button>
            </div>
        // </div>
    )
}
export default CustomizeButtons