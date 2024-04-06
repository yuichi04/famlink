// TODO: フォーム化する
"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/date-picker";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Selectbox, SelectboxProps } from "@/components/ui/select";

type TransactionFormProps = {
  type: "expenses" | "income";
};

const categoryOptions: SelectboxProps["options"] = [
  {
    value: "default",
    label: "カテゴリを選択",
  },
  {
    value: "daily-necessities",
    label: "日用品",
  },
  {
    value: "food-expenses",
    label: "食費",
  },
  {
    value: "other",
    label: "その他",
  },
];

const accountOptions: SelectboxProps["options"] = [
  {
    value: "cash",
    label: "現金",
  },
  {
    value: "seven-bank",
    label: "セブン銀行",
  },
  {
    value: "yokohama-bank",
    label: "横浜銀行",
  },
  {
    value: "seven-credit-card",
    label: "セブンカード",
  },
  {
    value: "epos-credit-card",
    label: "エポスカード",
  },
];

export default function TransactionForm({ type }: TransactionFormProps) {
  const [isPrivate, setIsPrivate] = useState(false);

  return (
    <Card>
      <CardContent className="grid grid-cols-2 gap-2 gap-y-4 p-4">
        <h4 className="col-span-2 font-semibold text-sm">必須項目</h4>
        <div>
          <Label>カテゴリ</Label>
          <Selectbox defaultValue="default" options={categoryOptions} />
        </div>
        <div>
          <Label>{type === "expenses" ? "支払い方法" : "受け取った方法"}</Label>
          <Selectbox
            defaultValue="seven-credit-card"
            options={accountOptions}
          />
        </div>
        <div>
          <Label>日付</Label>
          <div>
            <DatePicker width={"w-full"} />
          </div>
        </div>
        <div>
          <Label>金額</Label>
          <div className="relative">
            <Input type="number" className="pr-8" />
            <span className="absolute right-2 bottom-2 text-sm">円</span>
          </div>
        </div>
        <Separator className="col-span-2" />
        <h4 className="col-span-2 font-semibold text-sm">任意項目</h4>
        <div className="col-span-2">
          <div className="flex items-center space-x-2 col-span-2">
            <input
              id="is-private"
              type="checkbox"
              checked={isPrivate}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setIsPrivate(e.target.checked)
              }
            />
            <Label htmlFor="is-private" className="text-sm">
              プライベート口座
              {type === "expenses" ? "への支払い" : "からの入金"}
            </Label>
          </div>
          {isPrivate && (
            <div className="col-span-2 mt-1">
              <Selectbox
                defaultValue="miku"
                options={[
                  { value: "miku", label: "美公" },
                  { value: "yuichi", label: "勇一" },
                ]}
              />
            </div>
          )}
        </div>
        <div className="col-span-2">
          <Label>タグ・品目</Label>
          <Input />
        </div>
        <div className="col-span-2">
          <Label>メモ</Label>
          <Textarea />
        </div>
        <Button className="col-span-2">登録</Button>
      </CardContent>
    </Card>
  );
}
