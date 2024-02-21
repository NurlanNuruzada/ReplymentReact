import * as React from 'react';
import Styles from "./Questions.module.css";
import AccordionGroup from '@mui/joy/AccordionGroup';
import Accordion, { accordionClasses } from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import AccordionSummary from '@mui/joy/AccordionSummary';


export default function Questions() {
    const [index, setIndex] = React.useState(0);
    return (
        <>
            <div className={Styles.FreQuestionsMain}>
                <div className={Styles.FreQuestions}>
                    <div className={Styles.FreQuestions_title}>
                        <div>
                            <p className={Styles.Title}>Frequently asked questions</p>
                        </div>
                    </div>
                    <div className={Styles.FreQuestions_question}>
                        <div className={Styles.accordionWrapper}>
                            <AccordionGroup
                                sx={{
                                    [`& .${accordionClasses.root}`]: {
                                        padding: 2,
                                        margin: "5px",
                                        maxWidth: "100%",
                                        border: '2px solid #F2F2F2',
                                        borderRadius: "22px",
                                        fontSize: "22px",
                                        lineHeight: "110%",
                                        transition: '0.2s ease',
                                        '& button:not([aria-expanded="true"])': {
                                            transition: '0.2s ease',
                                        },
                                        '& button:hover': {
                                            background: 'transparent',
                                        },
                                    },
                                    [`& .${accordionClasses.root}.${accordionClasses.expanded}`]: {
                                        bgcolor: 'none',
                                    },
                                    '& [aria-expanded="true"]': {
                                        boxShadow: (theme) => `inset 0 -1px 0 ${theme.vars.palette.divider}`,
                                    },
                                }}
                            >
                                <Accordion
                                    expanded={index === 0}
                                    onChange={(event, expanded) => {
                                        setIndex(expanded ? 0 : null);
                                    }}
                                >
                                    <AccordionSummary><p style={{ fontWeight: 600 }}>Is replyment free?</p></AccordionSummary>
                                    <AccordionDetails
                                        sx={{
                                            color: "616063",
                                            fontWeight: '500',
                                            fontSize: "16px"
                                        }}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua.
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion
                                    expanded={index === 1}
                                    onChange={(event, expanded) => {
                                        setIndex(expanded ? 1 : null);
                                    }}
                                >
                                    <AccordionSummary><p style={{ fontWeight: 600 }}>Is replyment free?</p></AccordionSummary>
                                    <AccordionDetails
                                        sx={{
                                            color: "616063",
                                            fontWeight: '500',
                                            fontSize: "16px"
                                        }}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua.
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion
                                    expanded={index === 1}
                                    onChange={(event, expanded) => {
                                        setIndex(expanded ? 1 : null);
                                    }}
                                >
                                    <AccordionSummary><p style={{ fontWeight: 600 }}>Is replyment free?</p></AccordionSummary>
                                    <AccordionDetails
                                        sx={{
                                            color: "616063",
                                            fontWeight: '500',
                                            fontSize: "16px"
                                        }}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua.
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion
                                    expanded={index === 1}
                                    onChange={(event, expanded) => {
                                        setIndex(expanded ? 1 : null);
                                    }}
                                >
                                    <AccordionSummary><p style={{ fontWeight: 600 }}>Is replyment free?</p></AccordionSummary>
                                    <AccordionDetails
                                        sx={{
                                            color: "616063",
                                            fontWeight: '500',
                                            fontSize: "16px"
                                        }}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua.
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion
                                    expanded={index === 1}
                                    onChange={(event, expanded) => {
                                        setIndex(expanded ? 1 : null);
                                    }}
                                >
                                    <AccordionSummary><p style={{ fontWeight: 600 }}>Is replyment free?</p></AccordionSummary>
                                    <AccordionDetails
                                        sx={{
                                            color: "616063",
                                            fontWeight: '500',
                                            fontSize: "16px"
                                        }}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua.
                                    </AccordionDetails>
                                </Accordion>
                            </AccordionGroup>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
