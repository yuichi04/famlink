import Image from "next/image";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
const Header = () => {
  return (
    <header className="flex justify-between items-center p-4">
      <h1 className="w-2/3 max-w-[270px]">
        <Image alt="logo" src="/famlink.svg" width={270} height={70} />
      </h1>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </header>
  );
};

export default Header;
