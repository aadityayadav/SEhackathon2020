


var firstlang;
var secondlang;
var chosentopic;

var lang = document.querySelectorAll(".btn")
 for (var i = 0; i < lang.length; i++) {
   lang[i].addEventListener('click',assign1)
   lang[i].addEventListener('dblclick',assign2)
      lang[i].addEventListener('click',function(){
        this.style.backgroundColor="red";
      })
 }
 function assign1(){
    secondlang= this.textContent;
    console.log(secondlang+"1");

}

  function assign2(){
     firstlang= this.textContent;
     console.log(firstlang+"2");
     this.style.backgroundColor="blue";

  }

var displaylang= document.querySelector("#check")
 displaylang.addEventListener('click',function(){
   alert("First language chosen is:"+ firstlang +"Second language chosen is:" + secondlang);
 })


 var topicchosen = document.querySelectorAll(".list-group-item")
  for (var i = 0; i < topicchosen.length; i++) {
    topicchosen[i].addEventListener('click',assign3)
      topicchosen[i].addEventListener('click',function(){
         this.style.color="red";
       })
  }

function assign3(){
  chosentopic= this.textContent;
  console.log(chosentopic+"3");
}



var output= document.querySelector(".dispoutput")
output.addEventListener("click",display)

function display(){

if (chosentopic=="Comment" && (firstlang=="JAVA" || secondlang=="JAVA")) {
  var y = document.createElement("div");
  y.innerHTML = '<img src="Java/JAcomment.png">';
  document.body.appendChild(y);

}

if (chosentopic=="Data Type" && (firstlang=="JAVA" ||secondlang=="JAVA")) {
  var y = document.createElement("div");
  y.innerHTML = '<img src="Java/JAdata.png">';
  document.body.appendChild(y);

}

if (chosentopic=="Concatentation" && (firstlang=="JAVA" ||secondlang=="JAVA")) {
  var y = document.createElement("div");
  y.innerHTML = '<img src="Java/JAconcat.png">';
  document.body.appendChild(y);

}

if (chosentopic=="Arithmetic" && (firstlang=="JAVA"|| secondlang=="JAVA")) {
  var y = document.createElement("div");
  y.innerHTML = '<img src="Java/JAari.png">';
  document.body.appendChild(y);

}
if (chosentopic=="Boolean" && (firstlang=="JAVA" || secondlang=="JAVA")) {
  var y = document.createElement("div");
  y.innerHTML = '<img src="Java/JAbool.png">';
  document.body.appendChild(y);

}
if (chosentopic=="Input" && (firstlang=="JAVA" || secondlang=="JAVA")) {
  var y = document.createElement("div");
  y.innerHTML = '<img src="Java/JAinput.png">';
  document.body.appendChild(y);

}
if (chosentopic=="Print" && (firstlang=="JAVA" || secondlang=="JAVA")) {
  var y = document.createElement("div");
  y.innerHTML = '<img src="Java/JAprint.png">';
  document.body.appendChild(y);
}
if (chosentopic=="Print Variable" && (firstlang=="JAVA" || secondlang=="JAVA")) {
  var y = document.createElement("div");
  y.innerHTML = '<img src="Java/JAprintvar.png">';
  document.body.appendChild(y);
}
if (chosentopic=="Reassign" && (firstlang=="JAVA" ||secondlang=="JAVA")) {
  var y = document.createElement("div");
  y.innerHTML = '<img src="Java/JAreass.png">';
  document.body.appendChild(y);
}
if (chosentopic=="Declaring" && (firstlang=="JAVA" ||secondlang=="JAVA")) {
  var y = document.createElement("div");
  y.innerHTML = '<img src="Java/JAdec.png">';
  document.body.appendChild(y);
}
if (chosentopic=="Loops" && (firstlang=="JAVA" ||secondlang=="JAVA")) {
  var y = document.createElement("div");
  y.innerHTML = '<img src="Java/JAloops.png">';
  document.body.appendChild(y);
}
if (chosentopic=="Lists" && (firstlang=="JAVA" ||secondlang=="JAVA")) {
  var y = document.createElement("div");
  y.innerHTML = '<img src="Java/JAarray.png">';
  document.body.appendChild(y);
}
if (chosentopic=="If else" && (firstlang=="JAVA" ||secondlang=="JAVA")) {
  var y = document.createElement("div");
  y.innerHTML = '<img src="Java/JAifelse.png">';
  document.body.appendChild(y);
}
if (chosentopic=="Function" && (firstlang=="JAVA"||secondlang=="JAVA")) {
  var y = document.createElement("div");
  y.innerHTML = '<img src="Java/JAmethod.png">';
  document.body.appendChild(y);
}





if (chosentopic=="Comment" && (firstlang=="C++" || secondlang=="C++")) {
  var z = document.createElement("div");
  z.innerHTML = '<img src="CPPscreenshots/CPPcomment.png">';
  document.body.appendChild(z);
}

if (chosentopic=="Data Type" && (firstlang=="C++"|| secondlang=="C++")) {
  var z = document.createElement("div");
  z.innerHTML = '<img src="CPPscreenshots/CPPdatatype.png">';
  document.body.appendChild(z);
}
if (chosentopic=="Concatentation" && (firstlang=="C++" ||secondlang=="C++")) {
  var z = document.createElement("div");
  z.innerHTML = '<img src="CPPscreenshots/CPPconcattenation.png">';
  document.body.appendChild(z);
}

if (chosentopic=="Arithmetic" && (firstlang=="C++" ||secondlang=="C++")) {
  var z = document.createElement("div");
  z.innerHTML = '<img src="CPPscreenshots/CPParithmetic.png">';
  document.body.appendChild(z);
}
if (chosentopic=="Boolean" && (firstlang=="C++" ||secondlang=="C++")) {
  var z = document.createElement("div");
  z.innerHTML = '<img src="CPPscreenshots/CPPboolean.png">';
  document.body.appendChild(z);
}
if (chosentopic=="Input" && (firstlang=="C++" ||secondlang=="C++")) {
  var z = document.createElement("div");
  z.innerHTML = '<img src="CPPscreenshots/CPPinput.png">';
  document.body.appendChild(z);
}
if (chosentopic=="Print" && (firstlang=="C++" ||secondlang=="C++")) {
  var z = document.createElement("div");
  z.innerHTML = '<img src="CPPscreenshots/CPPprint.png">';
  document.body.appendChild(z);
}
if (chosentopic=="Print Variable" && (firstlang=="C++" ||secondlang=="C++")) {
  var z = document.createElement("div");
  z.innerHTML = '<img src="CPPscreenshots/CPPprintvar.png">';
  document.body.appendChild(z);
}
if (chosentopic=="Reassign" && (firstlang=="C++" ||secondlang=="C++")) {
  var z = document.createElement("div");
  z.innerHTML = '<img src="CPPscreenshots/CPPreassign.png">';
  document.body.appendChild(z);
}
if (chosentopic=="Declaring" && (firstlang=="C++" ||secondlang=="C++")) {
  var z = document.createElement("div");
  z.innerHTML = '<img src="CPPscreenshots/CPPdeclaring.png">';
  document.body.appendChild(z);
}
if (chosentopic=="Loops" && (firstlang=="C++" ||secondlang=="C++")) {
  var z = document.createElement("div");
  z.innerHTML = '<img src="CPPscreenshots/CPPloops.png">';
  document.body.appendChild(z);
}
if (chosentopic=="Lists" && (firstlang=="C++" ||secondlang=="C++")) {
  var z = document.createElement("div");
  z.innerHTML = '<img src="CPPscreenshots/CPPlist.png">';
  document.body.appendChild(z);
}
if (chosentopic=="If else" && (firstlang=="C++" ||secondlang=="C++")) {
  var z = document.createElement("div");
  z.innerHTML = '<img src="CPPscreenshots/CPPifelse.png">';
  document.body.appendChild(z);
}
if (chosentopic=="Function" && (firstlang=="C++"||secondlang=="C++")) {
  var z = document.createElement("div");
  z.innerHTML = '<img src="CPPscreenshots/CPPfunction.png">';
  document.body.appendChild(z);
}







if (chosentopic=="Comment" && (firstlang=="PYTHON" || secondlang=="PYTHON")) {
  var z = document.createElement("div");
  z.innerHTML = '<img src="PythonScreenshots/comment.png">';
  document.body.appendChild(z);
}

if (chosentopic=="Data Type" && (firstlang=="PYTHON"|| secondlang=="PYTHON")) {
  var z = document.createElement("div");
  z.innerHTML = '<img src="PythonScreenshots/data.png">';
  document.body.appendChild(z);
}
if (chosentopic=="Concatentation" && (firstlang=="PYTHON" ||secondlang=="PYTHON")) {
  var z = document.createElement("div");
  z.innerHTML = '<img src="PythonScreenshots/concat.png">';
  document.body.appendChild(z);
}

if (chosentopic=="Arithmetic" && (firstlang=="PYTHON" ||secondlang=="PYTHON")) {
  var z = document.createElement("div");
  z.innerHTML = '<img src="PythonScreenshots/arithmetic.png">';
  document.body.appendChild(z);
}
if (chosentopic=="Boolean" && (firstlang=="PYTHON" ||secondlang=="PYTHON")) {
  var z = document.createElement("div");
  z.innerHTML = '<img src="PythonScreenshots/boolean.png">';
  document.body.appendChild(z);
}
if (chosentopic=="Input" && (firstlang=="PYTHON" ||secondlang=="PYTHON")) {
  var z = document.createElement("div");
  z.innerHTML = '<img src="PythonScreenshots/input.png">';
  document.body.appendChild(z);
}
if (chosentopic=="Print" && (firstlang=="PYTHON" ||secondlang=="PYTHON")) {
  var z = document.createElement("div");
  z.innerHTML = '<img src="PythonScreenshots/print.png">';
  document.body.appendChild(z);
}
if (chosentopic=="Print Variable" && (firstlang=="PYTHON" ||secondlang=="PYTHON")) {
  var z = document.createElement("div");
  z.innerHTML = '<img src="PythonScreenshots/printv.png">';
  document.body.appendChild(z);
}
if (chosentopic=="Reassign" && (firstlang=="PYTHON" ||secondlang=="PYTHON")) {
  var z = document.createElement("div");
  z.innerHTML = '<img src="PythonScreenshots/reassigning.png">';
  document.body.appendChild(z);
}
if (chosentopic=="Declaring" && (firstlang=="PYTHON" ||secondlang=="PYTHON")) {
  var z = document.createElement("div");
  z.innerHTML = '<img src="PythonScreenshots/declaring.png">';
  document.body.appendChild(z);
}
if (chosentopic=="Loops" && (firstlang=="PYTHON" ||secondlang=="PYTHON")) {
  var z = document.createElement("div");
  z.innerHTML = '<img src="PythonScreenshots/PYloops.png">';
  document.body.appendChild(z);
}
if (chosentopic=="Lists" && (firstlang=="PYTHON" ||secondlang=="PYTHON")) {
  var z = document.createElement("div");
  z.innerHTML = '<img src="PythonScreenshots/List.png">';
  document.body.appendChild(z);
}
if (chosentopic=="If else" && (firstlang=="PYTHON" ||secondlang=="PYTHON")) {
  var z = document.createElement("div");
  z.innerHTML = '<img src="PythonScreenshots/If_else.png">';
  document.body.appendChild(z);
}
if (chosentopic=="Function" && (firstlang=="PYTHON"||secondlang=="PYTHON")) {
  var z = document.createElement("div");
  z.innerHTML = '<img src="PythonScreenshots/Functions.png">';
  document.body.appendChild(z);
}







if (chosentopic=="Comment" && (firstlang=="JAVASCRIPT" || secondlang=="JAVASCRIPT")) {
  var x = document.createElement("div");
  x.innerHTML = '<img src="javascriptscreenshots/commentjs.png">';
  document.body.appendChild(x);

}

if (chosentopic=="Data Type" && (firstlang=="JAVASCRIPT" ||secondlang=="JAVASCRIPT")) {
  var x = document.createElement("div");
  x.innerHTML = '<img src="javascriptscreenshots/datatypejs.png">';
  document.body.appendChild(x);
}
if (chosentopic=="Concatentation" && (firstlang=="JAVASCRIPT"|| secondlang=="JAVASCRIPT")) {
  var x = document.createElement("div");
  x.innerHTML = '<img src="javascriptscreenshots/concatjs.png">';
  document.body.appendChild(x);

}

if (chosentopic=="Arithmetic" && (firstlang=="JAVASCRIPT" ||secondlang=="JAVASCRIPT")) {
  var x = document.createElement("div");
  x.innerHTML = '<img src="javascriptscreenshots/arithmeticjs.png">';
  document.body.appendChild(x);
}
if (chosentopic=="Boolean" && (firstlang=="JAVASCRIPT" ||secondlang=="JAVASCRIPT")) {
  var x = document.createElement("div");
  x.innerHTML = '<img src="javascriptscreenshots/booleanjs.png">';
  document.body.appendChild(x);
}
if (chosentopic=="Input" && (firstlang=="JAVASCRIPT" ||secondlang=="JAVASCRIPT")) {
  var x = document.createElement("div");
  x.innerHTML = '<img src="javascriptscreenshots/inputjs.png">';
  document.body.appendChild(x);
}
if (chosentopic=="Print" && (firstlang=="JAVASCRIPT" ||secondlang=="JAVASCRIPT")) {
  var x = document.createElement("div");
  x.innerHTML = '<img src="javascriptscreenshots/printjs.png">';
  document.body.appendChild(x);
}
if (chosentopic=="Print Variable" && (firstlang=="JAVASCRIPT" ||secondlang=="JAVASCRIPT")) {
  var x = document.createElement("div");
  x.innerHTML = '<img src="javascriptscreenshots/printvjs.png">';
  document.body.appendChild(x);
}
if (chosentopic=="Reassign" && (firstlang=="JAVASCRIPT" ||secondlang=="JAVASCRIPT")) {
  var x = document.createElement("div");
  x.innerHTML = '<img src="javascriptscreenshots/reassignjs.png">';
  document.body.appendChild(x);
}
if (chosentopic=="Declaring" && (firstlang=="JAVASCRIPT" ||secondlang=="JAVASCRIPT")) {
  var x = document.createElement("div");
  x.innerHTML = '<img src="javascriptscreenshots/declarejs.png">';
  document.body.appendChild(x);
}
if (chosentopic=="Loops" && (firstlang=="JAVASCRIPT" ||secondlang=="JAVASCRIPT")) {
  var x = document.createElement("div");
  x.innerHTML = '<img src="javascriptscreenshots/loopjs.png">';
  document.body.appendChild(x);
}
if (chosentopic=="Lists" && (firstlang=="JAVASCRIPT" ||secondlang=="JAVASCRIPT")) {
  var x = document.createElement("div");
  x.innerHTML = '<img src="javascriptscreenshots/listsandarrayjs.png">';
  document.body.appendChild(x);
}
if (chosentopic=="If else" && (firstlang=="JAVASCRIPT" ||secondlang=="JAVASCRIPT")) {
  var x = document.createElement("div");
  x.innerHTML = '<img src="javascriptscreenshots/ifelsejs.png">';
  document.body.appendChild(x);
}
if (chosentopic=="Function" && (firstlang=="JAVASCRIPT"||secondlang=="JAVASCRIPT")) {
  var x = document.createElement("div");
  x.innerHTML = '<img src="javascriptscreenshots/functionjs.png">';
  document.body.appendChild(x);
}




}
