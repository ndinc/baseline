<?php
  global $_SITE;
  global $_PAGES;

  $_SITE = array(
    'domain' => array(
      'develop'=> array(
        '#{project_name}:8889',
        'local.#{project_name}.com',
        '#{project_name}.ngrok.com'
      ),
      'staging'=> '#{project_name}.ndv.me',
      'production'=> '#{project_name}.ndinc.jp',
    ),
    'site_name' => '#{project_name}',
    'site_url' => 'http://'.$_SERVER['HTTP_HOST'],
    'title' => '#{project_name}',
    'description' => 'main desc',
    'image' => ''
  );

  $_PAGES = array(
    'about' => array(
      'title' => 'About',
      'description' => 'xxx about desc',
      'image' => $_SITE['image']
    ),
    '404' => array(
      'title' => 'ページが存在しません',
      'description' => $_SITE['description'],
      'image' => $_SITE['image']
    )
  );
?>