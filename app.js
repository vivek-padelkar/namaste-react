import React from 'react';
import ReactDOM from 'react-dom/client';
import { foodItems } from './utils/constants'; // Assuming foodItems is exported from constants.js
import './index.css'; // Assuming index.css is in the same directory

const Header = () => {
    return (
        <div className='header'>
            <div className='logo-section'>
                <div className='logo-container'>
                    <img className='logo' src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFNcm7viysIhRVGQ5gfIFX-ry2E6lvRLco7A&s`} alt='Logo' />
                </div>
                <span className='logo-text'>Chow-Down</span>
            </div>

            {/* Navigation */}
            <div className='navBar'>
                <nav className='nav-container'>
                    <ul className='nav-items'>

                        <li className='nav-item'>
                            <i className="fa-solid fa-burger"></i>
                            <span>About us</span>
                        </li>
                        <li className='nav-item'>
                            <i className="fa-solid fa-phone"></i>
                            <span>Contact us</span>
                        </li>
                        <li className='nav-item'>
                            <i className="fa-solid fa-cart-shopping"></i>
                            <span>Cart</span>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

const Cards = ({ foodItem }) => {
    return (
        // Card component to display food item details
        <div className='card'>
            {foodItem.mustTry && <p className='must-try'>  try</p>}
            <img src={foodItem.imgurl} alt={foodItem.name} className='card-image' />
            <div className='card-content'>
                <h2 className='card-title'>{foodItem.name}</h2>
                <p className='card-description'>{foodItem.description}</p>
                <div className='card-price-rating'>
                    <span className='card-price'>₹{foodItem.price}</span>
                    <div className='card-rating'>
                        <i className="fa-solid fa-star"></i>
                        <span>{foodItem.rating} star's</span>
                    </div>
                </div>
                <button className='card-button'>Add to Cart</button>
            </div>
        </div>
    );
}

const BodyComponent = () => {
    return (
        <div className='body'>
            {/* Search Bar */}
            <div className='search-container'>
                <input type='text' placeholder='Search for food items...' className='search-input' />
                <button className='search-button'>Search</button>
            </div>

            <div className='card-container'>
                {/* Render food items as cards */}
                {foodItems.map((item) => (
                    <Cards key={item.id} foodItem={item} />
                ))}
            </div>
        </div>
    );
};

const Appcomponent = () => {
    return (
        <div className='app'>
            {/* Header */}
            <Header />
            {/* body */}
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Appcomponent />
        <BodyComponent />
    </>
)