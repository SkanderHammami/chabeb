import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(){
    super()
    this.state= {
        tab : [
          {desc: "Hello", isDone : false,id:1},
          {desc: "Ghassen", isDone : false,id:2},
          {desc: "Mehdi", isDone : false,id:3}
        ],
        theInput : ''
    }

    
    
  }
  addTask=()=> {
    this.state.theInput === "" ? alert('Wrong') :
    this.setState({tab : [...this.state.tab,{desc : this.state.theInput,isDone : false,id : Math.random()}]})

  }
  
  render(){
    return(
        <div>
            {
              this.state.tab.map(el=> 
                <div>
                  <h2>{el.desc}</h2>
                  <h3>{el.isDone ? 'True' : 'False'}</h3>
                  <button>Delete</button>
                </div>)
            }

            <input onChange={(e)=> this.setState({theInput : e.target.value})}/>
            <button onClick={this.addTask}>Ajouter</button>
              
        </div>
        

        

    )
  }
}

export default App;
