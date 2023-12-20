# Planning

## MVP Requirements

- features / user stories
  - has 2 pages
    - shop page
    - cart page
  - all pages should have a header navigation menu with links to navigate between all pages
  - header navigation menu requirements
    - its link for the cart page should have a visually appended `(count)` text display where `count` is the sum of the products of every unique product item and their quantity
  - shop page requirements
    - displays 3 to 12 different products
    - has a grid display of purchasable products displayed as cards
    - each card
      - shows the product's name / title
      - shows an image of the product
      - has an `Add To Cart` button
  - cart page requirements
    - has a table of product cards
    - each card
      - shows the product's name / title
      - has a number input field that lets the user type any integer quantity in the range \[1, MAX_SAFE_INT]
      - has a button to increment the quantity of the product to purchase
      - has a button to decrement the quantity of the product to purchase
    - has a `Submit Order` button
      - displays a message that indicates that the order has been queued to be processed and fulfilled and thanks the customer for shopping
      - empties / clears the shopping cart
- tech requirements
  - fetches product data from some mock API endpoint like FakeStore API
  - needs at least 1 test written with `React Testing Library`
  - use the following React APIs:
    - `useState`
    - `useEffect`
    - functional components
  - style with vanilla CSS (via CSS Modules or CSS Utility Frameworks) or CSS in JS tech
  - use browser `fetch()` API for retrieving data
  - use React Router for client-side MPAs functionality
- tech restrictions
  - do not use the following React APIs:
    - Context
    - `useReducer`
    - `useRef`
    - `useMemo`
    - `useCallback`

## Structure

- page routing hierarchy
  - `/`: root
    - `/shop`: shop page
    - `/cart`: cart page
- state
  - `products`: array of `product` objects consisting of
    - `id`: unique primitive data type identifier
    - `title`: name of product
    - `imgSrc`: URL to an image of the product
    - `price`: float of product's consumer price
  - `cart`: array of `item` objects consisting of
    - `id`: id of product
    - `quantity`: int count of the unique product to buy
- functions / utilties / event handlers
  - `addCartItem(productId)`
  - `updateCartItem(productId, quantity)`
  - `removeCartItem(productId)`
  - `cartSubtotal(cart)`
  - `countCartItems(cart)`
  - `handleSubmitOrderClick()`
  - `fetchProducts()`
- components
  - `Header`
  - `ShopPage`
  - `CartPage`
  - `ShopProductCard`
  - `CartProductItem`

## Pseudocode

- TODO
