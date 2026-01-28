//Hands-On 2: Deep Copy (Isolation & Safety Use Case)
//---------------------------------------------------

//🧪 Given Data:
const order = {
    orderId: "ORD1001",
    customer: {
      name: "Anita",
      address: {
        city: "Hyderabad",
        pincode: 500085
      }
    },
    items: [
      { product: "Laptop", price: 70000 }
    ]
  };

//🎯 Task:
//1. Create a deep copy of order
let order2 = structuredClone(order)
//2. Modify in copied object:
//i. customer.address.city
order2.customer.address.city = 'boston'
//ii. items[0].price
order2.items[0].price = 477889
//iii. Verify original object remains unchanged
console.log(order)
console.log(order2)