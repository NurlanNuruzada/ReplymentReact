import React, { useEffect, useState } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Button,
  Flex,
  Grid,
  GridItem
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
import { useDispatch } from 'react-redux';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router';
import { CreateCustomize } from "../../Services/CustomizeService";


export default function AddLinkSection({ SelectedButtons, customizeStyle, saveChanges }) {
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
      IsWhatsapp: button.id === 1 ? true : false,
      CreateAgentsDtos: button.id === 1 ? agents : null
    }))
  };
  console.log("--|||--", YourSelectButton);


  const navigate = useNavigate();

  const CustomizeFormik = useFormik({
    initialValues: {
      WidgetColor: "dddddd",
      WidgetButtonImage: "iiiii",
      ButtonStyle: 0,
      BackgroundStyle: 0,
      ButtonSize: 34,
      BorderRadius: 34,
      Shadow: 34,
      Opacity: 34,
      Position: true,
      Display: 2,
      Greeting: true,
      AvatarImage: "iiiii",
      AgentName: "dddddd",
      AgentPosition: "dddddd",
      GreetingMessage: "dddddd",
      CallToAction: "dddddd",
      DomainId: '82a87838-3b59-4376-0e56-08dc480efd9a',
      CreateCustomButtonDtos: YourSelectButton
    },
    onSubmit: (values) => {
      // setIsLoading(true);
      LoginMutate(values)
    },
  });
  // CustomizeFormik.submitForm();
  const { mutate: LoginMutate } =
    useMutation((values) => CreateCustomize(values), {
      onSuccess: (resp) => {
        // setIsLoading(false);
        navigate("/beta/customize")
      },
      onError: (error) => {
        // setIsLoading(false);
      },
    });
  useEffect(() => {
    if (saveChanges) {
      CustomizeFormik.submitForm();
    }
  }, [saveChanges]);


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
    const { value } = e.target;

    if (value.trim() !== '') {
      setInputs({
        ...inputs,
        [fieldName]: value
      });
    }
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
    setAddAgent(!AddAgent);

    setAgents(prevAgents => [...prevAgents, inputs]);

    setInputs({
      agentName: '',
      agentPosition: '',
      numberOrLink: ''
    });
  };

  const handleDeleteAgent = () => {
    setInputs({
      agentName: '',
      agentPosition: '',
      numberOrLink: ''
    });
    setAddAgent(false);
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
            {console.log("agents", agents)}
            <Grid marginLeft={'20px'} marginTop={"30px"} justifyContent={'center'} width={"423px"} height={"64px"} alignItems={'center'} templateColumns='repeat(3, 1fr)' gap={3}>
              {agents && agents.length > 0 &&
                agents.map((agent, index) => {
                  return (
                    <GridItem key={index} display={'flex'} borderRadius={"156px"} border={'1px solid rgba(203, 206, 210, 1)'} padding={"20px"} gap={"10px"} w='151px' h='64px' bg='transparent' >
                      <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 18V16H17V8.9C17 6.95 16.3208 5.29583 14.9625 3.9375C13.6042 2.57917 11.95 1.9 10 1.9C8.05 1.9 6.39583 2.57917 5.0375 3.9375C3.67917 5.29583 3 6.95 3 8.9V15H2C1.45 15 0.979167 14.8042 0.5875 14.4125C0.195833 14.0208 0 13.55 0 13V11C0 10.65 0.0875 10.3208 0.2625 10.0125C0.4375 9.70417 0.683333 9.45833 1 9.275L1.075 7.95C1.20833 6.81667 1.5375 5.76667 2.0625 4.8C2.5875 3.83333 3.24583 2.99167 4.0375 2.275C4.82917 1.55833 5.7375 1 6.7625 0.6C7.7875 0.2 8.86667 0 10 0C11.1333 0 12.2083 0.2 13.225 0.6C14.2417 1 15.15 1.55417 15.95 2.2625C16.75 2.97083 17.4083 3.80833 17.925 4.775C18.4417 5.74167 18.775 6.79167 18.925 7.925L19 9.225C19.3167 9.375 19.5625 9.6 19.7375 9.9C19.9125 10.2 20 10.5167 20 10.85V13.15C20 13.4833 19.9125 13.8 19.7375 14.1C19.5625 14.4 19.3167 14.625 19 14.775V16C19 16.55 18.8042 17.0208 18.4125 17.4125C18.0208 17.8042 17.55 18 17 18H9ZM7 11C6.71667 11 6.47917 10.9042 6.2875 10.7125C6.09583 10.5208 6 10.2833 6 10C6 9.71667 6.09583 9.47917 6.2875 9.2875C6.47917 9.09583 6.71667 9 7 9C7.28333 9 7.52083 9.09583 7.7125 9.2875C7.90417 9.47917 8 9.71667 8 10C8 10.2833 7.90417 10.5208 7.7125 10.7125C7.52083 10.9042 7.28333 11 7 11ZM13 11C12.7167 11 12.4792 10.9042 12.2875 10.7125C12.0958 10.5208 12 10.2833 12 10C12 9.71667 12.0958 9.47917 12.2875 9.2875C12.4792 9.09583 12.7167 9 13 9C13.2833 9 13.5208 9.09583 13.7125 9.2875C13.9042 9.47917 14 9.71667 14 10C14 10.2833 13.9042 10.5208 13.7125 10.7125C13.5208 10.9042 13.2833 11 13 11ZM4.025 9.45C3.90833 7.68333 4.44167 6.16667 5.625 4.9C6.80833 3.63333 8.28333 3 10.05 3C11.5333 3 12.8375 3.47083 13.9625 4.4125C15.0875 5.35417 15.7667 6.55833 16 8.025C14.4833 8.00833 13.0875 7.6 11.8125 6.8C10.5375 6 9.55833 4.91667 8.875 3.55C8.60833 4.88333 8.04583 6.07083 7.1875 7.1125C6.32917 8.15417 5.275 8.93333 4.025 9.45Z" fill="#1C1B1F" />
                      </svg>
                      {agent.agentName}
                    </GridItem>
                  )
                })}
            </Grid>
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
                  <Button className={Styles.DeleteButton} onClick={handleDeleteAgent}><img src={Delete} className={Styles.deleteIcon} alt="" /> Delete Agent</Button>
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

