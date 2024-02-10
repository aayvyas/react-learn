"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Button from "./ui/Button";
import clsx from "clsx";

const ExUseState = () => {
  let [counter, setCounter] = useState(-1);

  return (
    <>
      <div className="flex justify-start flex-col items-center text-center h-full p-2 dark:bg-black">
        <h1 className="font-mono  text-2xl">useState</h1>
        <p>Let's you add a state variable to your component(stop)</p>
        <div className="flex flex-col justify-center w-32 h-16 rounded-2xl mt-5 bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 shadow-md text-center align-middle items-center">
          <p className={clsx("text-3xl text-center align-middle")}>{counter}</p>
        </div>
        <code className="mt-4">
          const [variable, setVariable] = useState(initialState)
        </code>
        <div className="mt-auto mb-4 flex justify-evenly w-full flex-row">
          <Button
            variant="Danger"
            onClick={() => {
              setCounter((oldValue) => (oldValue = oldValue - 1));
            }}
          >
            Decrease
          </Button>
          <Button
            variant="Success"
            onClick={() => {
              setCounter((oldValue) => (oldValue = oldValue + 1));
            }}
          >
            Increase
          </Button>
        </div>
      </div>
    </>
  );
};

export default ExUseState;
