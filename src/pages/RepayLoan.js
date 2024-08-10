import React, { useState } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import {
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  Divider,
  Box
} from '@mui/material';
import aboutBanner from '../assets/imgs/about-banner.jpg';
import * as COLORS from '../assets/utils/Constants';
import CryptoJS from 'crypto-js';
import { toast } from 'react-toastify';

const StyledContainer = styled(Container)`
  padding: 40px 0;
`;

const StyledTypography = styled(Typography)`
  font-weight: bold;
  font-size: 40px;
  color: #fff;
  text-align: center;
  padding: 55px 0;
  margin-top: 100px;
`;

const Background = styled(Box)({
  backgroundImage: `url(${aboutBanner})`,
  marginTop: '100px',
  height: '400px',
  backgroundSize: 'cover'
})

const RepaySection = styled.div`
  width: 100%;
  padding: 50px 0 95px;
  position: relative;

  @media (max-width: 540px) {
    padding: 50px 0;
    top: 300px;
    text-align: center;
    height: 1375px;
  }

  & h2 {
    margin: 0 0 20px;
    font-size: 15px;
    font-weight: bold;
  }
`;

const FormSection = styled(Box)`
  padding: 30px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;  // Add a light background color for better visibility
`;

const CustomTextField = styled(TextField)(({ theme }) => ({
  backgroundColor: '#f5f5f5',
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: COLORS.yellowOrange,
    },
    '&:hover fieldset': {
      borderColor: COLORS.yellowOrange,
    },
    '&.Mui-focused fieldset': {
      borderColor: COLORS.yellowOrange,
    },
    '&.Mui-disabled fieldset': {
      borderColor: COLORS.yellowOrange,
    },
    '&.Mui-disabled input': {
      color: 'black',
      WebkitTextFillColor: 'black',
    },
  },
  '& .MuiInputLabel-root': {
    color: '#aaa',
  },
  '& .MuiInputLabel-root.Mui-disabled': {
    color: '#aaa',
  },
}));


