import { Component } from 'react'

import CardList from './components/card-list/card-list'
import SearchBar from './components/search-bar/search-bar'
import './App.css'

// order of operations constructor, render, lifecycles
class App extends Component {
  constructor(){
    super()
    // initilize the state
    this.state = {
      monsters: [],
      searchField: ''
    }
    // console.log('constructor')
  }
  // mounting is the first time a component gets placed on the DOM
  componentDidMount() {
    console.log('DidMount')
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((users) => 
    // when state changes we will run the render function again
    this.setState(() => {
      return {monsters: users}
    },
    // () => {
    //   console.log('state changes')
    // }
    ))
  }

  onSearchChange = (event) =>{
    // console.log('changeing state with onChange')
    const searchField = event.target.value.toLowerCase()
    this.setState(() => {
      return {searchField}
    })
  }

  render(){
    console.log('render')
    const {monsters, searchField } = this.state
    const {onSearchChange} = this
      const filteredMonsters = monsters.filter((monster) =>{
      return monster.name.toLowerCase().includes(searchField)
    })
    return (
      <div className="App">
        <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBar onChangeHandler={onSearchChange} placeholder='search monsters' className='monster-search-bar' />
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
  
}

export default App;
