const resturants = [
    {
      id: 0,
      name: "Mayur Indian Resturant",
      lat: 53.034522, 
      lng:-7.30096,
      address: "47 Main Street Portlaoise R32 VRX8 County Laois ",
      Phone: '(057) 866 6000',
      Website: "https://mayurindian.ie/",
      imgSrc:"/images/resturant/0.jpg"
         
    },
    {
      id: 1,
      name: "Batoni’s at The Gatehouse",
      lat: 53.09700972971876, 
      lng:-7.208771026983456,
      address: "Emo, County Laois ",
      Phone: '(057) 864 6695',
      Website: "https://batonis.ie/",
      imgSrc: "./images/resturant/1.jpg",
    },
    {
      id: 2,
      name: "Kelly’s Steakhouse",
      lat: 53.034756892208165, 
      lng:-7.302594230537677,
      address: "47 Main Street Portlaoise R32 VRX8 County Laois ",
      Phone: '(057) 866 6000',
      Website: "http://www.midlandsparkhotel.com/kellys-steakhouse.html",
      imgSrc:"/images/resturant/2.jpg"
    },
    {
      id: 3,
      name: "McEvoys Restaurant",
      lat: 52.91282144775457, 
      lng:-7.349309743171348 ,
      address: "Main Street, Knocknamoe, Abbeyleix, Co. Laois ",
      Phone: '(057) 864 6695',
      Website: "www.test.com",
      imgSrc: "./images/resturant/3.jpg",
    }
    
    
  ];

const renderResturants=()=>{

  const resturantList = document.querySelector(".resturantList");
    
  resturants.forEach((resturant) => {
    resturantList.innerHTML += `
    <div class="resturant">
          <img src="${resturant.imgSrc}" alt="${resturant.name}">
          <h2>${resturant.name}</h2>
          <p>${resturant.address}</p>
          <p>${resturant.Phone}</p>
          <p>${resturant.Website}</p>
          <p><a href="#" onclick="showMap( ${resturant.id})">Show Map</a></p>
     </div>`
 
  }) ;
}
renderResturants();





