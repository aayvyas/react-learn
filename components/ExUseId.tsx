"use client";

import { useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import Button from "./ui/Button";
import clsx from "clsx";

const ExUseId = () => {
  let uuid = useId();

  return (
    <>
      <div className="flex justify-start flex-col items-center text-center p-2 h-full dark:bg-black">
        <h1 className="font-mono  text-2xl">useId</h1>
        <p>
          Let's you generate unique IDs that can be passed to accessibility
          attributes
        </p>
        <div className="w-full flex flex-col justify-center h-16 rounded-2xl mt-5 bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 shadow-md text-center align-middle items-center">
          <p className={clsx("text-3xl text-center align-middle w-full", {})}>
            {uuid}
          </p>
        </div>
        <code className="mt-4">let uuid = useId();</code>
        <p className="text-sm p-2">
          <br></br>
          Do not use for key of the list items.
        </p>
      </div>
    </>
  );
};

export default ExUseId;
