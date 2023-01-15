import React from 'react';
import styles from './Navbar.module.css';
import Logo from '../images/logosite.png';
import {Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <header className={styles.header}>
            <div className={styles.listContainer}>
                <ul className={styles.list}>
                   <Link to="/"><li>Home</li></Link>
                   <Link to="/products"><li>products</li></Link>
                   <Link to="/aboutus" ><li>about Us</li></Link>  
                </ul>
            </div>
            <div className={styles.logo}>
                <img className={styles.logo} src={Logo} alt="logo"/>
            </div>

            
        </header>
    );
};

export default Navbar;