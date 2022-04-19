//James

function myFunction() {
      var x = document.getElementById("myText").value;//Gets the shuz of the text
      document.getElementById("demo").innerHTML =("welcome   "+ x+"  !");
        align="center";
    }

function calc(func){
    var result = document.getElementById("result");
     var num1 = parseInt(document.getElementById("num1").value);
     var num2 = parseInt(document.getElementById("num2").value);//Get text numbers 1 and number 2
     if(isNaN(num1) || isNaN(num2)){
     alert("Please enter a number");
     return false;//Determine if it is a number
    }
     result.value = func(num1,num2);
    }
    function add(num1,num2){
    return num1+num2;//The numbers are added
    }
