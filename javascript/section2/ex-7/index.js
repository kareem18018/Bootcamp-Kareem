// Create an array of persons
let persons = [
    { name: 'John', age: 25, address: '123 Main St' },
    { name: 'Jane', age: 30, address: '456 Oak St' },
    { name: 'Bob', age: 28, address: '789 Elm St' }
  ];


  let copiedPersons = [...persons];

  copiedPersons[1].address = '321 Maple St';

  console.log('Original Persons:', persons);
  console.log('Copied Persons:', copiedPersons);
