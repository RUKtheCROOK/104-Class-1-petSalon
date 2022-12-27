let services = [
  `No Service`,
  `Full Service`,
  `Grooming`,
  `Shampoo`,
  `Hair Cut`,
  `Nails Cut`,
  `Hair Color`,
  `Deshedding`,
  `Dematting`,
  `Bath`,
  `Flea Treatment`,
  `Ear Cleaning`,
  `Teeth Cleaning`,
  `Basic Shots`,
  `Nail Grinding`,
  `Nail Polish`,
  `Paw Massage`,
  `Belly Rubs`,
  `Cuddles`,
  `Kisses`,
  `Hugs`,
  `Snuggles`,
];

let serviceCost = [
  0, 5000, 50, 20, 30, 15, 60, 80, 100, 40, 20, 15, 30, 20, 15, 5, 10, 5, 5, 5,
  5, 5,
];

function showServices() {
  let servicesDisplay = document.getElementById("sel-service");
  let serviceOptions = "";
  for (let t = 0; t < services.length; t++) {
    serviceOptions == "";
    serviceOptions += `<option value="${services[t]}">$${serviceCost[t]} ${services[t]}</option>`;
    servicesDisplay.innerHTML = serviceOptions;
  }
}
