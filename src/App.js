import { useState } from "react";

function App() {
  const [calcValue, setCalcValue] = useState("");

  const operators = ["+", "*", "/", "%"];
  const operators2 = ["-"];

  const handleNumberClick = (e) => {
    e.preventDefault();
    const value = e.target.value;

    if (
      (operators.includes(value) && calcValue === "") ||
      (operators.includes(value) && operators.includes(calcValue.slice(-1)))
    ) {
      return;
    }
    if (
      (value === "-" && calcValue === "-") ||
      (operators2.includes(value === "-") &&
        operators2.includes(calcValue.slice(-1)))
    ) {
      return;
    }
    if (value === "0" && calcValue === "0") {
      return;
    }
    setCalcValue(calcValue + value);
  };

  const handleClear = () => {
    setCalcValue("");
  };

  const handleDelete = () => {
    setCalcValue(calcValue.slice(0, -1));
  };

  const handlePercent = () => {
    setCalcValue(calcValue / 100);
  };

  const equalToFunc = () => {
    setCalcValue(eval(calcValue));
  };

  return (
    <div className="container">
      <div>
        <input type="text"  className="display" value={calcValue} placeholder="0" />
      </div>
      <div className="row">
        <button className="light-grey clear" onClick={handleClear}>
          AC
        </button>
        <button
          className="light-grey plus-minus"
          onClick={handlePercent}
          value="%"
        >
          %
        </button>
        <button
          className="light-grey operator"
          onClick={handleNumberClick}
          value="/"
        >
          /
        </button>
        <button className="yellow backspace" onClick={handleDelete}>
          DEL
        </button>
      </div>
      <div className="row">
        <button className="dark-grey" onClick={handleNumberClick} value="7">
          7
        </button>
        <button className="dark-grey" onClick={handleNumberClick} value="8">
          8
        </button>
        <button className="dark-grey" onClick={handleNumberClick} value="9">
          9
        </button>
        <button
          className="yellow operator"
          onClick={handleNumberClick}
          value="*"
        >
          *
        </button>
      </div>
      <div className="row">
        <button className="dark-grey" onClick={handleNumberClick} value="4">
          4
        </button>
        <button className="dark-grey" onClick={handleNumberClick} value="5">
          5
        </button>
        <button className="dark-grey" onClick={handleNumberClick} value="6">
          6
        </button>
        <button
          className="yellow operator"
          onClick={handleNumberClick}
          value="-"
        >
          -
        </button>
      </div>
      <div className="row">
        <button className="dark-grey" onClick={handleNumberClick} value="1">
          1
        </button>
        <button className="dark-grey" onClick={handleNumberClick} value="2">
          2
        </button>
        <button className="dark-grey" onClick={handleNumberClick} value="3">
          3
        </button>
        <button
          className="yellow operator"
          onClick={handleNumberClick}
          value="+"
        >
          +
        </button>
      </div>
      <div className="row">
        <button
          className="dark-grey"
          id="zero"
          onClick={handleNumberClick}
          value="0"
        >
          0
        </button>
        <button className="dark-grey dot" onClick={handleNumberClick} value=".">
          .
        </button>
        <button className="yellow equalto" onClick={equalToFunc}>
          =
        </button>
      </div>
    </div>
  );
}

export default App;
