const events = [
    {
      id: 0,
      name: "Sound Bath Meditation",
      price: 20.99,
      dates : "7 June 2023",
      address: "Golden Egg Holistic ,Glenfield, Portlaoise, Co. Laois , R32PH0A",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, error.",
      imgSrc: "./images/events/Meditation-icon.png",
    },
    {
        id: 1,
        name: "Running in Sun",
        price: 30.00,
        dates : "8 June 2023",
        address: "Golden Egg Holistic ,Glenfield, Portlaoise, Co. Laois , R32PH0A",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, error.",
        imgSrc: "./images/events/running.png",
    },
    {
        id: 2,
        name: "Tennis for All",
        price: 10.00,
        dates : "12 June 2023",
        eventType:"0",
        address: "Golden Egg Holistic ,Glenfield, Portlaoise, Co. Laois , R32PH0A",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, error.",
        imgSrc: "./images/events/tennis.png",
      },
      {
        id: 3,
        name: "Paint Classes for All",
        price: 15.00,
        dates : "11 Aug 2023",
        eventType:"0",
        address: "Golden Egg Holistic ,Glenfield, Portlaoise, Co. Laois , R32PH0A",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, error.",
        imgSrc: "./images/events/art-icons.png",
      },
      {
        id: 4,
        name: "Meditation 30 Mins",
        price: 10.00,
        dates : "7th Sept 2023",
        eventType:"0",
        address: "Golden Egg Holistic ,Glenfield, Portlaoise, Co. Laois , R32PH0A",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, error.",
        imgSrc: "./images/events/Meditation-icon.png",
      }
    
  ];

// returns the event for id
export const findEvent = (id) => {
    // find the event with matching id
   
    var j = -1;
    for(var i=0; i < events.length; i++)
    {
   
      if(events[i].id == id)
           {
            j = i;
           }
    }
    return events[j];
  };


  
  //renders the event list in event page
export const renderEvents = () => {
   const eventList = document.querySelector(".eventList");
   events.forEach((event) => {
   eventList.innerHTML += `
  
    <div class="container  w3-panel w3-card w3-green w3-hover-opacity">
        <div class="Event-Image"> <img src="${event.imgSrc}" alt="${event.name}"></div>
        <div class="Event-Heading"> <h6>${event.name}</h6></div>
        <div class="Event-Date-price-location">
             <p> Event Dates : ${event.dates}  &nbpsp &nbsp Price : <b>${event.price}</b> </p>
             <p>Location : ${event.address}</p>
        </div>
        <div class="Event-Detail-Description w3-hover-opacity">
            <p>${event.description}</p>
            <form style="float: right">
                <button class="book-submit-button" onclick="bookingforEvent({eventId: ${event.id}})">Book</button>
            </form>
            <br>
        </div>
    </div>`
    
  }) ;
}
