import React from 'react';
import { Box, Typography } from '@mui/material';
import * as COLORS from '../../assets/utils/Constants';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import who1 from '../../assets/imgs/who1.png';
import who2 from '../../assets/imgs/who2.png';
import who3 from '../../assets/imgs/who3.png';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useNavigate } from 'react-router-dom';

const HappyCustomer = () => {
    const navigate = useNavigate();
    const data = [
        {
            img: who1,
            title: 'Instant Personal Loans',
            content: 'Fast, Secure and Paperless Instant Personal Loans for Any Requirement',
            action: '/instant_loan'
        },
        {
            img: who2,
            title: 'Instant Short Loans',
            content: 'Fast, Secure and Paperless Short Personal Loans for Any Requirement',
            action: '/short_loan'
        },
        {
            img: who3,
            title: 'Applying Loan now Easy',
            content: 'Applying for Loan Now At Your Fingertips for Any Requirement',
            action: '/instant-journey'
        },
    ]

    return (
        <Box className="funds-mama-happy-customer" sx={{ backgroundColor: '#F0F0F0', padding: { xs: '20px 0', md: '40px 0' } }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', paddingX: '140px', alignItems: 'center' }}>
                <Box sx={{ backgroundColor: COLORS.yellow, height: '4px', width: '7%', alignSelf: 'center', marginBottom: '10px' }} />
                <Typography sx={{ textAlign: 'center', fontWeight: 'bold', fontFamily: 'Gupter' }} variant='h3'>
                    Who We Are
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px', gap: '20px' }}>
                    {data.map((dt) => (
                        <Box
                            sx={{
                                backgroundColor: COLORS.white,
                                borderRadius: '5px',
                                maxWidth: '350px',
                                width: '100%',
                                margin: '0 auto',
                                boxSizing: 'border-box',
                            }}
                        >
                            <img src={dt.img} alt="Who we are" style={{ width: '100%', borderRadius: '10px 10px 0 0' }} />
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    marginY: '20px',
                                    paddingX: '20px',
                                }}
                            >
                                <Typography variant='h5' sx={{ textAlign: 'center', marginBottom: '20px', fontWeight: 'bold' }}>
                                    {dt.title}
                                </Typography>
                                <Typography variant='body2' sx={{ textAlign: 'center', marginBottom: '20px' }}>
                                    {dt.content}
                                </Typography>
                                <Box
                                    sx={{
                                        backgroundColor: COLORS.yellowOrange,
                                        padding: '5px',
                                        borderRadius: '50%',
                                        width: '50px',
                                        height: '50px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        ':hover': {
                                            cursor: 'pointer'
                                        },
                                    }}
                                    onClick={() => { navigate(dt.action) }}
                                >
                                    <ChevronRightIcon sx={{ color: COLORS.white }} />
                                </Box>
                            </Box>
                        </Box>
                    ))}

                </Box>
            </Box>
        </Box>
    );
};

export default HappyCustomer;
