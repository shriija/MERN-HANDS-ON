//Project story:
//-------------
//“We are building the data engine of an online learning platform(like Udemy / Coursera / company LMS).Frontend and backend will later consume THIS logic.”

//Data setup:
//-----------
const users = [
  { id: 1, name: "Ravi", role: "student", active: true },
  { id: 2, name: "Anil", role: "admin", active: true },
  { id: 3, name: "Suman", role: "student", active: false }
];

const courses = [
  { id: 101, title: "JavaScript", price: 999, published: true },
  { id: 102, title: "React", price: 1499, published: false },
  { id: 103, title: "Node", price: 1299, published: true }
];

const cart = [
  { courseId: 101, qty: 1 },
  { courseId: 103, qty: 2 }
];

const roles = {
  admin: ["create", "update", "delete", "view"],
  student: ["view"]
};


//TASKS
//------
//MODULE-1 :USER PROCESSING ENGINE
  //-> Get only active users
  let active=users.filter(ele=>ele.active===true)
  console.log("active users info:",active)
  //-> Extract names of active users
  let names=active.map(ele=>ele.name)
  console.log("names of active users:",names)
  //-> Check if any admin exists
  let admin=users.find(ele=>ele.role==='admin')
  console.log("admin info: ",admin)
  //-> Find user by id
  let id2=users.find(ele=>ele.id===2)
  console.log("user with id 2:", id2)
  //-> Deactivate a user immutably
let updatedUsers = users.map(user => {
  if (user.id === 1) {
    return { ...user, active: false };//copies all properties of the user and overwrites the active value
  }
  return user;
});

console.log("Updated Users:", updatedUsers);
console.log("Original Users:", users)