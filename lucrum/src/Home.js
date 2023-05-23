import React, { useState } from 'react';
import './Home.css';
// import { IconName } from "react-icons/hi";
import { HiMagnifyingGlassCircle } from 'react-icons/hi2';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  }

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    alert(`Searching for "${searchTerm}"`);
  }

  return (
    <div className="home">
      <h1>Welcome to the Home Page</h1>
      <form className="search-form" onSubmit={handleSearchSubmit}>
        <input 
          className="search-input"
          type="text" 
          placeholder="Search..." 
          value={searchTerm}
          onChange={handleSearchChange}
        />
        {/* <button className="search-button" type="submit">Go!</button> */}
        <button className="search-button" type="submit">
            {/* <div className="search-icon"></div> */}
            <HiMagnifyingGlassCircle className="search-icon" />
        </button>
      </form>
    </div>
  );
}

export default Home;
