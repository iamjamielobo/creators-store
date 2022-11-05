<?php

    // ini_set('display_errors', 1);
    // ini_set('display_startup_errors', 1);
    // error_reporting(E_ALL);

    $fp = fopen($_SERVER['DOCUMENT_ROOT'] . '/data-radix-social-campaign.csv', 'a');
    $result = fputcsv($fp, $_POST);
    fclose($fp);

    $arrToJSON = array(
        "message"=>"success"
    );

    echo json_encode(array($arrToJSON));

    exit;

?>