import { Typography, Box, Link } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';
import * as COLORS from '../assets/utils/Constants';

const Subtext = styled(Typography)({
    color: '#696969',
    fontSize: '16px',
    textAlign: 'justify',
})

const Heading = styled(Typography)({
    color: COLORS.black,
    fontSize: '20px',
    textAlign: 'justify',
    marginTop: '10px',
    marginBottom: '10px'
})

const GrievanceRedressal = () => {
    return (
        <Box sx={{ marginTop: '100px', paddingX: '20px', display: 'flex', flexDirection: 'column', marginBottom: '80px' }}>
            <Typography variant='h3' textAlign={'center'} color={COLORS.yellowOrange}>Grievance Redressal</Typography>
            <Box sx={{ border: 2, width: '10%', marginBottom: 2, backgroundColor: COLORS.darkBlue, alignSelf: 'center' }} />

            <Box sx={{ marginTop: '100px', paddingX: '200px' }}>
                <Subtext>
                    Customer experience is extremely important for sustained business growth and as an organization Girdhar Finlease Limited. Strives to ensure that our customers receive exceptional service across different touch points.
                </Subtext>
                <Heading>1. Purpose</Heading>
                <Subtext>
                    Customer complaints constitute an important voice of customers, and this policy details complaint handling through a structured grievance redressal framework. Complaint redressal is supported by a review mechanism to minimise the recurrence of similar issues in future.
                </Subtext>
                <Heading sx={{ fontSize: '18px' }}>
                    The Grievance Redressal policy follows the following principles:
                </Heading>
                <ul>
                    <li>
                        <Subtext>
                            Customers are treated fairly;
                        </Subtext>
                    </li>
                    <li>
                        <Subtext>
                            Complaints raised by customers are dealt with courtesy and in a timely manner;
                        </Subtext>
                    </li>
                    <li>
                        <Subtext>
                            Customers are informed of avenues to escalate their complaints within the organisation and their rights if they are not satisfied with the resolution of their complaints;
                        </Subtext>
                    </li>
                    <li>
                        <Subtext>
                            The employees work in good faith and without prejudice towards the interests of the customers.
                        </Subtext>
                    </li>
                    <li>
                        <Subtext>
                            Internal Machinery to handle Customer complaints and prioritisation
                        </Subtext>
                    </li>
                    <li>
                        <Subtext>
                            The Company has invested in the best-in-class LOS & CRM system to ensure timely resolution of the grievances.
                        </Subtext>
                    </li>
                </ul>
                <Subtext sx={{ marginY: '20px' }}>
                    The system captures the complaints; follows TATs based on the nature of the query and escalates issues on the basis of predefined TATs and as per the escalation matrix.
                </Subtext>
                <Subtext sx={{ marginY: '20px' }}>
                    Once captured in our internal system, customer care will be responsible for the resolution of complaints/grievances to the customer’s satisfaction within a period of fifteen (15) working days. Every attempt will be made to offer the customer suitable and appropriate alternate solutions wherever possible.
                </Subtext>
                <Subtext sx={{ marginY: '20px' }}>
                    However, if the customer continues to remain dissatisfied with the resolution, he/she can escalate the issue through the grievance redressal mechanism as referred below.
                </Subtext>
                <Heading>2. Time Frame</Heading>
                <Subtext sx={{ marginY: '20px' }}>
                    Suitable timelines of fifteen (15) working days have been set for every complaint depending upon the investigations that would be involved in resolving the same. Complaints are suitably acknowledged on receipt, and the customers are informed of delays if any, in the resolution.
                </Subtext>
                <Heading>3. Review & Monitoring</Heading>
                <Subtext sx={{ marginY: '20px' }}>
                    Periodic review of monitoring of complaints, TATs, and nature of complaints will be done to ensure that process loopholes, if any, are plugged and trends are checked.
                </Subtext>
                <Heading>4. Escalation Matrix</Heading>
                <ul style={{ listStyleType: 'none' }}>
                    <li>
                        <Heading sx={{ fontSize: '18px' }}>
                            a) Primary Level
                        </Heading>
                        <Subtext sx={{ marginY: '20px' }}>
                            Customer can raise their concerns pertaining to the Platform, EMI schedule, Facility Type, Processing Fee and/or any other charges or any other concern related to the product to authorized representatives of the Company as below:
                        </Subtext>
                        <Subtext sx={{ marginY: '20px' }}>
                            Email – For loan processing-related queries, customers can write us at <Link href='mailto:info@fundsmama.com' style={{ color: '#696969' }}>info@fundsmama.com</Link>
                        </Subtext>
                        <Subtext sx={{ marginY: '20px' }}>
                            Customers are required to quote the loan account number to help us understand and address their concerns.
                        </Subtext>
                        <Subtext sx={{ marginY: '20px' }}>
                            An assurance is given to the customer that he/ she/ it would be responded to within

                            7 (seven) days and due efforts are taken to resolve the complaint well before that.
                        </Subtext>
                    </li>
                    <li>
                        <Heading sx={{ fontSize: '18px' }}>
                            b) Secondary Level
                        </Heading>
                        <Subtext sx={{ marginY: '20px' }}>
                            If the customer are not satisfied with the resolution received or if the customer does not hear from us in 7 days, we request the customer to write to our Grievance Redressal
                            <br></br>Officer:
                        </Subtext>
                        <Subtext sx={{ marginY: '20px' }}>
                            Mr. Rahul K<br />
                            {/* <a href='mailto:grievance@fundsmama.com'>grievance@fundsmama.com</a> */}
                            <Link href='mailto:grievance@fundsmama.com' style={{ color: '#696969' }}>grievance@fundsmama.com</Link>
                        </Subtext>
                    </li>
                    <li>
                        <Heading sx={{ fontSize: '18px' }}>
                            c) Third Level
                        </Heading>
                        <Subtext sx={{ marginY: '20px' }}>
                            If the customer is not satisfied with the resolution received or if the customer does not hear from us in 30 days, then he/she may lodge their complaint on RBI CMS portal

                            <br />- https://cms.rbi.org.in or reach them on the dedicated e-mail id - cepc@rbi.org.in Or send your complaint form (format available on the website under Ombudsman scheme 2021) to the below mentioned address:
                        </Subtext>
                        <Subtext sx={{ marginY: '20px' }}>
                            Officer- in-Charge, <br></br> 6, Sansad Marg New Delhi - 110001

                        </Subtext>
                    </li>
                </ul>
            </Box>
        </Box>
    )
}

export default GrievanceRedressal