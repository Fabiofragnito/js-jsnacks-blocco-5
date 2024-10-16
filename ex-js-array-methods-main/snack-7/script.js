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

// Recupera i dati dello studente con id 2
// Risultato: { id: 2, name: 'Mario Banfi', age: 34, class: '4A' }

// const studentId2 = students.find(student => student.id == 2);
// console.log(studentId2);

const newArray = []

for (let i = 0; i < students.length; i++) {
  const student = students[i];
  if (student.id === 2) {
    newArray.push(student);
    break;
    
  }
  
}
console.log(newArray);
