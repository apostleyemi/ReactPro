import React, {useReducer } from 'react';
import logo from './logo.svg';
import './App.css';
import CounterOne from './Components/CounterOne';
import GradeCalculator from './Components/GradeCalculator';
import CounterTWo from './Components/CounterTwo';
import CounterThree from './Components/CounterThree';
import ComponentA from './Components/ComponentA';
import ComponentB from './Components/ComponentB';
import ComponentC from './Components/ComponentC';

export const CountContext=React.createContext()

const initialState=0

const reducer =(state, action)=>{

switch(action){
    case 'increment':
        return state + 1
    case 'decrement':
        return state -1
    case 'reset':
        return initialState
    default:
        return state
}

} 

function App() {
  const [count, dispatch]=useReducer(reducer,initialState)
  return (
    <CountContext.Provider value={{countState:count, countDispatch:dispatch}}>
    <div className="App">
      <h1>Tech-space Solutions Tutorial</h1>
      {/* <CounterTWo/> */}
      {/* <CounterThree/> */}
      Count - {count}
      <ComponentA/>
      <ComponentB/>
      <ComponentC/>
  
    
    </div>
    </CountContext.Provider>
  );
}

export default App;
