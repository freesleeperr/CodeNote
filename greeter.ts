// interface Person {
//   firstName: string;
//   lastName: string;
// }

// function greeter(person: Person) {
//   return "Hello," + person.firstName + "" + person.lastName;
// }

// let user = { firstName: "Spike", lastName: "Lee" };
// document.body.innerHTML = greeter(user);

class Student {
  fullName: string;
  constructor(
    public firstName: string,
    public middleInitial: string,
    public lastName: string
  ) {
    this.fullName = firstName + "" + middleInitial + "" + lastName;
  }
}
interface Person {
  firstName: string;
  lastName: string;
}
function greeter(person: Person) {
  return "Hello" + person.firstName + "" + person.lastName;
}
let user = new Student("JANE", "Mi", "userlast");
document.body.innerHTML = greeter(user);
