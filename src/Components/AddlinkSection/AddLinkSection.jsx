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

export default function AddLinkSection({ Icon, Text }) {
  const [isWhatsapp, setIsWhatsapp] = useState(false);
  const [AddLink, setAddLink] = useState(false);
  const [AddAgent, setAddAgent] = useState(false);

  useEffect(() => {
    if (Text === "Whatsapp") {
      setIsWhatsapp(true);
    }
  }, [Text]);

  const [inputs, setInputs] = useState({
    agentName: '',
    agentPosition: '',
    numberOrLink: ''
  });

  const handleInputChange = (e, fieldName) => {
    setInputs({
      ...inputs,
      [fieldName]: e.target.value
    });
  };

  const handleAddLink = () => {
    setAddLink(!AddLink);
  };

  const handleAddAgent = () => {
    setAddAgent(!AddLink); // Note: should be setAddAgent(!AddAgent)
  };

  const handleDone = () => {
    console.log("Inputs:", inputs);
    setAddAgent(!AddLink);
    setInputs({
      agentName: '',
      agentPosition: '',
      numberOrLink: ''
    });
  };

  return (
    <Accordion className={Styles.Main} h={'max-content'} borderRadius={30} border={'1px solid rgba(203, 206, 210, 1)'} allowToggle>
      <AccordionItem border={"none"}>
        <AccordionButton className={Styles.AcordionButton} _hover={{ bg: 'none' }}>
          <Box as="span" flex='1' textAlign='left'>
            <div className={Styles.AccodionContainer}>
              <img src={Icon} alt="" />
              <p className={Styles.AccodionTitle}>
                {Text}
              </p>
            </div>
          </Box>
          <AccordionIcon color={"rgba(37, 211, 102, 1)"} className={Styles.ArrowIcon} fontSize={34} />
        </AccordionButton>
        <AccordionPanel pb={30} pl={30} pr={30} border={"none"}>
          {!AddLink && !AddAgent &&
            <Box className={Styles.AccordionBtnContainer}>
              <Button bg={'transparent'} onClick={handleAddLink} className={Styles.AccordionBtn}><img src={CustomLink} alt="" />Add link</Button>
              {isWhatsapp &&
                <Button onClick={handleAddAgent} bg={'transparent'} className={Styles.AccordionBtn}><img src={CustomLink} alt="" />Add agent</Button>
              }
            </Box>
          }
          {
            AddLink ?
              <Box>
                <FormControl >
                  <FormLabel>Link</FormLabel>
                  <Input className={Styles.FromInput} type='email' />
                </FormControl>
                <Flex gap={2}>
                  <Button className={Styles.DeleteButton}><img src={Delete} className={Styles.deleteIcon} alt="" /> Delete link</Button>
                </Flex>
              </Box>
              :
              ""
          }
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
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
