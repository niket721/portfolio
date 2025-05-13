const Nm = document.getElementsByClassName("name")[0];
const email = document.getElementsByClassName("email")[0];
const subject = document.getElementsByClassName("subject")[0];
const message = document.getElementsByClassName("message")[0];
const messagebtn = document.getElementsByClassName("mess-btn")[0];

const form = document.querySelector(".contact-form");

messagebtn.addEventListener('click', function(e) {
  e.preventDefault();
  if (Nm.value === "" || email.value === "" || subject.value === "" || message.value === "") {
    alert("Please fill all the fields properly!");
  } 
  else {
    alert("Message sent successfully!");
    form.reset();
  }
});
