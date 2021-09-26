import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart}=props || {};
    let total =0;
    for(const book of cart){
        total =total + book.price;
    }
    return (
       

        <div>
            <i class="fas fa-shopping-cart text-warning"></i> 
            <h3 ><small className="text"> Added Items {cart.length} </small>
                 
            </h3>
        
            <h2>Total : ${total}</h2>
            
            
                {
                    cart.map( product=> <p>{product.name}</p>)
                }
            
            
        </div>
    );
};

export default Cart;