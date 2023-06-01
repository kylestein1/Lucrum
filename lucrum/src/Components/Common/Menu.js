import React, { useState } from 'react';
import { HiOutlineMenu } from "react-icons/hi";
import { AiOutlineCloseCircle, AiOutlineUser } from "react-icons/ai";


const Menu = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const handleToggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div>
            <button
                style={
                    isSidebarOpen
                        ? { ...styles.menuButton, ...styles.hamburgerButtonOpen }
                        : styles.menuButton
                }
                onClick={handleToggleSidebar}
            >
             {/* <img src={isSidebarOpen ? AiOutlineCloseCircle : HiOutlineMenu} alt="Menu" />
             // {
            //   // isSidebarOpen ? <AiOutlineCloseCircle  /> : <HiOutlineMenu />
            //   isSidebarOpen ? <AiOutlineCloseCircle style={styles.menuIcon}/> : <HiOutlineMenu style={styles.menuIcon} />
            //   // isSidebarOpen ? <AiOutlineCloseCircle  style={{background:"white"}}/> : <HiOutlineMenu />

            //  } */}
                {isSidebarOpen ? <AiOutlineCloseCircle style={styles.menuIconClose} /> : <HiOutlineMenu style={styles.menuIcon} />}
            </button>

            <div
                style={
                    isSidebarOpen
                        ? { ...styles.sidebar, ...styles.sidebarOpen }
                        : styles.sidebar
                }
            >
                <ul style={styles.menuItems}>
                    <ul style={styles.menuListItem}>Home</ul>
                    <ul style={styles.menuListItem}>About</ul>
                    <ul style={styles.menuListItem}>Contact</ul>
                </ul>
                <div class="UserTab" style={styles.UserTab}>
                    <div class="UserIcon"><AiOutlineUser style={styles.UserIcon}/></div>
                    <div class="User" style={styles.User}>Kyle Stein</div>
                </div>
            </div>
            {isSidebarOpen && (
                <div
                    style={
                        isSidebarOpen
                            ? { ...styles.sidebarCover, ...styles.sidebarCoverOn }
                            : styles.sidebarCover
                    }
                    onClick={handleToggleSidebar}
                >
                </div>
            )}
        </div>
    );
}

export default Menu;

const styles = {
    menuButton: {
        position: 'fixed',
        top: '5%',
        left: '0%',
        background: 'gray',
        height: '35px',
        width: '35px',
        borderRadius: '25%',
        transition: 'left 0.3s ease',
        borderWidth:"0px",
        borderColor: "none",
        marginLeft:"3%",
        zIndex: 1002, // Higher than the sidebar and the cover
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // borderWidth:"1px",
        // borderColor: "#0F4C81",
    },
    menuIcon: {
        height: '20px',
        width: '20px',
        color: "white",
        // color: "#0F4C81",
        // display: "flex",
        // alignItems: "center",
        // align-items: center,
        // justifyContent: "center",
    },
    menuIconClose: {
        height: '20px',
        width: '20px',
        color: "white",
        // display: "flex",
        // alignItems: "center",
        // align-items: center,
        // justifyContent: "center",
    },
    hamburgerButtonOpen: {
        left: 200, // This should be the width of the sidebar
        background: '#0F4C81',
    },
    sidebar: {
        position: 'fixed',
        top: 0,
        left: -200, // This should be the negative of the width of the sidebar
        width: 200,
        height: '100vh',
        background: '#0F4C81',
        transition: 'left 0.3s ease',
        zIndex: 1001, // Higher than the cover, lower than the button
    },
    menuItems: {
        fontWeight: "600",
        fontSize: "120%",
        color: "white",
    },
    menuListItem: {
        marginTop: "20%",
        paddingTop: "10%",
    },
    sidebarOpen: {
        left: 0,
    },
    sidebarCover: {
        position: 'fixed',
//      position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(15, 76, 129, 0.8)', // Add some transparency to the color
        transition: 'background 0.3s ease',
        backdropFilter: 'blur(5px)', // This will blur the background
        zIndex: 1000, // Lower than the sidebar and the button
//       left: -1400, // This should be the negative of the width of the sidebar
//       width: 1400,
//       height: '100vh',
//       opacity: "80%",
//       background: '#0F4C81',
//       transition: 'right 0.3s ease',
    },
    sidebarCoverOn: {
        left: 0,
//      left: 400,
    },
    UserTab: { 
        // display: "grid", 
        gridTemplateColumns: '1fr, 1fr', 
        gridGap: "25%", 
        // border: '1px solid white', 
        width: '100%', 
        display: 'flex',
        position: 'absolute',
        bottom: '0',
        justifyContent: 'center',
        alignItems: 'center',
        // justifySelf:"center",
        // alignSelf:"center",
        // marginLeft:"auto",
        // marginRight:"auto",
        // marginTop:"100%"
    }, 
    UserIcon: { 
        margin: '7%',
        height:"auto", 
        width:"200%", 
        color: "white",
        // border: '1px solid red', 
    },
    User: { 
        whiteSpace: 'noWrap',
        margin: '7%',
        color: "white",
        // height:"10px", 
        // width:"20%", 
        // border: '1px solid red', 
    },
}