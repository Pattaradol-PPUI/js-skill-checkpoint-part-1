// Question #1
const myTodo = [
  { id: 1, todo: "Buy groceries" },
  { id: 2, todo: "Finish homework" },
  { id: 3, todo: "Call mom" },
  { id: 4, todo: "Wash dishes" },
];
// เริ่มเขียนโค้ดตรงนี้
myTodo.push({id : 5, todo: "Walk the dog"});

myTodo[3].todo = "Go to the gym";

myTodo.pop();


let lastTodo = myTodo[3];
console.log(lastTodo);

console.log(`to-do ${lastTodo.id}, ${lastTodo.todo}`);