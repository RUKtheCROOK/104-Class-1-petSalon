// Below is the code for the class 2 assignment for the salon object literal and the pet constructor.
let salon = {
  name: "The Pink Poodle",
  phone: 555 - 555 - 5555,
  address: {
    street: "main street",
    number: "123",
    zip: "12345",
  },
  hours: {
    open: "9:00 am",
    close: "5:00 pm",
  },
  pets: [],
};
// console.log(salon);
function pet(name, age, gender, breed, service, owner, phone) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.breed = breed;
  this.service = service;
  this.ownerName = owner;
  this.contactPhone = phone;
}
// Below is the code for the class 1 assignment for the 3 pets being created using object literals.
let scooby = new pet(
  "Scooby",
  50,
  "Male",
  "Dane",
  "Full Service",
  "Shaggy",
  "555-555-5555"
);
let scrappy = new pet(
  "Scrappy",
  40,
  "Female",
  "Dane",
  "Full Service",
  "Shaggy",
  "555-555-5555"
);
let finrir = new pet(
  "Finrir",
  4,
  "Male",
  "Blue Healer",
  "Fulll Service",
  "John",
  "555-555-5555"
);
salon.pets.push(scooby, scrappy, finrir);
// Below is the code for the class 2 assignment for the register/constructor/clear form functions.
let inputName = document.getElementById("txt-name");
let inputAge = document.getElementById("txt-age");
let inputGender = document.getElementById("sel-gender");
let inputBreed = document.getElementById("txt-breed");
let inputService = document.getElementById("sel-service");
let inputOwner = document.getElementById("txt-owner");
let inputPhone = document.getElementById("txt-phone");

function register() {
  // console.log(
  //   inputName.value,
  //   inputAge.value,
  //   inputGender.value,
  //   inputBreed.value,
  //   inputService.value,
  //   inputOwner.value,
  //   inputPhone.value
  // );

  let newPet = new pet(
    inputName.value,
    inputAge.value,
    inputGender.value,
    inputBreed.value,
    inputService.value,
    inputOwner.value,
    inputPhone.value
  );
  // console.log(newPet);

  salon.pets.push(newPet);
  clearform();
  alertPet();
}

function clearform() {
  inputName.value = "";
  inputAge.value = "";
  inputGender.value = "";
  inputBreed.value = "";
  inputService.value = "";
  inputOwner.value = "";
  inputPhone.value = "";
}
// Below is the code for the class 1 assignment for the 3 pets names being displayed in the console.
function alertPet() {
  for (let i = 0; i < salon.pets.length; i++) {
    console.log(salon.pets[i].name);
  }
  alert(`There are now ${salon.pets.length} pets registered.`);
}
function displaySalonInfo() {
  let DISPLAY = document.getElementById("register-display");
  let tmp = `
    <h1>${salon.name}</h1>
    <p>${salon.address.street}, ${salon.address.number}</p>
    <p>${salon.address.zip}</p>
    `;
  DISPLAY.innerHTML = tmp;
}
function init() {
  displaySalonInfo();
  showServices();
  alertPet();
}

window.onload = init;
