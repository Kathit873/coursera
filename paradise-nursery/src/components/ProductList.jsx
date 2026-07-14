import React, { useState } from 'react';
import './ProductList.css';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';

function ProductList() {
  const [showCart, setShowCart] = useState(false);
  const [showPlants, setShowPlants] = useState(false);

  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const [addedToCart, setAddedToCart] = useState({});

  const plantsArray = [
    {
      category: 'Air Purifying Plants',
      plants: [
        {
          name: 'Snake Plant',
          image: 'https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?w=400',
          description: 'Produces oxygen at night, improving air quality.',
          cost: '15.00',
        },
        {
          name: 'Spider Plant',
          image: 'https://images.unsplash.com/photo-1572686456672-f79b0d2b7cd4?w=400',
          description: 'Removes toxins like formaldehyde and xylene.',
          cost: '12.00',
        },
        {
          name: 'Peace Lily',
          image: 'https://images.unsplash.com/photo-1616690248363-7295d1c4b8ea?w=400',
          description: 'Filters indoor air and adds a touch of elegance.',
          cost: '18.00',
        },
        {
          name: 'Boston Fern',
          image: 'https://images.unsplash.com/photo-1598880940639-42d5e5d8b6a8?w=400',
          description: 'Adds humidity to the air and purifies it.',
          cost: '14.00',
        },
      ],
    },
    {
      category: 'Aromatic Fragrant Plants',
      plants: [
        {
          name: 'Lavender',
          image: 'https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?w=400',
          description: 'Calming fragrance, used in aromatherapy.',
          cost: '20.00',
        },
        {
          name: 'Jasmine',
          image: 'https://images.unsplash.com/photo-1587334207407-2ab3e0d0c8a0?w=400',
          description: 'Sweet fragrance, promotes relaxation and sleep.',
          cost: '18.00',
        },
        {
          name: 'Rosemary',
          image: 'https://images.unsplash.com/photo-1515586000433-45406d8e6662?w=400',
          description: 'Fragrant herb, often used in cooking.',
          cost: '10.00',
        },
        {
          name: 'Mint',
          image: 'https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?w=400',
          description: 'Refreshing scent, commonly used in teas.',
          cost: '8.00',
        },
      ],
    },
    {
      category: 'Low Maintenance Plants',
      plants: [
        {
          name: 'ZZ Plant',
          image: 'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?w=400',
          description: 'Extremely low maintenance, thrives on neglect.',
          cost: '25.00',
        },
        {
          name: 'Pothos',
          image: 'https://images.unsplash.com/photo-1600411833196-7c1f6b1d3b0e?w=400',
          description: 'Easy to grow and hard to kill.',
          cost: '10.00',
        },
        {
          name: 'Succulent',
          image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400',
          description: 'Stores water in leaves, needs minimal care.',
          cost: '9.00',
        },
        {
          name: 'Cactus',
          image: 'https://images.unsplash.com/photo-1459156212016-c812468e2115?w=400',
          description: 'Thrives in dry conditions with little watering.',
          cost: '11.00',
        },
      ],
    },
  ];

  const handleContinueShopping = (e) => {
    if (e) e.preventDefault();
    setShowCart(false);
    setShowPlants(true);
  };

  const handlePlantsClick = (e) => {
    e.preventDefault();
    setShowPlants(true);
    setShowCart(false);
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
  };

  const handleAddToCart = (product) => {
    dispatch(addItem(product)); // Dispatch the action to add the product to the cart (Redux action)

    setAddedToCart((prevState) => ({ // Update the local state to reflect that the product has been added
      ...prevState, // Spread the previous state to retain existing entries
      [product.name]: true, // Set the current product's name as a key with value 'true' to mark it as added
    }));
  };

  const calculateTotalQuantity = () => {
    return cartItems ? cartItems.reduce((total, item) => total + item.quantity, 0) : 0;
  };

  if (showCart) {
    return (
      <CartItem onContinueShopping={handleContinueShopping} />
    );
  }

  return (
    <div>
      <div className="navbar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem', backgroundColor: '#4CAF50' }}>
        <h1 style={{ color: 'white', margin: 0 }}>Paradise Nursery</h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <a href="#" onClick={handlePlantsClick} style={{ color: 'white', textDecoration: 'none' }}>
            Plants
          </a>
          <a href="#" onClick={handleCartClick} style={{ color: 'white', textDecoration: 'none', position: 'relative' }}>
            Cart ({calculateTotalQuantity()})
          </a>
        </div>
      </div>

      <div className="product-grid">
        {plantsArray.map((category, index) => (
          <div key={index}>
            <h1>
              <div>{category.category}</div>
            </h1>
            <div className="product-list">
              {category.plants.map((plant, plantIndex) => (
                <div className="product-card" key={plantIndex}>
                  <img
                    className="product-image"
                    src={plant.image}
                    alt={plant.name}
                  />
                  <div className="product-title">{plant.name}</div>
                  <div className="product-description">{plant.description}</div>
                  <div className="product-cost">${plant.cost}</div>
                  <button
                    className="product-button"
                    onClick={() => handleAddToCart(plant)}
                  >
                    {addedToCart[plant.name] ? 'Added' : 'Add to Cart'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
