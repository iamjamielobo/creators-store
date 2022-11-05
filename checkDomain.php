<?php

  $curl = curl_init();

  curl_setopt_array($curl, array(
    // CURLOPT_URL => 'https://domain-availability.whoisxmlapi.com/api/v1?apiKey=at_bXz5ogoQa9Rpzl2dJjbFmjxySMbrG&domainName=www.'.$_POST["domainName"].'.store&credits=DA',
    CURLOPT_URL => 'https://creators.store/domcheck/process.php?domain='.$_POST["domainName"],
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => '',
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => 'POST',
  ));

  $response = curl_exec($curl);

  curl_close($curl);
  echo $response;
?>
