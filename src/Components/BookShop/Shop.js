import React, { useEffect, useState } from 'react';
import Books from '../BooksInfo/Books';

const Shop = () => {
    const [books , setBooks] = useState([]);
    useEffect(()=>{
        fetch('/books.JSON')
        .then((res) => res.json())
        .then(data => setBooks(data));
    }, [])
    // useEffect(() => {
    //     fetch("../../../public/books.JSON")
    //       .then((res) => res.json())
    //       .then((data) => setProducts(data));
    //   }, []);

    return (
        <div className="row mt-5 g-4">
            <div className="col-md-9">
                <div className="row">
                    {
                        books.map(book=> <Books
                        book={book}
                        
                        >

                        </Books>)
                        
                    }
                </div>
            </div>
            <div className="col-md-3">
                <h2>Calculation part is here</h2>
            </div>
            
        </div>
    );
};

export default Shop;