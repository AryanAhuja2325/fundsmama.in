import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import aboutusimage from '../../assets/imgs/aboutusimage.png';
import icon1 from '../../assets/imgs/Certified-icon.png';
import icon2 from '../../assets/imgs/top-ranking.png';
import * as COLORS from '../../assets/utils/Constants';

const About = () => {
    const boxes = [
        {
            img: icon1,
            title: 'Quality Service',
            content: 'FundsMama is a leading non-banking financial company (NBFC) providing personalFundsMama is a leading non-banking financial company (NBFC) providing personal',
        },
        {
            img: icon2,
            title: 'Trusted by Millions',
            content: 'For years, FundsMama has been a reliable partner in financial planning for millions of individuals across the country. Our commitment to transparency, speed, and customer satisfaction has earned us the trust and loyalty of our customers. ',
        },
    ];

    return (
        <Container>
            <Grid container spacing={6}>
                <Grid item md={6}>
                    <img src={aboutusimage} width="100%" height="auto" className="img-responsive" alt="Vision & Mission" style={{ borderRadius: '20px' }} />
                </Grid>
                <Grid item md={6}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant="body2" sx={{ marginBottom: 2 }}>
                            About FundsMama
                        </Typography>
                        <Box sx={{ border: 2, width: '5%', marginBottom: 2, borderColor: COLORS.yellowOrange, height: '2%', marginLeft: '10px' }} />
                    </Box>
                    <Typography variant="h4" sx={{ marginTop: '10px', marginBottom: '20px', fontWeight: 'bold', fontFamily: 'Gupter' }}>
                        Largest Demand Partnership Building Financial Experts
                    </Typography>
                    <Typography variant="body1">
                        FundsMama is a leading non-banking financial company (NBFC) providing personal finance solutions for a range of immediate financial requirements. We have partnered with leading banks and lenders to create a dedicated pool of wealth that addresses the supplementary monetary needs of salaried professionals in India.
                    </Typography>

                    <Box sx={{ marginY: '30px' }}>
                        {boxes.map((box, index) => (
                            <Box key={index} sx={{ display: 'flex', marginBottom: '20px', alignItems: 'center' }}>
                                <img src={box.img} alt={box.title} style={{ width: '60px', height: '60px', marginRight: '20px' }} />
                                <Box>
                                    <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '8px', fontFamily: 'Gupter' }}>
                                        {box.title}
                                    </Typography>
                                    <Typography variant="body1">
                                        {box.content}
                                    </Typography>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default About;
