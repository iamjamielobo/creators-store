<?php

    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);

    // print_r($_POST);exit;

    $fp = fopen($_SERVER['DOCUMENT_ROOT'] . '/form.csv', 'a');
    $result = fputcsv($fp, $_POST);
    fclose($fp);

    $arrToJSON = array(
        "message"=>"success"
    );

    echo json_encode($arrToJSON);

    exit;

?>