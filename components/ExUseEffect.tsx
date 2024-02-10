"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Button from "./ui/Button";
import clsx from "clsx";

const ExUseEffect = () => {
  let [counter, setCounter] = useState(0);
  let [stop, setStop] = useState(false);
  let ref: any = useRef(null);

  useEffect(() => {
    if (stop === true) {
      clearTimeout(ref);
      return;
    }
    ref.current = setTimeout(() => {
      setCounter(counter + 1);
    }, 1000);
  }, [stop, counter]);

  return (
    <>
      <div className="flex justify-start flex-col items-center text-center p-2 h-full dark:bg-black">
        <h1 className="font-mono  text-2xl">useEffect</h1>
        <p>Let's you schronize a component with external system (stop)</p>
        <div className="flex flex-col justify-center w-32 h-16 rounded-2xl mt-5 bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 shadow-md text-center align-middle items-center">
          <p
            className={clsx("text-3xl text-center align-middle", {
              "animate-pulse": stop === true,
              "": stop !== true,
            })}
          >
            {counter}
          </p>
        </div>
        <code className="mt-4">
          {`useEffect(()=> {
            execution
          }, [dependecies])`}
        </code>
        <p className="text-sm p-2">
          <br></br>
          The above counter reacts to the click events on the below buttons and
          re-renders the components.
        </p>
        <div className="mt-auto mb-4 flex justify-evenly w-full flex-row">
          <Button
            variant="Neutral"
            onClick={() => {
              clearInterval(ref.current);
              setCounter((counter) => 0);
            }}
          >
            Reset
          </Button>
          <Button
            onClick={() => {
              setStop((stop) => !stop);
            }}
            variant={stop === false ? "Danger" : "Success"}
          >
            {stop == false ? "Stop" : "Play"}
          </Button>
        </div>
      </div>
    </>
  );
};

export default ExUseEffect;
