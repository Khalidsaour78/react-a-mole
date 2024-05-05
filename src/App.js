
import './App.css';
import { useState } from "react";
import MoleContainer from "./Components/MoleContainer";


function App() {
  const [score, setScore] = useState(0);

  const createMoleHills = () => {
    const hills = [];
    for(let j = 0; j < 9; j++) {
      {
        hills.push(<MoleContainer key={j} setScore={setScore} score={score} />);
      }
    }
    return (
      <div>
        {hills}
      </div>
    )
  };
  return (
    <div className="App">
      <h1>React a Mole!!!</h1>
      {score}
      {createMoleHills()}
    </div>
  );
}

export default App;
