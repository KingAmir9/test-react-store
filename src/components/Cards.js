import React, { Component } from 'react';
import styles from './Cards.module.css'
import Card from './Card';
import product1 from '../images/c1.jpg'
import product2 from '../images/c2.jpg'
import product3 from '../images/c3.jpg'
import product4 from '../images/c4.jpg'

class Cards extends Component {
    constructor(){
        super()
        this.state = {
            productData : [
                {id:1,name: "product1", price:"500 $", image: product1},
                {id:2,name: "product1", price:"500 $", image: product2},
                {id:3,name: "product1", price:"500 $", image: product3},
                {id:4,name: "product1", price:"500 $", image: product4}
            ]
        }
    }

    render() {
        const{productData} = this.state;
        return (  
            <div className={styles.conteiner}>
                  {productData.map(product =>
                     <Card 
                     key={product.id} 
                     name={product.name} 
                     price={product.price} 
                     image={product.image}
                     id={product.id} />
                     )}
            </div>
        );
    }
}

export default Cards;