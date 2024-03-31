import Image from "next/image";

type AvatorProps = {
  size?: "sm" | "md" | "lg";
  src?: string;
};

export default function Avator({ size = "md", src }: AvatorProps) {
  const avatorSize = getSize(size);

  return (
    <Image
      src={src ?? "/icons/account-circle-slate.svg"}
      alt="avator"
      width={avatorSize}
      height={avatorSize}
    />
  );
}

function getSize(size: AvatorProps["size"]): number {
  switch (size) {
    case "sm":
      return 48;
    case "md":
      return 72;
    case "lg":
      return 96;
    default:
      return 72;
  }
}
