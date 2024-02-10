"use client";

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import Button from "./ui/Button";
import clsx from "clsx";
import TextInput from "./ui/TextInput";

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

const compute = async (n: number): Promise<number> => {
  await sleep(5000);
  return n * 100;
};

const ExUseMemo = () => {
  let [input, setInput] = useState(0);
  let [memoResult, setMemoResult] = useState<string | number>(0);
  const [recalculateResult, setRecalculateResult] = useState<string | number>(
    0
  );
  const [isRecomputingMemo, setIsRecomputingMemo] = useState<
    boolean | unknown
  >();
  const [isRecomputing, setIsRecomputing] = useState<boolean | unknown>();
  const memo = useMemo(() => {
    return compute(input);
  }, [input]);

  const onSubmit = () => {
    setMemoResult(() => "...");
    setRecalculateResult(() => "...");
    // Re-calculating for the same input
    setIsRecomputing(true);
    compute(input).then((res) => {
      setRecalculateResult(res);
      setIsRecomputing(false);
    });
    setIsRecomputingMemo(true);
    // Memoised - Not re-calculating for the same input
    memo.then((res) => {
      setMemoResult(res);
      setIsRecomputingMemo(false);
    });
  };

  return (
    <>
      <div className="flex justify-start flex-col items-center text-center p-2 h-full dark:bg-black">
        <h1 className="font-mono  text-2xl">useMemo</h1>
        <p>lets you cache the result of a calculation between re-renders.</p>
        <TextInput
          placeholder="Enter a number"
          onChange={setInput}
          className="m-4 text-center text-xl"
        />
        <Button onClick={onSubmit} variant="Success">
          Submit
        </Button>
        <p className="text-sm">Click submit to see Memoisation in action.</p>
        <div className="flex w-full justify-evenly">
          <div>
            <div
              className={clsx(
                "flex flex-col justify-center w-32 h-16 rounded-2xl mt-5 border border-zinc-200 dark:border-zinc-800 shadow-md text-center align-middle items-center",
                {
                  "animate-pulse bg-red dark:bg-zinc-900":
                    isRecomputing === true,
                }
              )}
            >
              <p
                className={clsx("text-3xl text-center align-middle", {
                  "animate-bounce": memoResult === "...",
                })}
              >
                {recalculateResult}
              </p>
            </div>
            <p className="text-sm">Without useMemo</p>
          </div>
          <div>
            <div
              className={clsx(
                "flex flex-col justify-center w-32 h-16 rounded-2xl mt-5 border border-zinc-200 dark:border-zinc-800 shadow-md text-center align-middle items-center",
                {
                  "animate-pulse bg-red dark:bg-zinc-900":
                    isRecomputingMemo === true,
                }
              )}
            >
              <p
                className={clsx("text-3xl text-center align-middle", {
                  "animate-bounce": memoResult === "...",
                })}
              >
                {memoResult}
              </p>
            </div>
            <p className="text-sm">With useMemo</p>
          </div>
        </div>

        <code className="mt-4">
          {`const memo = useMemo(() => compute(input), [input]);`}
        </code>
        <p className="text-sm p-2">
          <br></br>
          onSubmit <code>compute()</code> get's fired in 2 different ways -
          memoized and recalculate, if the input is changed memoized result is
          discarded else nothing happens, for recalculate we always re-compute.
        </p>
      </div>
    </>
  );
};

export default ExUseMemo;
