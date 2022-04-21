const firstPerson = {
  firstName: "partho",
  lastName: "Rahman",
  salary: 40000,
  getFullName: function () {
    console.log(this.firstName, this.lastName);
  },
  chargeBill: function (amount) {
    // console.log(this);
    this.salary = this.salary - amount;
    return this.salary;
  }
};
firstPerson.chargeBill(5000);
console.log("first person salary : " + firstPerson.salary);

const secondPerson = {
  firstName: "Bablu",
  lastName: "Rahman",
  salary: 50000,
};

const thirdPerson = {
  firstName: "Wasek",
  lastName: "Rahman",
  salary: 100000,
};

const secondPersonBill = firstPerson.chargeBill.bind(secondPerson);
secondPersonBill(2000);
secondPersonBill(7000);
console.log("Second person salary after charge bill: " + secondPerson.salary);

const thirdPersonbill = firstPerson.chargeBill.bind(thirdPerson);
thirdPersonbill(3000);
thirdPersonbill(500);
console.log("Third Person salary after charge bill : " + thirdPerson.salary);



