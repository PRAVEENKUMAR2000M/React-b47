// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// import React from 'react'
import React, {Component} from "react";

class App extends Component{

constructor(props){
super(props);

this.state = {
goodCount: 0,
neutralCount: 0,
badCount: 0,
};
}

good = () =>{
this.setState((prevState)=>({
goodCount: prevState.goodCount +1,
}));
}

neutral = () =>{
this.setState((prevState)=>({
neutralCount: prevState.neutralCount +1,
}));
}

bad = () =>{
this.setState((prevState)=>({
badCount: prevState.badCount +1,
}));
}

render(){
return(
<div>
<h1>Give feedback</h1>
<button onClick={this.good}>good</button>
<button onClick={this.neutral}>neutral</button>
<button onClick={this.bad}>bad</button>
<h1>statistics</h1>
<p>good: {this.state.goodCount}</p>
<p>neutral: {this.state.neutralCount}</p>
<p>bad: {this.state.badCount}</p>
</div>
);
}
}

export default App





import React, {Component} from "react";

class App extends Component{

constructor(props){
super(props);

this.state = {
goodCount: 0,
neutralCount: 0,
badCount: 0,
};
}

good = () =>{
this.setState((prevState)=>({
goodCount: prevState.goodCount +1,
}));
}

neutral = () =>{
this.setState((prevState)=>({
neutralCount: prevState.neutralCount +1,
}));
}

bad = () =>{
this.setState((prevState)=>({
badCount: prevState.badCount +1,
}));
}

render(){
return(
<div>
<h1>Give feedback</h1>
<button onClick={this.good}>good</button>
<button onClick={this.neutral}>neutral</button>
<button onClick={this.bad}>bad</button>
<h1>statistics</h1>
<p>good: {this.state.goodCount}</p>
<p>neutral: {this.state.neutralCount}</p>
<p>bad: {this.state.badCount}</p>
</div>
);
}
}

export default App









import React, { useState } from 'react';

function App() {
  // let { counter } = props
  // console.log(counter);
  const [counter, setcounter] = useState(0);
  setTimeout(() => {
    setcounter(counter + 1)
  }, 1000)

  console.log("rendering", counter)

  return (
    <div>{counter}</div>
  )
}

export default App





import React, { useState } from 'react';

function Display({ counter }) {

  return (
    <div>{counter}</div>
  )
}

function App() {
  // let { counter } = props
  // console.log(counter);
  const [counter, setcounter] = useState(0);
  // setTimeout(() => {
  //   setcounter(counter + 1)
  // }, 1000)

  // console.log("rendering", counter)

  const handlePlus = () => {
    setcounter(counter + 1);
  }

  const handleMinus = () => {
    setcounter(counter - 1);
  }
  const handleZero = () => {
    setcounter(0);
  }

  return (
    <div>
      <Display counter={counter} />
      <button onClick={handlePlus}>plus</button>
      <button onClick={handleMinus}>minus</button>
      <button onClick={handleZero}>zero</button>
    </div>
  )
}

export default App

