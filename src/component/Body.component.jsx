import { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./Cards.component";
// import mockFoodData from "../../utils/constants";
import toast from "react-hot-toast";
import { API_URL, XMasterKey } from "../../utils/constants";

const Body = () => {
    const [foodItems, setFoodItems] = useState([]);

    const handelOnchange = (e) => {
        const selectedCategory = e.target.value;
        if (selectedCategory === 'all') {
            setFoodItems(foodItems);
        } else {
            const filteredItems = foodItems.filter(item => item.category.toLowerCase() === selectedCategory.toLowerCase());
            setFoodItems(filteredItems);
        }
    }

    useEffect(() => {
        // Simulate fetching data from an API
        const fetchData = async () => {
            try {
                let config = {
                    method: 'get',
                    maxBodyLength: Infinity,
                    url: 'https://api.jsonbin.io/v3/b/684eaf158960c979a5aa3e68',
                    headers: {
                        'X-Master-Key': '$2a$10$8o88x2R72n3tV7jG.3rSkO5sxOITyXKAnzQxlQGd/mPAsHhaehzEu'
                    }
                };

                const { data: { record: { data } } } = await axios(config)
                // console.log(JSON.stringify(data));
                console.log(data);
                setFoodItems(data);
                toast.success("Food items fetched successfully!");
            } catch (error) {
                toast.error(error.message || "Failed to fetch food items");
            }
        };

        fetchData();
    }
        , []);
    return (
        <div className='body'>
            {/* Search Bar */}
            <div className='search-container'>
                <input type='text' placeholder='Search for food items...' className='search-input' />
                {/* Filter Options */}
                <div className='filter-container'>
                    <select className='filter-select' onChange={handelOnchange}>
                        <option value='all' >All Categories</option>
                        <option value='veg'>Veg</option>
                        <option value='non-veg'>Non-Veg</option>
                    </select>
                </div>
                <button className='search-button'>Search</button>
            </div>

            <div className='card-container'>
                {/* Render food items as cards */}
                {foodItems.length > 0 ? foodItems.map((item) => (
                    <Cards key={item.id} foodItem={item} />
                ))
                    : <p className='loading'>Loading...</p>}
            </div>
        </div>
    );
};

export default Body;