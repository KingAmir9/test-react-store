import React, { Component } from 'react';
import styles from './Card.module.css';
import upsvg from '../images/up.svg';
import downsvg from '../images/down.svg';
import { Link } from 'react-router-dom';

class Card extends Component {

constructor(){
    super()
    this.state = {
        counter : 0,
    }
}
    downHandeler = ()=> {

        if(this.state.counter >=1){
            this.setState(prevState =>({
                counter: prevState.counter -1,
            }))
        }
    }

    upHandeler = ()=> {
        this.setState(prevState =>({
            counter: prevState.counter +1,
        }))
    }
 
    render() {
        const {image,name,price,id} = this.props;
        const {counter} = this.state;

        return (
            <div className={styles.container}>
                <img src={image} />
                <h3>
                    <Link to={`/products/${id}`}>{name}</Link>
                </h3>
                <p>{price}{counter ? `* ${counter} = ${counter * Number(price.split(" ")[0])} $` : "" }</p>

                <div className={styles.counter}>
                    <img className={!counter ? styles.deactive : "" } src={downsvg} alt="down" onClick={this.downHandeler} />
                    <span>{counter}</span>
                    <img src={upsvg} alt="up" onClick={this.upHandeler} />

                </div>
            </div> 
        );
    }
}

export default Card;