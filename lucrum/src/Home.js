import React, { useState, useEffect, useRef } from 'react';
import './Home.css';
import StockInfo from './Components/StockInfo';
import { HiMagnifyingGlassCircle } from 'react-icons/hi2';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchSubmitted, setSearchSubmitted] = useState(false);
  const [companyInfo, setCompanyInfo] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (searchTerm.length > 0) {
      fetch(`https://financialmodelingprep.com/api/v3/search?query=${searchTerm}&limit=10&exchange=NASDAQ&apikey=7b2b04af203b96586946293f38387361`)
        .then(response => response.json())
        .then(data => setSearchResults(data))
        .catch(err => console.error(err));
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };
  
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setSearchSubmitted(false);
    setShowSuggestions(true);
  }

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    setSearchSubmitted(true);
    setShowSuggestions(false);
    
    fetch(`https://financialmodelingprep.com/api/v3/profile/${searchTerm}?apikey=7b2b04af203b96586946293f38387361`)
      .then(response => response.json())
      .then(data => {
        setCompanyInfo(data[0]);
      })
      .catch(err => console.error(err));
  }

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearchSubmit(event);
    }
  };

  const selectSuggestion = (result) => {
    setSearchTerm(result.symbol);
    setShowSuggestions(false);
  };

  return (
    <div className="home">
      <h1>Welcome</h1>
      <form className="search-form" onSubmit={handleSearchSubmit}>
        <input 
          className="search-input"
          type="text" 
          placeholder="Search..." 
          value={searchTerm}
          onChange={handleSearchChange}
          onKeyPress={handleKeyPress}
        />
        {showSuggestions && searchResults.length > 0 && (
          <ul className="search-results" ref={dropdownRef}> 
            {searchResults.map(result => (
              <li key={result.symbol} onClick={() => selectSuggestion(result)}>
                {result.symbol} ({result.name})
              </li>
            ))}
          </ul>
        )}
        <button className="search-button" type="submit">
            <HiMagnifyingGlassCircle className="search-icon" />
        </button>
      </form>
      {searchSubmitted && companyInfo && <StockInfo symbol={searchTerm} companyInfo={companyInfo} />}
    </div>
  );
}

export default Home;














// import React, { useState } from 'react';
// import './Home.css';
// import StockInfo from './Components/StockInfo';
// import { HiMagnifyingGlassCircle } from 'react-icons/hi2';

// function Home() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchSubmitted, setSearchSubmitted] = useState(false);

//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//     setSearchSubmitted(false);
//   }

//   const handleSearchSubmit = (event) => {
//     event.preventDefault();
//     setSearchSubmitted(true);
//   }

//   return (
//     <div className="home">
//       <h1>Welcome</h1>
//       <form className="search-form" onSubmit={handleSearchSubmit}>
//         <input 
//           className="search-input"
//           type="text" 
//           placeholder="Search..." 
//           value={searchTerm}
//           onChange={handleSearchChange}
//         />
//         <button className="search-button" type="submit">
//             <HiMagnifyingGlassCircle className="search-icon" />
//         </button>
//       </form>
//       {searchSubmitted && <StockInfo symbol={searchTerm} />}
//     </div>
//   );
// }

// export default Home;





