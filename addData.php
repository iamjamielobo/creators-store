<?php

    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);

    $fp = fopen($_SERVER['DOCUMENT_ROOT'] . '/data.csv', 'a+');
    $result = fputcsv($fp, $_POST);
    fclose($fp);

    $arrToJSON = array(
        "message"=>"success"
    );

    echo json_encode($arrToJSON);

    exit;

?>