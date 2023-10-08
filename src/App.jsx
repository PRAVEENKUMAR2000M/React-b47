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






const Hello = () => {
    return (
        <div>
            <p>
                hello world
            </p>
        </div>
    )
}

const App = () => {
    return (
        <div>
        <h1>greetings</h1>
            <Hello />
            </div>
    )
}


export default App;