$ ->
  app = new App()

class App
  constructor: ()->
    @$body = $('body')
    @options =
      'pjax': true
      'foundation': true

    @initialize()

  initialize: ->
    @pjax = new Pjax
      el: '#main'
    @canvas = new Canvas '#main_canvas'

    if @$body.hasClass 'about'
      console.log  'about'

    if @options.foundation
      # http://foundation.zurb.com/docs/javascript.html
      $(document).foundation()
        # topbar :
        #   custom_back_text: false
        #   is_hover: true
        #   mobile_show_parent_link: true
    # twttr.widgets.load() if twttr
    # FB.XFBML.parse() if FB
