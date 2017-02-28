<?php

$img = file_get_contents("http://static.comicvine.com/uploads/original/11114/111144184/4791207-9790062099-Pizza.jpg");

echo base64_encode($img);


?>