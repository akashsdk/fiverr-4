import React from 'react';

function ShopCart({ location }) {
  // Provide a default value for location to prevent errors
  const { state } = location || {};

  return (
    <div>
      <h1>Shop Cart</h1>
      {state ? (
        <div>
          <h2>Product Details</h2>
          <p>Image: {state.image}</p>
          <p>Name: {state.name}</p>
          <p>Price: {state.price}</p>
          <p>Shipping Fee: {state.shippingFee}</p>
          <p>Category: {state.category}</p>
        </div>
      ) : (
        <p>No product details found.</p>
      )}
    </div>
  );
}

export default ShopCart;
