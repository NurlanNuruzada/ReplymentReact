import React from 'react'
import Styles from './subscription.module.css'
import NoticeBoard from './NoticeBoard'
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

export default function Subscription() {
  return (
    <div className={Styles.MainContainer}>
      <div className={Styles.subscriptionTitle}>
        <strong>Subscription </strong>
      </div>
      <div className={Styles.NoticeBoardCompanenet}>
        <NoticeBoard />
      </div>
      <div className={Styles.YourSubscriptions}>
        <span>Your subscriptions </span>
      </div>
      <div className={Styles.coliPluss}>
        <div className={Styles.coliPlussIn}>
          <div>
            <Accordion className={Styles.Main} h={'max-content'} borderRadius={30} border={'1px solid rgba(255, 103, 103, 1)'} allowToggle>
              <AccordionItem border={"none"}>
                <AccordionButton className={Styles.AcordionButton} _hover={{ bg: 'none' }}>
                  <Box as="span" flex='1' textAlign='left'>
                    <div className={Styles.AccodionContainer}>
                      <p><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0_1405_1929" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                          <rect width="24" height="24" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_1405_1929)">
                          <path d="M20.95 22.375L18 19.425V21.65H16V16H21.65V18H19.4L22.35 20.95L20.95 22.375ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 12.3333 21.9833 12.6667 21.95 13C21.9167 13.3333 21.8667 13.6667 21.8 14H19.75C19.8333 13.6667 19.8958 13.3333 19.9375 13C19.9792 12.6667 20 12.3333 20 12C20 11.6667 19.9792 11.3333 19.9375 11C19.8958 10.6667 19.8333 10.3333 19.75 10H16.35C16.4 10.3333 16.4375 10.6667 16.4625 11C16.4875 11.3333 16.5 11.6667 16.5 12C16.5 12.3333 16.4875 12.6667 16.4625 13C16.4375 13.3333 16.4 13.6667 16.35 14H14.35C14.4 13.6667 14.4375 13.3333 14.4625 13C14.4875 12.6667 14.5 12.3333 14.5 12C14.5 11.6667 14.4875 11.3333 14.4625 11C14.4375 10.6667 14.4 10.3333 14.35 10H9.65C9.6 10.3333 9.5625 10.6667 9.5375 11C9.5125 11.3333 9.5 11.6667 9.5 12C9.5 12.3333 9.5125 12.6667 9.5375 13C9.5625 13.3333 9.6 13.6667 9.65 14H13V16H10.1C10.3 16.7167 10.5583 17.4042 10.875 18.0625C11.1917 18.7208 11.5667 19.35 12 19.95C12.3333 19.95 12.6667 19.9292 13 19.8875C13.3333 19.8458 13.6667 19.8083 14 19.775V21.825C13.6667 21.8583 13.3333 21.8958 13 21.9375C12.6667 21.9792 12.3333 22 12 22ZM4.25 14H7.65C7.6 13.6667 7.5625 13.3333 7.5375 13C7.5125 12.6667 7.5 12.3333 7.5 12C7.5 11.6667 7.5125 11.3333 7.5375 11C7.5625 10.6667 7.6 10.3333 7.65 10H4.25C4.16667 10.3333 4.10417 10.6667 4.0625 11C4.02083 11.3333 4 11.6667 4 12C4 12.3333 4.02083 12.6667 4.0625 13C4.10417 13.3333 4.16667 13.6667 4.25 14ZM5.1 8H8.05C8.2 7.38333 8.3875 6.77917 8.6125 6.1875C8.8375 5.59583 9.1 5.01667 9.4 4.45C8.48333 4.75 7.65833 5.20417 6.925 5.8125C6.19167 6.42083 5.58333 7.15 5.1 8ZM9.4 19.55C9.1 18.9833 8.8375 18.4042 8.6125 17.8125C8.3875 17.2208 8.2 16.6167 8.05 16H5.1C5.58333 16.85 6.19167 17.5792 6.925 18.1875C7.65833 18.7958 8.48333 19.25 9.4 19.55ZM10.1 8H13.9C13.7 7.28333 13.4417 6.59583 13.125 5.9375C12.8083 5.27917 12.4333 4.65 12 4.05C11.5667 4.65 11.1917 5.27917 10.875 5.9375C10.5583 6.59583 10.3 7.28333 10.1 8ZM15.95 8H18.9C18.4167 7.15 17.8083 6.42083 17.075 5.8125C16.3417 5.20417 15.5167 4.75 14.6 4.45C14.9 5.01667 15.1625 5.59583 15.3875 6.1875C15.6125 6.77917 15.8 7.38333 15.95 8Z" fill="#1C1B1F" />
                        </g>
                      </svg>
                        koliplus.com</p>
                      <p className={Styles.AccodionTitle}>
                        {Text}
                      </p>
                    </div>
                  </Box>
                  <AccordionIcon style={{ marginRight: '26px' }} color={"rgba(255, 103, 103, 1)"} className={Styles.ArrowIcon} fontSize={34} />
                </AccordionButton>
                <AccordionPanel pb={30} pl={30} pr={30} border={"none"}>
                  <Box className={Styles.AccordionBtnContainer}>

                    <button className={Styles.payNow}>Pay now</button>
                    <button className={Styles.CancelSubscription}>Cancel subscription </button>

                  </Box>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
          <div>
            <Accordion className={Styles.Main} h={'max-content'} borderRadius={30} border={'1px solid rgba(238, 190, 65, 1)'} allowToggle>
              <AccordionItem border={"none"}>
                <AccordionButton className={Styles.AcordionButton} _hover={{ bg: 'none' }}>
                  <Box as="span" flex='1' textAlign='left'>
                    <div className={Styles.AccodionContainer}>
                      <p><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0_1405_1929" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                          <rect width="24" height="24" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_1405_1929)">
                          <path d="M20.95 22.375L18 19.425V21.65H16V16H21.65V18H19.4L22.35 20.95L20.95 22.375ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 12.3333 21.9833 12.6667 21.95 13C21.9167 13.3333 21.8667 13.6667 21.8 14H19.75C19.8333 13.6667 19.8958 13.3333 19.9375 13C19.9792 12.6667 20 12.3333 20 12C20 11.6667 19.9792 11.3333 19.9375 11C19.8958 10.6667 19.8333 10.3333 19.75 10H16.35C16.4 10.3333 16.4375 10.6667 16.4625 11C16.4875 11.3333 16.5 11.6667 16.5 12C16.5 12.3333 16.4875 12.6667 16.4625 13C16.4375 13.3333 16.4 13.6667 16.35 14H14.35C14.4 13.6667 14.4375 13.3333 14.4625 13C14.4875 12.6667 14.5 12.3333 14.5 12C14.5 11.6667 14.4875 11.3333 14.4625 11C14.4375 10.6667 14.4 10.3333 14.35 10H9.65C9.6 10.3333 9.5625 10.6667 9.5375 11C9.5125 11.3333 9.5 11.6667 9.5 12C9.5 12.3333 9.5125 12.6667 9.5375 13C9.5625 13.3333 9.6 13.6667 9.65 14H13V16H10.1C10.3 16.7167 10.5583 17.4042 10.875 18.0625C11.1917 18.7208 11.5667 19.35 12 19.95C12.3333 19.95 12.6667 19.9292 13 19.8875C13.3333 19.8458 13.6667 19.8083 14 19.775V21.825C13.6667 21.8583 13.3333 21.8958 13 21.9375C12.6667 21.9792 12.3333 22 12 22ZM4.25 14H7.65C7.6 13.6667 7.5625 13.3333 7.5375 13C7.5125 12.6667 7.5 12.3333 7.5 12C7.5 11.6667 7.5125 11.3333 7.5375 11C7.5625 10.6667 7.6 10.3333 7.65 10H4.25C4.16667 10.3333 4.10417 10.6667 4.0625 11C4.02083 11.3333 4 11.6667 4 12C4 12.3333 4.02083 12.6667 4.0625 13C4.10417 13.3333 4.16667 13.6667 4.25 14ZM5.1 8H8.05C8.2 7.38333 8.3875 6.77917 8.6125 6.1875C8.8375 5.59583 9.1 5.01667 9.4 4.45C8.48333 4.75 7.65833 5.20417 6.925 5.8125C6.19167 6.42083 5.58333 7.15 5.1 8ZM9.4 19.55C9.1 18.9833 8.8375 18.4042 8.6125 17.8125C8.3875 17.2208 8.2 16.6167 8.05 16H5.1C5.58333 16.85 6.19167 17.5792 6.925 18.1875C7.65833 18.7958 8.48333 19.25 9.4 19.55ZM10.1 8H13.9C13.7 7.28333 13.4417 6.59583 13.125 5.9375C12.8083 5.27917 12.4333 4.65 12 4.05C11.5667 4.65 11.1917 5.27917 10.875 5.9375C10.5583 6.59583 10.3 7.28333 10.1 8ZM15.95 8H18.9C18.4167 7.15 17.8083 6.42083 17.075 5.8125C16.3417 5.20417 15.5167 4.75 14.6 4.45C14.9 5.01667 15.1625 5.59583 15.3875 6.1875C15.6125 6.77917 15.8 7.38333 15.95 8Z" fill="#1C1B1F" />
                        </g>
                      </svg>
                        koliplus.com</p>
                      <p className={Styles.AccodionTitle}>
                        {Text}
                      </p>
                    </div>
                  </Box>
                  <AccordionIcon style={{ marginRight: '26px' }} color={"rgba(238, 190, 65, 1)"} className={Styles.ArrowIcon} fontSize={34} />
                </AccordionButton>
                <AccordionPanel pb={30} pl={30} pr={30} border={"none"}>
                  <Box className={Styles.AccordionBtnContainer}>

                    <button style={{ border: '1px solid rgba(238, 190, 65, 1)', width: '120px', color: 'rgba(238, 190, 65, 1)' }} className={Styles.payNow}>27.01.2025</button>
                    <button className={Styles.CancelSubscription}>Cancel subscription </button>

                  </Box>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>

        </div>
      </div>

      <div className={Styles.UpgradeYourSubscription}>
        <h4>Upgrade your subscription </h4>
      </div>

      <div className={Styles.upgradeAcardion}>
        <Accordion className={Styles.Main} h={'max-content'} borderRadius={30} border={'1px solid rgba(203, 206, 210, 1)'} allowToggle>
          <AccordionItem border={"none"}>
            <AccordionButton className={Styles.AcordionButton} _hover={{ bg: 'none' }}>
              <Box as="span" flex='1' textAlign='left'>
                <div className={Styles.AccodionContainer}>
                  <p><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_1405_1929" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                      <rect width="24" height="24" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_1405_1929)">
                      <path d="M20.95 22.375L18 19.425V21.65H16V16H21.65V18H19.4L22.35 20.95L20.95 22.375ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 12.3333 21.9833 12.6667 21.95 13C21.9167 13.3333 21.8667 13.6667 21.8 14H19.75C19.8333 13.6667 19.8958 13.3333 19.9375 13C19.9792 12.6667 20 12.3333 20 12C20 11.6667 19.9792 11.3333 19.9375 11C19.8958 10.6667 19.8333 10.3333 19.75 10H16.35C16.4 10.3333 16.4375 10.6667 16.4625 11C16.4875 11.3333 16.5 11.6667 16.5 12C16.5 12.3333 16.4875 12.6667 16.4625 13C16.4375 13.3333 16.4 13.6667 16.35 14H14.35C14.4 13.6667 14.4375 13.3333 14.4625 13C14.4875 12.6667 14.5 12.3333 14.5 12C14.5 11.6667 14.4875 11.3333 14.4625 11C14.4375 10.6667 14.4 10.3333 14.35 10H9.65C9.6 10.3333 9.5625 10.6667 9.5375 11C9.5125 11.3333 9.5 11.6667 9.5 12C9.5 12.3333 9.5125 12.6667 9.5375 13C9.5625 13.3333 9.6 13.6667 9.65 14H13V16H10.1C10.3 16.7167 10.5583 17.4042 10.875 18.0625C11.1917 18.7208 11.5667 19.35 12 19.95C12.3333 19.95 12.6667 19.9292 13 19.8875C13.3333 19.8458 13.6667 19.8083 14 19.775V21.825C13.6667 21.8583 13.3333 21.8958 13 21.9375C12.6667 21.9792 12.3333 22 12 22ZM4.25 14H7.65C7.6 13.6667 7.5625 13.3333 7.5375 13C7.5125 12.6667 7.5 12.3333 7.5 12C7.5 11.6667 7.5125 11.3333 7.5375 11C7.5625 10.6667 7.6 10.3333 7.65 10H4.25C4.16667 10.3333 4.10417 10.6667 4.0625 11C4.02083 11.3333 4 11.6667 4 12C4 12.3333 4.02083 12.6667 4.0625 13C4.10417 13.3333 4.16667 13.6667 4.25 14ZM5.1 8H8.05C8.2 7.38333 8.3875 6.77917 8.6125 6.1875C8.8375 5.59583 9.1 5.01667 9.4 4.45C8.48333 4.75 7.65833 5.20417 6.925 5.8125C6.19167 6.42083 5.58333 7.15 5.1 8ZM9.4 19.55C9.1 18.9833 8.8375 18.4042 8.6125 17.8125C8.3875 17.2208 8.2 16.6167 8.05 16H5.1C5.58333 16.85 6.19167 17.5792 6.925 18.1875C7.65833 18.7958 8.48333 19.25 9.4 19.55ZM10.1 8H13.9C13.7 7.28333 13.4417 6.59583 13.125 5.9375C12.8083 5.27917 12.4333 4.65 12 4.05C11.5667 4.65 11.1917 5.27917 10.875 5.9375C10.5583 6.59583 10.3 7.28333 10.1 8ZM15.95 8H18.9C18.4167 7.15 17.8083 6.42083 17.075 5.8125C16.3417 5.20417 15.5167 4.75 14.6 4.45C14.9 5.01667 15.1625 5.59583 15.3875 6.1875C15.6125 6.77917 15.8 7.38333 15.95 8Z" fill="#1C1B1F" />
                    </g>
                  </svg>
                    koliplus.com</p>
                  <p className={Styles.AccodionTitle}>
                    {Text}
                  </p>
                </div>
              </Box>
              <AccordionIcon style={{ marginRight: '26px' }} color={"rgba(37, 211, 102, 1)"} className={Styles.ArrowIcon} fontSize={34} />
            </AccordionButton>
            <AccordionPanel pb={30} pl={30} pr={30} border={"none"}>
              <Box className={Styles.AccordionBtnContainer2}>
                <div className={Styles.License}>
                  <div>
                    <div className={Styles.inputPrice}>
                      <div>
                        <input style={{ fontSize: '30px' }} type="radio" />
                      </div><span>1-Year License<br></br>{"("}Billed annually{")"}</span>
                    </div>
                  </div>
                  <div className={Styles.MiniPrice}>
                    <div></div>
                    <button>*3.99$/month</button>
                  </div>
                </div>
                <p style={{marginTop: '0px', marginBottom : '10px'}}>*We charge 47.88$ every 12 Months</p>
                <div className={Styles.License}>
                  <div>
                    <div className={Styles.inputPrice}>
                      <div>
                        <input style={{ fontSize: '30px' }} type="radio" />
                      </div><span>1-Year License<br></br>{"("}Billed annually{")"}</span>
                    </div>
                  </div>
                  <div className={Styles.MiniPrice}>
                    <div></div>
                    <button style={{width: '86px'}}>149$</button>
                  </div>
                </div>

              </Box>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}
