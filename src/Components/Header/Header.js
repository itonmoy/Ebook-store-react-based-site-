import React from 'react';
import './Header.css';
// import bookLogo from '../../images/book-logo.png'

const Header = () => {
    return (
        <div className="wrapper header">
            
            <nav class="navbar navbar-light bg-secondary">
                <div class="container ">
                    <a href="/eBOOK Stroe" className="navbar-brand text-light h1">eBOOK STORE</a>
                    <a class="nav-link active text-light" aria-current="page" href="/Home">HOME</a>
                    <a class="nav-link text-light" href="/Books">Books</a>
                    <a class="nav-link text-light" href="/Author">Author</a>
                    <a class="nav-link text-light" href="/publisher">Publisher</a>
                    <a class="nav-link text-light" href="/Top-books">Top Books</a>
                    <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    <h3 className="container header-text mt-3">eBOOK STORE WHERE YOU WILL GET ALL THE BOOKS <br /> Budget: $2000 </h3>

                </div>
            </nav>
            <div className="container bg-light">
                
            </div>
        </div>
    );
};

export default Header;