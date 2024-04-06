"use client";

import React from "react";

export type SelectboxProps = {
  defaultValue: string;
  options: {
    value: string;
    label: string;
  }[];
  className?: string;
  // eslint-disable-next-line no-unused-vars
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export function Selectbox({
  defaultValue,
  options,
  className,
  onChange,
}: SelectboxProps) {
  return (
    <select
      defaultValue={defaultValue}
      onChange={onChange}
      className={`p-2 border rounded-sm block w-full ${className}`}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
