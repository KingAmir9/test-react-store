import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import style from '../shared/Navbar.module.css';

// Context
import { CartContext } from '../../context/CartContextProvider';

// Icons
import shopicon from '../../assets/icons/box.svg';

const Navbar = () => {

    const { state } = useContext(CartContext)

    return (
        <div className={style.container}>
            <div>
                <Link to='/products'>Shops</Link>
            </div>
            <Link to='/cart'><img src={shopicon} alt='cart'/>
            <span>{state.itemsCounter}</span>

            </Link>
        </div>
    );
};

export default Navbar;