import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { products } from '../Data/data';

const NavBar = ({ toggleCartSidebar }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (term.trim() === '') {
      setSearchResults([]);
    } else {
      const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );
      setSearchResults(filteredProducts);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchResults.length > 0) {
      navigate(`/product/${searchResults[0].id}`);
      setSearchTerm('');
      setSearchResults([]);
    } else {
      alert('No products found!');
    }
  };

  const handleResultClick = (id) => {
    navigate(`/product/${id}`);
    setSearchTerm('');
    setSearchResults([]);
  };

  return (
    <div className="Navbar">
      <img src="logo.png" alt="Logo" />

      <ul>
        <li><Link to="/">Category</Link></li>
        <li><Link to="/deals">Deals</Link></li>
        <li><Link to="/account">Account</Link></li>
        <li>
          <a onClick={toggleCartSidebar} className="cart-button">
            Cart
          </a>
        </li>
      </ul>

      {/* Search form */}
      <form className="search-container" onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search for products..."
          className="search-bar"
          value={searchTerm}
          onChange={handleSearch}
        />
        {searchResults.length > 0 && (
          <div className="search-results">
            {searchResults.map((product) => (
              <div
                key={product.id}
                className="search-result-item"
                onClick={() => handleResultClick(product.id)}
              >
                <img src={`/${product.image}`} alt={product.name} />
                <p>{product.name}</p>
              </div>
            ))}
          </div>
        )}
      </form>
    </div>
  );
};

export default NavBar;
