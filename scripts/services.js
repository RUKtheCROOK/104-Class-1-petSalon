let services = [
  `No Service`,
  `Full Service`,
  `Grooming`,
  `Hair Cut`,
  `Nail Trim`,
  `Deshedding`,
  `Dematting`,
  `Bath`,
  `Flea Treatment`,
  `Ear Cleaning`,
  `Teeth Cleaning`,
  `Coat Conditioning`,
  `Skin Treatments`,
];

let serviceCost = [0, 5000, 50, 30, 15, 80, 100, 40, 20, 15, 30, 20, 30];

function showServices() {
  let servicesDisplay = document.getElementById("sel-service");
  let serviceOptions = "";
  for (let t = 0; t < services.length; t++) {
    serviceOptions == "";
    serviceOptions += `<option value="${services[t]}">$${serviceCost[t]} ${services[t]}</option>`;
    servicesDisplay.innerHTML = serviceOptions;
  }
}
