var answer = "Bez pracy nie ma kołaczy";
answer = answer.toLowerCase();
var answerLength = answer.length;
var answerHidden = "";
var incorrectCount = 0;

for(i = 0; i < answerLength; i++)
{
  if(answer.charAt(i) == " ") answerHidden = answerHidden + " ";
  else answerHidden = answerHidden + "-";
}

function showAnswer()
{
  document.getElementById("board").innerHTML = answerHidden;
}

window.onload = start;
var letters = ['a','ą','b','c','ć','d','e','ę','f','g','h','i','j','k','l','ł','m','n','ń','o','ó','p','q','r','s','ś','t','u','v','w','x','y','z','ż','ź'];

function start()
{
  var div_letter = "";

  for(i = 0; i < 35; i++)
  {
    div_letter = div_letter + '<div class="letter" onclick="check('+ i +')" id="letter'+ i + '">' + letters[i] + '</div>';
    if((i + 1) % 7 == 0) div_letter = div_letter + '<div style="clear:both;></div>"';
  }

  document.getElementById("alphabet").innerHTML = div_letter;

  showAnswer();
}

String.prototype.setChar = function(index, char)
{
  if(index > this.length - 1) return this.toString();
  else return this.substr(0, index) + char + this.substr(index+1);
}

function check(letterIdx)
{
  var correct = false;

  for(i=0; i < answerLength; i++)
  {
    if(answer.charAt(i) == letters[letterIdx])
    {
      answerHidden = answerHidden.setChar(i, letters[letterIdx]);
      correct = true;

    }
  }

  if(correct == true)
  {
    var element = "letter" + letterIdx
    document.getElementById(element).style.background = "#003300";
    document.getElementById(element).style.color = "#00C000";
    document.getElementById(element).style.border = "3px solid #00C000";
    document.getElementById(element).style.cursor = "default";
    showAnswer();

  }
  else
  {
    var element = "letter" + letterIdx
    document.getElementById(element).style.background = "#330000";
    document.getElementById(element).style.color = "#C00000";
    document.getElementById(element).style.border = "3px solid #C00000";
    document.getElementById(element).style.cursor = "default";
    document.getElementById(element).setAttribute("onclick",";");

    incorrectCount++;
    var image = "img/s" + incorrectCount + ".jpg";
    document.getElementById("hangman").innerHTML = '<img src="'+ image +'" alt=""/>';
  }

  if(answer == answerHidden)
  {
    answer.charAt(0).toUpperCase();
    document.getElementById("alphabet").innerHTML = "You guessed! The answer is: " + answer +
    '<br/><br/><span class="reset" onclick="location.reload()">Play again</span>';
  }

  if(incorrectCount>= 9)
  {
    answer.setChar(0, answer.charAt(0).toUpperCase());
    document.getElementById("alphabet").innerHTML = "You lose! The answer is: <br/>" + answer +
    '<br/><br/><span class="reset" onclick="location.reload()">Play again</span>';
  }
}
