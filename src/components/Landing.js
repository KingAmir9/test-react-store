import React, { Component } from 'react';
import Bannner from './Bannner';
import Cards from './Cards';
import Search from './Search';
import Logos from './Logos';

class Landing extends Component {
    render() {
        return (
            <>
              <Bannner/>
              <Cards/>
              <Search/>
              <Logos/>
              </>
        );
    }
}

export default Landing;