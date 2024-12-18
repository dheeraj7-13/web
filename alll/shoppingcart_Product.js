Design a shopping cart application using react
SOURCE CODE: 
Product.js 
import React, { Component } from 'react'; 
import './product.css'; 
const products = [ 
{ 
pr: ' ', 
🍦
name: 'ice cream', 
price: 50 
}, 
{ 
pr: ' ', 
🍦
name: 'donuts', 
price: 190, 
}, 
{ 
pr: ' ', 
🍦
name: 'watermelon', 
price: 30 
} 
]; 
class Product extends Component { 
 state = { 
   cart: [], 
   total: 0 
 }; 

 currencyOptions = { 
   minimumFractionDigits: 2, 
   maximumFractionDigits: 2, 
 }; 

 getTotal = () => { 
   return this.state.total.toLocaleString(undefined, 
this.currencyOptions); 
 }; 

 add = (product) => { 
   this.setState(state => ({ 
     cart: [...state.cart, product.name], 
     total: state.total + product.price 
   })); 
 }; 

 remove = (product) => { 
   this.setState(state => { 
     const cart = [...state.cart]; 
     cart.splice(cart.indexOf(product.name)) 
     return ({ 
       cart, 
       total: state.total - product.price 
     }) 
   }); 
 }; 

 render() { 
   return ( 
     <div className="wrapper"> 
       <div> 
         Shopping Cart: {this.state.cart.length} items 
       </div> 
       <div>Total: {this.getTotal()}</div> 
       <div> 
         {products.map(product => ( 
           <div key={product.name}> 
             <div className="product"> 
               <span role="img" aria
label={product.name}>{product.pr}</span> 
             </div> 
             <button onClick={() => this.add(product)}>Add</button> 
             <button onClick={() => this.remove(product)}>Remove</button> 
           </div> 
         ))} 
       </div> 
     </div> 
   ); 
 } 
} 

export default Product;