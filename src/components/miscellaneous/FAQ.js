import React, { useState, useEffect, useRef } from 'react';
import { Box, Container, Grid, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQ = ({ faqs }) => {
    const [expanded, setExpanded] = useState(false);
    const [visibleFaqs, setVisibleFaqs] = useState([]);
    const faqRefs = useRef(faqs.map(() => React.createRef()));

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    useEffect(() => {
        const observers = faqRefs.current.map((ref, index) => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setVisibleFaqs(prev => [...prev, index]);
                        observer.unobserve(entry.target);
                    }
                },
                { threshold: 0.1 }
            );

            if (ref.current) {
                observer.observe(ref.current);
            }

            return observer;
        });

        return () => {
            observers.forEach(observer => observer.disconnect());
        };
    }, []);

    return (
        <Box sx={{ paddingY: 4 }}>
            <Container>
                <Grid container spacing={4}>
                    <Grid item md={12}>
                        <Typography variant="h3" sx={{ marginBottom: 2, fontFamily: 'Gupter', textAlign: 'left' }}>
                            FAQs
                        </Typography>
                        <Box sx={{ border: 2, width: '10%', marginBottom: 2, backgroundColor: 'darkBlue' }} />
                    </Grid>
                    <Grid item md={12}>
                        {faqs.map((faq, index) => (
                            <Box
                                ref={faqRefs.current[index]}
                                key={index}
                                sx={{
                                    opacity: visibleFaqs.includes(index) ? 1 : 0,
                                    transform: visibleFaqs.includes(index) ? 'translateY(0)' : 'translateY(20px)',
                                    transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
                                    transitionDelay: `${index * 0.1}s`
                                }}
                            >
                                <Accordion
                                    expanded={expanded === `panel${index}`}
                                    onChange={handleChange(`panel${index}`)}
                                >
                                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                        <Typography sx={{ fontSize: '18px', fontWeight: 'bold' }}>{faq.question}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography variant="body1">
                                            {faq.answer}
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </Box>
                        ))}
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default FAQ;