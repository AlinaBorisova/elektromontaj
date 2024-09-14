<?php
$from        =    'sale@m-ft.ru';            // адрес отправителя, с домена сайта!
$to            =    'sale@m-ft.ru';    // адрес получателя

//pvd@smart-conversion.ru

$subject     =    'Форма с сайта';    // заголовок письма

$domain = substr($from, strpos($from, "@"));
$subject = $subject . '[' . date("d/m/y H:i:s") . ']';

$headers =     "From: $from\r\n" .
  "Reply-To: $from\r\n" .
  "Message-ID: <" . round(lcg_value() * 1000000000) . '.' . date("YmjHis") . "$domain>\r\n" .
  'X-Mailer: PHP/' . phpversion() . "\r\n";

$contact = $_POST['Контакт'];
unset($_POST['Контакт']);
$form = $_POST['Форма'];
unset($_POST['Форма']);

$separator = md5(time());

$body .= "\r\n";
$body .= 'Форма: ' . $form;
$body .= "\r\n---\r\n";

foreach ($_POST as $key => $value) {
  $body .= $key . ' - ' . $value . "\r\n";
}
$body .= 'Контакт: ' . $contact;
$body .= "\r\n---\r\n";

if (mail($to, "=?UTF-8?Q?" . $subject . "?=", $body, $headers)) {

} else {
  echo 'Ошибка. Попробуйте позже.';
}
