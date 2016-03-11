var $h2Above = $('<h2>');
var $h2Below = $('<h2>');
var $ulAbove = $('<ul>');
var $ulBelow = $('<ul>');

$h2Below.html('below ground veggies');
$('body').append($h2Above);
$('body').append($ulAbove);

$h2Above.html('Above ground veggies');
$('body').append($h2Below);
$('body').append($ulBelow);

$('ul li').each(function() {
  if ($(this).hasClass('above')){
    $ulAbove.append($(this));
} else {
    $ulBelow.append($(this));
}
});
