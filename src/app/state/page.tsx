"use client";

import { useState, useReducer } from "react";
import { ThemeContextProvider, useTheme } from "./ContextProvider";

export default function State() {
  return (
    <ThemeContextProvider>
      <main>
        <SimpleState />
        <ContextState />
      </main>
    </ThemeContextProvider>
  );
}

function SimpleState() {
  const [score, setScore] = useState(0);
  const increaseScore = () => setScore(score + 1);

  const [multiplication, dispatch] = useReducer(
    (state: number, action: number) => {
      return state * action;
    },
    50
  );
  return (
    <>
      <div>
        <h1>useState Example</h1>
        <p>Your score is {score}</p>
        <button onClick={increaseScore}>+</button>
      </div>
      <div>
        <h1>useReducer Example</h1>
        <p>The result is {multiplication}</p>
        <button onClick={() => dispatch(2)}>Multiply by 2</button>
      </div>{" "}
    </>
  );
}

function ContextState() {
  const { theme, setContextTheme } = useTheme();
  return (
    <div>
      <h1>useContext Example</h1>
      <p>Current mode: {theme}</p>
      <button
        onClick={() => {
          theme == "light" ? setContextTheme("dark") : setContextTheme("light");
        }}
      >
        Toggle mode
      </button>
    </div>
  );
}
