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
      <ul className="grid grid-cols-5">
        {list.map((item) => (
          <li
            key={item.text}
            className="py-1"
            style={{
              backgroundColor: item.href === pathname ? "#334155" : "#0f172a",
            }}
          >
            <Link
              href={item.href}
              className="flex flex-col justify-center items-center"
            >
              <Image
                src={item.iconPath}
                alt={item.alt}
                width={32}
                height={32}
              />
              <span className="text-[10px] text-white">{item.text}</span>
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
    settingData,
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
  alt: "資産管理",
  href: "/asset-management",
  text: "資産管理",
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

const settingData: NavigationItemType = {
  iconPath: "/icons/settings-light.svg",
  alt: "設定",
  href: "/settings",
  text: "設定",
};
