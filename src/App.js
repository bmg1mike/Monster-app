import {Component} from 'react'
import logo from './logo.svg';
import './App.css';
import CardList from './components/card-list/CardList'
import {SearchBox} from './components/Search box/Search-Box.Component'

class App extends Component {
  constructor(){
    super()
    this.state = {
      monsters : [],
      searchField : ""
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(resource=>resource.json())
      .then(data=>{
        this.setState({monsters : data})
      })
  }

  handleChange = (e)=>{
    this.setState({searchField : e.target.value})
  }
  render(){
    const { monsters,searchField } = this.state;
    const FilteredMonsters = monsters.filter(monster =>
            monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <h1>Monster App</h1>
        <SearchBox placeholder="Search Monster" HandleChange = {this.handleChange}/>
        <CardList monsters={FilteredMonsters}/>
      </div>
    );
  }
  
}

export default App;
