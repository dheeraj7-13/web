Design a shopping cart application using react
SOURCE CODE: 
App.js
import logo from './logo.svg';
import './App.css';
import Form1  from './components/Form1';
import Todolist from './components/Todolist';
import Product from './components/Product';
 
function App() {
  return
  ( 

 <div>
  <Todolist/>
  <Product/>
 
 </div> 
//  <Form1/>
 

 
  );
}

 
export default Product;

Product.js
import React, { useState } from 'react';
// import './product.css'; // Assuming you have product.css for styling

const products = [
  { id: 1, name: 'ice cream', price: 50, emoji: '' },
  { id: 2, name: 'donuts', price: 190, emoji: '' },
  { id: 3, name: 'watermelon', price: 30, emoji: '' },
];

const Product = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const currencyOptions = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };

  const getTotal = () => {
    return total.toLocaleString(undefined, currencyOptions);
  };

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    setTotal((prevTotal) => prevTotal + product.price);
  };

  const removeFromCart = (product) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== product.id));
    setTotal((prevTotal) => prevTotal - product.price);
  };

  const renderProducts = () =>
    products.map((product) => (
      <div key={product.id} className="product">
        <div className="product-info">
          <span role="img" aria-label={product.name}>
            {product.emoji}
          </span>
          <span>{product.name}</span>
          <span>₹{product.price.toFixed(2)}</span>
        </div>
        <div className="product-actions">
          <button onClick={() => addToCart(product)}>Add</button>
          <button onClick={() => removeFromCart(product)} disabled={!cart.some((item) => item.id === product.id)}>
            Remove
          </button>
        </div>
      </div>
    ));

  return (
    <div className="wrapper">
      <div>
        Shopping Cart: {cart.length} items
      </div>
      <div>
        Total: ₹{getTotal()}
      </div>
      <div>
        {renderProducts()}
      </div>
    </div>
  );
};

export default Product;


