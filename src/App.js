import React, {Component} from 'react';
import './App.css';
import Classclick from './components/Classclick'
import Hovercounter from './components/Hovercounter'

class App extends Component {

  render() {
    return (
      <div className="App">
      
        <Classclick/>

        <Hovercounter/>
      
      </div>
    )

  }


}

export default App;

