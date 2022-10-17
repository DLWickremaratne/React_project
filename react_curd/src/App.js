import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App({name}) {

  const [emotion, setEmotion]= useState("I'm happy"); //handle state variable


  return (
    <div className="App">
      <header className="App-header">
         
        <h1>My name is {name}</h1>
        
        <h1>Hi {emotion}</h1>

        <button onClick={() => setEmotion("I'm sad")}>Sad</button>
        <button onClick={() => setEmotion("I'm Angry")}>Angry</button> 




      </header>
    </div>
  );
}

export default App;
