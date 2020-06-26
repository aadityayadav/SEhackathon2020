//var firstlang = prompt("Please enter the language you want to use")
//var rawcode = prompt("Please enter the proper syntax for your code")


var firstlang
var rawcode
var codes

function start()
{
  //rmlangs()
  //rmpage()
  //convert()
}

function transition1()
{
  rmlangs()
  showinput()
}

function transition2()
{
  rmpage()
  codes = convert()
  console.log(codes)
  putvals()
  showvalues()
}
function getJA()
{
  firstlang = document.getElementById('JA').value
  transition1()
  //console.log(firstlang)
  //start()
}

function getJS()
{
  firstlang = document.getElementById('JS').value
  transition1()
  //console.log(firstlang)
  //start()
}

function getPY()
{
  firstlang = document.getElementById('PY').value
  transition1()
  //console.log(firstlang)
  //start()
}

function getC()
{
  firstlang = document.getElementById('C').value
  transition1()
  //console.log(firstlang)
  //start()
}

function getcode()
{
  var inputval = document.getElementById('original').value
  rawcode = inputval
  transition2()
  //alert(rawcode)
}

function rmlangs()
{
  inputs = document.getElementsByClassName('buttons')
  for (i = 0; i < inputs.length; i++)
  {
    inputs[i].style.display = "none"
  }

  document.getElementsByTagName('h1')[0].style.display = 'none';
}

function showinput()
{
  inputs = document.getElementsByClassName('input')
  for (i = 0; i < inputs.length; i++)
  {
    inputs[i].style.display = "block"
  }


  document.getElementById('pt2').style.visibility = "visible";
}

function rmpage()
{
  inputs = document.getElementsByClassName('input')
  for (i = 0; i < inputs.length; i++)
  {
    inputs[i].style.display = "none"
  }

  document.getElementById('pt2').style.visibility = "hidden";
}

function showvalues()
{
  outputs = document.getElementsByClassName('output')
  for (i = 0; i < outputs.length; i++)
  {
    outputs[i].style.display = "block"
  }

  document.getElementById('pt3').style.visibility = "visible";

}

function putvals()
{
  document.getElementById('ja').innerHTML = codes[0];
  document.getElementById('js').innerHTML = codes[1];
  document.getElementById('py').innerHTML = codes[2];
  document.getElementById('c').innerHTML = codes[3];
  // var boxes = document.getElementsByClassName('text')
  // for (i = 0; i < boxes.length; i++)
  // {
  //   boxes[i].value = codes[i]
  // }
}

