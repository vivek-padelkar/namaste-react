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

export default Header;