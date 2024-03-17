import React, { useEffect, useState } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Button,
  Flex
} from '@chakra-ui/react';
import CustomLink from '../../Images/IconImage/link.svg';
import Styles from './AddLinkSection.module.css';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from '@chakra-ui/react'
import Delete from "../../Images/delete.svg"
import Check from "../../Images/check.svg"

export default function AddLinkSection({ SelectedButtons }) {
  const [isWhatsapp, setIsWhatsapp] = useState(false);
  const [AddLink, setAddLink] = useState(false);
  const [AddAgent, setAddAgent] = useState(false);
  const [stateAddressUrl, setStateAddressUrl] = useState({});
  const [yourButtonLink, setYourButtonLink] = useState("")
  const [linkInputValue, setLinkInputValue] = useState("");
  const [agents, setAgents] = useState([]);  //bu butun agent'leri saxlayir


  const [links, setLinks] = useState(() => SelectedButtons.reduce((acc, button) => ({
    ...acc,
    [button.Name]: ''
  }), {}));

  const YourSelectButton = {
    buttons: SelectedButtons.map(button => ({
      Name: button.Name,
      AddressUrl: links[button.Name] || '', 
      IsWhatsapp : button.id===1 ? true : false,
      CreateAgentsDtos : button.id===1 ? agents : null
    }))
  };
  console.log("--|||--", YourSelectButton);
  useEffect(() => {
    if (Text === "Whatsapp") {
      setIsWhatsapp(true);
    }
  }, [Text]);

  // console.log("ASSS", agents);

  const [inputs, setInputs] = useState({   //input state' agent'i tutur
    agentName: '',
    agentPosition: '',
    numberOrLink: ''
  });

  const handleLinkChange = (buttonName, value) => {
    setLinks(prev => ({
      ...prev,
      [buttonName]: value
    }));
  };

  const handleInputChange = (e, fieldName) => {
    setInputs({
      ...inputs,
      [fieldName]: e.target.value
    });
  };

  const handleAddLink = (buttonName) => {
    setStateAddressUrl(prev => ({
      ...prev,
      [buttonName]: linkInputValue
    }));
    setLinkInputValue("");
  };

  const handleAddAgent = () => {
    setAddAgent(!AddLink); 
  };

  const handleDone = () => {
    console.log("Inputs:", inputs);
    setAddAgent(!AddAgent);

    setAgents(prevAgents => [...prevAgents, inputs]);

    setInputs({
      agentName: '',
      agentPosition: '',
      numberOrLink: ''
    });
  };

  return (
    SelectedButtons.map((button, index) => (
      <Accordion key={index} className={Styles.Main} h={'max-content'} borderRadius={30} border={'1px solid rgba(203, 206, 210, 1)'} allowToggle>
        <AccordionItem border={"none"}>
          <AccordionButton className={Styles.AcordionButton} _hover={{ bg: 'none' }}>
            <Box as="span" flex='1' textAlign='left'>
              <div className={Styles.AccodionContainer}>
                <img src={button.icon} alt="" />
                <p className={Styles.AccodionTitle}>
                  {button.Name}
                </p>
              </div>
            </Box>
            <AccordionIcon color={"rgba(37, 211, 102, 1)"} className={Styles.ArrowIcon} fontSize={34} />
          </AccordionButton>
          <AccordionPanel pb={30} pl={30} pr={30} border={"none"}>
            <Box className={Styles.AccordionBtnContainer}>
              <Button bg={'transparent'} onClick={() => setAddLink(!AddLink)} className={Styles.AccordionBtn}><img src={CustomLink} alt="" />Add link</Button>
              {button.id === 1 &&
                <Button onClick={handleAddAgent} bg={'transparent'} className={Styles.AccordionBtn}><img src={CustomLink} alt="" />Add agent</Button>
              }
            </Box>
            {
              AddLink &&
              <Box>
                <FormControl>
                  <FormLabel>Link</FormLabel>
                  <Input className={Styles.FromInput} type="text" value={links[button.Name]} onChange={(e) => handleLinkChange(button.Name, e.target.value)} />
                </FormControl>
                <Flex gap={2}>
                  <Button className={Styles.DeleteButton} onClick={() => handleLinkChange(button.Name, '')}><img src={Delete} className={Styles.deleteIcon} alt="" /> Delete link</Button>
                </Flex>
              </Box>
            }
          </AccordionPanel>
          {
            AddAgent
              ?
              <Box>
                <FormControl>
                  <FormLabel>Agent name</FormLabel>
                  <Input className={Styles.FromInput} value={inputs.agentName} onChange={(e) => handleInputChange(e, 'agentName')} />
                </FormControl>
                <FormControl>
                  <FormLabel>Agent position</FormLabel>
                  <Input className={Styles.FromInput} value={inputs.agentPosition} onChange={(e) => handleInputChange(e, 'agentPosition')} />
                </FormControl>
                <FormControl>
                  <FormLabel>Number or link</FormLabel>
                  <Input className={Styles.FromInput} value={inputs.numberOrLink} onChange={(e) => handleInputChange(e, 'numberOrLink')} />
                </FormControl>
                <Flex gap={2}>
                  <Button className={Styles.DeleteButton}><img src={Delete} className={Styles.deleteIcon} alt="" /> Delete link</Button>
                  <Button onClick={handleDone} className={Styles.DoneButtonContainer}><img src={Check} className={Styles.DoneButton} alt="" /> Done</Button>
                </Flex>
              </Box>
              : ""
          }
        </AccordionItem>
      </Accordion >
    ))
  );
}

