import React, { Component } from 'react';
import axios from 'axios';
import Card from './Card';
import styles from './Products.module.css';

class Products extends Component {
    constructor(props){
        super();
        this.state = {
            products:[],
        }
    }
    componentDidMount(){
        axios.get('https://fakestoreapi.com/products')
        .then(response=> this.setState({
            products:response.data,
        }))

    }
    render() {
        const {products} = this.state;
        return (
            <>
            <h1>محصولات:</h1>
            {
               products.length >= 1 ? <div className={styles.conteiner}>
               {this.state.products.map(product => <Card key={product.id} name={product.title} price={`${product.price} $`} image={product.image} />)}
           </div> :  
                 <h2>در حال بارگزاری...</h2> //loding...
            }
 
            </>
                
        );
    }
}

export default Products;