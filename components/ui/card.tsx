import React from "react";

type CardProps = {
  children: React.ReactNode;
};

export default function Card({ children }: CardProps) {
  return (
    <div className="w-full min-h-64 border shadow-sm rounded-md p-4">
      {children}
    </div>
  );
}
