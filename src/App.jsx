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
