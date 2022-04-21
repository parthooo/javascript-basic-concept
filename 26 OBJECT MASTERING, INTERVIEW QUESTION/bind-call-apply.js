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

// bind

const secondPersonBill = firstPerson.chargeBill.bind(secondPerson);
secondPersonBill(2000);
secondPersonBill(7000);
console.log("(bind) Second person salary after charge bill : " + secondPerson.salary);

const thirdPersonbill = firstPerson.chargeBill.bind(thirdPerson);
thirdPersonbill(3000);
thirdPersonbill(500);
console.log("(bind) Third Person salary after charge bill : " + thirdPerson.salary);

/////////////////////////////////////

// Call

firstPerson.chargeBill.call(secondPerson, 900);
console.log("(call) Second person salary after charge bill: " + secondPerson.salary);


const forthPerson = {
  firstName: "ADV",
  lastName: "MUSA",
  salary: 200000,
  getFullName: function () {
    console.log(this.firstName, this.lastName);
  },
  chargeBill: function (amount, tax, tips) {
    // console.log(this);
    this.salary = this.salary - amount - tax - tips;
    return this.salary;
  }
};

const fifthPerson = {
  firstName: "Dablu",
  lastName: "Rahman",
  salary: 10000,
};

forthPerson.chargeBill.call(fifthPerson, 900, 100, 20);
console.log("(call with multy perameter) Second person salary after charge bill: " + fifthPerson.salary);

/////////////////////////////////////

// apply

forthPerson.chargeBill.apply(forthPerson, [900, 100, 20]);
console.log("(apply with multy perameter) Second person salary after charge bill: " + fifthPerson.salary);