<?php

	$files = scandir('images', 1);
	$newest_file = $files[0];
	print_r ($newest_file);


?>