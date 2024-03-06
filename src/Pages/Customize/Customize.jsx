import React, { useState } from 'react'
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
  Box,
} from '@chakra-ui/react'
import arrowIcon from '../../Images/arrow_back_ios_new.svg'
import CustomizeButton from '../../Components/Buttons/CustomomizeButtons/CustomizeButton'
import Whatsapp from '../../Images/IconImage/whatsapp.svg'
import youtube from '../../Images/IconImage/youtube.svg'
import Mesenger from '../../Images/IconImage/Mesenger.svg'
import SnapChat from '../../Images/IconImage/Snapchat.svg'
import Teleqram from '../../Images/IconImage/Teleqram.svg'
import CustomLink from '../../Images/IconImage/link.svg'
import İnstagram from '../../Images/IconImage/instagram.png'
import Skype from '../../Images/IconImage/Group.svg'
import linkein from '../../Images/IconImage/Linkein.svg'
import Twitter from '../../Images/IconImage/Twitter.svg'
import Waze from '../../Images/IconImage/waze_logo_icon_249220 1.svg'
import Tiktok from '../../Images/IconImage/tikTok.svg'
import discord from '../../Images/IconImage/discord.svg'
import Call from '../../Images/IconImage/call (1).svg'
import GoogleMaps from '../../Images/IconImage/GoogleMaps-Icon-alone-1 1.svg'
import CheckImage from '../../Images/check.svg'
import AddLinkSection from '../../Components/AddlinkSection/AddLinkSection'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
export default function Customize() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [newDomain, setNewDomain] = useState('')
  const [ShowDomain, setShowDomain] = useState('')
  const [display, setdisplay] = useState(false)
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
              <CustomizeButton Style={'GreenButton'} Icon={Whatsapp} Text={"Whatsapp"} />
              <CustomizeButton Style={'Mainbutton'} Icon={youtube} Text={"YouTube"} />
              <CustomizeButton Style={'Mainbutton'} Icon={Mesenger} Text={"Mesenger"} />
              <CustomizeButton Style={'Mainbutton'} Icon={Teleqram} Text={"Teleqram"} />
              <CustomizeButton Style={'GreenButton'} Icon={SnapChat} Text={"SnapChat"} />
              <CustomizeButton Style={'Mainbutton'} Icon={CustomLink} Text={"CustomLink"} />
              <CustomizeButton Style={'Mainbutton'} Icon={İnstagram} Text={"İnstagram"} />
              <CustomizeButton Style={'Mainbutton'} Icon={Skype} Text={"Skype"} />
              <CustomizeButton Style={'Mainbutton'} Icon={linkein} Text={"linkein"} />
              <CustomizeButton Style={'Mainbutton'} Icon={Twitter} Text={"Twitter"} />
              <CustomizeButton Style={'Mainbutton'} Icon={Waze} Text={"Waze"} />
              <CustomizeButton Style={'Mainbutton'} Icon={Tiktok} Text={"Tik Tok"} />
              <CustomizeButton Style={'Mainbutton'} Icon={discord} Text={"Discord"} />
              <CustomizeButton Style={'Mainbutton'} Icon={Call} Text={"Call"} />
              <CustomizeButton Style={'Mainbutton'} Icon={GoogleMaps} Text={"GoogleMaps"} />
            </div>
            <div>
              <Accordion maxW={501} borderRadius={30} border={'1px solid rgba(203, 206, 210, 1)'} allowToggle>
                <AccordionItem border={"none"}>
                  <AccordionButton className={Styles.AcordionButton} _hover={{ bg: 'none' }} >
                    <Box as="span" flex='1' textAlign='left'>
                      <div className={Styles.AccodionContainer} >
                        <img src={Whatsapp} alt="" />
                        <p className={Styles.AccodionTitle}>
                          Whatsapp
                        </p>
                      </div>
                    </Box>
                    <AccordionIcon color={"rgba(37, 211, 102, 1)"} className={Styles.ArrowIcon} fontSize={34} />
                  </AccordionButton>
                  <AccordionPanel border={"none"}>
                    <Box  className={Styles.AccordionBtnContainer}>
                      <Button p={30} bg={'transparent'} className={Styles.AccordionBtn}><img src={CustomLink} alt="" /> add link</Button>
                      <Button p={30} bg={'transparent'} className={Styles.AccordionBtn}><img src={CustomLink} alt="" />  Add agent</Button>
                    </Box>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>

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
