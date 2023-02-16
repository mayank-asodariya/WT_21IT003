// JavaScript for mobile object
const mobile = {
    name: "Mobile",
    type: "phone"
  };
  
  // JavaScript for bicycle object
  const bicycle = {
    name: "Bicycle",
    type: "vehicle"
  };
  
  // JavaScript for car object
  const car = {
    name: "Car",
    type: "vehicle"
  };
  
  // Function to show details of mobile object
  const showMobileDetails = () => {
    console.log(`Name: ${mobile.name}`);
    console.log(`Type: ${mobile.type}`);
  };
  
  // Function to show details of bicycle object
  const showBicycleDetails = () => {
    console.log(`Name: ${bicycle.name}`);
    console.log(`Type: ${bicycle.type}`);
  };
  
  // Function to show details of car object
  const showCarDetails = () => {
    console.log(`Name: ${car.name}`);
    console.log(`Type: ${car.type}`);
  };
  
  // Get buttons for each object
  const btnMobile = document.querySelector(".btn-mobile");
  const btnBicycle = document.querySelector(".btn-bicycle");
  const btnCar = document.querySelector(".btn-car");
  
  // Add click event listeners to buttons
  btnMobile.addEventListener("click", showMobileDetails);
  btnBicycle.addEventListener("click", showBicycleDetails);
  btnCar.addEventListener("click", showCarDetails);
  