const RepayLoan = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formVisible, setIsFormVisible] = useState(true);
  const [formData, setFormData] = useState({
    loanid: '',
    otpval: '',
    payamt: 0,
    lead_id: '',
  });

  const [loanDetails, setLoanDetails] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleVerifyOTP = async () => {
    try {
      const response = await axios.post('https://tech.girdharfin.cloud/api/v1/verify-otp/', {
        lead_id: parseInt(formData.lead_id),
        otp: parseInt(formData.otpval),
      }, {
        headers: {
          'Auth': 'ZnVuZHNtYW1hMjAyMzA0MTk=',
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });
      const data = response.data;
      const ldata = data.data[0];
      const now = new Date().getTime();
      const your_date = new Date(ldata.repayment_date).getTime();
      const penal_days = Math.round((now - your_date) / (60 * 60 * 24 * 1000)) - 1;
      const loan_total_outstanding_amount = ((ldata.loan_recommended * (ldata.roi * 2) / 100) * penal_days) + ldata.repayment_amount;

      setLoanDetails({
        leadid: ldata.lead_id,
        loanid: ldata.loan_no,
        firstnm: ldata.first_name,
        custid: ldata.customer_id,
        disdt: new Date(ldata.disbursal_date).toLocaleDateString(),
        repaydt: new Date(ldata.repayment_date).toLocaleDateString(),
        repayamt: ldata.repayment_amount,
        loanrecommend: ldata.loan_recommended,
        roi: ldata.roi,
        outstanding: loan_total_outstanding_amount,
        sanction_name: ldata.sanction_name,
        collection_executive_name: ldata.collection_executive_name,
      });

      toast.success("OTP Verified Successfully!");
      setIsFormVisible(false)
    } catch (error) {
      toast.error("Invalid Loan/Customer ID");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    if (!formData.loanid) {
      toast.error("Loan/Customer ID required.");
      return;
    }

    try {
      const response = await axios.post('https://tech.girdharfin.cloud/api/v1/customer-login/', {
        id: formData.loanid,
        ip: window.location.hostname,
      }, {
        headers: {
          'Auth': 'ZnVuZHNtYW1hMjAyMzA0MTk=',
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });

      const data = response.data;
      if (data.status === 1) {
        setFormData({ ...formData, loanid: data.id, lead_id: data.lead_id });
        document.getElementById("formDataotp").style.display = "block";
        toast.success("OTP sent successfully!");
      } else {
        toast.error(data.messages || "Invalid Loan/Customer ID");
      }
    } catch (error) {
    }
  };

  const handlePaySubmit = async (e) => {
    e.preventDefault();
    if (formData.payamt < 1 || formData.payamt > loanDetails.outstanding) {
      toast("Please enter valid amount")
    } else {
      const merchantId = '1895498';
      const accessCode = 'AVLI92JL08CL28ILLC';
      const workingKey = '6D28CCC38DCC0ADD1F01D007BAA1456F';
      const order_id = loanDetails.loanid;
      const amount = parseInt(formData.payamt);
      const first_name = loanDetails.firstnm;
      const sanction_executive = loanDetails.sanction_name;
      const collection = loanDetails.collection_executive_name;
      const leadid = loanDetails.leadid;
      const loan_no = loanDetails.loanid;
      const currency = 'INR';
      const redirectUrl = 'https://fundsmama.com/ccavResponseHandler';
      const cancelUrl = 'https://fundsmama.com/ccavResponseHandler';
      const billingname = first_name;

      const getEncryptedData = () => {
        const secretKey = CryptoJS.enc.Hex.parse(CryptoJS.MD5(workingKey).toString());
        const initVector = CryptoJS.enc.Hex.parse('000102030405060708090a0b0c0d0e0f');
        const data = `merchant_id=${merchantId}&order_id=${order_id}&redirect_url=${redirectUrl}&cancel_url=${cancelUrl}&amount=${amount}&currency=${currency}&language=EN&billing_name=${billingname}&billing_address=${sanction_executive + '-' + collection}&billing_city=d&billing_state=d&billing_zip=d&billing_country=India&billing_tel=1234567890&billing_email=d@gmail.com&merchant_param1=${leadid}&merchant_param2=${loan_no}&merchant_param3=${sanction_executive}&integration_type=iframe_normal`;
        const encrypted = CryptoJS.AES.encrypt(data, secretKey, {
          iv: initVector,
          mode: CryptoJS.mode.CBC,
          padding: CryptoJS.pad.Pkcs7,
        });

        return encrypted.ciphertext.toString(CryptoJS.enc.Hex);
      };

      const getPaymentURL = () => {
        const encryptedData = getEncryptedData();
        return `https://secure.ccavenue.com/transaction.do?command=initiateTransaction&encRequest=${encryptedData}&access_code=${accessCode}`;
      };
      const url = getPaymentURL();
      console.log(url)

      const link = document.createElement('a');
      link.href = url;
      link.rel = "noopener noreferrer"
      link.target = '_blank';
      link.click();
    }
  };

  return (
    <>
      <Background>
        <StyledTypography>
          Repay your loan and interest amount through <br />the following bank or QR Code
        </StyledTypography>
      </Background>
      <StyledContainer>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Typography variant="h4" sx={{ color: COLORS.darkBlue }}>
              Repay Loan
            </Typography>
            <Divider sx={{ bgcolor: COLORS.darkBlue, height: 4, width: '20%', marginLeft: '3px', marginY: '6px' }} />
          </Grid>
          {formVisible && (
            <Grid item xs={12} md={8}>
              <FormSection>
                <form id="formData" autoComplete="off" onSubmit={handleSubmit}>
                  <CustomTextField
                    label="Lender"
                    value="FUNDS MAMA"
                    disabled
                    fullWidth
                    margin="normal"
                  />
                  <CustomTextField
                    label="Loan/CIF Number"
                    name="loanid"
                    value={formData.loanid}
                    onChange={handleChange}
                    placeholder="Ex: DMI0001234567"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    required
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    id='submit'
                    sx={{
                      marginY: '16px',
                      backgroundColor: COLORS.yellowOrange,
                      borderRadius: '10px',
                      ':hover': {
                        backgroundColor: COLORS.darkBlue
                      }
                    }}
                    disabled={isSubmitting}
                  >
                    Get Payable Amount
                  </Button>
                </form>
                <form id="formDataotp" autoComplete="off" style={{ display: 'none' }} onSubmit={(e) => { e.preventDefault(); handleVerifyOTP(); }}>
                  <CustomTextField
                    label="Confirmation Code"
                    name="otpval"
                    type='number'
                    value={formData.otpval}
                    onChange={handleChange}
                    placeholder="Ex: 123456"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    required
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{
                      marginY: '16px',
                      backgroundColor: COLORS.yellowOrange,
                      borderRadius: '10px',
                      ':hover': {
                        backgroundColor: COLORS.darkBlue
                      }
                    }}
                  >
                    Verify OTP
                  </Button>
                </form>
              </FormSection>
            </Grid>
          )}
        </Grid>
      </StyledContainer>
      {loanDetails && (
        <RepaySection>
          <StyledContainer>
            <Grid container spacing={3}>
              <FormSection>
                <form id="formDatapay" autoComplete="off">
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={4}>
                      <CustomTextField
                        label="Loan No"
                        name="loanid"
                        value={loanDetails.loanid}
                        disabled
                        fullWidth
                        margin="normal"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <CustomTextField
                        label="First Name"
                        name="firstnm"
                        value={loanDetails.firstnm}
                        disabled
                        fullWidth
                        margin="normal"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <CustomTextField
                        label="Loan Amount"
                        name="loanrecommend"
                        value={loanDetails.loanrecommend}
                        disabled
                        fullWidth
                        margin="normal"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <CustomTextField
                        label="Disbursal Date"
                        name="disdt"
                        value={loanDetails.disdt}
                        disabled
                        fullWidth
                        margin="normal"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <CustomTextField
                        label="Repayment Date"
                        name="repaydt"
                        value={loanDetails.repaydt}
                        disabled
                        fullWidth
                        margin="normal"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <CustomTextField
                        label="Repayment Amount"
                        name="repayamt"
                        value={loanDetails.repayamt}
                        disabled
                        fullWidth
                        margin="normal"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <CustomTextField
                        label="Outstanding"
                        name="outstanding"
                        value={loanDetails.outstanding}
                        disabled
                        fullWidth
                        margin="normal"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <CustomTextField
                        label="Payable Amount"
                        name="payamt"
                        value={formData.payamt}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        required
                      />
                    </Grid>
                  </Grid>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{
                      marginTop: '16px',
                      backgroundColor: COLORS.yellowOrange,
                      borderRadius: '10px',
                      ':hover': {
                        backgroundColor: COLORS.darkBlue
                      }
                    }}
                    onClick={handlePaySubmit}
                  >
                    Proceed To Pay
                  </Button>
                </form>
              </FormSection>
            </Grid>
          </StyledContainer>
        </RepaySection>
      )}
    </>
  );
};

export default RepayLoan;
