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
// below is code for the final assignment for class 4 to delete the pets from the table using the counter.
let c = 1;

function pet(name, age, gender, breed, service, owner, phone, Id) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.breed = breed;
  this.service = service;
  this.ownerName = owner;
  this.contactPhone = phone;
  this.id = c++;
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

// Below is the code for the class 2 assignment for the register/constructor/clear form functions.
let inputName = document.getElementById("txt-name");
let inputAge = document.getElementById("txt-age");
let inputGender = document.getElementById("sel-gender");
let inputBreed = document.getElementById("txt-breed");
let inputService = document.getElementById("sel-service");
let inputOwner = document.getElementById("txt-owner");
let inputPhone = document.getElementById("txt-phone");
// Below is the code for class 3 to mark the inputs as true or false.
function isValid(aPet) {
  let valid = true;
  inputName.classList.remove("error");
  inputAge.classList.remove("error");
  inputBreed.classList.remove("error");
  inputService.classList.remove("error");
  inputPhone.classList.remove("error");
  if (aPet.name == "") {
    valid = false;
    inputName.classList.add("error");
  }
  if (aPet.age == "") {
    valid = false;
    inputAge.classList.add("error");
  }
  if (aPet.breed == "") {
    valid = false;
    inputBreed.classList.add("error");
  }
  if (aPet.service == `No Service`) {
    valid = false;
    inputService.classList.add("error");
  }
  if (aPet.contactPhone == "") {
    valid = false;
    inputPhone.classList.add("error");
  }
  return valid;
}

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
  if (isValid(newPet)) {
    salon.pets.push(newPet);
    clearform();
    alertPet();
    displayCards();
  } else {
    alert(
      "Please fill out all required fields and select a chargable service."
    );
  }
}

function clearform() {
  inputName.value = "";
  inputAge.value = "";
  inputGender.value = "Male";
  inputBreed.value = "";
  inputService.value = "No Service";
  inputOwner.value = "";
  inputPhone.value = "";
}

// below is the code for the class 4 assignment for the delete function.
function deletePet(aPetId) {
  let indexDelete = salon.pets.findIndex((pet) => pet.id == aPetId);
  salon.pets.splice(indexDelete, 1);
  alertPet();
  displayCards();
}
// Below is the code for the class 1 assignment for the 3 pets names being displayed in the console.
function alertPet() {
  for (let i = 0; i < salon.pets.length; i++) {
    console.log(salon.pets[i].name);
  }
  if (salon.pets.length == 0) {
    alert(`There are currently no pets registered!`);
  } else {
    if (salon.pets.length == 1) {
      alert(`There is currently ${salon.pets.length} pet registered!`);
    } else {
      alert(`There are currently ${salon.pets.length} pets registered!`);
    }
  }
}
function displaySalonInfo() {
  let DISPLAY = document.getElementById("footer-display");
  let tmp = `
    <h1>${salon.name}</h1>
    <p>${salon.address.street}, ${salon.address.number}</p>
    <p>${salon.address.zip}</p>
    `;
  DISPLAY.innerHTML = tmp;
}
function init() {
  salon.pets.push(scooby, scrappy, finrir);
  displaySalonInfo();
  showServices();
  alertPet();
  displayCards();
}

window.onload = init;
