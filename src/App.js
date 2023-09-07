import React,{Component} from 'react'
import Portfolio from './conposant/Portfolio'

export default class App extends Component{
  //initialisation du state

  constructor(){
    super()
    this.state={
      name:"marwa",
      counter:0,
      show:false
    }
  }
changeName=()=>{
  this.setState({
    name:"mariem"
  })
}
  increment=()=>{
    this.setState({
      counter : this.state.counter +1
    })
}

decrement=()=>{
  if( this.state.counter >0){
  this.setState({
    counter : this.state.counter -1
  })}
}

reset=()=>{
  this.setState({
    counter : 0
  })
}
toggle=()=>{
  this.setState({
    show: !this.state.show
  })
}
 render(){
  return(
    <>
    <h1> State Class Component</h1>
    <h1>
      {this.state.name}
    </h1>
    <button onClick={this.changeName}> Change name</button>
    <h1> {this.state.counter}</h1>
    <button onClick={this.increment}>+</button>
    <button onClick={()=>this.decrement()}>-</button>
    <button onClick={()=>this.reset()}>reset</button>
    <button onClick={()=>this.toggle()}>Show/Hide</button>
    {this.state.show && <Portfolio/>}
                 0 *1 =0


    </>
  )
 }

  }
