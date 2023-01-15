import React from 'react';
import styles from './Navbarcat.module.css';
import Logo from '../images/logosite.png';
import {Link } from 'react-router-dom';


const Navbarcat = () => {
    return (
        <header className={styles.header}>
            <div className={styles.listContainer}>
                <ul className={styles.list}>
                   <Link to="/"><li>خانه و آشپزخانه</li></Link>
                   <Link to="/products"><li>کالای دیجیتال</li></Link>
                   <Link to="/aboutus" ><li>آرایشی و بهداشتی</li></Link>  
                </ul>
            </div>           
        </header>
    );
};

export default Navbarcat;