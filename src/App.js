import React from 'react';
import CardList from "./components/card-list/CardList";


class App extends React.Component{

  constructor(props) {
    super(props)
  
    this.state = {
      monsters:[]
    }
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({monsters:users}))
}
  render(){
    const {monsters} = this.state
  return (
    <div className = "card-container">
      <CardList monsters = {monsters}/>
    </div>
  );
  }
}

export default App;
