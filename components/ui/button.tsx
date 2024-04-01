type ButtonProps = {
  children: React.ReactNode;
  variant?: "default" | "secondary" | "outlined" | "link";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
};

export default function Button({ children, onClick, ...props }: ButtonProps) {
  return (
    <button className={getClassName(props)} onClick={onClick}>
      {children}
    </button>
  );
}

function getClassName({
  variant,
  size,
}: Omit<ButtonProps, "children">): string {
  return getVariantClassName(variant) + getSizeClassName(size);
}

function getVariantClassName(variant: ButtonProps["variant"]): string {
  return "";
}
function getSizeClassName(size: ButtonProps["size"]): string {
  return "";
}
