class Canvas
  constructor: (el)->
    @$el = $(el)
    canvas = @$el.get(0)
    return false unless canvas and canvas.getContext
    @ctx = canvas.getContext('2d')
    @fps = 100 # 1000 * 1 / @fps
    @speed = 1 # px/1ms
    @moving = false
    @currentNum = 0
    @_setCurrentTriangle()
    @_drowTriangle()
    @setClickEvent ()=>
      @next()


  _getTriangle: ->
    deg = 60
    rad = deg * Math.PI / 180
    y = 150 - (150 / 2) * Math.tan rad
    return [
      [
        {
          x: 0
          y: 150 - (y/2)
        }
        {
          x: 150 / 2
          y: y - (y/2)
        }
        {
          x: 150
          y: 150 - (y/2)
        }
      ]
      [
        {
          x: 100
          y: 100
        }
        {
          x: 150 / 2
          y: y - (y/2)
        }
        {
          x: 150
          y: 150 - (y/2)
        }
      ]
      [
        {
          x: 150
          y: 150
        }
        {
          x: 150 / 2
          y: 150 / 2
        }
        {
          x: 150
          y: 150 - (y/2)
        }
      ]
    ]


  setClickEvent: (callback)->
    @$el.on 'click', (e)=>
      $el = $(e.currentTarget)
      callback($el)
      return false

  next:->
    @_setCurrentTriangle()
    unless @nextTriangle
      @prev()
      return false
    @targetTriangle = @nextTriangle
    @currentNum++
    @start()

  prev:->
    @_setCurrentTriangle()
    unless @prevTriangle
      return false
    @currentNum--
    @targetTriangle = @prevTriangle
    @start()

  start: ->
    @moving = true
    @_step()

  stop: ->
    @moving = false

  _movePosition: ->
    samePosCount = 0
    for i, v of @currentTriangle
      if @currentTriangle[i].y < @targetTriangle[i].y
        @currentTriangle[i].y = if @targetTriangle[i].y < @currentTriangle[i].y + @speed then @targetTriangle[i].y else @currentTriangle[i].y + @speed
      else
        @currentTriangle[i].y = if @targetTriangle[i].y > @currentTriangle[i].y - @speed then @targetTriangle[i].y else @currentTriangle[i].y - @speed
      if @currentTriangle[i].x < @targetTriangle[i].x
        @currentTriangle[i].x = if @targetTriangle[i].x < @currentTriangle[i].x + @speed then @targetTriangle[i].x else @currentTriangle[i].x + @speed
      else
        @currentTriangle[i].x = if @targetTriangle[i].x > @currentTriangle[i].x - @speed then @targetTriangle[i].x else @currentTriangle[i].x - @speed
      samePosCount++ if @currentTriangle[i].y == @targetTriangle[i].y and @currentTriangle[i].x == @targetTriangle[i].x
    if samePosCount == @currentTriangle.length
      @stop()

  _drowTriangle: ->
    @ctx.clearRect(0, 0, 300, 300)
    @ctx.beginPath()
    @ctx.moveTo @currentTriangle[0].x, @currentTriangle[0].y
    @ctx.lineTo @currentTriangle[1].x, @currentTriangle[1].y
    @ctx.lineTo @currentTriangle[2].x, @currentTriangle[2].y
    @ctx.closePath()
    @ctx.fillStyle = 'rgba(255, 0, 0, .1)'
    @ctx.fill()

    @ctx.fillStyle = "blue"
    @ctx.font = "30px 'ＭＳ ゴシック'"
    @ctx.textAlign = "left"
    @ctx.textBaseline = "top"
    @ctx.fillText 'text', 20, 50

  _setCurrentTriangle: ->
    triangles = @_getTriangle()
    @currentTriangle = triangles[ @currentNum ]
    @nextTriangle = if triangles[ @currentNum + 1 ] then triangles[ @currentNum + 1 ] else false
    @prevTriangle = if triangles[ @currentNum - 1 ] then triangles[ @currentNum - 1 ] else false

  _step: ->
    setTimeout =>
      @_movePosition()
      @_drowTriangle()
      @_step() if @moving
    , 1000 * 1 / @fps


