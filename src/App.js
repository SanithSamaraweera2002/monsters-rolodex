import React, {Component} from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';

class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
    
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response => Response.json())
    .then(users => this.setState({monsters: users}))

  }

  render(){
    const { monsters,searchField } = this.state;
    const filteredMonsters = monsters.filter(monster=>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className="App">
      <input type='search' placeholder='Search Monster' 
      onChange={e=> 
        this.setState({searchField: e.target.value})}>

      </input>
      <CardList monsters={filteredMonsters}>
      </CardList> 
      </div>
    
    )
    }
  }


export default App;
