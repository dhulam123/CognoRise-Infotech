var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var male = document.getElementById("m");
var female = document.getElementById("f");
var form = document.getElementById("form");
let resultArea = document.querySelector(".comment");

modalContent = document.querySelector(".modal-content");
modalText = document.querySelector("#modalText");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];


function calculate(){
 
  if(age.value=='' || height.value=='' || weight.value=='' || (male.checked==false && female.checked==false)){
    modal.style.display = "block";
    modalText.innerHTML = `All fields are required!`;

  }else{
    countBmi();
  }

}


function countBmi(){
  var p = [age.value, height.value, weight.value];
  if(male.checked){
    p.push("male");
  }else if(female.checked){
    p.push("female");
  }

  var bmi = Number(p[2])/(Number(p[1])/100*Number(p[1])/100);
      
  var result = '';
  var change=document.querySelector(".comment");
  if(bmi<18.5){
    change.style.color="red";
    result = 'Underweight';
     }else if(18.5<=bmi&&bmi<=24.9){
    change.style.color="green";
    result = 'Healthy';
     }else if(25<=bmi&&bmi<=29.9){
    change.style.color="red";
    result = 'Overweight';
     }else if(30<=bmi&&bmi<=34.9){
    change.style.color="red";
    result = 'Obese';
     }else if(35<=bmi){
    change.style.color="red";
    result = 'Extremely obese';
     }



resultArea.style.display = "block";
document.querySelector(".comment").innerHTML = `You are ${result}`;
document.querySelector("#result").innerHTML = bmi.toFixed(2);

}


span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