function convert(){
  var langs = ['Java', 'JS', 'Python', 'C++'];

  var master = [];

  var output = ['System.out.print', 'console.log', 'print', 'cout << '];
  var assign = ['=', '=', '=', '=']
  master.push(assign);
  master.push(output);

  var skill;
  var spot;

  switch (firstlang)
  {
    case 'Java':
      spot = 0;
      break;
    case 'JS':
      spot = 1;
      break;
    case 'Python':
      spot = 2;
      break;
    case 'C++':
      spot = 3;
      break;
  }


  for (i = 0; i < master.length; i++)
  {
    if (rawcode.includes(master[i][spot]))
    {
        skill = master[i];
        break;
    }
  }

  //console.log(skill)
  //console.log('sladowld')
  translated = [];

  switch (skill)
  {
    case output:
      if (spot == 3)
      {
        for (i = 0; i < 3; i++)
        {
          var translate = rawcode.replace(skill[3], skill[i]);
          var quotespot = translate.indexOf('"');
          translate = translate.substring(0, quotespot) + '(' + translate.substring(quotespot);
          quotespot = translate.lastIndexOf('"');
          translate = translate.substring(0, quotespot+1) + ')' + translate.substring(quotespot+1);

          if (i == 2)
          {
            translate = translate.substring(0, translate.length-1);
          }
          translated.push(translate);
        }
        translated.push(rawcode); //NEW
      }
      else
      {
        for (i = 0; i < 4; i++)
        {
          if (i == spot)
          {
            translated.push(rawcode); //NEW
          }
          else if (i != spot) //added else
          {
            if (i == 3)
            {
              var translate = rawcode.replace(skill[spot], skill[3]);
              var delspot1 = translate.indexOf('\(');
              var translate1 = translate.substring(0, delspot1) + translate.substring(delspot1+1);
              var delspot2 = translate1.indexOf(')');
              var translate2 = translate1.substring(0, delspot2) + translate1.substring(delspot2+1);
              if (translate2.charAt(translate2.length-1) != ';')
              {
                translate2 = translate2 + ';';
              }
              translated.push(translate2);
            }
            else
            {
              var translate = rawcode.replace(skill[spot], skill[i]);
              if (i == 0 && translate.charAt(translate.length-1) != ';')
              {
                translate = translate + ";";
              }
              else if (i == 2 && translate.charAt(translate.length-1) == ';')
              {
                translate = translate.substring(0, translate.length-1);
              }
              translated.push(translate);
            }
          }
        }
      }

      break;

      case assign:
        if (spot == 2)
        {
          for (i = 0; i < 4; i++)
          {
            if (i == spot) //new
            {
              translated.push(rawcode)
            }
            else if (i != spot) //added else
            {
              if (i == 0 || i == 3)
              {
                var translate;
                if (rawcode.includes('"'))
                {
                  translate = 'String ' + rawcode
                }
                else if (rawcode.includes('.'))
                {
                  translate = 'double ' + rawcode
                }
                else if (rawcode.includes('true') || rawcode.includes('false'))
                {
                  translate = 'boolean ' + rawcode
                }
                else
                {
                  translate = 'int ' + rawcode
                }
              }
              else if (i == 1)
              {
                translate = 'var ' + rawcode
              }
              translate = translate + ';'
              translated.push(translate)
            }

          }
        }
        else if (spot == 0 || spot == 3)
        {
          for (i = 0; i < 4; i ++)
          {
            var translate
            var translatelist = rawcode.split(" ")
            if (i == spot) //new
            {
              translated.push(rawcode);
            }
            else if (i != spot) //added else
            {
              if (i == 0 || i == 3) //(i == 0 ||
              {
                translate = rawcode;
              }
              else if (i == 2)
              {
                translate = ""
                for (j = 1; j < translatelist.length; j++)
                {
                  translate = translate + translatelist[j] + " "
                }
                translate = translate.substring(0, translate.length-2)
              }
              else if (i == 1)
              {
                translate = 'var '
                for (j = 1; j < translatelist.length; j++)
                {
                  translate = translate + translatelist[j] + " "
                }
              }
              translated.push(translate)
            }
          }
        }
        else
        {
          for (i = 0; i < 4; i ++)
          {
            var translate
            var translatelist = rawcode.split(" ")
            if (i == spot) // new
            {
              translated.push(rawcode)
            }
            else if (i != spot) // added else
            {
              if (i == 0 || i == 3)
              {
                if (rawcode.includes('"'))
                {
                  translate = 'String '
                  for (k = 1; k < translatelist.length; k ++)
                  {
                    translate = translate + translatelist[k] + " "
                  }
                }
                else if (rawcode.includes('.'))
                {
                  translate = 'double '
                  for (k = 1; k < translatelist.length; k ++)
                  {
                    translate = translate + translatelist[k] + " "
                  }
                }
                else if (rawcode.includes('true') || rawcode.includes('false'))
                {
                  translate = 'boolean '
                  for (k = 1; k < translatelist.length; k ++)
                  {
                    translate = translate + translatelist[k] + " "
                  }
                }
                else
                {
                  translate = 'int '
                  for (k = 1; k < translatelist.length; k ++)
                  {
                    translate = translate + translatelist[k] + " "
                  }
                }
              }
              else if (i == 2)
              {
                translate = ""
                for (j = 1; j < translatelist.length; j++)
                {
                  translate = translate + translatelist[j] + " "
                }
                translate = translate.substring(0, translate.length-2)
              }
              else if (i == 1)
              {
                translate = 'var '
                for (j = 1; j < translatelist.length; j++)
                {
                  translate = translate + translatelist[j] + " "
                }
              }
              translated.push(translate)
            }
          }
        }
  }

  return translated
  console.log(translated)

  for (item = 0; item < 4; item ++)
  {
    console.log(translated[item])
  }
}
