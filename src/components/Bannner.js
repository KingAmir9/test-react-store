import React from 'react';
import styles from './Banner.module.css';
import banner from '../images/slider-1.jpg';

const Bannner = () => {
    return (
     
        <div className={styles.contaner}>

     
            <div className={styles.bannerbox}>
            <img className='banner' src={banner} alt='baneer' />
            </div>
            {/* <div className={styles.textContainer}>
                <h1>فروشگاه</h1>
                <p>
                    فروشگاهی به وسعت <span>ایران زمین!</span>
                    </p>
            </div> */}
         
        </div>
         
    );
};

export default Bannner;