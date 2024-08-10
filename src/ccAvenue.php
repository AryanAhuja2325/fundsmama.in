<html>

<head>
    <script>
        function submitCcForm() {
            var d = new Date().getTime();
            document.getElementById("tid").value = d;
            var payuForm = document.forms.customerData;
            payuForm.submit();
        }
    </script>
</head>

<body onload="submitCcForm()">
    <?php
    if (isset($_POST)) {
        $merchid = 1895498;
        $leadid = $_POST['leadid'];
        $custid = $_POST['custid'];
        $lonid = $_POST['lonid'];
        $firstnam = $_POST['firstnam'];
        $loanrecommend = $_POST['loanrecommend'];
        $disdt = $_POST['disdt'];
        $loanroi = $_POST['loanroi'];
        $repayamt = $_POST['repayamt'];
        $repaydt = $_POST['repaydt'];
        $outstandamt = $_POST['outstandamt'];
        $pamt = $_POST['payamt'];
        $sanction_name = $_POST['sanction_name'];
        $collection_executive_name = $_POST['collection_executive_name'];

        $curl = curl_init();
        $fields = "";
        $fields1 = "";
        $fields1 = array("customer_id" => $custid, "first_name" => $firstnam, "loan_recommended" => $loanrecommend, "disbursal_date" => $disdt, "roi" => $loanroi, "repay_amount" => $repayamt, "repay_date" => $repaydt, "oustanding_amount" => $outstandamt, "pay_amount" => $pamt, "sanction_executive" => $sanction_name);
        $fields = array("request_data" => $fields1, "response_data" => "", "lead_id" => $leadid, "loan_no" => $lonid, "method_id" => 1);
        //print_r($fields);
        curl_setopt_array($curl, array(
            CURLOPT_URL => 'https://tech.girdharfin.cloud/api/v1/insert-request/',
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => '',
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => 'POST',
            CURLOPT_POSTFIELDS => json_encode($fields),
            CURLOPT_HTTPHEADER => array(
                'Auth: ZnVuZHNtYW1hMjAyMzA0MTk=',
                'Content-Type: application/json',
                'Accept: application/json'
            ),
        ));

        $response = curl_exec($curl);
        curl_close($curl);
        //echo $response;
        // echo $ipadr."<br>".$loanid."<br>".$response.'<br><br><br>';
        $obj1 = json_decode($response);
        $lstat = $obj1->status;
        $odid = $obj1->order_id;
    ?>
        <form method="post" name="customerData" action="ccavRequestHandler.php">

            <input type="hidden" name="billing_name" value="<?php echo $firstnam; ?>" />
            <input type="hidden" name="billing_address" value="<?php echo $collection_executive_name . " - " . $sanction_name; ?>" />
            <input type="hidden" name="billing_city" value="d" />
            <input type="hidden" name="billing_state" value="d" />
            <input type="hidden" name="billing_zip" value="d" />
            <input type="hidden" name="billing_country" value="INDIA" />
            <input type="hidden" name="billing_tel" value="1234567890" />
            <input type="hidden" name="billing_email" value="d@gmail.com" />


            <input type="hidden" name="tid" id="tid" value="" />
            <input type="hidden" name="merchant_id" value="<?php echo $merchid; ?>" />
            <input type="hidden" name="order_id" value="<?php echo $odid; ?>" />
            <input type="hidden" name="amount" value="<?php echo $pamt; ?>" />
            <input type="hidden" name="currency" value="INR" />
            <input type="hidden" name="redirect_url" value="https://fundsmama.com/ccavResponseHandler.php" />
            <input type="hidden" name="cancel_url" value="https://fundsmama.com/ccavResponseHandler.php" />
            <input type="hidden" name="language" value="EN" />
            <input type="hidden" name="merchant_param1" value="<?php echo $leadid; ?>" />
            <input type="hidden" name="merchant_param2" value="<?php echo $lonid; ?>" />
            <input type="hidden" name="merchant_param3" value="<?php echo $sanction_name; ?>" />
            <input type="hidden" name="customer_identifier" value="<?php echo $custid; ?>" />
            <input type="hidden" name="integration_type" value="iframe_normal" />
        </form>
    <?php
    }
    ?>
</body>

</html>
