<?php
$from        =    'sales@sindicart.ru';            // адрес отправителя, с домена сайта!
$to            =    'b-alina1999.borisova@yandex.ru';    // адрес получателя

//pvd@smart-conversion.ru sales@sindicart.ru

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
$name = $_POST['Имя'];
unset($_POST['Имя']);

$separator = md5(time());

$body .= "\r\n";
$body .= 'Форма: ' . $form;
$body .= "\r\n---\r\n";


$body .= 'Имя: ' . $name;
$body .= "\r\n---\r\n";

foreach ($_POST as $key => $value) {
    $body .= $key . ' - ' . $value . "\r\n";
}
$body .= 'Контакт: ' . $contact;
$body .= "\r\n---\r\n";

// Файл
if (isset($_FILES['Файл'])) {
    $headers .= "MIME-Version: 1.0" . $eol;
    $headers .= "Content-Type: multipart/mixed; boundary=\"" . $separator . "\"" . $eol;
    $headers .= "Content-Transfer-Encoding: 7bit" . $eol;
    $headers .= "This is a MIME encoded message." . $eol;

    $tmp_name = $_FILES['Файл']['tmp_name']; // get the temporary file name of the file on the server
    $name     = $_FILES['Файл']['name']; // get the name of the file
    $size     = $_FILES['Файл']['size']; // get size of the file for size validation
    $type     = $_FILES['Файл']['type']; // get type of the file
    $error     = $_FILES['Файл']['error']; // get the error (if any)

    $handle = fopen($tmp_name, "r"); // set the file handle only for reading the file
    $content = fread($handle, $size); // reading the file
    fclose($handle);                 // close upon completion

    $encoded_content = chunk_split(base64_encode($content));

    //attachment
    $body .= "Content-Type: $type; name=" . $name . "\r\n";
    $body .= "Content-Disposition: attachment; filename=" . $name . "\r\n";
    $body .= "Content-Transfer-Encoding: base64\r\n";
    $body .= "X-Attachment-Id: " . rand(1000, 99999) . "\r\n\r\n";
    $body .= $encoded_content; // Attaching the encoded file with email
} else {
    $headers .=
        "Content-Type: text/plain; charset=UTF-8\r\n";
}

if (mail($to, "=?UTF-8?Q?" . $subject . "?=", $body, $headers)) {
    echo count($_FILES);
} else {
    echo 'Ошибка. Попробуйте позже.';
}
