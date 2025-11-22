"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React from "react";
interface DialogProps {
  open: boolean;
  togglePopup: (open: boolean) => void;
  title: string;
  children: React.ReactElement;
}
export function DialogPopup({
  open,
  togglePopup,
  title,
  children,
}: DialogProps) {
  return (
    <Dialog open={open} onOpenChange={togglePopup}>
      <DialogTrigger asChild>
        <button className="w-[120px] h-10 bg-red-400 rounded-lg text-white mb-10">
          Add
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
}
