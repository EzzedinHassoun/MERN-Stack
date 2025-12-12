const { faker } = require('@faker-js/faker');
const express = require("express");
const app = express();
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

const createProduct = () => {
  const newFake = {
    name: faker.commerce.productName(),
    price: "$" + faker.commerce.price(),
    department: faker.commerce.department()
  };

  return newFake;
};

const newFakeProduct = createProduct();

console.log(newFakeProduct);

const createUser=()=>{
  const newUser={
    firstName:faker.person.firstName(),
    lastName:faker.person.lastName(),
    email:faker.internet.email(),
    password:faker.internet.password(),
    phonenumber:faker.phone.number(),
    _id:faker.string.uuid()
  }
  return newUser;
}

const createCompany=()=>{
  const newComp={
    _id:faker.string.uuid(),
    name:faker.company.name(),
    address:{
      street:faker.location.street(),
      city:faker.location.city(),
      state:faker.location.state(),
      zipCode:faker.location.zipCode(),
      country:faker.location.country()
    }
  }
  return newComp;
}

app.get("/api/comp", (req, res) => {
  const newFakeComp= createCompany();
  res.json(newFakeComp);
});

app.get("/api/user", (req, res) => {
  const newFakeUser = createUser();
  res.json(newFakeUser);
});

app.get("/api/user/company", (req, res) => {
  res.json({
    user: createUser(),
    company: createCompany()
  });
});

const server = app.listen(8000, () =>
  console.log(`Server is running on port ${server.address().port}!`)
);
