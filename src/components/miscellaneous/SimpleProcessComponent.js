import React, { useEffect, useRef, useState, useMemo } from 'react';
import {
    Container, Grid, Typography, Box, keyframes, styled
} from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import * as COLORS from '../../assets/utils/Constants';

const slideInFromLeft = keyframes`
    from {
        opacity: 0;
        transform: translateX(-20px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`;

const AnimatedBox = styled(Box)(({ isVisible }) => ({
    animation: isVisible ? `${slideInFromLeft} 0.5s ease-in-out` : 'none',
}));

const SimpleProcessComponent = ({ isWhite }) => {
    const [isVisible, setIsVisible] = useState([false, false, false]);
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const refs = useMemo(() => [ref1, ref2, ref3], []);

    const handleIntersection = (entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setIsVisible((prev) => {
                    const newVisible = [...prev];
                    newVisible[index] = true;
                    return newVisible;
                });
            }
        });
    };

    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection);

        refs.forEach(ref => {
            if (ref.current) {
                observer.observe(ref.current);
            }
        });

        return () => {
            refs.forEach(ref => {
                if (ref.current) {
                    observer.unobserve(ref.current);
                }
            });
        };
    }, [refs]);

    return (
        <Box sx={{ paddingY: 4, backgroundColor: isWhite ? COLORS.white : COLORS.lightGray }}>
            <Container>
                <Grid container spacing={4}>
                    <Grid item md={12} textAlign="center">
                        <Typography
                            variant="h3"
                            sx={{ marginBottom: 2, fontWeight: 'bold', color: COLORS.darkBlue, fontFamily: 'Gupter' }}
                        >
                            Simple 3-Step Process
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            sx={{ marginBottom: 4 }}
                        >
                            The personal loan application process at FundsMama is highly simplified and lightning fast. Just follow these steps and you are good to go.
                        </Typography>
                        <Box
                            sx={{
                                borderBottom: `2px solid ${COLORS.darkBlue}`,
                                width: '60%',
                                margin: '0 auto',
                                marginBottom: 4
                            }}
                        />
                    </Grid>
                    <Grid item md={4} ref={refs[0]}>
                        <AnimatedBox
                            isVisible={isVisible[0]}
                            sx={{
                                borderRadius: '30% 0',
                                height: '300px',
                                textAlign: 'center',
                                padding: 2,
                                backgroundColor: COLORS.darkBlue,
                                color: COLORS.white,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between'
                            }}
                        >
                            <div>
                                <Typography variant="h6">Step-1</Typography>
                                <Box
                                    sx={{
                                        border: `2px solid ${COLORS.white}`,
                                        width: '10%',
                                        margin: '10px auto',
                                        marginBottom: 2
                                    }}
                                />
                                <Typography variant="body1">
                                    Fill out the loan application form. This is a simple process that will take just a few minutes of your time. Provide a few details such as your name, mobile number, email, PAN, etc., as well as the loan amount you are looking for and your monthly income.
                                </Typography>
                            </div>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    padding: '10px',
                                }}
                            >
                                <Box
                                    sx={{
                                        backgroundColor: COLORS.white,
                                        borderRadius: '50%',
                                        width: '50px',
                                        height: '50px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}
                                >
                                    <ChevronRightIcon sx={{ color: COLORS.darkBlue }} fontSize='large' />
                                </Box>
                            </Box>
                        </AnimatedBox>
                    </Grid>
                    <Grid item md={4} ref={refs[1]}>
                        <AnimatedBox
                            isVisible={isVisible[1]}
                            sx={{
                                borderRadius: '30% 0',
                                height: '300px',
                                textAlign: 'center',
                                padding: 2,
                                backgroundColor: COLORS.lightYellowOrange,
                                color: COLORS.white,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between'
                            }}
                        >
                            <div>
                                <Typography variant="h6">Step-2</Typography>
                                <Box
                                    sx={{
                                        border: `2px solid ${COLORS.white}`,
                                        width: '10%',
                                        margin: '10px auto',
                                        marginBottom: 2
                                    }}
                                />
                                <Typography variant="body1" color={COLORS.white}>
                                    You will receive an email requesting the documents required to complete the loan application. The details shared by you will be used to check your eligibility based on company set criteria.
                                </Typography>
                            </div>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    padding: '10px',
                                }}
                            >
                                <Box
                                    sx={{
                                        backgroundColor: COLORS.white,
                                        borderRadius: '50%',
                                        width: '50px',
                                        height: '50px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}
                                >
                                    <ChevronRightIcon sx={{ color: COLORS.darkBlue }} fontSize='large' />
                                </Box>
                            </Box>
                        </AnimatedBox>
                    </Grid>
                    <Grid item md={4} ref={refs[2]}>
                        <AnimatedBox
                            isVisible={isVisible[2]}
                            sx={{
                                borderRadius: '30% 0',
                                height: '300px',
                                textAlign: 'center',
                                padding: 2,
                                backgroundColor: COLORS.darkBlue,
                                color: COLORS.white,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between'
                            }}
                        >
                            <div>
                                <Typography variant="h6">Step-3</Typography>
                                <Box
                                    sx={{
                                        border: `2px solid ${COLORS.white}`,
                                        width: '10%',
                                        margin: '10px auto',
                                        marginBottom: 2
                                    }}
                                />
                                <Typography variant="body1">
                                    Once your eligibility has been established, you will receive a phone call for processing your loan and then your loan will be disbursed within XX hours.
                                </Typography>
                            </div>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    padding: '10px',
                                }}
                            >
                                <Box
                                    sx={{
                                        backgroundColor: COLORS.white,
                                        borderRadius: '50%',
                                        width: '50px',
                                        height: '50px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}
                                >
                                    <ChevronRightIcon sx={{ color: COLORS.darkBlue }} fontSize='large' />
                                </Box>
                            </Box>
                        </AnimatedBox>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default SimpleProcessComponent;
