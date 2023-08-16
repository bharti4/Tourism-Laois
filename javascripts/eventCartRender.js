// import
import { 
    getStorageItem,
    setStorageItem,
      
  } from './utils.js';
  
  // set cart items from local storage
     
  let cartEvents = getStorageItem('eventsCart');
  
  let cartItemsDOM = document.getElementById('eventListCart');
    
  let totalCartCost = 0;
 
  export const renderEventCart =( ) => {
     if(cartEvents.length !=0 ){
      const eventListCart = document.querySelector(".eventListCart");
    
  
      cartEvents.forEach((event) => {
        
        // id of the event
        const id = event.id;
        // Get the price of event
        const price = event.price;
        // Get the values of the ticket inputs
         let adultTickets = event.adultTickets;
         let childTickets = event.childTickets;
         let seniorTickets = event.seniorTickets;
         // calculate totalcost for ticket
         let totalCost = (adultTickets * price) + (childTickets * price/2) + (seniorTickets * (price*2)/3);
         // calculate total cart cost for ticket
         totalCartCost +=totalCost;
         // formating the price do display in two decimal
         totalCost=totalCost.toFixed(2);
         
  
      // Preprate HTML DOM for cart detail page
      eventListCart.innerHTML += `
    
      <div class="container  w3-panel w3-card w3-green w3-hover-opacity " data-id="${id}" >
          <div class="Event-Image"> <img src="${event.imgSrc}" alt="${event.name}"></div>
          <div class="Event-Heading"> <h2>${event.name}</h2></div>
          <div class="Event-Date-price-location">
               <p> Event Dates : ${event.dates}  &nbpsp &nbsp Price : <b>${event.price}</b> </p>
               <p> Location : ${event.address}</p>
          </div>
          <div class="Event-Detail-Description w3-hover-opacity">
              <p>Description: ${event.description}</p> 
              <h4 class="w3-border w3-center w3-pale-yellow"> &nbsp Tickets For : 
                  &nbsp Adults &nbsp: ${adultTickets} 
                  &nbsp Childreen &nbsp:${childTickets} 
                  &nbsp Seniors &nbsp:  ${seniorTickets} 
               </h4>
              <div class=" w3-border w3-center   w3-lime">
                  <h4>Total Current Event Price: <span><b>£${totalCost}</b></span></h4>
              </div>
              <div class="w3-right " >
                  <button class="cart-item-remove-btn w3-border w3-border-Bold w3-margin" data-id="${id}">Remove Event</button>
              </div>
              <br>
          </div>
      </div>`
      
    }) ;
    totalCartCost = totalCartCost.toFixed(2);
    // total cart cost and checkout buttton render
    eventListCart.innerHTML += `
    <div class="cart-total  w3-orange Event-Detail-Description w3-hover-opacity w3-center w3-margin">
      <br>
      <p> Cart Total: <span class="cart-total-text">£${totalCartCost}</span> </p>
      
      <form >
        <button class="cart-chekout-btn" >Check Out</button>
      </form>
      <br />
    </div>`
    }
    else{
      showMessage("No events in cart. To Book Events : Pl. visit Events pages")
    }
    
}

// remove item from array of cartEvent list
 function removeItem(id) {
               
    const newcartArray = [];

    // Iterate over each row in the original array
    for (let i = 0; i < cartEvents.length; i++) {
      // If the current row is not the one to remove, add it to the new array
      
      if (cartEvents[i].id !=  id) {
        newcartArray.push(cartEvents[i]);
      }
      
    }
    cartEvents = newcartArray;

 }
// get total price for current ticket
function getTotalTicketprice(id)
{
  for(let i=0;i<cartEvents.length;i++)
  {
    if(cartEvents[i].id ==  id)
    {
      
      // Get the price of event
      const price = cartEvents[i].price;
      // Get the values of the ticket inputs
      let adultTickets = cartEvents[i].adultTickets;
      let childTickets = cartEvents[i].childTickets;
      let seniorTickets = cartEvents[i].seniorTickets;
      // calculate totalcost for ticket
      let totalCost = (adultTickets * price) + (childTickets * price/2) + (seniorTickets * (price*2)/3);
      return totalCost;
    }
  }
}
 
function setupCartFunctionality() {
  cartItemsDOM.addEventListener('click', function (e) {
    e.preventDefault();
    const element = e.target;
    const parent = e.target.parentElement;
    const id = e.target.dataset.id;
   
    // remove item
    if (element.classList.contains('cart-item-remove-btn')) {
      
      
    // update the cart total if there are item left in the car
    //else remove the cart-total div
    if(cartEvents.length>1)
    {
      //update Cart Total
      
      // calculate totalcost for ticket
      let totalTicketCost = getTotalTicketprice(id)
      
      totalCartCost -=  totalTicketCost;
      
      const cartTotalDOM = document.querySelector('.cart-total-text');
      cartTotalDOM.textContent = "£" + totalCartCost.toFixed(2);

      
    }
   else
    {
      
      let cartTotal = document.querySelector('.cart-total');
      cartTotal.remove();
      showMessage("Pl. Add Events through Events page ");
   }
    // remove item from cartEvents array
    removeItem(id);
    // remove from dom display
    parent.parentElement.parentElement.remove();
    // update local storage
    setStorageItem('eventsCart',cartEvents);
      
  }

  //check out
  if (element.classList.contains('cart-chekout-btn')) {
    totalCartCost = document.querySelector('.cart-total-text').textContent;
    showMessage("Thanks for Buying Tickets. Your toal cart price is :"+ totalCartCost );
    // removes item from localstorage
    localStorage.removeItem('eventsCart');
    parent.parentElement.parentElement.remove();
  }
});
}

// Display cart total message on checkout popup
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

window.onload = function() {
  renderEventCart();
  setupCartFunctionality();
};
