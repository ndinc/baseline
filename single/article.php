  <div id="main">
    <div class="row">
      <div class="small-12 medium-12 large-12 columns">
        <div class="article">
          <a href="<?php echo get_permalink(); ?>">
            <h2><?php echo get_the_title(); ?></h2>
            <p><?php echo get_the_content(); ?></p>
            <?php $term = get_post_terms('category'); ?>
            <a href="<?php echo get_term_link($post['category'], 'category'); ?>"><?php echo $term['name'] ?></a>
          </a>
        </div>
      </div>
    </div>
  </div>
