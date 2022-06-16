import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import MyReactDOM from './myReact/MyReactDom';
import './index.css';
import App from './App';
import MyReact from './myReact/MyReact'
//import reportWebVitals from './reportWebVitals';

// UI = React(state)

const Button = ({clickFunction, text}) =>{
 return(
  <button onClick={clickFunction}>{text}</button>
 )
}

const Counter = () => {

  const [counter, setCounter] = useState(0);

  const handleAdd = () => {
    setCounter(counter + 1);
  }

  const handleSub = () => {
    setCounter(counter - 1);
  }

  const handleAlert = () => {
    setTimeout(() => {
      setCounter((value) => {
        alert(value)
        return value;
      })
    }, 5000)
  }

  return (
    <div>
      <h1>Counter Value: {counter}</h1>
      <Button clickFunction={handleAdd} text="+"></Button>
      <Button clickFunction={handleSub} text="-"></Button>
      <Button clickFunction={handleAlert} text="Alert after 5 Seconds"></Button>
    </div>
  )


}

ReactDOM.render(
  <Counter title="MyCounter" />,
  document.getElementById('root')
);
