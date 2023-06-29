import './App.css';
import React, {useState, useEffect} from "react";

function App() {

  const fizzfunc = (inputNumber) => {
    if (inputNumber %3 === 0 && inputNumber %5 ===0){
      return ("fizzbuzz");
    } else if (inputNumber % 3 === 0){
      return ('fizz');
    } else if (inputNumber % 5 === 0){
      return ("buzz")
    }else{
      return(inputNumber);
    }
  }

  const colors = ['white', 'red', 'orange', 'green', 'purple', 'blue', 'brown', 'lime'];

  const [color, setColor] = useState(0);
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("");
  const[fizzbuzz, setFizzbuzz] = useState(number);
  const[result, setResult] = useState("")

  const handleTextChange = (event) => {
    setText(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(fizzbuzz == text.toLowerCase()){
      setResult("CORRECT")
    }else{
      setResult("FALSE");
    }
  }

  useEffect(() => {
    setFizzbuzz(fizzfunc(number));
  }, [number])

  const handleIncrementButton = () => {
    setNumber(number + 1);
  }

  const handleColorButton = () => {
    if(color === 7){
    setColor(0)} else{
      setColor(color + 1);
    };
  }

  return (
    <>
      <h1 className={colors[color]}>FizzBuzz</h1>
      <button value={number} onClick={handleIncrementButton}>+</button>
      <button value={color} onClick={handleColorButton}>Switch Colors</button>
      <h3>{number}</h3>
      {/* <h3>{fizzbuzz}</h3> */}

      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={handleTextChange}/>
        <input type="submit" value="Post"/>
      </form>
      <h1>{result}</h1>
    </>
  );
}

export default App;
