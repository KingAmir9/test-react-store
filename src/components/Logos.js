import React from 'react';
import styles from './Logos.module.css'
import logo1 from '../images/1000003322.jpg'
import logo2 from '../images/1000003456.jpg'
import logo3 from '../images/1000003547.jpg'
import logo4 from '../images/1000003570.jpg'

const Logos = () => {
    return (
        <div className={styles.container}>
            {/* <h3>Who Support Us?</h3> */}
            <div>
            <img src={logo1} />      
            <img src={logo2} />      
            <img src={logo3} />   
            <img src={logo4} />   
            </div>   
        </div>
    );
};

export default Logos;