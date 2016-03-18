var $ball = $('.ball');
var $position = Math.random();

$('html').on('key-down', function (e) {
  var ballDown = $ball.down().top - 10;
  $ball.css('top', ballDown);
});

document.write($random)
