import React, { useEffect, useState } from 'react'
import Styles from './Customize.module.css'
import PlusImage from '../../Images/add.svg'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  Input,
  FormLabel,
} from '@chakra-ui/react'
import arrowIcon from '../../Images/arrow_back_ios_new.svg'
import CustomizeButton from '../../Components/Buttons/CustomomizeButtons/CustomizeButton'
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
import AddLinkSection from '../../Components/AddlinkSection/AddLinkSection'
export default function Customize() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [newDomain, setNewDomain] = useState('')
  const [ShowDomain, setShowDomain] = useState('')
  const [display, setdisplay] = useState(false)
  const [FromData, setFromData] = useState([])
  const [Agents, setAgents] = useState([])

  const handleDataFromChild = (data) => {
    if (data !== null && data !== "") {
      setFromData(data);
    }
  };
  const HandleAgents = (data) => {
    if (data !== null && data !== "") {
      setAgents(data);
    }
  };
  console.log(Agents);
  console.log(FromData);


  const HandleDisplay = () => {
    if (newDomain !== null && newDomain !== "") {
      setdisplay(true)
      setShowDomain(newDomain)
    }
    else {
      setdisplay(false)
    }
  }
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  const handleSave = () => {
    HandleDisplay();
    onClose();
  };
  const [SelectedButtons, setSelectedButtons] = useState([]);

  const handleButtonClick = (button) => {
    const isButtonExists = SelectedButtons.some((selectedButton) => selectedButton.name === button.name);

    if (isButtonExists) {
      const updatedButtons = SelectedButtons.filter((selectedButton) => selectedButton.name !== button.name);
      setSelectedButtons(updatedButtons);
    } else {
      setSelectedButtons(prevButtons => [...prevButtons, button]);
    }
  };


  const Buttonlist = {
    buttons: [
      { id: 1, name: "Whatsapp", icon: Whatsapp },
      { id: 2, name: "Youtube", icon: Youtube },
      { id: 3, name: "Messenger", icon: Messenger },
      { id: 4, name: "Snapchat", icon: Snapchat },
      { id: 5, name: "Telegram", icon: Telegram },
      { id: 6, name: "Custom Link", icon: CustomLink },
      { id: 7, name: "Instagram", icon: Instagram },
      { id: 8, name: "Skype", icon: Skype },
      { id: 9, name: "Linkedin", icon: Linkedin },
      { id: 10, name: "Twitter", icon: Twitter },
      { id: 11, name: "Waze", icon: Waze },
      { id: 12, name: "Tiktok", icon: Tiktok },
      { id: 13, name: "Discord", icon: Discord },
      { id: 14, name: "Call", icon: Call },
      { id: 15, name: "Google Maps", icon: GoogleMaps }
    ]
  };
  return (
    <div className={Styles.MainContainer}>
      <div className={Styles.Header}>
        <div style={{ flexWrap: "wrap", display: "flex", gap: "15px", alignItems: "center" }}>
          <h1 className={Styles.Title}>Customize</h1>
          {display ?
            <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
              <button className={Styles.DomainButton}>{ShowDomain.length > 20 ? `${ShowDomain.slice(0, 20)}...` : ShowDomain}<img className={Styles.PlusIcon} src={arrowIcon} alt="" /></button>
              <button className={Styles.TryPremiumButton}>Try premium</button>
            </div>
            : ""}
        </div>
        <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
          <button onClick={onOpen} className={Styles.AddDomainButton}><img className={Styles.PlusIcon} src={PlusImage} alt="" />Add new domain</button>
          {display ?
            <button onClick={onOpen} className={Styles.AddDomainButton}><img className={Styles.PlusIcon} src={CheckImage} alt="" />Save changes</button>
            : ""}
        </div>
      </div>
      <div className={Styles.ContentContainer}>
        {!display ?
          <button onClick={onOpen} className={Styles.AddDomainButtonLarge}><img className={Styles.PlusIconLarge} src={PlusImage} alt="" />Add new domain</button>
          : ""}
        {display ?
          <div className={Styles.MainContentContainer}>
            <div className={Styles.Banner}>
              <h1>Active messaging apps</h1>
            </div>
            <div className={Styles.ButtonSection}>
              {Buttonlist?.buttons.map((button, index) => (
                <div onClick={() => handleButtonClick(button)} key={index}>
                  <CustomizeButton key={index} Style={SelectedButtons.some(selectedButton => selectedButton.name === button.name) ? 'GreenButton' : 'Mainbutton'} Icon={button.icon} Text={button.name} />
                </div>
              ))}
            </div>
            <div className={Styles.SeclectedButtons}>
              {SelectedButtons.map((button, index) => (
                <div key={index}>
                  <AddLinkSection agents={HandleAgents} sendDataToParent={handleDataFromChild} id={button.id} IsSelected={true} Icon={button.icon} Text={button.name} />
                </div>
              ))}
            </div>
          </div>
          : ""}
      </div>
      
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        motionPreset="slideInBottom"
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Domain</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Add new domain</FormLabel>
              <Input
                ref={initialRef}
                placeholder='www.example.com'
                value={newDomain}
                onChange={(e) => setNewDomain(e.target.value)}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={handleSave}>Save</Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}