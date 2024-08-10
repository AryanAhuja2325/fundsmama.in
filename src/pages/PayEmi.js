import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from '@emotion/styled';
import { Container, Grid, Typography, Button } from '@mui/material';
const StyledContainer = styled(Container)`
  font-family: 'Exo', sans-serif !important;
`;

const ThanksFundsMama = styled.div`
  width: 100%;
  float: left;
  padding: 50px 0px;
  margin: 0px;
`;

const ThanksBackground = styled.div`
  text-align: center;
  color: #fff;
  padding: 63px 20px;
`;

const ThanksYouText = styled.div`
  font-size: 40px;
  font-weight: bold !important;
  margin-bottom: 15px;
  color: #fff;
  text-transform: uppercase;
`;

const MargenTops = styled.div`
  margin-top: 32px;
`;

const SocialIcon = styled.img`
  width: 35px !important;
  padding: 1px !important;
  height: 35px !important;
  transition: all .3s;
  vertical-align: middle;
  border: solid 1px #fff;
  border-radius: 100%;
  margin: 5px;

  &:hover {
    transform: scale(1.1);
  }
`;

const Display = styled.div`
  border: solid 0px #ddd;
  padding: 30px;
`;

const BackToHomepage = styled(Button)`
  background: #f6cc46;
  border-radius: 3px;
  padding: 10px 20px;
  color: #1f2b5b;
  font-weight: bold;
  font-size: 17px;
`;

const PayEmi = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const status = searchParams.get('status');
    const refid = searchParams.get('refid');

    const getStatusMessage = () => {
        switch (status) {
            case 'success':
                return `Your loan EMI paid successfully.\nTransaction Reference Number is ${refid}`;
            case 'aborted':
                return 'Thank you. We will keep you posted regarding the status of your EMI payment through e-mail/sms/call';
            case 'failure':
                return 'Thank you for EMI payment. However, the transaction has been declined.';
            case 'security':
                return 'Security Error. Illegal access detected';
            default:
                return '';
        }
    };

    return (
        <ThanksFundsMama>
            <StyledContainer>
                <Grid container spacing={3}>
                    <Grid item md={1} />
                    <Grid item xs={12} md={5}>
                        <ThanksBackground>
                            <Grid container>
                                <Grid item xs={12}>
                                    <ThanksYouText>
                                        <img src="/src/assets/imgs/thankyou.png" alt="thanks-text" height="180px" />
                                    </ThanksYouText>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="body1" style={{ color: 'red', fontSize: '18px', fontWeight: 'bold' }}>
                                        {getStatusMessage()}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <MargenTops>
                                        <Typography variant="h6" style={{ color: '#000' }}>Follow Us On</Typography>
                                    </MargenTops>
                                </Grid>
                                <Grid item xs={12}>
                                    <a href="https://www.linkedin.com/company/funds-mama/" target="_blank" rel="noopener noreferrer">
                                        <SocialIcon src="/src/assets/imgs/linkdin.png" alt="LinkedIn" />
                                    </a>
                                    <a href="https://www.instagram.com/fundsmama/" target="_blank" rel="noopener noreferrer">
                                        <SocialIcon src="/src/assets/imgs/instagram.png" alt="Instagram" />
                                    </a>
                                    <a href="https://www.facebook.com/fundsmama/" target="_blank" rel="noopener noreferrer">
                                        <SocialIcon src="/src/assets/imgs/facebook.png" alt="Facebook" />                  </a>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="body2" style={{ fontSize: '14px', color: '#000' }}>
                                        For Latest Updates &amp; Offers
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <BackToHomepage href="https://fundsmama.com" variant="contained">
                                        GO BACK TO HOME
                                    </BackToHomepage>
                                </Grid>
                            </Grid>
                        </ThanksBackground>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Display>
                            <img src="/src/assets/imgs/thanku.png" alt="thanks" style={{ width: '100%' }} />
                        </Display>
                    </Grid>
                    <Grid item md={1} />
                </Grid>
            </StyledContainer>
        </ThanksFundsMama>
    );
};

export default PayEmi;
