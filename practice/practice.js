let student = {
  // attributes = descriptions
  name: "John",
  age: 23,
  isActive: true,
  nationality: "mexican",

  //   methods = something that can be done
  sayHi: function () {
    return console.log("hello!");
  },
};

let products = [];
let product1 = {
  name: "GPU",
  description: "Graphics Processing Unit",
  price: 200,
};
let product2 = {
  name: "GPU",
  description: "Graphics Processing Unit",
  price: 200,
};
let product3 = {
  name: "GPU",
  description: "Graphics Processing Unit",
  price: 200,
};
products = [product1, product2, product3];
products.push(product1, product2, product3);
