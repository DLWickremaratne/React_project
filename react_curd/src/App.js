import logo from './logo.svg';
import './App.css';
import { useState , useEffect , useReducer} from "react";

function App({name}) {

  const [emotion, setEmotion]= useState("happy"); //handle state variable
  const [second, secondEmotion] = useState("Exited");

  //useReducer
  const [checked, getchecked] =useReducer((checked) => !checked, false);

  //useEffect - manage side effects

  useEffect(() => {
    console.log(`I'm ${emotion} !`);
  }, [emotion ]);

  useEffect(() => {
    console.log(`Now i'm ${second}`)
  }, [second]);


  return (
    <div className="App">
      <header className="App-header">
         
        <h1>My name is {name}</h1>
        
        <h1>Hi {emotion}</h1>

        <button onClick={() => setEmotion("sad")}>Sad</button>
        <button onClick={() => setEmotion("Angry")}>Angry</button> 

        <button onClick={() => secondEmotion("GrateFull")}>GrateFull</button> 

        
      </header>

      {/* form inputs */}
      <body>
        <input 
        type= "checkbox"
        value={checked}
        onChange={getchecked}/>

        <lable> {checked ? "Checked" : "Not Checked"}</lable>
      </body>
    </div>
  );
}

export default App;
