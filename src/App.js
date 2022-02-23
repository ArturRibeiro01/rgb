import { useState } from "react";
import ColorBox from "./components/ColorBox";
import History from "./components/History";
import "./App.css";

const App = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const [history, setHistory] = useState([]);

  const backgroundDefault = (red, green, blue) =>
    `rgb(${red},${green},${blue})`;

  const isColorInHistory = history.some(
    (rgb) => JSON.stringify(rgb) === JSON.stringify([red, green, blue])
  );

  const generateRandonColor = () => {
    const newRed = Math.floor(Math.random() * 256);
    const newGreen = Math.floor(Math.random() * 256);
    const newBlue = Math.floor(Math.random() * 256);

    setRed(newRed);
    setGreen(newGreen);
    setBlue(newBlue);

    setHistory((h) => [[newRed, newGreen, newBlue], ...h]);
  };

  return (
    <section>
      <h1>Gerador Automático de cores</h1>

      <div className="area-colors-select">
        <div className="select-colors">
          <h4>Red:{red}</h4>
          <input
            type="range"
            min={0}
            max={255}
            value={red}
            onChange={({ target }) => setRed(parseInt(target.value))}
          ></input>
        </div>

        <div className="select-colors">
          <h4> Green:{green}</h4>
          <input
            type="range"
            min={0}
            max={255}
            value={green}
            onChange={({ target }) => setGreen(parseInt(target.value))}
          ></input>
        </div>
        <div className="select-colors">
          <h4 className="blue">Blue:{blue}</h4>
          <input
            type="range"
            min={0}
            max={255}
            value={blue}
            onChange={({ target }) => setBlue(parseInt(target.value))}
          ></input>
        </div>
      </div>

      <ColorBox backgroundColor={backgroundDefault(red, green, blue)} />

      <hr />

      <button
        onClick={() => setHistory((h) => [[red, green, blue], ...h])}
        disabled={isColorInHistory}
      >
        Adicionar RGB ao Histórico
      </button>

      <button onClick={generateRandonColor}>
        Gerar Cor aleatória aleatória
      </button>

      <hr />

      <History data={history} backgroundColor={backgroundDefault} />
    </section>
  );
};

export default App;
