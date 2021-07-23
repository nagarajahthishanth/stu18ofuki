var num1 = 5;
var num2 = 6;
function bba() {
  return (num1) + (num2);
}
function bbb() {
  return (num1) * (num2);
}
function bbc() {
  return (num1) - (num2);
}
function bbd() {
  return (num1) / (num2);
}
document.getElementById("q2in1").innerHTML = 'The addition of the tow number is ' + bba() + '<br>' +'The multiplication of the tow number is ' + bbb() + '<br>'
+'The multiplication of the tow number is ' + bbc() + '<br>'
+'The division of the tow number is ' + bbd();
