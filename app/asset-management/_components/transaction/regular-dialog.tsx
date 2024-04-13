"use client";

import { DatePicker } from "@/components/date-picker";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Selectbox } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

export function RegularDialog() {
  const [regular, setRegular] = useState<"week" | "month">("week");
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full" variant="secondary">
          繰り返しルールを設定する
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-lg">繰り返しルール</DialogTitle>
        </DialogHeader>
        <Card className="p-2 space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="regular-week" className="w-full">
              週
            </Label>
            <Input
              id="regular-week"
              type="radio"
              name="regular"
              value="week"
              checked={regular === "week" && true}
              className="h-5 w-5"
              onChange={(e) =>
                setRegular(e.currentTarget.checked ? "week" : "month")
              }
            />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <Label htmlFor="regular-month" className="w-full">
              月（日付指定）
            </Label>
            <Input
              id="regular-month"
              type="radio"
              name="regular"
              value="month"
              className="h-5 w-5"
              onChange={(e) =>
                setRegular(e.currentTarget.checked ? "month" : "week")
              }
            />
          </div>
        </Card>
        <Card className="p-2 space-y-2">
          {regular === "week" ? (
            <>
              <div className="flex items-center justify-between">
                <Label htmlFor="regular-week" className="w-full">
                  曜日
                </Label>
                <Selectbox
                  defaultValue="seven-credit-card"
                  options={dayOfTheWeek}
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <Label htmlFor="regular-month" className="w-full">
                  繰り返しの間隔
                </Label>
                <Selectbox
                  defaultValue="seven-credit-card"
                  options={generateRepeatIntervalOptions("week")}
                />
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center justify-between">
                <Label htmlFor="regular-week" className="w-full">
                  日付
                </Label>
                <Selectbox
                  defaultValue="seven-credit-card"
                  options={generateDayOptions()}
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <Label htmlFor="regular-month" className="w-full">
                  繰り返しの間隔
                </Label>
                <Selectbox
                  defaultValue="seven-credit-card"
                  options={generateRepeatIntervalOptions("month")}
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <Label htmlFor="regular-month" className="w-full">
                  当日が休日の場合
                </Label>
                <Selectbox
                  defaultValue="nothing"
                  options={[
                    { value: "nothing", label: "何もしない" },
                    { value: "previous-weekday", label: "直前の平日を選択" },
                    { value: "next-weekday", label: "直後の平日を選択" },
                  ]}
                />
              </div>
            </>
          )}
        </Card>
        <Card className="p-2 flex items-center justify-between">
          <Label htmlFor="regular-week" className="w-full">
            開始日
          </Label>
          <DatePicker />
        </Card>
        <DialogFooter>
          <Button type="submit">登録</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function generateDayOptions() {
  const options = [];

  for (let i = 1; i <= 31; i++) {
    options.push({ value: `${i}`, label: `${i}日` });
  }

  return options;
}

function generateRepeatIntervalOptions(type: "week" | "month") {
  const options = [];

  for (let i = 1; i <= 12; i++) {
    if (i === 1) {
      options.push({ value: `${i}`, label: type === "week" ? "毎週" : "毎月" });
    } else {
      options.push({
        value: `${i}`,
        label: type === "week" ? `${i}週ごと` : `${i}ヶ月ごと`,
      });
    }
  }

  return options;
}

const dayOfTheWeek = [
  { value: "monday", label: "月曜日" },
  { value: "tuesday", label: "火曜日" },
  { value: "wednesday", label: "水曜日" },
  { value: "thursday", label: "木曜日" },
  { value: "friday", label: "金曜日" },
  { value: "saturday", label: "土曜日" },
  { value: "sunday", label: "日曜日" },
];
