
<!doctype html>
<html lang=en>
<head>
<meta http-equiv=Content-Type content="text/html; charset=utf-8">
<meta name=viewport content="width=device-width, initial-scale=1, maximum-scale=1">
<link href="public/front/image/fav.png" rel="shortcut icon" />
<title>Funds Mama</title>

<link href="public/front/css/bootstrap.min.css" rel="stylesheet">

<!--fints-->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Exo:wght@100;200;300;400;500;600;700;800&display=swap" rel="stylesheet">
<!-- CSS -->

<style>
body{}
.thanks-funds-mama
{
width:100%;
float:left;
padding:50px 0px;
margin:0px;
/*background:#fff;*/
font-family: 'Exo', sans-serif !important;
}
.thanks-background {
text-align: center;
color: #fff;
padding:63px 20px;
/*background: linear-gradient(91deg, #1f2b5b 0%, #1e317a 100%);*/
}
.thanks-you-text {font-size:40px;font-weight: bold !important;margin-bottom: 15px;
color:#fff;
text-transform:uppercase;}

.thanks-you-line {font-size: 21px;font-weight: normal;margin-bottom: 15px;
color:#000;}

.margen-tops {
margin-top:32px;
}
.thanks-images {
}
.thnaks-message {
float: left;
position: absolute;
top: 45%;
z-index: 999;
/*color: #fff;*/

right:21%;
}
.social-thanks {
position: absolute;
z-index: 9999;
bottom: 15px;
font-size: 14px;
line-height: 28px !important;
/*color: #fff !important;*/
right: 30%;
}
.socil-t
{
width: 35px !important;
padding: 1px !important;
height: 35px !important;
-moz-transition:all .3s;
-webkit-transition:all .3s;
transition:all .3s;
vertical-align:middle;
border:solid 1px #fff;
border-radius:100%;
margin:5px;
}
.socil-t:hover
{
-moz-transform:scale(1.1);
-webkit-transform:scale(1.1);
transform:scale(1.1);
vertical-align:middle;
}
.displayy
{
border:solid 0px #ddd;
padding:30px;
}

.back-to-homepage
{background: #f6cc46;
border-radius: 3px;
padding: 10px 20px;
color: #1f2b5b;
font-weight: bold;
font-size: 17px;}

</style>

<!-- Meta Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '278297793730616');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=278297793730616&ev=PageView&noscript=1"/></noscript>
<!-- End Meta Pixel Code -->

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-10859530949"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-10859530949');
</script>

</head>
<body >
<!--faq-line-->
<div class="thanks-funds-mama">
    <div class="container">
        <div class="row">
            <div class="col-md-1">&nbsp;</div>
            <div class="col-md-5 thanks-background">
                <div class="row">
                    <div class="col-md-12 thanks-you-text"><img src="public/front/image/thankyou.png" alt="thanks-text" height="180px"></div>
                    <div class="col-md-12" ><b style="color:red;font-size:18px;">
                        <?php
                        if(isset($_GET['status']))
                        {
                            if($_GET['status']=="success")
                            {
				$refno=$_GET['refid'];
                                echo "<br>Your loan emi paid successfully.<br>Transaction Reference Number is <b>".$refno."</b>";
                            }
                            else if($_GET['status']=="aborted")
                            {
                                echo "<br>Thank you. We will keep you posted regarding the status of your emi payment through e-mail/sms/call";
                            }
                            else if($_GET['status']=="failure")
                            {
                                echo "<br>Thank you for emi payment.However, the transaction has been declined.";
                            }
                            else if($_GET['status']=="security")
                            {
                                echo "<br>Security Error. Illegal access detected";
                            }
                        }
                        else
                        {
                            echo "<br><br><br>";
                        }
                        ?>
                    </div>
                    <div class="col-md-12 margen-tops"><strong style="color:#000;">Follow Us On</strong></div>
                    <div class="col-md-12">
                        <a href="https://www.linkedin.com/company/funds-mama/" target="_blank"><img src="public/front/image/linkdin.png" class="socil-t"></a>
                        <a href="https://www.instagram.com/fundsmama/" target="_blank"><img src="public/front/image/instagram.png" class="socil-t"></a>
                        <a href="https://www.facebook.com/fundsmama/" target="_blank"><img src="public/front/image/facebook.png" class="socil-t"></a>  
                    </div>
                    <div class="col-md-12" style=" font-size:14px;color:#000;">For Latest Updates &amp; Offers</div> 
                    <div class="col-md-12" style=" font-size:14px; color: #fff;"><a href="https://fundsmama.com" class="btn btn-primary">GO BACK TO HOME</a></div> 
                </div>
            </div>
            
            <div class="col-md-5 text-center displayy">
                <img src="public/front/image/thanku.png" alt="thaks" style="width:100%;">
            </div>
            <div class="col-md-1">&nbsp;</div>
        </div>
    </div>
</div>
</body>
</html>
