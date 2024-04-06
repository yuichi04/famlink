"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
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
        <Calendar mode="single" selected={date} onSelect={setDate} />
      </PopoverContent>
    </Popover>
  );
}
