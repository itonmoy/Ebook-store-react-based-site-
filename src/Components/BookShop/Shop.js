import React, { useEffect, useState } from 'react';
import Books from '../BooksInfo/Books';
import Cart from '../Cart/Cart';

const Shop = () => {
    const [books , setBooks] = useState([]);

    const [cart , setCart] =useState([]);

    const handleAddtoCart=(book)=>{

        const newCart=[ ...cart  , book ]
        console.log(book)
        setCart(newCart)
    }

    useEffect(()=>{
        fetch('/books.JSON')
        .then((res) => res.json())
        .then(data => setBooks(data));
    }, [])
    

    return (
        <div className="row mt-5 g-4">
            <div className="col-md-9">
                <div className="row">
                    {
                        books.map(book=> <Books
                        book={book}
                        handleAddtoCart={handleAddtoCart}
                        
                        >

                        </Books>)
                        
                    }
                </div>
               
            </div>
            <div className="col-md-3">
                <Cart
                cart={cart}
                >

                </Cart>
            </div>
            
        </div>
    );
};

export default Shop;