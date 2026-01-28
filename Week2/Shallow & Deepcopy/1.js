// Hands-On 1: Shallow Copy (Controlled Mutation Use Case)
//-------------------------------------------------------
//🧪 Given Data:
const user = {
    id: 101,
    name: "Ravi",
    preferences: {
      theme: "dark",
      language: "en"
    }
  }; 
//🎯 Task
// 1. Create a shallow copy of user
let user2 = {...user,
preferences:{
    ...user.preferences
}}
//using the spread operator again for preferences as both objects user.preferences and user2.preferences would point to the reference of the same memory location unless we explicitly create a copy.
//2. Change:
//i. name in the copied object
user2.name = 'nina'
//ii. preferences.theme in the copied object
user2.preferences.theme = 'neon'
//iii .Log both original and copied objects
console.log(user)
console.log(user2)
//iv. Observe what changes and what doesn’t 
//the id and preferences.language dont Change, the name amd preferences.theme change