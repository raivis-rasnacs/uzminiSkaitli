var wins = 0, loses = 0;
function print_text() {
  var randomNumber = Math.floor(Math.random() * 5);
  var text = document.getElementById("number1").value;
  if (text == randomNumber) {
    alert("Uzminēji! Pareizais skaitlis ir "+randomNumber); 
    wins +=1 ;
    }
  else {
    alert("Neuzminēji! Pareizais skaitlis ir "+randomNumber);
    loses += 1;
  }
  document.getElementById("wins").innerHTML = "Uzvarēji " + wins + " reizes";
  document.getElementById("loses").innerHTML = "Zaudēji " + loses + " reizes";
}