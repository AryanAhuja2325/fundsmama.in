<?php include('Crypto.php')?>
<?php

	error_reporting(0);
	
	$workingKey='6D28CCC38DCC0ADD1F01D007BAA1456F';		//Working Key should be provided here.
	$encResponse=$_POST["encResp"];			//This is the response sent by the CCAvenue Server
	$rcvdString=decrypt($encResponse,$workingKey);		//Crypto Decryption used as per the specified working key.
	
	$order_status="";$lead_id="";$loan_no="";$bank_ref_no="";
	$decryptValues=explode('&', $rcvdString);
	$rcvString=json_encode($decryptValues);
	$dataSize=sizeof($decryptValues);
	
	$fields2= array();
	//$fields1="{";
	for($i = 0; $i < $dataSize; $i++) 
	{
		$information=explode('=',$decryptValues[$i]);
		if($i==2)
		{
			$bank_ref_no=$information[1];
		}
		if($i==3)
		{
			$order_status=$information[1];
		}
		if($i==26)
		{
			$lead_id=$information[1];
		}
		if($i==27)
		{
			$loan_no=$information[1];
		}
		//$fields1 .="'".$information[0]."':'".$information[1]."',";
		$fields2[$information[0]] = $information[1];
	}
	//$fields1 = substr($fields1,0,-1)."}";
	
	$curl = curl_init();
	$fields = array("request_data" => "", "response_data"=>$fields2, "lead_id" => $lead_id, "loan_no" => $loan_no, "method_id"=>2);
//echo json_encode($fields);
              curl_setopt_array($curl, array(
              CURLOPT_URL => 'https://tech.girdharfin.cloud/api/v1/insert-request/',
              CURLOPT_RETURNTRANSFER => true,
              CURLOPT_ENCODING => '',
              CURLOPT_MAXREDIRS => 10,
              CURLOPT_TIMEOUT => 0,
              CURLOPT_FOLLOWLOCATION => true,
              CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
              CURLOPT_CUSTOMREQUEST => 'POST',
              CURLOPT_POSTFIELDS =>json_encode($fields),
              CURLOPT_HTTPHEADER => array(
                'Auth: ZnVuZHNtYW1hMjAyMzA0MTk=',
                'Content-Type: application/json',
                'Accept: application/json'
              ),
            ));
            
            $response = curl_exec($curl);
            curl_close($curl);
	    // echo "<br><br><br>".$response;
           // echo $ipadr."<br>".$loanid."<br>".$response.'<br><br><br>';
            //$obj1 = json_decode($response);
         $lstat=$obj1->status;$output="";
//echo $order_status."  ".$lstat;
	if($order_status==="Success")
	{
		$output="success&refid=".$bank_ref_no;
		//echo "<br>Thank you for shopping with us. Your credit card has been charged and your transaction is successful. We will be shipping your order to you soon.";
		
	}
	else if($order_status==="Aborted")
	{
		$output="aborted";
		//echo "<br>Thank you for shopping with us.We will keep you posted regarding the status of your order through e-mail";
	
	}
	else if($order_status==="Failure")
	{
		$output="failure";
		//echo "<br>Thank you for shopping with us.However,the transaction has been declined.";
	}
	else
	{
		$output="security";
		//echo "<br>Security Error. Illegal access detected";
	
	}
	//echo "<script>alert(".$order_status.");</script>";
	header('location:PayEmi.php?status='.$output);
?>
