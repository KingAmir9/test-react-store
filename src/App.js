import React , {Component} from 'react';
import { render } from 'react-dom';
import { Route,Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Navbarcat from './components/Navbarcat';
import Bannner from './components/Bannner';
import Cards from './components/Cards';
import Search from './components/Search';
import Logos from './components/Logos';
import Footer from './components/Footer';
import Aboutus from './components/Aboutus';
import Products from './components/Products';
import Landing from './components/Landing';
import Productsingel from './components/Productsingel';
import './index.css';
import SignUp from './components/SignUp';
import Login from './components/Login';


class App extends Component {

  render(){
     
    return (
      <>
      
          <Navbar/>
          <div className='contaeiner'>
            <Switch>
              <Route path='/login' component={Login} />
              <Route path='/signup' component={SignUp} />
              <Route path="/aboutus" component={Aboutus}/>
              <Route path="/products/:id" component={Productsingel}/>
              <Route path="/products" component={Products}/>
              <Route path="/" component={Landing}/>
            </Switch>
          </div>
          
          <Footer/>
      </>
    )  
  }
}

export default App;