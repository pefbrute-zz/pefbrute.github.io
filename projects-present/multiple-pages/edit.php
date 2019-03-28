<?php
  $phone = $_POST['phone'];
  $fd = fopen('tel.php', 'w');
  fwrite($fd, $phone);
  echo "Телефон изменён!. Перейди на главную <a href='index.php'>страницу</a>"
 ?>
