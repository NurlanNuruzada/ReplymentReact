import React from "react";
import {
  Button,
  useDisclosure,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogCloseButton,
  AlertDialogBody,
  AlertDialogFooter,
  Flex,
} from "@chakra-ui/react";
import image from "../../Images/Animations/greenDone.gif";
import { useNavigate } from "react-router";


const Done = ({ buttonsAndNagivage ,seccondTitle,firstTitle}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  React.useEffect(() => {
    onOpen();
  }, []);

  const navigate = useNavigate();

  const handleHomeButtonClick = () => {
    navigate(`${buttonsAndNagivage.button1?.navigate}`); // Navigate to the home page
  };
  const handleButtonClick = () => {
    navigate(`${buttonsAndNagivage.button2?.navigate}`); // Navigate to the home page
  };

  const cancelRef = React.useRef();

  return (
    <>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent m={5} w={300}>
          <Flex  flexDirection={"column"} alignItems={"center"}>
            <AlertDialogHeader>{firstTitle}</AlertDialogHeader>
            <AlertDialogCloseButton />
            <img src={image} style={{width:"150px", height:"150px"}} >
            </img>
            <AlertDialogBody>
              <Flex flexDirection={"column"} alignItems={"center"}>
                <h1
                
                  color="Black"
                  style={{ fontWeight: "500", fontSize: "18px" ,textAlign:'center' }}
                >
                  {seccondTitle} 
                </h1>
              </Flex>
            </AlertDialogBody>
            <AlertDialogFooter>
              <Flex gap={10}>
                   {buttonsAndNagivage?.button1?.name && (

                     <Button
                     padding={"0 40px"}
                     width={"100%"}
                     colorScheme={buttonsAndNagivage.button1?.color}
                     onClick={handleHomeButtonClick} // Use the custom handler
                     >
                    {buttonsAndNagivage.button1?.name}
                  </Button>
                      )}
                    {buttonsAndNagivage?.button2?.name && (
                      <Button
                      padding={"0 40px"}
                      width={"100%"}
                      colorScheme={buttonsAndNagivage.button2?.color}
                      ref={cancelRef}
                      onClick={handleButtonClick}
                      >
                  {buttonsAndNagivage.button2?.name}
                </Button>
                  )}
              </Flex>
            </AlertDialogFooter>
          </Flex>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default Done;