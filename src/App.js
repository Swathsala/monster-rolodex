import React, { Component } from "react";
import "./App.css";
import { CardList } from './Components/card-list/card-list.component';
import { SearchBox } from './Components/search-box/search-box.component';


class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };

    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters : users }));
  }

  handleChange= (e) => { 
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { monsters, searchField } = this.state;
    const filterMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );


    return (
      <div className="App">
        <h1>Monsters Rolodex </h1>
        <SearchBox 
          placeholder="search monsters" 
          handleChange={this.handleChange}
        />
        {/* <input type='search' placeholder="search monsters" 
        onChange={e => this.setState({ searchField: e.target.value })} 
      />  */}
        <CardList monsters={filterMonsters}/>
      </div>
    );
  }
}

export default App;
