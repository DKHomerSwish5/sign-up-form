let firstName = document.getElementById("firstname");
let lastName = document.getElementById("lastname");
let email = document.getElementById("user-email");
let phoneNumber = document.getElementById("phone-number");
let password = document.getElementById("user-password");
let cPassword = document.getElementById("confirm-user-pword");
let firstNameInput;
let lastNameInput;
let numberInput;
let emailInput;
let passwordInput;
let cPasswordInput;

firstName.addEventListener('input',updateFirstName);
lastName.addEventListener('input',updateLastName);
email.addEventListener('input',updateEmail);
phoneNumber.addEventListener('input',updateNumber);
password.addEventListener('input',passwordUpdate);
cPassword.addEventListener('input',cPasswordUpdate);

function updateFirstName(){
    firstNameInput = firstName.value;
}
function updateLastName(){
    lastNameInput = lastName.value;
}
function updateEmail(){
    emailInput = email.value;
}
function updateNumber(){
    numberInput = phoneNumber.value;
}
function passwordUpdate(){
    passwordInput = password.value;
}
function cPasswordUpdate(){
    cPasswordInput = cPassword.value;
    if(passwordInput===cPasswordInput){
        cPassword.setCustomValidity("");
        return
    }
    else{
        cPassword.setCustomValidity("Passwords do not match");
        cPassword.reportValidity();
    }
}

  
  
  
  
  
  
