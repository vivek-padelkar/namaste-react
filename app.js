import React from 'react';
import ReactDOM from 'react-dom/client';
import Logo from './assets/logo.png'; // Assuming logo.png is in the same directory
import './index.css'; // Assuming index.css is in the same directory
const Header = () => {
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFNcm7viysIhRVGQ5gfIFX-ry2E6lvRLco7A&s`} alt='Logo' />
            </div>
            {/* Navigation */}
            <div className='nav-items'>
                <nav className='nav'>
                    <ul>
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>Cart</li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

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
    </>
)