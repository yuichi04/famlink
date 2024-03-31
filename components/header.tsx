import Image from "next/image";
import Avator from "./ui/avator";

export default function Header() {
  return (
    <header className="flex justify-between items-center h-18 p-2 w-full max-w-7xl">
      <h1 className="w-2/3 max-w-[270px]">
        <Image alt="logo" src="/famlink.svg" width={270} height={70} />
      </h1>
      <Image
        alt="side menu"
        src="/icons/menu-slate.svg"
        width={48}
        height={48}
      />
    </header>
  );
}
