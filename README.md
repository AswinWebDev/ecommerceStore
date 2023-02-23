# Wrappy - An E-commerce Store

Wrappy is an e-commerce store built using Create React App. This project was created to showcase the basic functionalities of an e-commerce store such as displaying products, showing product details, adding products to the cart, and removing products from the cart.

Hosted on `https://wrappy.netlify.app/`

## API

The product details used in this project are fetched from the Fakestore API. The API provides access to product details such as title, description, price, and image.

## Pages

### Home Page

The home page displays a list of products. Each product can be clicked to show the details of the product on a new page. To go back to the home page, click the icon placed near the Wrappy title in the navbar.

### Product Details Page

The product details page shows the details of a selected product such as the title, description, price, and image. From this page, you can add the product to the cart.

### Cart Page

The cart page can be accessed by clicking the cart icon in the navbar. The icon also shows the number of items placed in the cart. The cart page displays the list of products added to the cart. Each item has a remove button to remove it from the cart. The buy button does not have any functionality at the moment.

### Important Note

You should only add unique items to the cart as this JSON data is fetched from the Fakestore API and each item has a unique ID. Adding multiple items with the same ID can create some bugs.
