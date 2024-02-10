"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Button from "./ui/Button";
import clsx from "clsx";

const ExUseRef = () => {
  let [counter, setCounter] = useState(0);
  let [stop, setStop] = useState(false);
  let ref: any = useRef(null);
  const start = () => {
    setStop(true);
    clearInterval(ref.current);
    // ref should not be set while rendering outside this function, see below Error
    ref.current = setInterval(() => {
      setCounter((counter) => counter + 1);
    }, 1000);
  };

  // ! Error: ref.current = setInterval()

  return (
    <>
      <div className="flex justify-start flex-col items-center text-center h-full p-2 dark:bg-black">
        <h1 className="font-mono   text-2xl">useRef</h1>
        <p>Let's you reference a value that's not needed for rendering.</p>
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
          let ref: any = useRef(null);
          <br></br>
          {`ref.current = setInterval(() => {}, 1000)`}
        </code>
        <div className="mt-auto mb-4 flex justify-evenly w-full flex-row">
          <Button
            variant="Danger"
            onClick={() => {
              clearInterval(ref.current);
              setCounter(0);
              setStop(true);
            }}
          >
            Stop
          </Button>
          <Button onClick={start} variant="Success">
            Play
          </Button>
        </div>
      </div>
    </>
  );
};

export default ExUseRef;
