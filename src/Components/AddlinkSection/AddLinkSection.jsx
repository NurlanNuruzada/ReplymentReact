import React, { useEffect, useState } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Button
} from '@chakra-ui/react';
import CustomLink from '../../Images/IconImage/link.svg';
import Styles from './AddLinkSection.module.css';

export default function AddLinkSection({ Icon, Text,IsSelected}) {
  const [isWhatsapp, setIsWhatsapp] = useState(false);

  useEffect(() => {
    if (Text === "Whatsapp") {
      setIsWhatsapp(true);
    }
  }, [Text]);

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
          <Box className={Styles.AccordionBtnContainer}>
            <Button bg={'transparent'} className={Styles.AccordionBtn}><img src={CustomLink} alt="" />Add link</Button>
            {isWhatsapp &&
              <Button bg={'transparent'} className={Styles.AccordionBtn}><img src={CustomLink} alt="" />Add agent</Button>
            }
          </Box>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
