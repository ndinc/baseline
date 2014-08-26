    <div id="footer">
      <p class="f-copyright"><i class="base_copyright"></i></p>
      <p class="f-logo"><a href="" title="" target="_blank"><i class="base_logo"></i></a></p>
    </div>
  </div>
  <?php if (is_develop()): ?>
    <script type="text/javascript" src="<?php sitepath('template_url'); ?>/javascripts/vendor.js"></script>
    <script type="text/javascript" src="<?php sitepath('template_url'); ?>/javascripts/script.js"></script>
    <script src="http://localhost:35729/livereload.js"></script>
  <?php else: ?>
    <!--[if lt IE 9]>
      <script src="//cdnjs.cloudflare.com/ajax/libs/css3pie/2.0beta1/PIE_IE678.js"></script>
    <![endif]-->
    <!--[if IE 9]>
      <script type="text/javascript" src="http://cdnjs.cloudflare.com/ajax/libs/css3pie/2.0beta1/PIE_IE9.js"></script>
    <![endif]-->
    <script type="text/javascript" src="<?php sitepath('template_url'); ?>/javascripts/script.min.js"></script>
  <?php endif; ?>
  <?php include 'includes/social_script.php' ?>
  <?php if (function_exists('wp_footer')) wp_footer(); ?>
  </body>
</html>