<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Veeam</title>
</head>
<body>

    <?php
if($_POST)
    {
    $to = "aeowa@mail.ru"; //куда отправлять письмо
    $from = 'aeowa@mail.ru'; // от кого
    $subject = "User Registration"; //тема
    $message = 'Name: '.$_POST['first-name'].'; Last Name: '.$_POST['last-name'].'; Email: '.$_POST['email'].'; Country: '.$_POST['country'].'; State: '.$_POST['state'].';';
    $headers = "Content-type: text/html; charset=UTF-8 \r\n";
    $headers .= "From: <aeowa@mail.ru>\r\n";
    $result = mail($to, $subject, $message, $headers);

    if ($result){ 
        echo "<p>Thank you! Download link will be sent to your e-mail.</p>";
    }
    else{
        echo "<p>Sorry, the message was not sent. Please, try again.</p>";
    }
}
else {
echo "<p>Please, fill in the fields with "*"</p>";
}

?>

</body>
</html>

