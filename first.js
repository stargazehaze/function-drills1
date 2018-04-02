'use strict';

function whoAmI(name, age) {
  if (name === undefined) {
    console.error('Arguments not valid');
  }  else if (age === undefined) {
    console.error('Arguments not valid');
  }

  if (typeof name !== String) {
      console.error('Name must be a string.');
  } else if (typeof age !== Number) {
      console.error('Age must be a number.');
  }

  let yearOfBirth = 2018 - age;
  console.log(`Hi, my name is ${name} and I'm ${age} years old.`);
  console.log(`I was born in ${yearOfBirth}`);
}

whoAmI(34, false);

function yearOfBirth(age) {
  try {
    yearOfBirth < 2018;
    throw new Error('Age can not be negative.');
  } catch (e) {
    console.log(e); 
  }

  return 2018 - age; 
 
}

yearOfBirth(-25);