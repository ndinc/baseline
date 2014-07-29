<?php
function register_custom_post() {
  $args = array(
    'labels' => array(
      'name' => _x('建築物', 'post type general name'),
    ),
    'public' => true,
    'publicly_queryable' => true,
    'show_ui' => true,
    'query_var' => true,
    'exclude_from_search' => false,
    'rewrite' => true,
    'hierarchical' => false,
    'menu_position' => 4,
    'supports' => array('title','author')
    // 'taxonomies' => array('category')
  );
  // register_post_type('structure', $args);

  // $args = array(
  //   'labels' => array(
  //     'name' => _x('ニュース', 'post type general name'),
  //   ),
  //   'public' => true,
  //   'publicly_queryable' => true,
  //   'show_ui' => true,
  //   'query_var' => true,
  //   'exclude_from_search' => false,
  //   'rewrite' => true,
  //   'hierarchical' => false,
  //   'menu_position' => 4,
  //   'supports' => array('title','editor','author')
  // );
  // register_post_type('news', $args);

  register_taxonomy(
    'language',
    'post',
    array(
      'hierarchical' => true,
      'update_count_callback' => '_update_post_term_count',
      'label' => 'Language',
      'singular_label' => 'Language',
      'public' => true,
      'rewrite' => array(
        // 'slug' => '',
        'with_front' => false,
        'hierarchical' => true
      )
    )
  );
}

add_action('init','register_custom_post');