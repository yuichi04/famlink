"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavigationItemType = {
  href: string;
  iconPath: string;
  alt: string;
  text: string;
};

export default function Navigation() {
  const pathname = usePathname();
  const list = getNavigationList(pathname);

  return (
    <nav className="w-full h-[64px]">
      <ul className="flex h-full items-center">
        {list.map((item) => (
          <li
            key={item.text}
            className={`w-1/4 h-full bg-slate-${
              item.href === pathname ? 500 : 700
            }`}
          >
            <Link
              href={item.href}
              className="h-full flex flex-col justify-center items-center space-y-1"
            >
              <Image
                src={item.iconPath}
                alt={item.alt}
                width={32}
                height={32}
              />
              <span className="text-xs text-white">{item.text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function getNavigationList(currentPath: string): NavigationItemType[] {
  switch (currentPath) {
    case "/":
      return [homeData, householdAccountData, tasksData, eventsData];
    case "/household-account":
      return [homeData, householdAccountData, tasksData, eventsData];
    case "/tasks":
      return [homeData, householdAccountData, tasksData, eventsData];
    case "/events":
      return [homeData, householdAccountData, tasksData, eventsData];
    default:
      return [homeData, householdAccountData, tasksData, eventsData];
  }
}

const homeData: NavigationItemType = {
  iconPath: "/icons/home-light.svg",
  alt: "home",
  href: "/",
  text: "ホーム",
};

const householdAccountData: NavigationItemType = {
  iconPath: "/icons/currency-light.svg",
  alt: "家計簿",
  href: "/household-account",
  text: "家計簿",
};

const tasksData: NavigationItemType = {
  iconPath: "/icons/checklist-light.svg",
  alt: "やること",
  href: "/tasks",
  text: "やること",
};

const eventsData: NavigationItemType = {
  iconPath: "/icons/event-light.svg",
  alt: "イベント",
  href: "/events",
  text: "イベント",
};
