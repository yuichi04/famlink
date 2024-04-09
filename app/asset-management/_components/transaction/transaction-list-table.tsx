"use client";

import * as React from "react";
import { ja } from "date-fns/locale";
import { format } from "date-fns";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatCurrency } from "@/lib/utils";

type Data = {
  id: string;
  date: Date;
  category: string;
  method: string;
  amount: number;
  author: string;
};

type TransactionListTableProps = {
  date: {
    start: Date;
    end: Date;
  };
};

export default function TransactionListTable({
  date,
}: TransactionListTableProps) {
  // dateを使ってデータベースからデータを取得する処理を追加
  console.log(date);

  const data: Data[] = [
    {
      id: "1",
      date: new Date(),
      category: "日用品",
      method: "セブンカード",
      amount: 10000,
      author: "勇一",
    },
    {
      id: "2",
      date: new Date(),
      category: "家賃",
      method: "エポスカード",
      amount: 100000,
      author: "美公",
    },
    {
      id: "3",
      date: new Date(),
      category: "食費",
      method: "セブンカード",
      amount: 1000,
      author: "勇一",
    },
    {
      id: "4",
      date: new Date(),
      category: "日用品",
      method: "セブンカード",
      amount: 10000,
      author: "勇一",
    },
    {
      id: "5",
      date: new Date(),
      category: "家賃",
      method: "エポスカード",
      amount: 100000,
      author: "美公",
    },
    {
      id: "6",
      date: new Date(),
      category: "食費",
      method: "セブンカード",
      amount: 1000,
      author: "勇一",
    },
    {
      id: "7",
      date: new Date(),
      category: "日用品",
      method: "セブンカード",
      amount: 10000,
      author: "勇一",
    },
    {
      id: "8",
      date: new Date(),
      category: "家賃",
      method: "エポスカード",
      amount: 100000,
      author: "美公",
    },
    {
      id: "9",
      date: new Date(),
      category: "食費",
      method: "セブンカード",
      amount: 1000,
      author: "勇一",
    },
  ];

  return (
    <Table className="rounded-md border">
      <TableHeader className="p-0">
        <TableRow className="bg-slate-500 whitespace-nowrap">
          <TableHead className="text-white">日付</TableHead>
          <TableHead className="text-white">カテゴリ</TableHead>
          <TableHead className="text-white">口座</TableHead>
          <TableHead className="text-white">金額</TableHead>
          <TableHead className="text-white">登録者</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item) => (
          <TableRow className="whitespace-nowrap" key={item.id}>
            <TableCell>
              {format(item.date, "y/MM/dd", { locale: ja })}
            </TableCell>
            <TableCell>{item.category}</TableCell>
            <TableCell>{item.method}</TableCell>
            <TableCell>{formatCurrency(item.amount)}</TableCell>
            <TableCell>{item.author}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
