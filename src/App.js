import { useState } from "react";
import "./App.css";
import checkPalindrome from "./checkPalindrome";
import differenceInDates from "./differenceInDates";
import checkPrevNext from "./checkPrevNext";
import loading from "./img/load.gif";

const App = () => {
  const [date, setDate] = useState("yyyy-MM-dd");
  const [text, setText] = useState("");

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const run = () => {
    const result = checkPalindrome(date);
    if (result[0]) {
      setText(
        `Wohooo! your birthdate is a palindrome 👉 ${
          result[2][result[3]]
        } 👈 🥳🥳🎉✨`
      );
    } else {
      let otherwise = checkPrevNext(date);
      let prevDate = differenceInDates(otherwise[0], date);
      let nextDate = differenceInDates(date, otherwise[1]);

      if (prevDate < nextDate) {
        setText(
          `Wooops! Your birthdate is not a palindrome, the nearest palindrome date is ${otherwise[0]} and you missed it by just ${prevDate}`
        );
      } else {
        setText(
          `Wooops! Your birthdate is not a palindrome, the nearest palindrome date is ${otherwise[1]} and you missed it by just ${nextDate} days`
        );
      }
    }
    document.getElementById("loading").style.display = "none";
  };

  const clickHandler = () => {
    if (date === "yyyy-MM-dd") {
      setText("Please provide a valid date");
    } else {
      setText("");

      document.getElementById("loading").style.display = "block";

      setTimeout(run, 2000);
    }
  };

  return (
    <div className="container">
      <div className="headings">
        <h1>Is your Birthdate a Palindrome?</h1>
        <p>
          A palindrome is a word/number which reads the same backward as
          forward.
        </p>
        <p>
          We will check them in the formats: yyyy-mm-dd, yy-mm-dd, mm-dd-yy,
          dd-mm-yyyy
        </p>
      </div>
      <div className="inputs">
        <div className="date flex">
          <h4>Select your birthdate: </h4>
          <input type="date" value={date} onChange={handleDateChange} />
        </div>
      </div>
      <button onClick={clickHandler}>Check</button>
      <div className="result">
        <div id="loading">
          <img src={loading} alt="" />
        </div>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default App;
