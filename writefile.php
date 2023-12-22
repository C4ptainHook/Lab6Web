<?php
  $myfile = fopen($_POST["contentname"], "w");
  fwrite($myfile, $_POST["content"]);
  fclose($myfile);
?>
