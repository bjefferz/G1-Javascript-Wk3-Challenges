function patient() {
  // Private object
  const PII = {
    name: "LeBron",
    ssn: "777-77-7777",
  };

  // only name accessible via method
  return {
    getName: function () {
      return PII.name;
    },
  };
}

const patient2 = patient();

// outputs :
console.log(patient2.name); // Undefined
console.log(patient2.ssn); // Undefined
console.log(patient2.getName()); // LeBron
