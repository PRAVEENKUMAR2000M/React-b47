// const App = () => {

//     const a = 10;
//     const b = 20;
//     console.log(a + b);
//     const now = new Date(); 
//     return (
//         <div>    
//          <p>hello world now time is {now.toString()}</p>
//             <p>the {a} plus {b} is {a+b}</p>
//       </div>
//   ) 
// }
// export default App;






// const Hello = () => {
//     return (
//         <div>
//             <p>
//                 hello world
//             </p>
//         </div>
//     )
// }

// const App = () => {
//     return (
//         <div>
//         <h1>greetings</h1>
//             <Hello />
//             </div>
//     )
// }


// export default App;








const Hello = (props) => {
    console.log(props);
    return (
        <div>
            <p>hello { props.name }, your age is { props.age }</p>
        </div>
    )
}


const App = () => {
    return (
        <div>
            <h1 style={{color:"white", backgroundColor:"red"}}>greetings</h1>
            <Hello name="praveen" age="23" />
        </div>
    )
}

export default App;











