import { useState } from "react";
import "./App.css";
import Jatekter from "./komponens/Jatekter";
import Tmodel from "./model/Tmodel";

const tmodel = new Tmodel();

function App() {
  const [list, setList] = useState(["O", "X", "", "", "", "", "", "", ""]);

  function Kattintas(index) {
    tmodel.setAllapot(index);
    setList(tmodel.getList());
    console.log(list);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>TicTacToe</h1>
      </header>
      <article>
        <Jatekter lista={list} Kattintas={Kattintas} />
      </article>
      <footer>Petrovai Asztrik Örs</footer>
    </div>
  );
}

export default App;
