let salon = {
  name: "The Fashion Pet",
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

function pet(name, age, gender, breed, service, owner, phone) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.breed = breed;
  this.service = service;
  this.ownerName = owner;
  this.contactPhone = phone;
}

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
salon.pets.push(scooby, scrappy);

console.log(salon.pets[0].name);
console.log(salon.pets[1].name);
function displaySalonInfo() {
  let DISPLAY = document.getElementById("register-display");
  let tmp = `
    <h1>${salon.name}</h1>
    <p>${salon.address.street}, ${salon.address.number}</p>
    <p>${salon.address.zip}</p>
    `;
  DISPLAY.innerHTML = tmp;
}

let inputName = document.getElementById("txt-name");
let inputAge = document.getElementById("txt-age");
let inputGender = document.getElementById("txt-gender");
let inputBreed = document.getElementById("txt-breed");
let inputService = document.getElementById("service");
// let inputOwner = document.getElementById("txt-owner");
// let inputPhone = document.getElementById("txt-phone");

function register() {
  console.log(
    inputName.value,
    inputAge.value,
    inputGender.value,
    inputBreed.value,
    inputService.value
    // inputOwner.value,
    // inputPhone.value
  );

  let newPet = new pet(
    inputName.value,
    inputAge.value,
    inputGender.value,
    inputBreed.value,
    inputService.value
    // inputOwner.value,
    // inputPhone.value
  );
  console.log(newPet);

  salon.pets.push(newPet);
  clearform();
}

function clearform() {
  inputName.value = "";
  inputAge.value = "";
  inputGender.value = "";
  inputBreed.value = "";
  inputService.value = "";
  // inputOwner.value = "";
  // inputPhone.value = "";
}
function init() {
  displaySalonInfo();
}

window.onload = init;
