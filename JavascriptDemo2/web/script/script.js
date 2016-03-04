//
////1
//
//var divs = document.getElementsByTagName("div");
//
//for (var i = 0; i < divs.length; i++) {
//    divs[i].style.backgroundColor = "Red";
//}
////2
//var stud1 = {firstName: "Per", lastName: "Mortensen", email: "per@per.dk"};
//var stud5 = {firstName: "Kirstn", lastName: "Petersen", email: "kirs@kirs.dk"};
//var stud2 = {firstName: "Mogens", lastName: "Mikkelsen", email: "mog@mog.dk"};
//
//
//var studArrayUnsort = [stud1, stud2, stud5];
//
//
//document.write("<table border=" + 1 + ">");
//for (var i = 0; i < studArrayUnsort.length; i++) {
//    document.write("<tr><td>First name: </td>");
//    document.write("<td>" + studArrayUnsort[i].firstName + "</td></tr>");
//    document.write("<tr><td>Last name: </td>");
//    document.write("<td>" + studArrayUnsort[i].lastName + "</td></tr>");
//    document.write("<tr><td>Email: </td>");
//    document.write("<td>" + studArrayUnsort[i].email + "</td></tr>");
//
//
//}
//document.write("</table>");
////3 +++ 4
//
//var greenDiv = document.getElementById("green");
//greenDiv.onclick = function(){console.log("Clicked green!");};
//var redDiv = document.getElementById("red");
//redDiv.onclick = function(){console.log("Clicked red!");};
//var yellowDiv = document.getElementById("yellow");
//yellowDiv.onclick = function(){console.log("Clicked yellow!");};
//
//greenDiv.onmouseover = function(){greenDiv.innerHTML = "ballsy";};
//greenDiv.onmouseout = function(){greenDiv.innerHTML = "balls";};
//
//redDiv.onmouseover = function(){redDiv.innerHTML = "red red red";};
//redDiv.onmouseout = function(){redDiv.innerHTML = "balls";};
//
//yellowDiv.onmouseover = function(){yellowDiv.innerHTML = "yellow yellow yellow";};
//yellowDiv.onmouseout = function(){yellowDiv.innerHTML = "balls";};
//
//
////5
//
//var form = document.getElementById("test");
//form.onsubmit = function () {
//    console.log(form.firstname.value);
//    console.log(form.box.checked);
//    var firstname = document.getElementsByName("firstname")[0];
//    var box = document.getElementsByName("box")[0].checked;
//
//
//
//    document.write("<table border=" + 1 + ">");
//    document.write("<tr><td>First name: </td>");
//    document.write("<td>" + firstname.value + "</td></tr>");
//    document.write("<tr><td>Box: </td>");
//    document.write("<td>" + box + "</td></tr>");
//    document.write("</table>");
//
//    return false;
//
//};
//6

//
//var one = document.getElementById("1");
//one.onclick = function(){console.log("test1");};
//
//var two = document.getElementById("2");
//two.onclick = function(){console.log("test2");};
//
//var three = document.getElementById("3");
//three.onclick = function(){console.log("test3");};
//
//var four = document.getElementById("4");
//four.onclick = function(){console.log("test4");};
//
//var five = document.getElementById("5");
//five.onclick = function(){console.log("test5");};
//
//var six = document.getElementById("6");
//six.onclick = function(){console.log("test6");};
//
//var seven = document.getElementById("7");
//seven.onclick = function(){console.log("test7");};
//
//var eight = document.getElementById("8");
//eight.onclick = function(){console.log("test8");};
//
//var nine = document.getElementById("9");
//nine.onclick = function(){console.log("test9");};
//
//var ten = document.getElementById("10");
//ten.onclick = function(){console.log("test10");};

//7



var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");
var zero = document.getElementById("zero");

var divide = document.getElementById("divide");
var minus = document.getElementById("minus");
var multiply = document.getElementById("multiply");
var comma = document.getElementById("comma");
var plus = document.getElementById("plus");
var equal = document.getElementById("equal");
var display = document.getElementById("display");




one.onclick = function(){display.innerHTML =  display.innerHTML + "1";};
two.onclick = function(){display.innerHTML =  display.innerHTML + "2";};
three.onclick = function(){display.innerHTML =  display.innerHTML + "3";};
four.onclick = function(){display.innerHTML =  display.innerHTML + "4";};
five.onclick = function(){display.innerHTML =  display.innerHTML + "5";};
six.onclick = function(){display.innerHTML =  display.innerHTML + "6";};
seven.onclick = function(){display.innerHTML =  display.innerHTML + "7";};
eight.onclick = function(){display.innerHTML =  display.innerHTML + "8";};
nine.onclick = function(){display.innerHTML =  display.innerHTML + "9";};
zero.onclick = function(){display.innerHTML =  display.innerHTML + "0";};

comma.onclick = function(){display.innerHTML =  display.innerHTML + ".";};
divide.onclick = function(){display.innerHTML =  display.innerHTML + "/";};
minus.onclick = function(){display.innerHTML =  display.innerHTML + "-";};
multiply.onclick = function(){display.innerHTML =  display.innerHTML + "*";};
plus.onclick = function(){display.innerHTML =  display.innerHTML + "+";};

equal.onclick = function(){
    display.innerHTML = eval(display.innerHTML);
};