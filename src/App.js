import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters: [
        {
          name: "Dracula Test Changes",
          id: 'ac1'
        },
        {
          name: "Frankestien",
          id: 'ac2'
        },
        {
          name: "Zombie",
          id: 'ac3'
        }
      ]
    }
    
  }

  render(){
      return (
        <div className="App">
          {
            this.state.monsters.map(monsters => 
            <h1 key={monsters.id}>{monsters.name }</h1>)
          }
        </div>
      )
    }
  }


export default App;
