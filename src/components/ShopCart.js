import React, { useContext } from 'react';

 
//Commponent
import Cart from './shared/Cart';
//context
import { CartContext } from '../context/CartContextProvider';
import { Link } from 'react-router-dom';

const ShopCart = () => {

    const { state, dispatch } = useContext(CartContext);

    return (
        <div style={{textAlign:"center"}}>

            <div>
                {  state.selectedItems.map(item => <Cart key={item.id} data={item} /> )}
            </div>

            {
                state.itemsCounter > 0 && <div>

                    <p><span>total Items</span> {state.itemsCounter}</p>
                    <p><span>total payments</span>20000</p>
                    <div>

                        <button onClick={ ()=> dispatch({type:"CHECKOUT" })}>CHECKOUT</button>
                        <button onClick={ ()=> dispatch({type:"CLEAR" })}>CLEAR</button>

                    </div>

                </div>
            }

        
            {
                state.checkout && <div>
                    <h3>checkout OK </h3>
                   <Link to="/products" alt="by more"> BY More </Link>
     
                </div> 

            }

                    
{
                !state.checkout && state.itemsCounter == 0 && <div>
                    <h3>want to by? </h3>
                   <Link to="/products" alt="by more"> Go to shop </Link>
     
                </div> 

            }

          
        </div>
    );
};

export default ShopCart;