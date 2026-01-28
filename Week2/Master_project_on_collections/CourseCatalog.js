const courses = [
    { id: 101, title: "JavaScript", price: 999, published: true },
    { id: 102, title: "React", price: 1499, published: false },
    { id: 103, title: "Node", price: 1299, published: true }
  ];

//MODULE 2: COURSE CATALOG ENGINE
  //-> Get published courses
let p=courses.filter(ele=>ele.published===true)
console.log("published courses",p)
  //-> Sort courses by price (high → low)
  let b = [...p].sort(
    (p, b) => b.price - p.price
  );
  console.log("Sorted:", b)
  
  //-> Extract { title, price } only
let combo=courses.map(ele=>[ele.title,ele.price])
console.log("combo:",combo)
  //-> Calculate total value of published courses
  let total = p.reduce((acc,ele) => acc+ele.price,0);
  console.log("total value", total);
  //-> Add a new course immutably
let newCourse = {
    id: 104,
    title: "MongoDB",
    price: 1099,
    published: true
  };
  
  let copyCourse = [...courses, newCourse]
  
  console.log("Copy Courses:", copyCourse)
  console.log("Courses:", courses)