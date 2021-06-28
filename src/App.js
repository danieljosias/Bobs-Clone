import { useState } from 'react';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';

import Cardapio from './pages/Cardapio';
import Login from './pages/Login';

import Home from './pages/home/index';  
import Cart from './pages/cart/show-cart';  
import ShowCart from './pages/cart/show-cart'; 
import Privacidade from './pages/Privacidade'; 
import Finalizar from './pages/Finalizar';


import ParticleBackground from './ParticleBackground';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {

  const [user, setUser] = useState(true);
    const actionLoginDataGoogle = (u) =>{
      let newUser = {
        id: u.uid,
        name: u.displayName,
        avatar: u.photoUrl
      }

      setUser(newUser);

    }

    if(user === null){
      return(
        <Login onReceiveGoogle={actionLoginDataGoogle}/>
      )
    }

    
    
  return (

      <Router>
      <Header />
      
        <div>
          <Switch>

            <Route exact path="/cart/:id" render={({match}) => (
                <Cart id={match.params.id} />
                    )} />
                    
            <Route exact path="/show-cart">
                <ShowCart />
            </Route>
            
            <Route exact path="/cardapio" > <Cardapio /></Route>
            <Route exact path="/sanduiche"> <Home /></Route>
            <Route exact path="/privacidade"> <Privacidade/></Route>
            <Route exact path="/finalizar" ><Finalizar/> </Route>
            <Route exact path="/" ><ParticleBackground /> </Route>
            
          </Switch>
        </div>
      <Footer />
      </Router> 

  );
}

export default App;
