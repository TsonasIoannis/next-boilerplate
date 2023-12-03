"use client";

import { useState, useReducer } from "react";
import { ThemeContextProvider, useTheme } from "./ContextProvider";
import { store } from "./store";
import { Provider } from "react-redux";
import { useAppDispatch, useAppSelector } from "./hooks";
import {
  decrement,
  increment,
  incrementByAmount,
  selectCount,
} from "./counterSlice";

export default function State() {
  return (
    <>
      <SimpleState />
      <ThemeContextProvider>
        <ContextState />
      </ThemeContextProvider>
      <Provider store={store}>
        <ReduxState />
      </Provider>
    </>
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

function ReduxState() {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);
  const [incrementAmount, setIncrementAmount] = useState<number>(0);

  return (
    <>
      <h1>Welcome to the greatest app in the world!</h1>
      <h2>
        The current number is
        {count}
      </h2>
      <div>
        <input
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(Number(e.target.value))}
          type="number"
        />
        <button
          onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}
        >
          Increment by amount
        </button>
      </div>
      <div>
        <button onClick={() => dispatch(decrement())}>Decrement by 1</button>
        <button onClick={() => dispatch(increment())}>Increment by 1</button>
      </div>
    </>
  );
}
