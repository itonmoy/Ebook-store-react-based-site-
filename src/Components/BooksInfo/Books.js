import React from 'react';
import './Books.css'

const Books = (props) => {
    const {name , img, price , author, bookType,stock} =props.book||{};
    console.log(props.book);

    return (

        <div className="col-md-4 ">
           <div class="card bg-secondary" style={{"width": "20rem"}}>
                <img src={img} class="card-img-top image" alt="imageofbook"/>
                <div class="card-body">
                    <h5 class="card-title">{name} </h5>
                    <p class="card-text"><small>Author: {author} </small> </p>
                    <p class="card-text"><small>Book Type: {bookType} </small> </p>
                    <p>Stock: {stock} </p>
                    <h6>Price: ${price}</h6>
                    <button 
                    onClick={()=>props.handleAddtoCart(props.book)}
                    class="btn btn-warning"><i class="fas fa-cart-plus"> Add to cart</i></button>
                </div>
            </div>
        </div>
    );
};

export default Books;