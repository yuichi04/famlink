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
    <nav>
      <ul className="grid grid-cols-4 bg-slate-700">
        {list.map((item) => (
          <li
            key={item.text}
            className="py-1"
            style={{
              backgroundColor: item.href === pathname ? "#64748b" : "#334155",
            }}
          >
            <Link
              href={item.href}
              className="flex flex-col justify-center items-center"
            >
              <Image
                src={item.iconPath}
                alt={item.alt}
                width={24}
                height={24}
              />
              <span className="text-[9px] text-white">{item.text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function getNavigationList(currentPath: string): NavigationItemType[] {
  const baseNavigationList = [
    homeData,
    householdAccountData,
    tasksData,
    eventsData,
    // settingData,
  ];

  switch (currentPath) {
    case "/":
      return baseNavigationList;
    case "/asset-management":
      return baseNavigationList;
    case "/tasks":
      return baseNavigationList;
    case "/events":
      return baseNavigationList;
    case "/settings":
      return baseNavigationList;
    default:
      return baseNavigationList;
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
  href: "/asset-management",
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
