<?php
if(empty($wp_query)){
  require( 'functions.php' );
  require( 'data/data.php' );
}
require( 'data/meta.php' );

include "header.php";

include get_page_path();

include "footer.php";
