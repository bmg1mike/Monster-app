import {Component} from 'react'
import logo from './logo.svg';
import './App.css';
import CardList from './components/card-list/CardList'

class App extends Component {
  constructor(){
    super()
    this.state = {
      monsters : []
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(resource=>resource.json())
      .then(data=>{
        this.setState({monsters : data})
      })
  }
  render(){
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <CardList monsters={this.state.monsters}/>
      </div>
    );
  }
  
}

export default App;
