import React, { useState } from 'react';
import './Home.css';
import StockInfo from './Components/StockInfo';
import { HiMagnifyingGlassCircle } from 'react-icons/hi2';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchSubmitted, setSearchSubmitted] = useState(false);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setSearchSubmitted(false);
  }

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    setSearchSubmitted(true);
  }

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
        />
        <button className="search-button" type="submit">
            <HiMagnifyingGlassCircle className="search-icon" />
        </button>
      </form>
      {searchSubmitted && <StockInfo symbol={searchTerm} />}
    </div>
  );
}

export default Home;





// import React, { useState } from 'react';
// import './Home.css';
// import StockInfo from './Components/StockInfo';
// // import { IconName } from "react-icons/hi";
// import { HiMagnifyingGlassCircle } from 'react-icons/hi2';

// function Home() {
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//   }

//   const handleSearchSubmit = (event) => {
//     event.preventDefault();
//     // alert(`Searching for "${searchTerm}"`);
//     console.log(searchTerm);
//   }

//   return (
//     <div className="home">
//       <h1>Welcome to the Home Page</h1>
//       <form className="search-form" onSubmit={handleSearchSubmit}>
//         <input 
//           className="search-input"
//           type="text" 
//           placeholder="Search..." 
//           value={searchTerm}
//           onChange={handleSearchChange}
//         />
//         {/* <button className="search-button" type="submit">Go!</button> */}
//         <button className="search-button" type="submit">
//             {/* <div className="search-icon"></div> */}
//             <HiMagnifyingGlassCircle className="search-icon" />
//         </button>
//       </form>
//       <StockInfo symbol={searchTerm} />
//     </div>
//   );
// }

// export default Home;
