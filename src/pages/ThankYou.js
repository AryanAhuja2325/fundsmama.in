import React from 'react';
import { Container, Typography, Button, Box, Link } from '@mui/material';
import { styled } from '@mui/system';
import thankyou from '../assets/imgs/thanks-.png';
import * as COLORS from '../assets/utils/Constants';
import { Navigate } from 'react-router-dom';
import { useNavigationContext } from '../context/NavigationContext';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';

const ThankYouContainer = styled(Container)(({ theme }) => ({
    textAlign: 'center',
    marginTop: '80px',
    marginBottom: '20px',
    padding: '40px',
    borderRadius: '20px',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
    backgroundColor: COLORS.white
}));

const ThankYouImage = styled('img')({
    width: '150px',
    marginBottom: '20px',
});

const StyledButton = styled(Button)(({ theme }) => ({
    backgroundColor: COLORS.yellowOrange,
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '25px',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease',

    '&:hover': {
        backgroundColor: COLORS.darkBlue,
    },
}));

const ThankYou = () => {
    return (
        <div style={{ backgroundColor: COLORS.yellow, padding: '20px' }}>
            <ThankYouContainer>
                <ThankYouImage src={thankyou} alt="Thank You" />
                <Typography variant="h2" color="primary" gutterBottom sx={{ color: COLORS.yellowOrange, fontWeight: 'bold' }}>
                    Thank You
                </Typography>
                <Typography variant="h5" color="textSecondary" gutterBottom sx={{ color: COLORS.black, fontWeight: 'bold' }}>
                    For Choosing Us
                </Typography>
                <Typography variant="body1" color="textSecondary" paragraph sx={{ color: COLORS.black, fontWeight: 'bold' }}>
                    Your Loan Request has Been Registered Successfully. We Will Get Back to You Shortly.
                </Typography>
                <Typography variant="body2" color="textPrimary" sx={{ color: COLORS.black, fontWeight: 'bold' }}>
                    If you have any query{' '}
                    <a href="/contactus" style={{ textDecoration: 'underline', color: '#000' }}>
                        contact us.
                    </a>
                </Typography>
                <Box sx={{ fontSize: '12px', marginTop: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center   ' }}>
                    <Typography>
                        Follow us on
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
                        <Link href="https://www.facebook.com/fundsmama/">
                            <Box
                                sx={{
                                    backgroundColor: '#3b5998', // Facebook color
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <FacebookIcon sx={{ color: 'white', width: '24px', height: '24px' }} />
                            </Box>
                        </Link>
                        <Link href="https://www.linkedin.com/company/funds-mama/">
                            <Box
                                sx={{
                                    backgroundColor: '#0077b5', // LinkedIn color
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <LinkedInIcon sx={{ color: 'white', width: '24px', height: '24px' }} />
                            </Box>
                        </Link>
                        <Link href="https://www.instagram.com/fundsmama/">
                            <Box
                                sx={{
                                    backgroundColor: '#E1306C', // Instagram color
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <InstagramIcon sx={{ color: 'white', width: '24px', height: '24px' }} />
                            </Box>
                        </Link>
                        <Link href="www.youtube.com/@FundsMama">
                            <Box
                                sx={{
                                    backgroundColor: '#FF0000', // YouTube color
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <YouTubeIcon sx={{ color: 'white', width: '24px', height: '24px' }} />
                            </Box>
                        </Link>
                        <Link href="https://twitter.com/FundsMama">
                            <Box
                                sx={{
                                    backgroundColor: '#1DA1F2', // Twitter color
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <TwitterIcon sx={{ color: 'white', width: '24px', height: '24px' }} />
                            </Box>
                        </Link>
                    </Box>
                </Box>
                <Box mt={2}>
                    <StyledButton
                        variant="contained"
                        color="primary"
                        href="/"
                        sx={{
                            backgroundColor: COLORS.yellowOrange,
                            ':hover': {
                                backgroundColor: COLORS.darkBlue
                            }
                        }}
                    >
                        Back to Home Page
                    </StyledButton>
                </Box>
            </ThankYouContainer>
        </div>
    );
};


const ProtectedThankYou = () => {
    const { hasSubmitted } = useNavigationContext();

    if (!hasSubmitted) {
        return <Navigate to="/" replace />;
    }

    return <ThankYou />;
};


export default ProtectedThankYou;
