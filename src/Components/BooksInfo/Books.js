import React from 'react';

const Books = (props) => {
    const {name , img, price , author, bookType} =props.book;
    console.log(props.book);

    return (

        <div className="col-md-4 ">
           <div class="card" style={{"width": "18rem"}}>
                <img src={img} class="card-img-top image" alt="imageofbook"/>
                <div class="card-body">
                    <h5 class="card-title">Name: {name} </h5>
                    <p class="card-text"><small>Author: {author} </small> </p>
                    <p class="card-text"><small>Book Type: {bookType} </small> </p>
                    <h6>Price: ${price}</h6>
                    <a href="/go" class="btn btn-warning">Add to cart</a>
                </div>
            </div>
        </div>
    );
};

export default Books;