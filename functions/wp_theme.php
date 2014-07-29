<?php

function get_post_query($type, $num=10){
  switch($type){

    case 'post':
      return get_wp_query(array(
        'post_type' => 'post',
        'posts_per_page' => $num,
      ));
      break;
    default:
      return get_wp_query();
  }
}

// <?php $wp_post_query = get_post_query('post', -1);
// <?php while ($wp_post_query->have_posts()) : $wp_post_query->the_post();
// <?php endwhile
