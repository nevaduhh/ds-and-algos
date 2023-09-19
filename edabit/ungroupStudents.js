// You volunteered to help out teaching a preschool in your area! You were given an array of all students and some important data about them, grouped by their teacher. Create a function that will ungroup every student so you can look at their details individually.

// Example

const students = [
  {
    teacher: 'Ms. Car',
    data: [
      {
        name: 'James',
        emergenceNumber: '617-771-1082',
      },
      {
        name: 'Alice',
        alergies: ['nuts', 'carrots'],
      },
    ],
  },
  {
    teacher: 'Mr. Lamb',
    data: [
      {
        name: 'Aaron',
        age: 3,
      },
    ],
  },
];

// console.log(ungroupStudents() [{
//   teacher: "Ms. Car",
//   name: "James",
//   emergencyNumber: "617-771-1082",
// }, {
//   teacher: "Ms. Car",
//   name: "Alice",
//   alergies: ["nuts", "carrots"],
// }, {
//   teacher: "Mr. Lamb",
//   name: "Aaron",
//   age: 3,
// }])

function ungroupStudents(students) {
  const ungroupedStudents = [];

  students.forEach(({ teacher, data }) => {
    data.forEach((datum) => {
      const ungroupedStudent = {
        teacher,
        ...datum,
      }

      ungroupedStudents.push(ungroupedStudent);
    });
  });

  return ungroupedStudents;
}

console.log(ungroupStudents(students));

