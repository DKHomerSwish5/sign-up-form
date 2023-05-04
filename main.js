let firstName = document.querySelector('[id^="firstname"]');
let lastName = document.querySelector('[id^="lastname"]');
let email = document.querySelector('[id^="email"]');
let phoneNumber = document.querySelector('[id^="phone-number"]');
let password = document.querySelector('[id^="password"]');
let cPassword = document.querySelector('[id^="confirm"]');
let myBtn = document.querySelector('[button$="button"]');
let firstNameInput;
let lastNameInput;
myBtn.addEventListener('click',buttonClick);
function buttonClick(){
    
}
firstName.addEventListener('input',updateFirstName);
email.addEventListener('input',validEmailEntry)
function updateFirstName(){
    firstNameInput = firstName.value;
}
function updateLastName(){
    lastNameInput = lastName.value;
}
function validEmailEntry(emailInput){
    let emailCheck = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    if(emailCheck.test(emailInput)){
        return true;
    }
    else{
        return "Please enter a valid email address";
    }
}
