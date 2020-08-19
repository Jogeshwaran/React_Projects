import React, { Component } from 'react';
import Layouts from './components/layouts/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

//Layouts is used as a wrapping componet which contains all the other components within it
class App extends Component {
  render() {
    return (
      <div>
      <Layouts>   
        <BurgerBuilder></BurgerBuilder>
      </Layouts>
      </div>
    );
  }
}

export default App;
