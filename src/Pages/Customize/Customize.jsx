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
import { CirclePicker, HuePicker } from "react-color";
import { useFormik } from 'formik';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { Select } from '@chakra-ui/react'
import { GetAllDomains } from "../../Services/DomainService";
import CustomizeButtons from "../../Components/YourCustomize/CustomizeButtons";


export default function Customize() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [newDomain, setNewDomain] = useState('')
  const [ShowDomain, setShowDomain] = useState('')
  const [display, setdisplay] = useState(false)
  const [showModal, setShowModal] = useState(false);

  // const { appUserId } = useSelector((x) => x.AuthReducer);
  const queryClient = useQueryClient();

  // console.log("AppUserId", appUserId);
  const domainFormik = useFormik({
    initialValues: {
      DomainUrl: newDomain ? newDomain : '',
      AppUserId: '9a524e9c-2507-4721-adaa-f762fa842e2a',
    },
    onSubmit: async (values) => {
      const formData = new FormData();

      formData.append('DomainUrl', newDomain ? newDomain : '');
      formData.append("AppUserId", '9a524e9c-2507-4721-adaa-f762fa842e2a');

      const response = await axios.post('https://localhost:7091/api/Domains', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      if (response.status === 201) {
        queryClient.invalidateQueries('GetAllDomains');
      }
    },
  });

  //Customize------------------------------------------------------
  const [customizeStyle, setCustomizeStyle] = useState({
    color: '',
    buttonImage: '',
    buttonStyle: 0,
    backgroundStyle: 0,
    buttonSize: '',
    borderRadius: '',
    shadow: '',
    opacity: '',
    position: true,
    display: 0,
    GreetingMessage: true,
    avatorOrLogo: '',
    agentName: '',
    agentPosition: '',
    greetingMessage: '',
    callToAction: '',
    googleAnalytics: false
  });
  // console.log('customizeStyle', customizeStyle);


  const [selectedColor, setSelectedColor] = useState("#000000");
  const [selectedImage, setSelectedImage] = useState(null);
  const [classicSelected, setClassicSelected] = useState(true);
  const [rectangleSelected, setRectangleSelected] = useState(false);
  const [solidSelected, setSolidSelected] = useState(true);
  const [gradientSelected, setGradientSelected] = useState(false);
  const [buttonSizeValue, setButtonSizeValue] = useState(30);
  const [borderRadiusValue, setBorderRadiusValue] = useState(30);
  const [shadowValue, setShadowValue] = useState(30);
  const [opacityValue, setOpacityValue] = useState(30);
  const [leftSelected, setLeftSelected] = useState(true);
  const [rightSelected, setRightSelected] = useState(false);
  const [desktopSelected, setDesktopSelected] = useState(false);
  const [mobileSelected, setMobileSelected] = useState(false);
  const [isCheckedGreeting, setIsCheckedGreeting] = useState(true);
  const [selectedImageAvatar, setSelectedImageAvatar] = useState(null);
  const [inputAgentName, setInputAgentName] = useState("Ker1mof");
  const [inputAgentPosistion, setInputAgentPosistion] = useState("Developer");
  const [inputAgentAction, setInputAgentAction] = useState("Salam");
  const [inputAgentGreetingMessage, setInputAgentGreetingMessage] = useState("Hello 👋  How may we help you? Just send us a message now to get assistance.");
  const [isCheckedGreetingAnalytics, setIsCheckedGreetingAnalytics] = useState(true);




  const handleCheckboxChangeAnalytics = () => {
    setIsCheckedGreetingAnalytics(!isCheckedGreetingAnalytics);
    setCustomizeStyle(prevState => ({ ...prevState, googleAnalytics: isCheckedGreetingAnalytics === true ? true : false }));
  };

  const handleInputAgentGreetingMessage = (event) => {
    setInputAgentGreetingMessage(event.target.value);
    setCustomizeStyle(prevState => ({ ...prevState, greetingMessage: event.target.value }));
  };

  const handleInputAgentAction = (event) => {
    setInputAgentAction(event.target.value);
    setCustomizeStyle(prevState => ({ ...prevState, callToAction: event.target.value }));
  };

  const handleInputAgentPosistion = (event) => {
    setInputAgentPosistion(event.target.value);
    setCustomizeStyle(prevState => ({ ...prevState, agentPosition: event.target.value }));
  };

  const handleInputAgentName = (event) => {
    setInputAgentName(event.target.value);
    setCustomizeStyle(prevState => ({ ...prevState, agentName: event.target.value }));
  };

  const handleImageChangeAvatar = (event) => {
    const imageFile = event.target.files[0];
    setSelectedImageAvatar(imageFile);
    setCustomizeStyle(prevState => ({ ...prevState, avatorOrLogo: imageFile }));
  };

  const handleCheckboxChangeGreeting = () => {
    setIsCheckedGreeting(!isCheckedGreeting);
    setCustomizeStyle(prevState => ({ ...prevState, GreetingMessage: isCheckedGreeting === true ? true : false }));
  };


  const handleCheckboxChangeDisplay = (event) => {
    const { name, checked } = event.target;
    if (name === "desktop") {
      setDesktopSelected(checked);
    } else if (name === "mobile") {
      setMobileSelected(checked);
    }
    if (desktopSelected === true && mobileSelected === true) {
      setCustomizeStyle(prevState => ({ ...prevState, display: 2 }));
    }
    if (desktopSelected === true && mobileSelected === false) {
      setCustomizeStyle(prevState => ({ ...prevState, display: 0 }));
    }
    if (desktopSelected === false && mobileSelected === true) {
      setCustomizeStyle(prevState => ({ ...prevState, display: 1 }));
    }
  };


  const handleChangeOpacity = (event) => {
    setOpacityValue(parseInt(event.target.value));
    setCustomizeStyle(prevState => ({ ...prevState, opacity: event.target.value }));
  };

  const handleChangeShadow = (event) => {
    setShadowValue(parseInt(event.target.value));
    setCustomizeStyle(prevState => ({ ...prevState, shadow: event.target.value }));
  };
  const handleChangeButtonRadius = (event) => {
    setBorderRadiusValue(parseInt(event.target.value));
    setCustomizeStyle(prevState => ({ ...prevState, borderRadius: event.target.value }));
  };
  const handleChangeButtonSize = (event) => {
    setButtonSizeValue(parseInt(event.target.value));
    setCustomizeStyle(prevState => ({ ...prevState, buttonSize: event.target.value }));
  };

  const handleCheckboxChangePosition = (event) => {
    const { name, checked } = event.target;
    if (name === "Left") {
      setLeftSelected(true);
      if (checked) {
        setRightSelected(false);
      }
    } else if (name === "Right") {
      setRightSelected(checked);
      if (checked) {
        setLeftSelected(false);
      }
    }
    setCustomizeStyle(prevState => ({ ...prevState, position: classicSelected === true ? true : false }));
  };

  const handleCheckboxBackground = (event) => {
    const { name, checked } = event.target;
    if (name === "Solid") {
      setSolidSelected(true);
      if (checked) {
        setGradientSelected(false);
      }
    } else if (name === "Gradient") {
      setGradientSelected(checked);
      if (checked) {
        setSolidSelected(false);
      }
    }
    setCustomizeStyle(prevState => ({ ...prevState, backgroundStyle: solidSelected === true ? 0 : 1 }));
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    if (name === "classic") {
      setClassicSelected(true);
      if (checked) {
        setRectangleSelected(false);
      }
    } else if (name === "rectangle") {
      setRectangleSelected(checked);
      if (checked) {
        setClassicSelected(false);
      }
    }
    setCustomizeStyle(prevState => ({ ...prevState, buttonStyle: classicSelected === true ? 0 : 1 }));
  };

  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    setSelectedImage(imageFile);
    setCustomizeStyle(prevState => ({ ...prevState, buttonImage: imageFile }));
  };


  const handleColorChange = (color) => {
    setSelectedColor(color.hex);
    setCustomizeStyle(prevState => ({ ...prevState, color: color.hex }));
  };



  const [saveChanges, setSaveChanges] = useState(false);
  //Customize------------------------------------------------------




  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const HandleDisplay = () => {
    if (newDomain !== null && newDomain !== "") {
      setdisplay(true)
      setShowDomain(newDomain)
    }
    else {
      setdisplay(false)
    }
  }



  const [stateAddressUrl, setStateAddressUrl] = useState("");

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  const handleSave = () => {
    HandleDisplay();
    onClose();
    domainFormik.submitForm();
  };

  const [SelectedButtons, setSelectedButtons] = useState([]);

  const handleButtonClick = (button) => {
    const isButtonExists = SelectedButtons.some((selectedButton) => selectedButton.Name === button.Name);

    if (isButtonExists) {
      const updatedButtons = SelectedButtons.filter((selectedButton) => selectedButton.Name !== button.Name);
      setSelectedButtons(updatedButtons);
    } else {
      setSelectedButtons(prevButtons => [...prevButtons, button]);
    }
  };
  useEffect(() => {
    console.log("-----------", SelectedButtons);
  }, [SelectedButtons]);

  const Buttonlist = {
    buttons: [
      { id: 1, Name: "Whatsapp", icon: Whatsapp, AddressUrl: stateAddressUrl },
      { id: 2, Name: "Youtube", icon: Youtube, AddressUrl: stateAddressUrl },
      { id: 3, Name: "Messenger", icon: Messenger, AddressUrl: stateAddressUrl },
      { id: 4, Name: "Snapchat", icon: Snapchat, AddressUrl: stateAddressUrl },
      { id: 5, Name: "Telegram", icon: Telegram, AddressUrl: stateAddressUrl },
      { id: 6, Name: "Custom Link", icon: CustomLink, AddressUrl: stateAddressUrl },
      { id: 7, Name: "Instagram", icon: Instagram, AddressUrl: stateAddressUrl },
      { id: 8, Name: "Skype", icon: Skype, AddressUrl: stateAddressUrl },
      { id: 9, Name: "Linkedin", icon: Linkedin, AddressUrl: stateAddressUrl },
      { id: 10, Name: "Twitter", icon: Twitter, AddressUrl: stateAddressUrl },
      { id: 11, Name: "Waze", icon: Waze, AddressUrl: stateAddressUrl },
      { id: 12, Name: "Tiktok", icon: Tiktok, AddressUrl: stateAddressUrl },
      { id: 13, Name: "Discord", icon: Discord, AddressUrl: stateAddressUrl },
      { id: 14, Name: "Call", icon: Call, AddressUrl: stateAddressUrl },
      { id: 15, Name: "Google Maps", icon: GoogleMaps, AddressUrl: stateAddressUrl }
    ]
  };



  const { data: AllDomains } = useQuery(["GetAllDomains", '9a524e9c-2507-4721-adaa-f762fa842e2a'], () =>
    GetAllDomains('9a524e9c-2507-4721-adaa-f762fa842e2a')
  );


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
        <Select width={'270px'} placeholder='Select option'>
          {AllDomains?.data && AllDomains?.data?.length > 0 &&
            AllDomains?.data.map((domain, index) => {
              return <option key={index} value='option1'>{domain.domainUrl}</option>
            })}
        </Select>
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
                  <CustomizeButton key={index} Style={SelectedButtons.some(selectedButton => selectedButton.Name === button.Name) ? 'GreenButton' : 'Mainbutton'} Icon={button.icon} Text={button.Name} />
                </div>
              ))}
            </div>
            <div className={Styles.SeclectedButtons}>
              {/* {SelectedButtons.map((button, index) => ( */}
              <div>
                <AddLinkSection IsSelected={true} saveChanges={saveChanges} customizeStyle={customizeStyle} SelectedButtons={SelectedButtons} />
              </div>
              {/* ))} */}
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

      <div className={Styles.CustomizeYourWidgetTitle}>
        <h2>Customize Your Widget</h2>
      </div>
      <div className={Styles.CustomizeYourWidget}>
        <div className={Styles.CustomizeYourWidget_Up}>
          <div className={Styles.CustomizeYourWidget_Up_in}>

            <div className={Styles.Color}>
              <p>Color</p>
              <button className={Styles.colorBtn}>
                <div className={Styles.colorBtnDiv}
                  style={{
                    backgroundColor: selectedColor,
                  }}
                  onClick={toggleModal}
                /> <span>{selectedColor}</span>
              </button>
              {showModal && (
                <div
                  style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onClick={toggleModal} // Modal dışına tıklandığında modalı kapat
                >
                  <div
                    style={{
                      backgroundColor: "#fff",
                      padding: 20,
                      borderRadius: 10,
                    }}
                    onClick={(e) => e.stopPropagation()} // Modal içinde tıklamayı engelle
                  >
                    <CirclePicker color={selectedColor} onChange={handleColorChange} />
                    <br></br>
                    <HuePicker color={selectedColor} onChange={handleColorChange} />
                  </div>
                </div>
              )}
            </div>

            <div className={Styles.ButtonImage}>
              <div className={Styles.ButtonImageTitle}>
                <p>Button image</p><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="20" height="20" rx="10" fill="#EEBE41" />
                  <mask id="mask0_812_5919" maskUnits="userSpaceOnUse" x="5" y="5" width="10" height="10">
                    <rect x="5" y="5" width="10" height="10" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_812_5919)">
                    <path d="M8.78158 11.7709L10.0003 11.0313L11.2191 11.7709L10.8962 10.3854L11.9795 9.44794L10.5524 9.33335L10.0003 8.02085L9.44824 9.33335L8.02116 9.44794L9.10449 10.3854L8.78158 11.7709ZM10.0003 14.7084L8.60449 13.3334H6.66699V11.3959L5.29199 10L6.66699 8.60419V6.66669H8.60449L10.0003 5.29169L11.3962 6.66669H13.3337V8.60419L14.7087 10L13.3337 11.3959V13.3334H11.3962L10.0003 14.7084ZM10.0003 13.5417L11.042 12.5H12.5003V11.0417L13.542 10L12.5003 8.95835V7.50002H11.042L10.0003 6.45835L8.95866 7.50002H7.50033V8.95835L6.45866 10L7.50033 11.0417V12.5H8.95866L10.0003 13.5417Z" fill="white" />
                  </g>
                </svg>

              </div>
              <div className={Styles.ButtonImagelabel}>
                <label htmlFor="file-input">
                  <svg width="19" height="13" viewBox="0 0 19 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.14616 12.8333C3.94546 12.8333 2.9196 12.4177 2.06855 11.5865C1.21751 10.7552 0.791992 9.73924 0.791992 8.53855C0.791992 7.50938 1.10206 6.59237 1.7222 5.78751C2.34234 4.98264 3.1538 4.46806 4.15658 4.24376C4.48644 3.02987 5.14616 2.04688 6.13574 1.2948C7.12533 0.542713 8.24685 0.166672 9.50033 0.166672C11.0441 0.166672 12.3536 0.704345 13.429 1.77969C14.5043 2.85504 15.042 4.16459 15.042 5.70834C15.9524 5.81389 16.7078 6.20643 17.3081 6.88594C17.9085 7.56546 18.2087 8.36042 18.2087 9.27084C18.2087 10.2604 17.8623 11.1016 17.1696 11.7943C16.4769 12.487 15.6357 12.8333 14.6462 12.8333H10.292C9.85658 12.8333 9.48383 12.6783 9.17376 12.3682C8.86369 12.0582 8.70866 11.6854 8.70866 11.25V7.17292L7.44199 8.40001L6.33366 7.29167L9.50033 4.12501L12.667 7.29167L11.5587 8.40001L10.292 7.17292V11.25H14.6462C15.2003 11.25 15.6687 11.0587 16.0514 10.676C16.434 10.2934 16.6253 9.82501 16.6253 9.27084C16.6253 8.71667 16.434 8.24827 16.0514 7.86563C15.6687 7.48299 15.2003 7.29167 14.6462 7.29167H13.4587V5.70834C13.4587 4.6132 13.0727 3.67969 12.3008 2.90782C11.529 2.13594 10.5955 1.75001 9.50033 1.75001C8.40519 1.75001 7.47168 2.13594 6.6998 2.90782C5.92793 3.67969 5.54199 4.6132 5.54199 5.70834H5.14616C4.38088 5.70834 3.72776 5.97883 3.18678 6.5198C2.64581 7.06077 2.37533 7.71389 2.37533 8.47917C2.37533 9.24445 2.64581 9.89758 3.18678 10.4385C3.72776 10.9795 4.38088 11.25 5.14616 11.25H7.12533V12.8333H5.14616Z" fill="#1C1B1F" />
                  </svg>
                </label>
                <p>Choose a file or drag it here</p>
              </div>
              <input
                id="file-input"
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleImageChange}
              />
              {selectedImage && (
                <div>
                  <img
                    src={URL.createObjectURL(selectedImage)}
                    alt="Seçilen Resim"
                    style={{ maxWidth: "100%", maxHeight: 200 }}
                  />
                </div>
              )}
            </div>

            <div className={Styles.ButtonStyle}>
              <p>Button style</p>
              <div>
                <div>
                  <div className={Styles.btnStyleTip}>
                    <label>
                      <input
                        type="radio"
                        name="classic"
                        checked={classicSelected}
                        onChange={handleCheckboxChange}
                      />
                      <span>Classic</span>
                    </label>
                  </div>
                </div>
                <div>
                  <div style={{ width: '143px' }} className={Styles.btnStyleTip}>
                    <label>
                      <input
                        type="radio"
                        name="rectangle"
                        checked={rectangleSelected}
                        onChange={handleCheckboxChange}
                      />
                      <span>Rectangle</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>


            <div className={Styles.ButtonStyle}>
              <p>Background style</p>
              <div>
                <div>
                  <div className={Styles.btnStyleTip}>
                    <label>
                      <input
                        type="radio"
                        name="Solid"
                        checked={solidSelected}
                        onChange={handleCheckboxBackground}
                      />
                      <span>Solid</span>
                    </label>
                  </div>
                </div>
                <div>
                  <div style={{ width: '143px' }} className={Styles.btnStyleTip}>
                    <label>
                      <input
                        type="radio"
                        name="Gradient"
                        checked={gradientSelected}
                        onChange={handleCheckboxBackground}
                      />
                      <span>Gradient</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>



            <div className={Styles.ButtonStyle}>
              <p>Button size</p>
              <div className={Styles.btnSize}>
                <input
                  type="range"
                  min={30}
                  max={100}
                  value={buttonSizeValue}
                  onChange={handleChangeButtonSize}
                  style={{
                    WebkitAppearance: "none",
                    width: "100%",
                    height: "3px",
                    borderRadius: "50%",
                    background: "#d3d3d3",
                    outline: "none",
                    opacity: "0.7",
                    transition: "opacity .2s",
                  }}
                />
              </div>
            </div>

            <div className={Styles.ButtonStyle}>
              <p>Border Radius</p>
              <div className={Styles.btnSize}>
                <input
                  type="range"
                  min={30}
                  max={100}
                  value={borderRadiusValue}
                  onChange={handleChangeButtonRadius}
                  style={{
                    WebkitAppearance: "none",
                    width: "100%",
                    height: "3px",
                    borderRadius: "50%",
                    background: "#d3d3d3",
                    outline: "none",
                    opacity: "0.7",
                    transition: "opacity .2s",
                  }}
                />
              </div>
            </div>

            <div className={Styles.ButtonStyle}>
              <p>Shadow</p>
              <div className={Styles.btnSize}>
                <input
                  type="range"
                  min={30}
                  max={100}
                  value={shadowValue}
                  onChange={handleChangeShadow}
                  style={{
                    WebkitAppearance: "none",
                    width: "100%",
                    height: "3px",
                    borderRadius: "50%",
                    background: "#d3d3d3",
                    outline: "none",
                    opacity: "0.7",
                    transition: "opacity .2s",
                  }}
                />
              </div>
            </div>

            <div className={Styles.ButtonStyle}>
              <p>Opacity</p>
              <div className={Styles.btnSize}>
                <input
                  type="range"
                  min={30}
                  max={100}
                  value={opacityValue}
                  onChange={handleChangeOpacity}
                  style={{
                    WebkitAppearance: "none",
                    width: "100%",
                    height: "3px",
                    borderRadius: "50%",
                    background: "#d3d3d3",
                    outline: "none",
                    opacity: "0.7",
                    transition: "opacity .2s",
                  }}
                />
              </div>
            </div>

            <div className={Styles.ButtonStyle}>
              <p>Position</p>
              <div>
                <div>
                  <div className={Styles.btnStyleTip}>
                    <label>
                      <input
                        type="radio"
                        name="Left"
                        checked={leftSelected}
                        onChange={handleCheckboxChangePosition}
                      />
                      <span>Left</span>
                    </label>
                  </div>
                </div>
                <div>
                  <div style={{ width: '143px' }} className={Styles.btnStyleTip}>
                    <label>
                      <input
                        type="radio"
                        name="Right"
                        checked={rightSelected}
                        onChange={handleCheckboxChangePosition}
                      />
                      <span>Right</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className={Styles.ButtonStyle}>
              <p>Display</p>
              <div>
                <div>
                  <div className={Styles.btnStyleTip}>
                    <label>
                      <input
                        type="radio"
                        name="desktop"
                        checked={desktopSelected}
                        onChange={handleCheckboxChangeDisplay}
                      />
                      <span>Desktop</span>
                    </label>
                  </div>
                </div>
                <div>
                  <div style={{ width: '143px' }} className={Styles.btnStyleTip}>
                    <label>
                      <input
                        type="radio"
                        name="mobile"
                        checked={mobileSelected}
                        onChange={handleCheckboxChangeDisplay}
                      />
                      <span>Mobile</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className={Styles.CustomizeYourWidget_Down}>
          <div className={Styles.CustomizeYourWidgetTitle}>
            <h2>Sales with Greeting Message</h2>
          </div>
          <div className={Styles.GreetingMessage}>

            <p>Greeting message</p>
            <div className={Styles.colorBtn}>
              <label>
                <input
                  type="checkbox"
                  checked={isCheckedGreeting}
                  onChange={handleCheckboxChangeGreeting}
                />
                <span style={{ marginLeft: "10px" }}>Enable</span>
              </label>
            </div>
            {isCheckedGreeting === true && (
              <div>
                <div className={Styles.ButtonImage}>
                  <div className={Styles.ButtonImageTitle}>
                    <p>Avator or logo</p>
                  </div>
                  <div className={Styles.ButtonImagelabel}>
                    <label htmlFor="file-input">
                      <svg width="19" height="13" viewBox="0 0 19 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.14616 12.8333C3.94546 12.8333 2.9196 12.4177 2.06855 11.5865C1.21751 10.7552 0.791992 9.73924 0.791992 8.53855C0.791992 7.50938 1.10206 6.59237 1.7222 5.78751C2.34234 4.98264 3.1538 4.46806 4.15658 4.24376C4.48644 3.02987 5.14616 2.04688 6.13574 1.2948C7.12533 0.542713 8.24685 0.166672 9.50033 0.166672C11.0441 0.166672 12.3536 0.704345 13.429 1.77969C14.5043 2.85504 15.042 4.16459 15.042 5.70834C15.9524 5.81389 16.7078 6.20643 17.3081 6.88594C17.9085 7.56546 18.2087 8.36042 18.2087 9.27084C18.2087 10.2604 17.8623 11.1016 17.1696 11.7943C16.4769 12.487 15.6357 12.8333 14.6462 12.8333H10.292C9.85658 12.8333 9.48383 12.6783 9.17376 12.3682C8.86369 12.0582 8.70866 11.6854 8.70866 11.25V7.17292L7.44199 8.40001L6.33366 7.29167L9.50033 4.12501L12.667 7.29167L11.5587 8.40001L10.292 7.17292V11.25H14.6462C15.2003 11.25 15.6687 11.0587 16.0514 10.676C16.434 10.2934 16.6253 9.82501 16.6253 9.27084C16.6253 8.71667 16.434 8.24827 16.0514 7.86563C15.6687 7.48299 15.2003 7.29167 14.6462 7.29167H13.4587V5.70834C13.4587 4.6132 13.0727 3.67969 12.3008 2.90782C11.529 2.13594 10.5955 1.75001 9.50033 1.75001C8.40519 1.75001 7.47168 2.13594 6.6998 2.90782C5.92793 3.67969 5.54199 4.6132 5.54199 5.70834H5.14616C4.38088 5.70834 3.72776 5.97883 3.18678 6.5198C2.64581 7.06077 2.37533 7.71389 2.37533 8.47917C2.37533 9.24445 2.64581 9.89758 3.18678 10.4385C3.72776 10.9795 4.38088 11.25 5.14616 11.25H7.12533V12.8333H5.14616Z" fill="#1C1B1F" />
                      </svg>
                    </label>
                    <p>Choose a file or drag it here</p>
                  </div>
                  <input
                    id="file-input"
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={handleImageChangeAvatar}
                  />
                  {selectedImageAvatar && (
                    <div>
                      <img
                        src={URL.createObjectURL(selectedImageAvatar)}
                        alt="Seçilen Resim"
                        style={{ maxWidth: "100%", maxHeight: 200 }}
                      />
                    </div>
                  )}
                </div>

                <div className={Styles.AgentName}>
                  <p>Agent name</p>
                  <input
                    type="text"
                    value={inputAgentName}
                    onChange={handleInputAgentName}
                    placeholder="Enter Text..."
                  />
                </div>
                <div className={Styles.AgentName}>
                  <p>Agent position</p>
                  <input
                    type="text"
                    value={inputAgentPosistion}
                    onChange={handleInputAgentPosistion}
                    placeholder="Enter Text..."
                  />
                </div>

                <div style={{ width: '100%' }} className={Styles.AgentName}>
                  <p>Greeting message</p>
                  <input
                    type="text"
                    value={inputAgentGreetingMessage}
                    onChange={handleInputAgentGreetingMessage}
                    placeholder="Enter Text..."
                  />
                </div>


                <div className={Styles.AgentName}>
                  <p>Call to action</p>
                  <input
                    type="text"
                    value={inputAgentAction}
                    onChange={handleInputAgentAction}
                    placeholder="Message us..."
                  />
                </div>

                <p style={{ marginTop: '25px' }}>Google Analytics</p>
                <div className={Styles.colorBtn}>
                  <label>
                    <input
                      type="checkbox"
                      checked={isCheckedGreetingAnalytics}
                      onChange={handleCheckboxChangeAnalytics}
                    />
                    <span style={{ marginLeft: "10px" }}>Enable</span>
                  </label>
                </div>
              </div>
            )}
          </div>

          <button onClick={() => setSaveChanges(prev => !prev)} className={Styles.SaveChanges}>
            <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.56035 10.25L0.0478516 5.73752L1.17598 4.60939L4.56035 7.99377L11.8239 0.730225L12.952 1.85835L4.56035 10.25Z" fill="#1C1B1F" />
            </svg>
            <span>Save changes</span>
          </button>
          {/* <iframe src='http://localhost:3000/YourCustomizeButtons' /> */}
        </div>
      </div>
    </div>
  )
}
