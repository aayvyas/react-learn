import React from "react";

const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  return (
    <div
      className={
        "dark:bg-black bg-white dark:border-zinc-900 rounded-2xl border border-zinc-200 " +
        className
      }
    >
      {children}
    </div>
  );
};

export default Card;
