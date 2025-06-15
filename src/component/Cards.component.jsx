
const Cards = ({ foodItem }) => {
    return (
        // Card component to display food item details
        <div className='card'>
            {foodItem.mustTry && <p className='must-try'>must try</p>}
            <img src={foodItem.imgurl.replace(' ', '')} alt={foodItem.name} className='card-image' />
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

export default Cards;
// This component renders a card for each food item with its details
// It includes an image, name, description, price, rating, and a button to add the item to the cart