const form = document.querySelector('#myForm');
// Get the elements 
const firstnameInput = document.querySelector('#firstName');
const emailInput = document.querySelector('#emailAddress');
const firstnameError = document.querySelector('#firstName + .field-error');
const emailError = document.querySelector('#emailAddress + .field-error');
const lastnameInput = document.querySelector('#lastName');
const lastnameError = document.querySelector('#lastName + .field-error');
const closeBtn = document.getElementById('closeBtn');
function validateFirstName() {
    // remove any previous error message
    firstnameError.textContent = '';
    validateName(firstnameInput,firstnameError);

}
// Returns true if nameField is validated 
function validateName(nameField,nameErrroField){

    const nameRegex = /^[a-zA-Z\s]+$/;
    if (nameField.validity.valid) {
        const name = nameField.value.trim()
        if (name.length > 20)
        {
            nameErrroField.textContent = 'First name cannot be more than 20 characters';
            return false;
        }else if (!nameRegex.test(name)){
            nameErrroField.textContent = 'Please enter a valid name.';
            return false;
        }
    }else{
        nameErrroField.textContent = 'Please enter your name';
        
        return false;
    }
    // name field is valid
    return true;
}

function showNameError() {
    firstnameError.textContent = 'Please enter your name';
}
function validateEmail() {
    emailError.textContent = '';
    if (emailInput.validity.valid) {
    // Value is valid, so remove any previous error message
    emailError.textContent = '';
  } else {
    // Value is not valid, so display an error message
    showEmailError();
}
}
function showEmailError() {
    if (emailInput.validity.valueMissing) {
    // The field is empty
    emailError.textContent = 'Please enter your email address';
    } else if (emailInput.validity.typeMismatch) {
   // The field contains an invalid email address
    emailError.textContent = 'Your email address does not appear to be correct';
    }
}
 
function validateForm(event) {
    
   // Keep track of our validation "state"
   let formHasErrors = false;
   
   if (validateName(firstnameInput,firstnameError) == false) {
       // First Name input is invalid, show its error and change "state"
        formHasErrors = true;
   }

    if (!emailInput.validity.valid) {
     // Email input is invalid, show its error and change "state"
        formHasErrors = true;
        showEmailError();
    }
    // Check the "state" to see if the form should be submitted
    if (formHasErrors) {
       alert("Please enter proper Input Values");
       event.preventDefault();
      // 
    }
   else 
   {
      showMessage("Thanks for Subscribing !");
      alert("Thanks for Subscribing !");
      event.preventDefault();
   }
}       

// Display popup message
function showMessage(message)       
{
    const popupMessage = document.querySelector('#popup-message');
    popupMessage.textContent = message;
    popup.style.display = 'block';
  
}
//  Hide the Popup message
closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
  
});
// The event occurs when user when the user leaves a form field
firstnameInput.addEventListener('focusout',()=>{
    validateFirstName();
});
emailInput.addEventListener('focusout',()=>{ 
     validateEmail()
     
});

form.addEventListener('submit',()=>{ 
    validateForm();
});
