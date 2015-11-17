<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>

    <?php
if($_POST)
    {
    $to = "aeowa@mail.ru"; //куда отправлять письмо
    $from = 'aeowa@mail.ru'; // от кого
    $subject = "Новый заказ на сладости"; //тема
    $message = 'Имя: '.$_POST['name'].'; Телефон: '.$_POST['telephone'].'; Почта: '.$_POST['email'].'; Сообщение: '.$_POST['order'].';';
    $headers = "Content-type: text/html; charset=UTF-8 \r\n";
    $headers .= "From: <aeowa@mail.ru>\r\n";
    $result = mail($to, $subject, $message, $headers);

    if ($result){ 
        echo "<p>Спасибо за заказ! Мы свяжемся с Вами в ближайшее время!</p>";
    }
    else{
        echo "<p>Cообщение не отправлено. Пожалуйста, попробуйте еще раз!</p>";
    }
}
else {
echo "<p>Обязательные поля не заполнены.</p>";
}

if(isset($_POST['name']) && isset($_POST['telephone'])){
$name=htmlentities($_POST['name']);
$telephone = htmlentities($_POST['telephone']);
}
?>

</body>
</html>

