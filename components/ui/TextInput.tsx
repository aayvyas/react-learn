import { ChangeEventHandler } from "react";

const TextInput = ({
  className,
  placeholder,
  onChange,
}: {
  className: string;
  placeholder: string;
  onChange: Function;
}) => {
  return (
    <>
      <input
        defaultValue={0}
        onChange={(e) => onChange(e.currentTarget.value)}
        className={
          "dark:bg-black rounded-xl border border-zinc-700 p-2 shadow-xl " +
          className
        }
        placeholder={placeholder}
      ></input>
    </>
  );
};

export default TextInput;
