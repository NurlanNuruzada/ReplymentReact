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
                                    marginBottom: "20px",
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
                                        padding: "0px 31px !important",
                                        backgroundColor: "#0000",
                                        borderRadius: "30px !important",
                                    }}
                                >
                                    <AccordionSummary
                                        sx={{
                                            '&.MuiAccordionSummary-root': {
                                                button: {
                                                    padding: index === i ? '20px 20px' : '20px 20px',
                                                    border: 'none',
                                                }
                                            },
                                            '&.Mui-expanded': {
                                                borderBottom: '1px solid rgba(124, 124, 126, 1)'
                                            }
                                        }}
                                    >
                                        <p className={Styles.AccordionTitle}>Customizable Branding</p>
                                    </AccordionSummary>
                                    <AccordionDetails
                                        sx={{
                                            color: "#E1E0E4",
                                            opacity: '70%',
                                            fontWeight: '500',
                                            fontSize: "16px",
                                            backgroundColor: "rgba(13, 13, 13, 1) !important",
                                            '&.MuiAccordionDetails-root': {
                                                padding: index === i ? '20px 0' : '0px'
                                            }
                                        }}
                                    >
                                        Get essential customer insights. Get a complete understanding of your customers across devices and platforms.
                                        Google Analytics gives you the tools, free of charge, to understand the customer journey and improve marketing ROI.
                                    </AccordionDetails>
                                </Accordion>
                            ))}
                        </AccordionGroup>
                    </div>
                </div>
            </div>
        </div >
    )
}