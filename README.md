# Shop-vue

It's just a shopping cart experiment using Vue.js.

- [See it live!](http://matheusazzi.com/shopping-cart/)

This project is built with [vue-cli](https://github.com/vuejs/vue-cli) and [vuex](https://github.com/vuejs/vuex).

Also I suggest you to use [vue-devtools](https://github.com/vuejs/vue-devtools) if you want a see how everything happens.

### How cart works

- Products can be added to the cart if they've a item available on stock.
- Products added to cart must be removable.
- Checkout must be disabled if cart **total** is over user **limit**.
- If a product already exists on cart, its counter should be updated.
- All products have a shipping price. **shipping** is defined by the highest shipping price of products added to cart.

### How promotions work

- 30% OFF should reduce 30% of the costs on **subtotal**.
- $100.00 Discout should reduce $100.00 of **total**.
- Free Shipping should set **shipping** to zero.
- +$100.00 on limit should increase user **limit** by $100.00.

### We have 3 resources:

##### Profile

```js
{
  'firstName': 'Joe',
  'lastName': 'Montana',
  'limit': 850.00
}
```

##### Products

```js
{
  'id': 1,
  'title': 'iPad 4 Mini',
  'price': 500.01,
  'inventory': 2,
  'shipping': 15.00
},
...
```

##### Promotions

```js
{ 'id': 1, 'title': '30% OFF' },
{ 'id': 2, 'title': '$100.00 Discount' },
{ 'id': 3, 'title': 'Free Shipping' },
{ 'id': 4, 'title': '+ $100.00 on limit' }
```

## Build Setup

```bash
# install dependencies
yarn

# serve with hot reload at localhost:8080
yarn dev

# build for production with minification
yarn build

# build for production and view the bundle analyzer report
yarn build --report

# run unit tests
yarn unit

# run all tests
yarn test
```

This project uses [vue-cli](https://github.com/vuejs/vue-cli). For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
