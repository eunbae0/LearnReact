const message:string = "";
let count = 0;
count += 1;
count = 2;

const numbers: string[] = ['1','2']
numbers.push('1')

let mightBeUndefined: string | undefined = undefined;
let nullableNumber: number | null = null;

let color: 'red' | 'green' | 'blue'
color = 'red';

function sumArray(numbers: number[]):number {
  return numbers.reduce((acc, current) => acc + current, 0);
}
const total = sumArray([1,2,3])
