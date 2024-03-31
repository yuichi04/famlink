import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="w-full h-[68px] bg-slate-700">
      <ul className="flex justify-between">
        <li className="p-2 w-1/4 bg-slate-500">
          <Link
            href="/"
            className="flex flex-col justify-center items-center  space-y-1"
          >
            <Image
              src="/icons/home-light.svg"
              alt="home"
              width={32}
              height={32}
            />
            <span className="text-xs text-white">ホーム</span>
          </Link>
        </li>
        <li className="p-2 w-1/4">
          <Link
            href="/"
            className="flex flex-col justify-center items-center  space-y-1"
          >
            <Image
              src="/icons/currency-light.svg"
              alt="home"
              width={32}
              height={32}
            />
            <span className="text-xs text-white">家計簿</span>
          </Link>
        </li>
        <li className="p-2 w-1/4">
          <Link
            href="/"
            className="flex flex-col justify-center items-center  space-y-1"
          >
            <Image
              src="/icons/checklist-light.svg"
              alt="home"
              width={32}
              height={32}
            />
            <span className="text-xs text-white">やること</span>
          </Link>
        </li>
        <li className="p-2 w-1/4">
          <Link
            href="/"
            className="flex flex-col justify-center items-center space-y-1"
          >
            <Image
              src="/icons/event-light.svg"
              alt="home"
              width={32}
              height={32}
            />
            <span className="text-xs text-white">イベント</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
