
function sendEmail() {
  var email = document.querySelector("#email").value;
  var subject = document.querySelector("#sub").value;
  var body =document.querySelector("#body").value;
  window.location.href = 'mailto:' + email + '?subject=' + subject + '&body=' + body;
  
}



// let hambtn = document.querySelector(".navbtn1");
// hambtn.addEventListener("
let display = () => {

  let resnav= document.querySelector(".resp-ul");
  resnav.style.display="block";
console.log("working")
let hambtn = document.querySelector(".navbtn1");
 hambtn.style.display="none";
}

// let rembtn=document.querySelector(".navbtn2");
// rembtn.addEventListener("
let Remove = () => {
  let rem = document.querySelector(".resp-ul");
  rem.style.display="none";
  let hambtn = document.querySelector(".navbtn1");
 hambtn.style.display="block";
  console.log("working")

}