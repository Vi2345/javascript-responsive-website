

let slidePosition=0;
const slides = document.getElementsByClassName('carousel-item');
const totalSlides=slides.length;

document.getElementById('carousel-button-next')
.addEventListener("click",function(){
    moveToNextSlide();

});

document.getElementById('carousel-button-prev')
.addEventListener("click",function(){
    moveToPrevSlide();

});

function updateSlidePosition(){
    for (let slide of slides){
        slide.classList.remove('carousel-item-visible');
        slide.classList.add('carousel-item-hidden');
    }
    slides[slidePosition].classList.add('carousel-item-visible');
    
}

function moveToNextSlide() {
    if (slidePosition === totalSlides - 1){
        slidePosition = 0;
    }
    else{
        slidePosition++;
    }

    updateSlidePosition();
}

function moveToPrevSlide() {
    if (slidePosition === 0){
        slidePosition = totalSlides - 1;
    }
    else{
        slidePosition--;
    }

    updateSlidePosition();
}

setInterval(()=>{
    if(slidePosition===totalSlides - 1){
    slidePosition = 0;
    }
    else{
        slidePosition++;
    }
    updateSlidePosition();

},5000);

const form = document.getElementById("form");
var nameField = document.getElementById("name");
var namelabel  = document.getElementById("name-label");
var nameerror = document.getElementById("name-error");
var emailField = document.getElementById("mail");
var emaillabel = document.getElementById("mail-label");
var emailerror = document.getElementById("e-error"); 
var detailField = document.getElementById("detail")
var detaillabel = document.getElementById("detail-label");
var detailerror = document.getElementById("d-error");

function validatename()
{
    if(nameField.value===""){
    nameerror.innerHTML="please enter the  name";
    nameField.style.border="2px solid red";
    return false;
    }
    else if(nameField.value.length<4 || nameField.value.length>15){
        nameerror.innerHTML="Characters of the  name should be Min 4 and Max 15";
        nameField.style.border="2px solid red";
        return false;
    }

    else{
        nameerror.innerHTML="";
        nameField.style.border="2px solid green";
        return true; 

    }

}

function validateemail()
{
    if(emailField.value===""){
        emailerror.innerHTML="please enter the E-Mail id";
        emailField.style.border="2px solid red";
        return false;
        }

        else if(!emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
            emailerror.innerHTML = "please enter a  valid E-mail ID";
            emailField.style.border = "2px solid red";
            return false;
         }
    
        else{
            emailerror.innerHTML="";
            emailField.style.border="2px solid green";
            return true; 
    
        }
}

function validatedetail(){
    
    
        if(detailField.value===""){
        detailerror.innerHTML="please enter the Details";
        detailField.style.border="2px solid red";
        return false;
        }
       
    
        else{
            detailerror.innerHTML="";
            detailField.style.border="2px solid green";
            return true; 
    
        }
    
    }


form.addEventListener('submit',e=>{
    e.preventDefault();
    checkinput();
   });

function checkinput(){
    const namevalue = nameField.value.trim();
    const emailvalue = emailField.value.trim();
    const detailvalue = detailField.value.trim();

    document.write(" Name:"+" "+namevalue + "<br>");
    document.write("Email id:"+" " + emailvalue + "<br>");
    document.write("Details:"+" " + detailvalue + "<br>");

}
