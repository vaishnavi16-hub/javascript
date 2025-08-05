

function getAdd() {


//Fetch thevalue of input with id val1
const num1 = Number(document.getElementById("val1").value);

//Fetc h the value of input with id val2...

const num2 = Number(document.getElementById("val2").value);

const add = num1 + num2;
console.log(add);

//Display the result in paragraph using dom
document.getElementById("result").innerHTML ="Addition :" +add;

//Changes the color of paragraph tag with red..
document.getElementById("result").style.color = "red";

}