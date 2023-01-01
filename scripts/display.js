// Below is the code for class 3 to display the pets in the table.

function displayCards() {
  let petCard = "";
  let petData = "";
  for (let q = 0; q < salon.pets.length; q++) {
    var pet = salon.pets[q];
    // var txtName = document.createTextNode(pet.name);
    // var txtAge = document.createTextNode(pet.age);
    // var txtGender = document.createTextNode(pet.gender);
    // var txtBreed = document.createTextNode(pet.breed);
    // var txtService = document.createTextNode(pet.service);
    // var txtOwner = document.createTextNode(pet.ownerName);
    // var txtPhone = document.createTextNode(pet.contactPhone);

    petCard = `
        <div class="table-container"><div class="pet"><table>
        <thead>
          <tr>
            <th class="tablenumber">Pet #</th>
            <th class="tablename">Name</th>
            <th class="tableage">Age</th>
            <th class="tablegender">Gender</th>
            <th class="tablepayment">Payment</th>
            <th class="tablebreed">Breed</th>
            <th class="tableservice">Service</th>
            <th class="tableowner">Owner</th>
            <th class="tablephone">Phone</th>
            <th>Delete</th>
            </thead><tbody id="petTable"></tbody>
            
        </div></div>`;
    petData += `<tr class="tablenumber" id="${pet.id}"><td>${[
      q + 1,
    ]}</td><td class="tablename">${pet.name}</td>
    <td class="tableage">${pet.age}</td>
    <td class="tablegender">${pet.gender}</td>
    <td class="tablepayment">${pet.payment}</td>
    <td class="tablebreed">${pet.breed}</td>
    <td class="tableservice">${pet.service}</td>
    <td class="tableowner">${pet.ownerName}</td>
    <td class="tablephone">${
      pet.contactPhone
    }</td><td><button id="deletebutton" onclick="deletePet(${
      pet.id
    })">Delete</button></td>
    </tr>`;
  }
  document.getElementById("petsDisplay").innerHTML = petCard;
  document.getElementById("petTable").innerHTML = petData;
}
