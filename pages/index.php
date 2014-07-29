  <div id="main">
    <div class="row">
      <div class="small-12 medium-12 large-12 columns">
        <h1><img src="/images/nd_logo.png" alt="ndinc" class="is-wide"><span class="is-narrow">nD inc</span></h1>
        <ul class="small-block-grid-2 medium-block-grid-3 large-block-grid-4 articles">
        <?php  $wp_post_query = get_post_query('article', -1); ?>
        <?php  while ($wp_post_query->have_posts()) : $wp_post_query->the_post(); ?>
          <?php include get_sitepath('directory').'includes/article.php'; ?>
        <?php  endwhile ?>
        </ul>
      </div>
    </div>
  </div>
