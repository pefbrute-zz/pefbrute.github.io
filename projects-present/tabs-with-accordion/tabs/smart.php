<?php

$firstname = $_POST['user_firstname'];
$surname = $_POST['user_surname'];
$login = $_POST['user_login'];
$email = $_POST['user_email'];
$password = $_POST['user_password'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'tcmponsvrgb@mail.ru';                 // Наш логин
$mail->Password = 'a88coppw104k';                           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to

$mail->setFrom('tcmponsvrgb@mail.ru', 'Tolya');   // От кого письмо
$mail->addAddress('secret20033002@mail.ru');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Это рабочая тема сообщения';
$mail->Body    = '
	Пользователь оставил свои данные <br>
	Имя: ' . $firstname . ' <br>
	Фамилия: ' . $surname . '<br>
  Логин: ' . $login . ' <br>
  Электронная почта: ' . $email . ' <br>
  Пароль: ' . $password . ' <br>';
$mail->AltBody = 'Это рабочий альтернативный текст сообщения';

if(!$mail->send()) {
    return false;
} else {
    echo "Заявка отправлена!";
    return true;
}

?>
