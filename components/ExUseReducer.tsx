"use client";

import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useReducer,
  useState,
} from "react";
import Button from "./ui/Button";
import clsx from "clsx";
import Card from "./ui/Card";
import {
  DollarSign,
  MinusCircleIcon,
  PlusCircleIcon,
  ShoppingCart,
  User,
} from "lucide-react";
import Image from "next/image";

const CartContext = createContext<{
  cart: CartState;
  setCart: Dispatch<Action>;
}>({ cart: { cartItems: 0, cartValue: 0 }, setCart: () => {} });

type CartState = { cartItems: number; cartValue: number };

type Action = { type: string };

const reducer = (state: CartState, action: Action): CartState => {
  switch (action.type) {
    case "add":
      return {
        cartItems: state.cartItems + 1,
        cartValue: (state.cartItems + 1) * 100,
      };
    case "remove":
      return {
        cartItems: state.cartItems - 1,
        cartValue: (state.cartItems - 1) * 100,
      };
    default:
      throw new Error("DNE");
  }
};

const ExUseReducer = () => {
  const [state, dispatch]: [CartState, Dispatch<Action>] = useReducer(reducer, {
    cartItems: 0,
    cartValue: 0,
  });

  return (
    <>
      <div className="flex justify-start flex-col items-center text-center p-2 h-full dark:bg-black">
        <h1 className="font-mono  text-2xl">useReducer</h1>
        <p> lets you define how you want to update the state</p>
        <div className="grid grid-cols-3 w-full">
          <CartContext.Provider value={{ cart: state, setCart: dispatch }}>
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
  const { cart, setCart } = useContext(CartContext);
  return (
    <Card className=" flex-col flex justify-around items-center mr-2 mt-2">
      <p> View Cart </p>
      <div className="flex">
        <ShoppingCart />
        <p className="dark:bg-zinc-900 bg-zinc-200 shadow-lg px-2 ml-2 rounded-lg">
          {cart.cartItems}
        </p>
      </div>
    </Card>
  );
};

// Component #2
const Profile = () => {
  const { cart, setCart } = useContext(CartContext);
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
            {cart.cartItems}
          </p>
        </div>
      </div>
    </Card>
  );
};

// Component #3
const Orders = () => {
  const { cart, setCart } = useContext(CartContext);

  const addToCart = () => {
    setCart({ type: "add" });
  };
  const removeFromCart = () => {
    setCart({ type: "remove" });
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
      <Card className="w-1/2 m-2 flex flex-row justify-around">
        <div className="flex flex-col justify-center items-center h-full space-y-5">
          <p className="p-5 text-4xl bg-zinc-200 dark:bg-zinc-900 rounded-3xl">
            {cart.cartItems}
          </p>
          <ShoppingCart size={50} strokeWidth={1} />
        </div>
        <div className="flex flex-col justify-center items-center h-full space-y-5">
          <p className="p-5 text-4xl bg-zinc-200 dark:bg-zinc-900 rounded-3xl">
            ${cart.cartValue}
          </p>
          <DollarSign size={50} strokeWidth={1} />
        </div>
      </Card>
    </Card>
  );
};

export default ExUseReducer;
