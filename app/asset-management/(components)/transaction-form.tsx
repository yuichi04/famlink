// TODO: フォーム化する
"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/date-picker";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

type TransactionFormProps = {
  type: "expenses" | "income";
};

export default function TransactionForm({ type }: TransactionFormProps) {
  const [isPrivate, setIsPrivate] = useState(false);

  return (
    <Card>
      <CardContent className="grid grid-cols-2 gap-2 gap-y-4 p-4">
        <h4 className="col-span-2 font-semibold text-sm">必須項目</h4>
        <div>
          <Label>日付</Label>
          <div>
            <DatePicker width={"w-full"} />
          </div>
        </div>
        <div>
          <Label>カテゴリ</Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="apple">日用品</SelectItem>
                <SelectItem value="banana">食費</SelectItem>
                <SelectItem value="blueberry">その他</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label>{type === "expenses" ? "支払い方法" : "受け取った方法"}</Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="cash">現金</SelectItem>
                <SelectItem value="seven-bank">セブン銀行</SelectItem>
                <SelectItem value="yokohama-bank">横浜銀行</SelectItem>
                {type === "expenses" && (
                  <>
                    <SelectItem value="seven-credit-card">
                      セブンカード
                    </SelectItem>
                    <SelectItem value="epos-credit-card">
                      エポスカード
                    </SelectItem>
                    <SelectItem value="rakuten-credit-card">
                      楽天カード
                    </SelectItem>
                    <SelectItem value="yuichi">勇一</SelectItem>
                    <SelectItem value="miku">美公</SelectItem>
                  </>
                )}
              </SelectGroup>
            </SelectContent>
          </Select>
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
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="cash">美公</SelectItem>
                    <SelectItem value="seven-bank">勇一</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
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
