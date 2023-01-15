import React, { Component } from 'react';
import styles from './Search.module.css';

class Search extends Component {
    render() {
        return (
            <div className={styles.conteiner}>
                <input placeholder='جستجو...'/>
                <p>جستجو در بی نهایت محصول...</p>
            </div>
        );
    }
}

export default Search;