"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React from "react";

type SettingDialogProps = {
  triggerText: string;
  title: string;
  children: React.ReactNode;
};

export function SettingDialog({
  triggerText,
  title,
  children,
}: SettingDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full" variant="secondary">
          {triggerText}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-lg">{title}の編集</DialogTitle>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
}
