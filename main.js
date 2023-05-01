let firstName = document.querySelector('[id^="firstname"]');
let lastName = document.querySelector('[id^="lastname"]');
let email = document.querySelector('[id^="email"]');
let phoneNumber = document.querySelector('[id^="phone-number"]');
let password = document.querySelector('[id^="password"]');
let cPassword = document.querySelector('[id^="confirm"]');
let myBtn = document.querySelector('[button$="button"]');
let firstNameInput;
myBtn.addEventListener('click',buttonClick);
function buttonClick(){
    
}
firstName.addEventListener('input',updateFirstName);
function updateFirstName(){
    firstNameInput = firstName.value;
}
