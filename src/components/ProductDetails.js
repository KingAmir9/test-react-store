import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductsContext } from '../context/ProductContextProvider';

const ProductDetails = (props) => {
    const id = props.match.params.id;
    const data = useContext(ProductsContext);
    const product = data[id - 1];
    const {title,body} = product ;

    return (
        <div style={{textAlign:"center"}}>
            <p>Details - {id}</p>
            <h2>
                {title}
            </h2>
            <h3>
                {body}
            </h3>
            <Link to={`/products`}> back to store </Link>

        </div>
    );
};

export default ProductDetails;