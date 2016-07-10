const profile = {
  'firstName': 'Joe',
  'lastName': 'Montana',
  'limit': '850.00'
}

const products = [
  { 'id': 1, 'title': 'iPad 4 Mini', 'price': '500.01', 'inventory': 2 },
  { 'id': 2, 'title': 'H&M T-Shirt White', 'price': '10.99', 'inventory': 10 },
  { 'id': 3, 'title': 'Charli XCX - Sucker CD', 'price': '19.99', 'inventory': 3 },
  { 'id': 4, 'title': 'Licensed Steel Gloves', 'price': '30.99', 'inventory': 5 },
  { 'id': 5, 'title': 'Rustic Granite Car', 'price': '487.00', 'inventory': 1 },
  { 'id': 6, 'title': 'Fantastic Cotton Pants', 'price': '59.59', 'inventory': 6 },
  { 'id': 7, 'title': 'Tasty Wooden Pizza', 'price': '29.00', 'inventory': 2 },
  { 'id': 8, 'title': 'Incredible Concrete Fish', 'price': '12.99', 'inventory': 4 },
  { 'id': 9, 'title': 'Generic Granite Computer', 'price': '109.10', 'inventory': 10 },
  { 'id': 10, 'title': 'Handcrafted Soft Salad', 'price': '13.99', 'inventory': 3 },
  { 'id': 11, 'title': 'Incredible Steel Bacon', 'price': '30.99', 'inventory': 5 },
  { 'id': 12, 'title': 'Tasty Plastic Bike', 'price': '75.00', 'inventory': 5 }
]

// Simulate requests

export default {
  getProfile (cb) {
    setTimeout(() => cb(profile), 200)
  },

  getProducts (cb) {
    setTimeout(() => cb(products), 200)
  }
}
