<?php
  global $_SITE;
  global $_PAGES;

  $_SITE = array(
    'domain' => array(
      'develop'=> array(
        'baseline:8889',
        'local.baseline.com',
        'baseline.ngrok.com'
      ),
      'staging'=> 'baseline.ndv.me',
      'production'=> 'baseline.ndinc.jp',
    ),
    'site_name' => 'Baseline',
    'site_url' => 'http://'.$_SERVER['HTTP_HOST'],
    'title' => 'Baseline',
    'keywords' => '',
    'image' => get_sitepath('template_url').'/images/ogimage.png'
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