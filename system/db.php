<?php
require_once 'system.php';

$mysqli = new mysqli("10.0.0.57", "f0717740_test", "root", "f0717740_test");
$mysqli->set_charset("utf8");
if ($mysqli->connect_errno) {
    die("Не удалось подключиться к MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error);
}

if (!empty($arrParamsAmo)) {
    $access_token = $arrParamsAmo['access_token'];
    $refresh_token = $arrParamsAmo['refresh_token'];
    $token_type = $arrParamsAmo['token_type'];
    $expires_in = $arrParamsAmo['expires_in'];
    $endTokenTime = $arrParamsAmo['endTokenTime'];

    $mysqli->query("INSERT INTO `amocrm` (`access_token`, `refresh_token`, `token_type`, `expires_in`, `endTokenTime`)
                            VALUES ('$access_token', '$refresh_token', '$token_type', '$expires_in', '$endTokenTime')");
}



