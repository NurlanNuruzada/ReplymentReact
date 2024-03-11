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
import { useFormik } from 'formik';
let buttonArray = [];
export default function AddLinkSection({ Icon, Text, id, sendDataToParent, agents }) {
  const [isWhatsapp, setIsWhatsapp] = useState(false);
  const [AddLink, setAddLink] = useState(false);
  const [AddAgent, setAddAgent] = useState(false);
  const [selectedAgentIndex, setSelectedAgentIndex] = useState(null);
  const [agentNameDisplay, setAgentNameDisplay] = useState([]);
  const [inputs, setInputs] = useState({
    agentName: '',
    agentPosition: '',
    numberOrLink: '',
    buttonLink: '',
    buttonId: id
  });
  useEffect(() => {
    sendDataToParent(buttonArray)
  }, [buttonArray]);
  useEffect(() => {
    agents(agentNameDisplay)
  }, [agentNameDisplay]);
  const ButtonFormik = useFormik({
    initialValues: {
      ButtonId: id,
      buttonLink: '',
    },
    onSubmit: (values) => {
      const existingButtonIndex = buttonArray.findIndex(data => data.ButtonId === id);
      if (existingButtonIndex !== -1) {
        const existingButton = buttonArray[existingButtonIndex];
        const updatedButton = { ...existingButton, buttonLink: values.buttonLink };
        buttonArray[existingButtonIndex] = updatedButton;
      } else {
        buttonArray.push(values)
      }
    }
  });
  useEffect(() => {
    if (Text === "Whatsapp") {
      setIsWhatsapp(true);
    }
  }, [Text]);
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
    setAddAgent(!AddAgent);
  };
  const handleDone = () => {
    if (inputs.agentName.trim() !== '') {
      if (selectedAgentIndex !== null) {
        const updatedAgents = [...agentNameDisplay];
        updatedAgents[selectedAgentIndex] = {
          name: inputs.agentName,
          position: inputs.agentPosition,
          numberOrLink: inputs.numberOrLink
        };
        setAgentNameDisplay(updatedAgents);
      } else {
        setAgentNameDisplay(prevAgents => [
          ...prevAgents,
          {
            name: inputs.agentName,
            position: inputs.agentPosition,
            numberOrLink: inputs.numberOrLink
          }
        ]);
      }
    }
    setInputs({
      agentName: '',
      agentPosition: '',
      numberOrLink: ''
    });
    setSelectedAgentIndex(null);
  };
  const handleAgentClick = index => {
    const selectedAgent = agentNameDisplay[index];
    setInputs({
      agentName: selectedAgent.name,
      agentPosition: selectedAgent.position,
      numberOrLink: selectedAgent.numberOrLink
    });
    setSelectedAgentIndex(index);
  };
  const handleDeleteAgent = () => {
    if (selectedAgentIndex !== null) {
      const updatedAgents = [...agentNameDisplay];
      updatedAgents.splice(selectedAgentIndex, 1);
      setAgentNameDisplay(updatedAgents);
      setInputs({
        agentName: '',
        agentPosition: '',
        numberOrLink: ''
      });
      setSelectedAgentIndex(null);
    }
  };
  const handleDeleteLink = () => {
    setInputs(prevInputs => ({
      ...prevInputs,
      numberOrLink: ''
    }));
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
                <FormControl>
                  <FormLabel>Link</FormLabel>
                  <Input
                    className={Styles.FromInput}
                    type='text'
                    value={ButtonFormik.values.buttonLink}
                    onChange={ButtonFormik.handleChange}
                    name="buttonLink"
                  />
                </FormControl>
                <Flex pt={30} gap={2}>
                  <Button className={Styles.DeleteButton} onClick={handleDeleteLink}>
                    <img src={Delete} className={Styles.deleteIcon} alt="" /> Delete link
                  </Button>
                  <Button className={Styles.DoneButtonContainer} onClick={ButtonFormik.handleSubmit}>
                    <img src={Check} className={Styles.DoneButton} alt="" /> Done
                  </Button>
                </Flex>
              </Box>
              : ""
          }
          {
            AddAgent
              ?
              <Box >
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
                <Flex pt={30} flexWrap={"wrap"} rowGap={0} gap={2}>
                  <Button className={Styles.DeleteButton} onClick={handleDeleteAgent}><img src={Delete} className={Styles.deleteIcon} alt="" /> Delete agent</Button>
                  <Button onClick={handleDone} className={Styles.DoneButtonContainer}><img src={Check} className={Styles.DoneButton} alt="" /> Done</Button>
                </Flex>
              </Box>
              : ""
          }
          <Flex gap={15} pt={4} flexWrap={"wrap"}>
            {agentNameDisplay.map((name, index) => (
              <Box onClick={() => handleAgentClick(index)} className={Styles.AgentContainer} key={index}>{name.name}</Box>
            ))}
          </Flex>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
