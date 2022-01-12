// interface와 type

// interface

interface Person {
  name: string;
  age?: number;
}
// interface Developer {
//   name: string;
//   age?: number;
//   skills: string[];
// }
interface Developer extends Person {
  skills: string[];
}
const person: Person = {
  name: 'age',
  age: 20
}
const expert: Developer = {
  name: 'age2',
  skills: ['js', 'react']
}
const people: Person[] = [person, expert]
console.log(typeof(people));

// type
type Person2 = {
  name: string;
  age?: number;
}
type Developer2 = Person & {
  skills: string[];
}
const person2: Person2 = {
  name: 'age',
  age: 20
}
const expert2: Developer2 = {
  name: 'age2',
  skills: ['js', 'react']
}
type People = Person2[];
// Q. -> Person2의 객체(name, age)를 담은 배열이라는 뜻 아닌가??
const people2: People = [person2, expert2]

type Color = 'red' | 'green' | 'blue';
const color: Color = 'red';
const colors: Color[] = ['red', 'green'];
