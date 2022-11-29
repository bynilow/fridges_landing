<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru','phpmailer/language/');
    $mail->IsHTML(true);

    $mail->setFrom('bynilow@mail.ru', 'Тест');
    $mail->addAdress('bynilow@mail.ru');
    $mail->Subject = 'Привет! Тест!';

    $body = '<h1>Письмо</h1>';

    $message = 'Данные отправлены!';

    $response = ['message' => $message];

    header('Content-type: application/json');
    echo json_encode($response);