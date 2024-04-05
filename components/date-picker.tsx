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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "./ui/label";
import { ja } from "date-fns/locale";

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
          <Select
            onValueChange={(value) =>
              setDate(addDays(new Date(), parseInt(value)))
            }
            defaultValue="0"
          >
            <SelectTrigger>
              <SelectValue placeholder="-" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="-2">一昨日</SelectItem>
              <SelectItem value="-1">昨日</SelectItem>
              <SelectItem value="0">今日</SelectItem>
              <SelectItem value="1">明日</SelectItem>
            </SelectContent>
          </Select>
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
