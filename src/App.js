import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🍇": "Grapes",
  "🍈": "Melon",
  "🍉": "Watermelon",
  "🍊": "Tangerine",
  "🍋": "Lemon",
  "🍌": "Banana",
  "🍍": "Pineapple",
  "🥭": "Mango",
  "🍎": "Red",
  "🍐": "Pear",
  "🍑": "Peach",
  "🍒": "Cherries",
  "🍓": "Strawberry"
};

var emojisWeknow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("Translation will be displayed here");

  function emojiInputHandler(event) {
    const userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "Does not exist in database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(Emoji) {
    var meaning = emojiDictionary[Emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>inside out!!!</h1>

      <input onChange={emojiClickHandler} />

      <h2> {meaning} </h2>
      <h3> Emojis We Know </h3>
      {emojisWeknow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5 rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
