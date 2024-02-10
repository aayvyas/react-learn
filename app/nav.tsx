"use client";

import clsx from "clsx";
import { Home, Webhook } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Nav = () => {
  const path = usePathname();

  const getIcon = (icon: string) => {
    switch (icon) {
      case "Home":
        return <Home />;
      case "hooks":
        return <Webhook />;
    }
  };

  const Items = [
    {
      path: "/",
      name: "Home",
      icon: "Home",
    },
    { path: "/hooks", name: "React Hooks", icon: "hooks" },
  ];

  return (
    <nav className="flex flex-row w-full p-2">
      {Items.map((item, i) => {
        return (
          <Link
            className={clsx("p-3 flex flex-row w-36 justify-center", {
              "dark:bg-zinc-900 bg-zinc-200 rounded-2xl": path === item.path,
            })}
            href={item.path}
          >
            {getIcon(item.icon)}
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
};
export default Nav;
