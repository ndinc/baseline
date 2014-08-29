<!DOCTYPE html>
<!--[if lt IE 7]><html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="ja"><![endif]-->
<!--[if IE 7]>   <html class="no-js lt-ie9 lt-ie8" lang="ja"><![endif]-->
<!--[if IE 8]>   <html class="no-js lt-ie9" lang="ja"><![endif]-->
<!--[if gt IE 8]><!--><html lang="ja"><!--<![endif]-->
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
  <title><?php echo get_head_meta('title'); ?></title>
  <meta name="description" content="<?php echo get_head_meta('description'); ?>">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <?php include "includes/ogp.php"; ?>
  <link rel="apple-touch-icon" href="<?php sitepath('template_url'); ?>/images/apple-touch-icon.png">
  <link rel="shortcut icon" type="image/x-icon" href="<?php sitepath('template_url'); ?>/images/favicon.ico">
  <?php if (is_develop()): ?>
  <link rel="stylesheet" href="<?php sitepath('template_url'); ?>/stylesheets/libs/foundation/normalize.css" type="text/css">
  <link rel="stylesheet" href="<?php sitepath('template_url'); ?>/stylesheets/libs/foundation/foundation.css" type="text/css">
  <link rel="stylesheet" href="<?php sitepath('template_url'); ?>/stylesheets/vendor.css?<?php echo get_filemtime('/stylesheets/vendor.css') ?>" type="text/css">
  <link rel="stylesheet" href="<?php sitepath('template_url'); ?>/stylesheets/style.css?<?php echo get_filemtime('/stylesheets/style.css') ?>" type="text/css">
  <?php else: ?>
  <link rel="stylesheet" href="<?php sitepath('template_url'); ?>/stylesheets/style.min.css" type="text/css">
  <?php endif ?>
  <script src="http://cdnjs.cloudflare.com/ajax/libs/modernizr/2.7.1/modernizr.min.js"></script>
  <!--[if lt IE 9]>
    <script src="//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.6.2/html5shiv.js"></script>
    <script src="//s3.amazonaws.com/nwapi/nwmatcher/nwmatcher-1.2.5-min.js"></script>
    <script src="//html5base.googlecode.com/svn-history/r38/trunk/js/selectivizr-1.0.3b.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/respond.js/1.4.2/respond.min.js"></script>
    <script src="<?php sitepath('template_url'); ?>/javascripts/ie/REM-unit-polyfill/rem.min.js" type="text/javascript"></script>
  <![endif]-->
  <?php if (function_exists('wp_head')) wp_head(); ?>
</head>
<body <?php echo body_class(); ?>>
  <div id="container" class="">
    <div id="header" class="main_content js-main_content">
      <div class="header-content">
        <div class="row">
          <div class="small-12 medium-12 large-12 columns">
            <nav class="top-bar" data-topbar>
              <ul class="title-area">
                <li class="name">
                  <h1><a href="<?php sitepath('url'); ?>/">Baseline <small>@ nD inc.</small></a></h1>
                </li>
                <li class="toggle-topbar menu-icon"><a href="#">Menu</a></li>
              </ul>
              <section class="top-bar-section">
                <!-- Right Nav Section -->
                <ul class="right">
                  <li class="has-dropdown">
                    <a href="#">Right Button with Dropdown</a>
                    <ul class="dropdown">
                      <li><a href="#">First link in dropdown</a></li>
                    </ul>
                  </li>
                </ul>
                <!-- Left Nav Section -->
                <ul class="left">
                  <li class="active"><a href="<?php sitepath('url'); ?>/about/">About</a></li>
                  <li class=""><a href="<?php sitepath('url'); ?>/javascript/">Javascript</a></li>
                  <li class=""><a href="<?php sitepath('url'); ?>/css/">CSS</a></li>
                  <li class="has-dropdown">
                    <a href="#">Right</a>
                    <ul class="dropdown">
                      <li><a href="#">First link in dropdown</a></li>
                    </ul>
                  </li>
                </ul>
              </section>
            </nav>
          </div>
        </div>
      </div>
    </div>