import React from 'react';

import CardList from "./components/card-list/CardList";
import SearchBox from "./components/search-box/SearchBox";
import Title from "./components/title/Title";

class App extends React.Component{

  constructor(props) {
    super(props)
  
    this.state = {
      monsters:[],
      searchField: ''
    }
    this.handleOnSearch = this.handleOnSearch.bind(this)
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({monsters:users}))
}

  handleOnSearch(e){
    this.setState({searchField: e.target.value})
  }
  render(){
    const {monsters,searchField} = this.state
    const filteredMonsters = monsters.filter(monster =>{
      return monster.name.toLowerCase().includes(searchField.toLowerCase())
    });
  return (
          <div className = 'app'>
            <Title />
            <SearchBox 
             handleOnSearch = {this.handleOnSearch}/
             >
            {filteredMonsters.length > 0 ? (<CardList monsters = {filteredMonsters}/>) : (<h2>No monster found :( :(</h2>)}
          </div>
  );
  }
}

export default App;
