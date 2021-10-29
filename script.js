let theme = localStorage.getItem('theme');

if(theme == null){
    setTheme('light');
}else{
    setTheme(theme);
}

let themeDots = document.getElementsByClassName('theme-dot');

for (var i =0; themeDots.length > i; i++){
    themeDots[i].addEventListener('click', function(){
        let mode = this.dataset.mode
        setTheme(mode);
    })
}

function setTheme(mode){
    if(mode == 'light'){
        document.getElementById('theme-style').href = 'default.css';
    }
    if(mode == 'blue'){
        document.getElementById('theme-style').href = 'blue.css';
    }
    if(mode == 'green'){
        document.getElementById('theme-style').href = 'green.css';
    }
    if(mode == 'purple'){
        document.getElementById('theme-style').href = 'purple.css';
    }

    localStorage.setItem('theme', mode);
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// sweet alert 
function success(){
    swal({
        title: "Thank you",
        text: "Message sent",
        icon: "success",
        button: "ok",
    });
}

function error(){
    swal({
        title: "Error",
        text: "Something went wrong, please try again",
        icon: "error",
        button: "ok",
    });
}

function inputEmpty(){
    swal({
        title: "oops",
        text: "please fill all the fields in the form",
        icon: "error",
        button: "ok",
    });
}

(function() {
    // https://dashboard.emailjs.com/admin/integration
    emailjs.init('user_AnV7FaeNzFLZsng3ruP5t');
})();

let subject = document.getElementById("subject");
let username = document.getElementById("name");
let email = document.getElementById("email");
let message = document.getElementById("message");
let submit = document.querySelector(".send");

submit.addEventListener("click", (e) =>{
    if(subject.value =="" || username.value =="" || email.value ==""){
        inputEmpty();

        e.preventDefault();
    }else{
        sendMail();
    }
})

function sendMail(params){

    var templateParams = {
        subject: document.getElementById("subject").value,
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };


        emailjs.send('service_pt3yxoc', 'template_byxqpr4', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            success();
            setInterval( () =>window.location.reload(true), 3000);
        }, function(error) {
            console.log('FAILED...', error);
            error();
        });
    
    
}