var number = Math.floor(Math.random()*5)+1;
var timer1 = 0;
var timer2 = 0;
function setslider(num)
{
  clearTimeout(timer1);
  clearTimeout(timer2);
  slidenum = num -1;

  hide();
  setTimeout("changeslide()", 500)
}

function hide()
{
  $("#slider").fadeOut(500);
}

function changeslide()
{
  number++;
  if(number>5) number=1;

  var file = "<img src=\"slides/"+number+".jpg\">";
  document.getElementById("slider").innerHTML = file;
  $("#slider").fadeIn(500);

  timer1 = setTimeout("changeslide()", 5000);
  timer2 = setTimeout("hide()", 4500);
}
