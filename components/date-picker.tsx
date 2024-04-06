"use client";

import * as React from "react";
import { addDays, format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "./ui/label";
import { ja } from "date-fns/locale";
import { Selectbox } from "./ui/select";

const options = [
  { value: "-2", label: "一昨日" },
  { value: "-1", label: "昨日" },
  { value: "0", label: "今日" },
  { value: "1", label: "明日" },
];

export function DatePicker({ width }: { width: string }) {
  const [date, setDate] = React.useState<Date>();

  React.useEffect(() => {
    setDate(new Date());
  }, []);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !date && "text-muted-foreground",
            width
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? (
            format(date, "y/MM/dd", { locale: ja })
          ) : (
            <span>日付を選択</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="flex flex-col w-auto space-y-4 translate-x-6">
        <div>
          <Label className="text-xs text-stone-800 font-semibold">
            簡単選択
          </Label>
          <Selectbox
            defaultValue="0"
            options={options}
            onChange={(e) =>
              setDate(addDays(new Date(), parseInt(e.target.value)))
            }
          />
        </div>
        <div>
          <Label className="text-xs text-stone-800 font-semibold">
            カレンダーから選択
          </Label>
          <div className="rounded-md border">
            <Calendar mode="single" selected={date} onSelect={setDate} />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
