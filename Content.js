import React, { useState } from 'react';
import './Content.css';

const Content = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <main className="content">
      <h1>Eco-Friendly Products Showcase</h1>
      <p>
        Welcome to our project! We are dedicated to promoting sustainable and eco-friendly products that help reduce environmental impact. Explore our curated list of green alternatives for everyday needs.
      </p>
      <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" alt="Eco Friendly" className="content-img" />
      <button className="content-btn" onClick={() => setClicked(!clicked)}>
        {clicked ? 'Thank you for supporting sustainability!' : 'Click to Support Green Initiatives'}
      </button>
    </main>
  );
};

export default Content;
