let btn = document.getElementById('btn');
let display = document.getElementById('display');
let number = document.getElementById('number').value;


btn.addEventListener('click', help)

function help() {
  let number = document.getElementById('number').value;
  let finalNum = Number(number);

  let number1 = document.getElementById('number1').value;
  let randomnumber = Math.floor(Math.random() * finalNum);

if(randomnumber == number1){
    display.innerHTML = "You are Correct! Your random number was " + randomnumber;
} else {
  display.innerHTML = "You are incorrect! Your random number was " + randomnumber;
      }
   }
 
 
