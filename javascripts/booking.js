import { getStorageItem, setStorageItem } from './utils.js';

import { findEvent } from './events.js'


var eventId = NaN;


  // Get the form element
const form = document.querySelector("form");

// Add event listener to the form add to cart submin button

form.addEventListener("submit", (event) => {
  // Prevent default form submission behavior
  event.preventDefault();
    
  // Get the values of the ticket inputs
  const adultTickets = parseInt(document.getElementById("adult").value);
  const childTickets = parseInt(document.getElementById("child").value);
  const seniorTickets = parseInt(document.getElementById("senior").value);

  // check for validiy of numbers
    let invalidNumber = false;
        
    if(!validateNumber(adultTickets))
    {
      alert("In Adult ticket Field , Enter valid Number between 0 to 100")
      adultTicket.focus();
      invalidNumber = true;
    }
    if(!validateNumber(childTickets))
    {
      alert("In Child ticket Field , Enter valid Number between 0 to 100")
      childTickets.focus();
      invalidNumber = true;
    }
    if(!validateNumber(seniorTickets))
    {
      alert("In Senior Tickets Field , Enter valid Number between 0 to 100")
      seniorTickets.focus();
      invalidNumber = true;
    }
    // if all ticket fields containt valid fields values

  if(!invalidNumber)
  {
        // CHECK FOR ATLEAST ONE COUNT IN TICKETS 
        if(!(adultTickets || childTickets || seniorTickets))
        {
              alert("Please Make sure to add one ticket count")
        }
        else 
        {
          let eventsListStorage = getStorageItem('eventsCart');
          
          // check weather  the event with matching id already in the list
          var j = -1;
          for(var i=0; i < eventsListStorage.length; i++)
          {
        
            if(eventsListStorage[i].id == eventId)
                {
                  j = i;
                }
          }
          // Event is not in local storage ; add to local storage
          if (j == -1) {
            let event = findEvent(eventId);
            // add event ticket infomation to the the event for cart
            event = { ...event, adultTickets: adultTickets , childTickets: childTickets ,seniorTickets : seniorTickets }; 
            eventsListStorage = [...eventsListStorage, event];
            localStorage.removeItem('eventsCart');
            setStorageItem('eventsCart', eventsListStorage);
            alert("Thanks Item Added to cart");
            window.close();
          
        } else {
          // alert Event already in cart
          alert("Event is already cart");
          window.close();
          
        }   
      }
   } 

  
  function validateNumber(numberValue)
  {
    // Validate if the input is a valid number
    let isValidNumber = !isNaN(numberValue);

    //  if valid number ,checking if the number is within a specific range
    if (isValidNumber) {
     
      const minRange = 0;
      const maxRange = 100;
      
      if (numberValue < minRange || numberValue > maxRange) {
        isValidNumber = false;
      }
    }
    return isValidNumber;
  }
});


window.onload = function() {
  const urlParams = new URLSearchParams(window.location.search);
  eventId= urlParams.get('eventId');
  let event = findEvent(eventId);
  const h1 = document.getElementById('eventName');
  h1.textContent = `Booking - ${event.name}!`;
  
};