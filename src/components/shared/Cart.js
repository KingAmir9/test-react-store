import React , {useContext} from 'react';
import imgptoduct from '../../images/c1.jpg'

//Context
 import { CartContext } from '../../context/CartContextProvider';

 //founction
 import { quantityCount, shorten } from '../../helper/functions';

 //icons
 import trashIcon from '../../assets/icons/trash.svg'
import { type } from '@testing-library/user-event/dist/type';

const Cart = (props) => {

   const { title , quantity} = props.data;
   const { dispatch } = useContext(CartContext);

    return (
        <div>
             <img src={imgptoduct} alt='img' />
                <div>
                    <h3>{shorten(title)}</h3>
                    <p>2000</p>
                </div>
                <div>
                    <span>{quantity}</span>
                </div>
                <div>

                    {
                        quantity > 1 ?
                        <button onClick={ ()=> dispatch({type:"DECREASE", payload: props.data}) }> - </button> :
                        <button onClick={ ()=> dispatch({type:"REMOVE_ITEM" , payload: props.data}) }> <img src={trashIcon} alt='trash' /></button> 
                    }
                    <button onClick={ ()=> dispatch({type:"INCREASE",payload: props.data}) }> + </button> :

                </div>
        </div>
    );
};

export default Cart;