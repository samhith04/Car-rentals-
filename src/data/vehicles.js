// Fictional demo listings for the ROAM frontend challenge.
// All vehicle data below is illustrative only and does not represent real inventory.

const img = (id) =>
  `https://images.unsplash.com/photo-${id}?q=80&w=1200&auto=format&fit=crop`;

export const vehicles = [
  {
    id: "creta",
    name: "Hyundai Creta",
    category: "SUV",
    price: 2400,
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    location: "Hyderabad",
    availability: "Available now",
    image: img("1533473359331-0135ef1b58bf"),
  },
  {
    id: "seltos",
    name: "Kia Seltos",
    category: "SUV",
    price: 2800,
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    location: "Hyderabad",
    availability: "Available now",
    image: img("1590362891991-f776e747a588"),
  },
  {
    id: "fortuner",
    name: "Toyota Fortuner",
    category: "SUV",
    price: 4500,
    seats: 7,
    transmission: "Automatic",
    fuel: "Diesel",
    location: "Hyderabad",
    availability: "Available from tomorrow",
    image: img("1571607388263-1044f9ea01dd"),
  },
  {
    id: "city",
    name: "Honda City",
    category: "Sedan",
    price: 2200,
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    location: "Hyderabad",
    availability: "Available now",
    image: img("1616422285623-13ff0162193c"),
  },
];

export const categories = [
  {
    id: "city",
    label: "City",
    description: "Nimble cars built for daily drives",
    image: img("1503736334956-4c8f8e92946d"),
  },
  {
    id: "suv",
    label: "SUV",
    description: "Room to move, built for any terrain",
    image: img("1494976388531-d1058494cdd8"),
  },
  {
    id: "luxury",
    label: "Luxury",
    description: "Refined rides for the occasion",
    image: img("1541443131876-44b03de101c5"),
  },
  {
    id: "weekend",
    label: "Weekend",
    description: "Made for the long way round",
    image: img("1511919884226-fd3cad34687c"),
  },
];

export const locations = ["Hyderabad", "Bengaluru", "Chennai", "Goa", "Pune"];

export const vehicleTypes = ["Any vehicle", "Sedan", "SUV", "Luxury"];
