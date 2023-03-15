











function sendEmail() {
  var email = document.querySelector("#email").value;
  var subject = document.querySelector("#sub").value;
  var body =document.querySelector("#body").value;
  window.location.href = 'mailto:' + email + '?subject=' + subject + '&body=' + body;
  
}