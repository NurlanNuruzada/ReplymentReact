import * as React from 'react';
import Styles from "./Questions.module.css";
import AccordionGroup from '@mui/joy/AccordionGroup';
import Accordion, { accordionClasses } from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import AccordionSummary from '@mui/joy/AccordionSummary';

export default function Questions() {
    const [index, setIndex] = React.useState(0);

    return (
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
                                    borderRadius: "20px",
                                    fontSize: "22px",
                                    lineHeight: "110%",
                                    backgroundColor: '#0D0D0D',
                                    transition: '0.2s ease',
                                    '& button:not([aria-expanded="true"])': {
                                        transition: '0.2s ease',
                                    },
                                    '& button:hover': {
                                        background: 'transparent',
                                    },
                                    '& .MuiAccordionSummary-expandIcon': {
                                        width: '30px',
                                    },
                                    '& .MuiSvgIcon-root.MuiSvgIcon-sizeMd.css-1r2bn3-JoySvgIcon-root': {
                                        fontSize: "40px",
                                        color: "#616063"
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
                            {[...Array(5)].map((_, i) => (
                                <Accordion
                                    key={i}
                                    expanded={index === i}
                                    onChange={(event, expanded) => {
                                        setIndex(expanded ? i : null);
                                    }}
                                    sx={{
                                        padding: "0px 31px !important" // Same padding for both states
                                    }}
                                >
                                    <AccordionSummary
                                        sx={{
                                            '&.MuiAccordionSummary-root': {
                                                button: {
                                                    padding: index === i ? '12px 8px' : '12px 8px',
                                                    border: 'none'
                                                }
                                            },
                                            '&.Mui-expanded': {
                                                borderBottom: '1px solid rgba(124, 124, 126, 1)'
                                            }
                                        }}
                                    >
                                        <p style={{ fontWeight: 600, color: '#E1E0E4' }}>Is replyment free?</p>
                                    </AccordionSummary>
                                    <AccordionDetails
                                        sx={{
                                            color: "#E1E0E4",
                                            opacity: '70%',
                                            fontWeight: '500',
                                            fontSize: "16px",
                                            // height: '10px',
                                            '&.MuiAccordionDetails-root': {
                                                padding: index === i ? '20px 0' : '0px'
                                            }
                                        }}
                                    >
                                        Yes, it's free  Yes, it's free  Yes, it's free  Yes, it's free  Yes, it's free  Yes, it's free  Yes, it's free  Yes, it's free  Yes, it's free  Yes, it's free  Yes, it's free  Yes, it's free  Yes, it's free  Yes, it's free  Yes, it's free  Yes, it's free
                                    </AccordionDetails>
                                </Accordion>
                            ))}
                        </AccordionGroup>
                    </div>
                </div>
            </div>
        </div>
    )
}
