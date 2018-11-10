function check()
{
  var number = document.getElementById("field").value;
  if(number > 0)document.getElementById("result").innerHTML = "positive"
  else if (number < 0)document.getElementById("result").innerHTML = "negative"
  else if (number == 0)document.getElementById("result").innerHTML = "zero"
  else document.getElementById("result").innerHTML = "not number"
}

function displayvalues()
{
  var field1Value = document.getElementById("field1").value;
  var field2Value = document.getElementById("field2").value;
  var result = "";
  if(!isNaN(field1Value) && !isNaN(field2Value))
  {
    if(field1Value === "" && field2Value === "") result = "";
    else if(field1Value !== "") result = field1Value;
    else if(field2Value !== "") result = field2Value;
    else if(field1Value > field2Value)
    {
      for(i = field2Value; i <= field1Value; i++) result += i + " ";
    }
    else if (field1Value < field2Value)
    {
      for(i = field1Value; i <= field2Value; i++) result += i + " ";
    }
  }
  else result = "not a number";

  document.getElementById("resultp2").innerHTML = result;
}
