"use client";
import * as React from "react";
import { ja } from "date-fns/locale";
import { format } from "date-fns";

import { formatCurrency } from "@/lib/utils";
import Link from "next/link";
import { Card } from "@/components/ui/card";

type Data = {
  id: string;
  date: Date;
  category: string;
  method: string;
  amount: number;
  author: string;
  memo?: string;
  tags?: string[];
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
  // TODO:dateを使ってデータベースからデータを取得する処理を追加
  console.log(date);

  const groupedData = groupByDate(data);

  return (
    <Card className="rounded-md border">
      {groupedData.map((group) => (
        <div key={formatDate(group.date)}>
          <div className="bg-gray-300 py-1 px-2">
            {format(group.date, "MM月dd日", { locale: ja })}
          </div>
          {group.list.map((item, index) => (
            <Link href="/" key={index}>
              <div className="grid grid-cols-12 border-b p-2">
                <div className="col-span-9">{item.category}</div>
                <div className="col-span-3 text-right">
                  {formatCurrency(item.amount)}
                </div>
                {item.memo && (
                  <div className="col-span-9 text-xs text-gray-500 mt-2">
                    {item.memo}
                  </div>
                )}
                {item.tags && item.tags.length > 0 && (
                  <ul className="flex flex-wrap col-span-12 mt-2 space-x-1">
                    {item.tags.map((tag, index) => (
                      <li key={String(index) + tag}>
                        <span className="border-teal-600 border text-teal-600 rounded-full px-2 py-1 text-[10px]">
                          {tag}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Link>
          ))}
        </div>
      ))}
    </Card>
  );
}
// groupedDataの型を定義
type GroupedData = {
  date: Date;
  list: {
    id: string;
    category: string;
    method: string;
    amount: number;
    author: string;
    memo?: string;
    tags?: string[];
  }[];
}[];

// 日付を文字列形式（YYYY-MM-DD）に変換するヘルパー関数
function formatDate(date: Date) {
  return format(date, "yyyy-MM-dd");
}

// データを日付でグループ化する関数
function groupByDate(data: Data[]): GroupedData {
  const grouped = data.reduce((acc, item) => {
    const date = formatDate(item.date);
    if (!acc[date]) {
      acc[date] = {
        date: item.date,
        list: [],
      };
    }
    acc[date].list.push({
      id: item.id,
      category: item.category,
      method: item.method,
      amount: item.amount,
      author: item.author,
      memo: item.memo,
      tags: item.tags,
    });
    return acc;
  }, {} as Record<string, { date: Date; list: Omit<Data, "date">[] }>);

  return Object.values(grouped);
}

const data: Data[] = [
  {
    id: "1",
    date: new Date(),
    category: "日用品",
    method: "セブンカード",
    amount: 10000,
    author: "勇一",
    tags: ["フィットケア", "絵茉のおむつ代"],
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
    memo: "Lorem ipsum dolor sit amet.",
  },
  {
    id: "4",
    date: new Date(),
    category: "日用品",
    method: "セブンカード",
    amount: 10000,
    author: "勇一",
    memo: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, deleniti?",
    tags: ["フレッシュマーケット", "夕食代"],
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
