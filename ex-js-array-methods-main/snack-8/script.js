const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'

// const newArray = []

// for (let i = 0; i < students.length; i++) {
//   const student = students[i];
//   if (student.name === "Marco Lanci" ) {
//     newArray.push(student.class)
    
//   }
  
// }
// console.log(newArray);

const classMarco  =  students.find(student => student.name ==="Marco Lanci").class;

console.log(classMarco);


