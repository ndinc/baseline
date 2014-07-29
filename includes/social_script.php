  <?php $social_scripts = array(
    'facebook',
    'twitter',
    // 'google',
    // 'hatena',
    // 'pocket',
    // 'evernote',
  ); ?>

  <?php if (in_array('facebook', $social_scripts)): ?>
  <!-- facebook -->
  <script>
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  </script>
  <!-- //facebook -->
  <?php endif ?>

  <?php if (in_array('twitter', $social_scripts)): ?>
  <!-- twitter -->
  <script>
    !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');
  </script>
  <!-- //twitter -->
  <?php endif ?>

  <?php if (in_array('google', $social_scripts)): ?>
  <!-- 最後の +1 ボタン タグの後に次のタグを貼り付けてください。 -->
  <script type="text/javascript">
    window.___gcfg = {lang: 'ja'};
    (function() {
      var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
      po.src = 'https://apis.google.com/js/platform.js';
      var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
    })();
  </script>
  <?php endif ?>

  <?php if (in_array('hatena', $social_scripts)): ?>
  <!-- hatena -->
  <script type="text/javascript" src="http://b.st-hatena.com/js/bookmark_button.js" charset="utf-8" async="async"></script>
  <!-- //hatena -->
  <?php endif ?>

  <?php if (in_array('pocket', $social_scripts)): ?>
  <!-- pocket -->
  <script type="text/javascript">!function(d,i){if(!d.getElementById(i)){var j=d.createElement("script");j.id=i;j.src="https://widgets.getpocket.com/v1/j/btn.js?v=1";var w=d.getElementById(i);d.body.appendChild(j);}}(document,"pocket-btn-js");</script>
  <!-- //pocket -->
  <?php endif ?>

  <?php if (in_array('evernote', $social_scripts)): ?>
  <!-- evernote -->
  <script type="text/javascript" src="http://static.evernote.com/noteit.js"></script>
  <!-- //evernote -->
  <?php endif ?>


  <!-- google analytics -->
  <script type="text/javascript">
    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'xxx']);
    _gaq.push(['_trackPageview']);
    (function() {
      var ga = document.createElement('script'); ga.type = "text/javascript"; ga.async = true;
      ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
      var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    })();
  </script>
  <!-- //google analytics -->