import React, { useState } from 'react';
import Styles from './MenuLayour.module.css';
import { Outlet } from 'react-router';
import { ChakraProvider } from '@chakra-ui/react';
import Header from '../../Components/Header/Header';
import MenuButton from '../../Components/Buttons/MenuButtonCustomized/MenuButton';
import CustomizeIcon from '../../Images/edit.svg';
import TriggerIcon from '../../Images/Triggerİcon.svg';
import WidgetsIcon from '../../Images/widgets.svg';
import SubsIcon from '../../Images/payments.svg';
import AccountIcon from '../../Images/account_circle.svg';
import CustomizeIconHigh from '../../Images/editHigh.svg';
import TriggerIconHigh from '../../Images/chat_paste_goHigh.svg';
import WidgetsIconHigh from '../../Images/widgetsHigh.svg';
import SubsIconHigh from '../../Images/paymentsHigh.svg';
import AccountIconHigh from '../../Images/accontHigh.svg';

export default function MenuLayout({ position, titleColor, border, height, padding }) {
    const [selectedButton, setSelectedButton] = useState(null);

    const handleButtonClick = (buttonName) => {
        setSelectedButton(buttonName);
    };
    const MenuSections = ["Customize", "Trigger", "Widgets", "Subscription", "Account"];
    return (
        <div className={Styles.Main}>
            <div className={Styles.Outlet}>
                <ChakraProvider>
                    <Header MenuItems={MenuSections} ShowButtons={false} ShowBurgerMenu={true} Height={height} Padding={padding} TitleColor={titleColor} Position={position} Border={border} />
                </ChakraProvider>
                <div className={Styles.ContentContainer}>
                    <div className={Styles.MenuContainer}>
                        <MenuButton HighIcon={CustomizeIconHigh} className={Styles.Button}
                            isSelected={selectedButton === 'Customize'} highColor={"rgba(28, 27, 31, 1)"} Title={"Customize"} Icon={CustomizeIcon} onClick={() => handleButtonClick('Customize')} />
                        <MenuButton HighIcon={TriggerIconHigh} className={Styles.Button}
                            isSelected={selectedButton === 'Trigger'} highColor={"rgba(28, 27, 31, 1)"} Title={"Trigger"} Icon={TriggerIcon} onClick={() => handleButtonClick('Trigger')} />
                        <MenuButton HighIcon={WidgetsIconHigh} className={Styles.Button}
                            isSelected={selectedButton === 'Widgets'} highColor={"rgba(28, 27, 31, 1)"} Title={"Widgets"} Icon={WidgetsIcon} onClick={() => handleButtonClick('Widgets')} />
                        <MenuButton HighIcon={SubsIconHigh} className={Styles.Button}
                            isSelected={selectedButton === 'Subscription'} highColor={"rgba(28, 27, 31, 1)"} Title={"Subscription"} Icon={SubsIcon} onClick={() => handleButtonClick('Subscription')} />
                        <MenuButton HighIcon={AccountIconHigh} className={Styles.Button}
                            isSelected={selectedButton === 'Account'} highColor={"rgba(28, 27, 31, 1)"} Title={"Account"} Icon={AccountIcon} onClick={() => handleButtonClick('Account')} />
                    </div>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
