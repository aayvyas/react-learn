"use client";

import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import Button from "./ui/Button";
import clsx from "clsx";
import Card from "./ui/Card";
import {
  MinusCircleIcon,
  PlusCircleIcon,
  ShoppingCart,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const CartContext = createContext<{
  cartItems: number;
  setCartItems: Dispatch<SetStateAction<number>>;
}>({ cartItems: 0, setCartItems: () => {} });

const ExUseContext = () => {
  const [cartItems, setCartItems] = useState(0);

  return (
    <>
      <div className="flex justify-start flex-col items-center text-center p-2 h-full dark:bg-black">
        <Link
          href={
            "https://github.com/aayvyas/react-learn/blob/main/components/ExUseContext.tsx"
          }
          className="font-mono  text-2xl"
        >
          useContext
        </Link>
        <p> Let's you read and subscribe to context from your component.</p>
        <div className="grid grid-cols-3 w-full">
          <CartContext.Provider value={{ cartItems, setCartItems }}>
            <Cart />
            <Profile />
            <Orders />
          </CartContext.Provider>
        </div>
      </div>
    </>
  );
};

// Component #1
const Cart = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  return (
    <Card className=" flex-col flex justify-around items-center mr-2 mt-2">
      <p> View Cart </p>
      <div className="flex">
        <ShoppingCart />
        <p className="dark:bg-zinc-900 bg-zinc-200 shadow-lg px-2 ml-2 rounded-lg">
          {cartItems}
        </p>
      </div>
    </Card>
  );
};

// Component #2
const Profile = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  return (
    <Card className="flex flex-row w-full justify-start items-center col-span-2 mt-2">
      <div className="rounded-full m-4 border border-zinc-900  px-10 py-10 h-fit">
        <p className="text-2xl">AV</p>
      </div>
      <div className="flex flex-col space-y-2">
        <div className="flex flex-row ">
          <User />
          <p>Aayush Vyas</p>
        </div>
        <div className="flex flex-row">
          <ShoppingCart />
          <p className="dark:bg-zinc-900 bg-zinc-200 shadow-lg px-2 ml-2 rounded-lg">
            {cartItems}
          </p>
        </div>
      </div>
    </Card>
  );
};

// Component #3
const Orders = () => {
  const { cartItems, setCartItems } = useContext(CartContext);

  const addToCart = () => {
    setCartItems((prev) => prev + 1);
  };
  const removeFromCart = () => {
    setCartItems((prev) => {
      if (prev <= 0) {
        return 0;
      }
      return prev - 1;
    });
  };

  return (
    <Card className="flex col-span-3 mt-2">
      <div className="grid grid-cols-2 w-1/2">
        <Card className="size-32 overflow-hidden flex-row flex justify-center m-1">
          <div className="z-20 self-end w-fit absolute h-fit m-1 flex space-x-6">
            <Button
              className="w-fit text-xs flex px-2 py-2"
              onClick={addToCart}
            >
              <PlusCircleIcon size={15} />
            </Button>
            <Button
              className="w-fit text-xs flex px-2 py-2"
              onClick={removeFromCart}
            >
              <MinusCircleIcon size={15} />
            </Button>
          </div>
          <Image
            width={500}
            height={500}
            alt="Image"
            src={"https://placehold.co/600x600/grey/FFF.png"}
          ></Image>
        </Card>
        <Card className="size-32 overflow-hidden flex-row flex justify-center m-1">
          <div className="z-20 self-end w-fit absolute h-fit m-1 flex space-x-6">
            <Button
              className="w-fit text-xs flex px-2 py-2"
              onClick={addToCart}
            >
              <PlusCircleIcon size={15} />
            </Button>
            <Button
              className="w-fit text-xs flex px-2 py-2"
              onClick={removeFromCart}
            >
              <MinusCircleIcon size={15} />
            </Button>
          </div>
          <Image
            width={500}
            height={500}
            alt="Image"
            src={"https://placehold.co/600x600/grey/FFF.png"}
          ></Image>
        </Card>
        <Card className="size-32 overflow-hidden flex-row flex justify-center m-1">
          <div className="z-20 self-end w-fit absolute h-fit m-1 flex space-x-6">
            <Button
              className="w-fit text-xs flex px-2 py-2"
              onClick={addToCart}
            >
              <PlusCircleIcon size={15} />
            </Button>
            <Button
              className="w-fit text-xs flex px-2 py-2"
              onClick={removeFromCart}
            >
              <MinusCircleIcon size={15} />
            </Button>
          </div>
          <Image
            width={500}
            height={500}
            alt="Image"
            src={"https://placehold.co/600x600/grey/FFF.png"}
          ></Image>
        </Card>
        <Card className="size-32 overflow-hidden flex-row flex justify-center m-1">
          <div className="z-20 self-end w-fit absolute h-fit m-1 flex space-x-6">
            <Button
              className="w-fit text-xs flex px-2 py-2"
              onClick={addToCart}
            >
              <PlusCircleIcon size={15} />
            </Button>
            <Button
              className="w-fit text-xs flex px-2 py-2"
              onClick={removeFromCart}
            >
              <MinusCircleIcon size={15} />
            </Button>
          </div>
          <Image
            width={500}
            height={500}
            alt="Image"
            src={"https://placehold.co/600x600/grey/FFF.png"}
          ></Image>
        </Card>
      </div>
      <Card className="w-1/2 m-2 ">
        <div className="flex flex-col justify-center items-center h-full space-y-5">
          <p className="p-10 text-6xl bg-zinc-200 dark:bg-zinc-900 rounded-3xl">
            {cartItems}
          </p>
          <ShoppingCart size={50} strokeWidth={1} />
        </div>
      </Card>
    </Card>
  );
};

export default ExUseContext;
