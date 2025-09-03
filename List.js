import React from 'react';
import './List.css';
import bambooImg from './bamboo.webp';

const products = [
  {
    name: 'Reusable Water Bottle',
    description: 'A stainless steel bottle to reduce single-use plastic.',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Bamboo Toothbrush',
    description: 'Biodegradable toothbrush made from bamboo.',
    image: bambooImg,
  },
  {
    name: 'Organic Cotton Tote Bag',
    description: 'A reusable tote bag for shopping and daily use.',
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
  },
];

const List = () => (
  <section className="list-section">
    <h2>Our Eco-Friendly Products</h2>
    <div className="product-list">
      {products.map((product, idx) => (
        <div className="product-card" key={idx}>
          <img src={product.image} alt={product.name} className="product-img" />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default List;
