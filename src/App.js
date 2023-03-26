import { useState } from 'react';
import './App.css';

function App() {
  const [input,setInput] = useState('');
  const rightPassword = "123"
  const [display, setDisplay] = useState(false)
  
  const checkPassword = () => {
    if (input === rightPassword) {
      setDisplay(true)
        } else {
      setDisplay(false)
    }
  }


  return (
    <div className="App">
      <h1 class="glow">
        Enter the password
      </h1>
      <input type="password" value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={checkPassword}>Check</button>
      {display && <h1 class="glow">File Downloaded</h1>}
      {!display && 
      <div>
      <h1 class="glow">Unsuccessful password</h1>
      <p  style={{color : "orange"}}>15 18 1 14  7 5</p>
      <p  style={{color : "purple"}}>16 21 18 16 21 12 5</p>
      <p  style={{color : "white"}}>22 8 9 20 5</p>
      <p  style={{color : "red"}}>19 3 1 18 12 5 20</p>
      <p class="glow">4 18 5 1 13 12 1 14 4</p>
      </div>
      }
  

      </div>
  );
}

export default App;
