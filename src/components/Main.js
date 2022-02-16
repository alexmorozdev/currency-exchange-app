import { useState } from "react";
import { useSelector } from "react-redux";

function Main() {
  const currencies = {
    EURUAH: 0,
    EURUSD: 0,
    USDUAH: 0,
    USDEUR: 0,
    UAHEUR: 0,
    UAHUSD: 0,
    UAHUAH: 1,
    USDUSD: 1,
    EUREUR: 1,
  };

  currencies["EURUAH"] = useSelector((state) => state.currency.UAH);
  currencies["EURUSD"] = useSelector((state) => state.currency.USD);
  currencies["USDUAH"] = currencies["EURUAH"] / currencies["EURUSD"];
  currencies["USDEUR"] = 1 / currencies["EURUSD"];
  currencies["UAHEUR"] = 1 / currencies["EURUAH"];
  currencies["UAHUSD"] = 1 / currencies["USDUAH"];

  const [firstInput, setFirstInput] = useState("");
  const [firstCurrency, setFirstCurrency] = useState("");
  const [secondInput, setSecondInput] = useState("");
  const [secondCurrency, setSecondCurrency] = useState("");

  const inputHandler = (event) => {
    let data = event.target;
    if (data.name === "first-input") {
      setFirstInput(data.value);
      if (firstCurrency && secondCurrency) {
        let cur = secondCurrency + firstCurrency;
        setSecondInput((data.value / currencies[cur]).toFixed(2));
      }
    }
    if (data.name === "second-input") {
      setSecondInput(data.value);
      if (firstCurrency && secondCurrency) {
        let cur = secondCurrency + firstCurrency;
        setFirstInput((data.value * currencies[cur]).toFixed(2));
      }
    }
  };

  const selectHandler = (event) => {
    let data = event.target;
    if (data.name === "first-currency") {
      setFirstCurrency(data.value);
      if (secondInput && secondCurrency) {
        let cur = secondCurrency + data.value;
        setFirstInput((secondInput * currencies[cur]).toFixed(2));
      }
    }
    if (data.name === "second-currency") {
      setSecondCurrency(data.value);
      if (firstInput && firstCurrency) {
        let cur = firstCurrency + data.value;
        setSecondInput((firstInput * currencies[cur]).toFixed(2));
      }
    }
  };

  return (
    <div className="main">
      <h2>Currency convertation</h2>
      <div className="boxes">
        <div className="currency-box">
          <label>Amount: </label>
          <input
            value={firstInput}
            type="number"
            name="first-input"
            onChange={inputHandler}
          />
          <select name="first-currency" id="" onChange={selectHandler}>
            <option defaultValue="">Currencies</option>
            <option defaultValue="uah">UAH</option>
            <option defaultValue="eur">EUR</option>
            <option defaultValue="usd">USD</option>
          </select>
        </div>

        <div className="currency-box">
          <label>Amount: </label>
          <input
            value={secondInput}
            type="number"
            name="second-input"
            onChange={inputHandler}
          />
          <select name="second-currency" id="" onChange={selectHandler}>
            <option defaultValue="">Currencies</option>
            <option defaultValue="uah">UAH</option>
            <option defaultValue="eur">EUR</option>
            <option defaultValue="usd">USD</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Main;
