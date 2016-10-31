const profile = {
  'firstName': 'Joe',
  'lastName': 'Montana',
  'limit': 850.00
}

const products = [
  { 'id': 1, 'title': 'iPad 4 Mini', 'price': 500.01, 'inventory': 2, 'shipping': 15.00 },
  { 'id': 2, 'title': 'H&M T-Shirt White', 'price': 10.99, 'inventory': 10, 'shipping': 5.00 },
  { 'id': 3, 'title': 'Nirvana - LP', 'price': 19.99, 'inventory': 3, 'shipping': 22.50 },
  { 'id': 4, 'title': 'Licensed Steel Gloves', 'price': 30.99, 'inventory': 5, 'shipping': 9.00 },
  { 'id': 5, 'title': 'Rustic Granite Car', 'price': 487.00, 'inventory': 1, 'shipping': 35.00 },
  { 'id': 6, 'title': 'Fantastic Cotton Pants', 'price': 59.59, 'inventory': 6, 'shipping': 11.00 },
  { 'id': 7, 'title': 'Tasty Wooden Pizza', 'price': 29.00, 'inventory': 2, 'shipping': 18.00 },
  { 'id': 8, 'title': 'Delicious Concrete Fish', 'price': 12.99, 'inventory': 4, 'shipping': 6.00 },
  { 'id': 9, 'title': 'Granite Computer', 'price': 109.10, 'inventory': 10, 'shipping': 22.70 },
  { 'id': 10, 'title': 'Handcrafted Soft Salad', 'price': 13.99, 'inventory': 3, 'shipping': 3.50 },
  { 'id': 11, 'title': 'Incredible Steel Bacon', 'price': 30.99, 'inventory': 5, 'shipping': 7.90 },
  { 'id': 12, 'title': 'Tasty Plastic Bike', 'price': 75.00, 'inventory': 5, 'shipping': 25.00 }
]

const promotions = [
  { 'id': 1, 'title': '30% OFF' },
  { 'id': 2, 'title': '$100.00 Discount' },
  { 'id': 3, 'title': 'Free Shipping' },
  { 'id': 4, 'title': '+ $100.00 on limit' }
]

// Simulate requests

export default {
  getProfile (cb) {
    setTimeout(() => cb(profile), 200)
  },

  getProducts (cb) {
    setTimeout(() => cb(products), 200)
  },

  getPromotions (cb) {
    setTimeout(() => cb(promotions), 200)
  }
}
