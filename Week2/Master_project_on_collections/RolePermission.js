const roles = {
    admin: ["create", "update", "delete", "view"],
    student: ["view"]
  };

//MODULE 4: ROLE & PERMISSION ENGINE
  //-> Get all role names
let a = Object.keys(roles)
console.log("Role Names:", a)
  //-> Check if student can delete
let b = roles.student.includes("delete") // check if delete permission exits 
console.log("Student can delete:", b)
  //-> Create a flat list of all unique permissions
let c = [...new Set(Object.values(roles).flat())]
console.log("All Unique Permissions:", c)
  //-> Add new role moderator immutably
  let CopyRoles = {...roles,moderator: ["view", "update"]};

  console.log("Updated Roles:", CopyRoles);
  console.log("Original Roles:", roles);

