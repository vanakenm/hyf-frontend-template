// dataFoodLover.js

const offers = [
  {
    name: "John Doe",
    date: "2024-09-10",
    restaurant: "Burger Haven",
    unit: 13,
    description: "Get two delicious burger combo meals with fries and a drink for a special price."
  },
  {
    name: "Jane Smith",
    date: "2024-09-12",
    restaurant: "Pizza Palace",
    unit: 1,
    description: "Enjoy a large pepperoni pizza with extra cheese and a side of garlic bread."
  },
  {
    name: "Alice Johnson",
    date: "2024-09-15",
    restaurant: "Sakura Sushi",
    unit: 12,
    description: "Freshly made sushi platter with salmon, tuna, and avocado rolls."
  },
  {
    name: "Robert Brown",
    date: "2024-09-17",
    restaurant: "Taco Time",
    unit: 5,
    description: "A variety of delicious tacos with beef, chicken, and vegetarian options."
  },
  {
    name: "Emily Davis",
    date: "2024-09-20",
    restaurant: "Pasta Paradise",
    unit: 2,
    description: "Indulge in two pasta dishes of your choice, served with garlic bread and salad."
  }
];

// Reserved array
const reserved = [
  {
    name: "Felix Brown",
    description: "Spaghetti Bolognese with garlic bread",
    status: "Reserved",
    restaurant: "Pasta Paradise",
    address: "123 Noodle St",
    pickuptime: "2024-09-19 01:00 PM",
  },
  {
    name: "Robert Green",
    description: "Grilled Chicken Salad with dressing on the side",
    status: "Ready for pickup",
    restaurant: "Healthy Bites",
    address: "456 Salad Ave",
    pickuptime: "2024-09-20 12:00 PM",
  },
  {
    name: "Nancy White",
    description: "Beef Burger with cheese and fries",
    status: "Delivered",
    restaurant: "Burger Joint",
    address: "789 Burger Blvd",
    pickuptime: "2024-09-21 06:00 PM",
  },
  {
    name: "Chris Blue",
    description: "Vegan Tacos with salsa and guacamole",
    status: "Reserved",
    restaurant: "Taco Town",
    address: "321 Taco Rd",
    pickuptime: "2024-09-22 11:00 AM",
  },
];

// Total offers and their total offered quantity and the total remaining quantity
const offerstotal = {
  offersNum: 5,
  offersUnit: 30,
  offersUnitRest: 8,
};

// Request array (initially includes a single request)
let request = [
  {
    name: "Olivia Taylor",
    description: "Sushi Platter",
    pickuptime: "2024-09-23 12:00",
    unit: 4,
  },
];

// Function to update the request array dynamically
const updateRequest = (newReservation) => {
  request.push(newReservation);  // Add the new reservation to the request array
  console.log("Request updated is :", request[1]);  // Log for debugging
};

// Function to get the current request array
const getRequest = () => {
  return request;
};



// Export all data and functions
export { offers, reserved, offerstotal, getRequest, updateRequest };