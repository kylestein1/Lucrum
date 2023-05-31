// import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import { HiOutlineMenu } from "react-icons/hi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Home from './Home';
import Menu from './Components/Common/Menu';
import './App.css';

function App() {
  const coin = process.env.PUBLIC_URL + '/images/coin.png'; // Adjust the path if your image is in a different location

  
  return (
    <div className="App">
      <header className="App-header">
        {/* <div style={{height:"10px", width:"10px", color:"white", background:"blue"}}> */}
        {/* <div style={styles.topBar}> */}
          {/* <p>=</p> */}
        <Menu />
          {/* HiOutlineMenu */}
          {/* AiOutlineCloseCircle */}
        {/* </div> */}
      </header>
        {/* <div 
          className="coin" 
          style={{ backgroundImage: `url(${coin})` }}
        /> */}
        <div className='AppHome'>
          
          <Home />
        </div>
    </div>
  );
}

export default App;


const styles = ({
  topBar: {
      width: "2%",
      height: "2%",
      // marginTop: windowHeight * .05,
      marginLeft: "2%",
      backgroundColor: "blue"
  },
  // container: {
  //     borderColor: '#010101',
  //     width: windowWidth * .9,
  //     height: windowHeight * .05,
  //     marginTop: windowHeight * .05,
  //     marginLeft: windowWidth * .05,
  //     flexDirection: 'row',
  //     alignItems: 'center'
  // }
  menuButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    background: '#0F4C81',
    height: '35px',
    width: '35px',
    borderRadius: '25%',
    transition: 'left 0.3s ease',
    // alignContent:'Center',
    // alignSelf:'Center',
    
  },
  menuIcon: {
    height: '20px',
    width: '20px',
    color: "white",
  },
  // #4A4A4A
  hamburgerButtonOpen: {
    left: 200, // This should be the width of the sidebar
    background: '#4A4A4A',
  },
  sidebar: {
    position: 'fixed',
    top: 0,
    left: -200, // This should be the negative of the width of the sidebar
    width: 200,
    height: '100vh',
    background: '#f0f0f0',
    transition: 'left 0.3s ease',
  },
  sidebarOpen: {
    left: 0,
  },
  sidebarCover: {
    position: 'absolute',
    top: 0,
    left: -1400, // This should be the negative of the width of the sidebar
    width: 1400,
    height: '100vh',
    opacity: "80%",
    background: '#0F4C81',
    transition: 'right 0.3s ease',
    
  },
  sidebarCoverOn: {
    left: 400,
  },
})
