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
        <div class="pet"><table class="table">
        <thead class="table-primary">
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Breed</th>
            <th>Service</th>
            <th>Owner</th>
            <th>Phone</th>
            </thead><tbody id="petTable"></tbody>
        </div>`;
    petData += `<tr class="table-secondary table-bordered border-success"><td>${pet.name}</td>
    <td>${pet.age}</td>
    <td>${pet.gender}</td>
    <td>${pet.breed}</td>
    <td>${pet.service}</td>
    <td>${pet.ownerName}</td>
    <td>${pet.contactPhone}</td>
    </tr>`;
  }

  document.getElementById("petsDisplay").innerHTML = petCard;
  document.getElementById("petTable").innerHTML = petData;
}
