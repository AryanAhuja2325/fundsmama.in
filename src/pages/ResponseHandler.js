import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import CryptoJS from 'crypto-js';
import { CircularProgress, Typography, Box } from '@mui/material';
import { toast } from 'react-toastify';

const ResponseHandler = () => {
  const [loading, setLoading] = useState(true);
  const [responseMessage, setResponseMessage] = useState('');
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const handlePaymentResponse = async () => {
      const encResp = searchParams.get('encResp');
      if (!encResp) {
        setResponseMessage('No response received.');
        setLoading(false);
        return;
      }

      try {
        const workingKey = '6D28CCC38DCC0ADD1F01D007BAA1456F'; // The working key from your CCAvenue account
        const decryptedResponse = decryptResponse(encResp, workingKey);
        const parsedResponse = parseDecryptedResponse(decryptedResponse);

        // Send parsed response to your server
        const response = await axios.post('https://tech.girdharfin.cloud/api/v1/insert-request/', {
          response_data: parsedResponse,
          lead_id: parsedResponse.merchant_param1,
          loan_no: parsedResponse.merchant_param2,
          method_id: 2,
        }, {
          headers: {
            'Auth': 'ZnVuZHNtYW1hMjAyMzA0MTk=',
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
        });
        console.log(response);
        
        // Handle response
        if (parsedResponse.order_status === 'Success') {
          toast.success('Payment successful!');
          setResponseMessage(`Payment successful! Reference ID: ${parsedResponse.bank_ref_no}`);
        } else if (parsedResponse.order_status === 'Aborted') {
          toast.warn('Payment aborted.');
          setResponseMessage('Payment aborted.');
        } else if (parsedResponse.order_status === 'Failure') {
          toast.error('Payment failed.');
          setResponseMessage('Payment failed.');
        } else {
          toast.error('Security error.');
          setResponseMessage('Security error.');
        }
      } catch (error) {
        console.error('Error handling payment response:', error);
        toast.error('Error processing payment response.');
        setResponseMessage('Error processing payment response.');
      } finally {
        setLoading(false);
      }
    };

    handlePaymentResponse();
  }, [searchParams]);

  const decryptResponse = (encResp, workingKey) => {
    const secretKey = CryptoJS.enc.Hex.parse(CryptoJS.MD5(workingKey).toString());
    const initVector = CryptoJS.enc.Hex.parse('000102030405060708090a0b0c0d0e0f');
    const decrypted = CryptoJS.AES.decrypt(
      { ciphertext: CryptoJS.enc.Hex.parse(encResp) },
      secretKey,
      {
        iv: initVector,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
      }
    );
    return decrypted.toString(CryptoJS.enc.Utf8);
  };

  const parseDecryptedResponse = (decryptedResponse) => {
    const params = new URLSearchParams(decryptedResponse);
    let responseObj = {};
    for (const [key, value] of params.entries()) {
      responseObj[key] = value;
    }
    return responseObj;
  };

  return (
    <Box sx={{ padding: '20px', textAlign: 'center' }}>
      {loading ? (
        <>
          <CircularProgress />
          <Typography variant="h6" sx={{ marginTop: '20px' }}>Processing your payment...</Typography>
        </>
      ) : (
        <Typography variant="h6">{responseMessage}</Typography>
      )}
    </Box>
  );
};

export default ResponseHandler;
