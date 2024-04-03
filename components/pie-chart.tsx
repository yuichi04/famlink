import { Suspense } from "react";
import { Card, CardContent, CardTitle } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Separator } from "./ui/separator";

type BarChartProps = {
  type: "expenses" | "income";
  period?: {
    start: string;
    end: string;
  };
};

export default function PieChart({ type }: BarChartProps): JSX.Element {
  // ここにデータ取得処理を書く
  // 仮データとしてランダムな数値を生成
  const tempDays = 30;
  const data = Array.from({ length: tempDays }, () =>
    Math.floor(Math.random() * 10000)
  );

  // dataを7つずつに分割
  const dataList = Array.from({ length: Math.ceil(tempDays / 7) }, (_, i) =>
    data.slice(i * 7, i * 7 + 7)
  );

  return (
    <Card>
      <CardTitle className="px-4 pt-4 mb-2 opacity-75 text-md font-normal">
        {type === "income" ? "収入内訳" : "支出内訳"}
      </CardTitle>
      <CardContent className="px-4">
        <Suspense fallback={<div>Loading...</div>}>
          <Carousel>
            <CarouselContent className="pb-2 px-1">
              {dataList.map((data, i) => (
                <CarouselListItem
                  key={i}
                  data={data}
                  date={{
                    start: `2024年4月${i * 7 + 1}日`,
                    end: `2024年4月${i * 7 + 7}日`,
                  }}
                  type={type}
                />
              ))}
            </CarouselContent>
            <CarouselPrevious
              className="-left-6 w-7 h-7 bg-slate-200"
              variant="outline"
            />
            <CarouselNext
              className="-right-6 w-7 h-7 bg-slate-200"
              variant="outline"
            />
          </Carousel>
        </Suspense>
      </CardContent>
    </Card>
  );
}

type BarProps = {
  percent: number;
  total: number;
  type: BarChartProps["type"];
  date: string;
};

function Bar({ percent, total, type, date }: BarProps): JSX.Element {
  return (
    <div className="relative w-8" style={{ height: percent + "%" }}>
      <div className="absolute bottom-[calc(100%_+_4px)] left-1/2 -translate-x-1/2 text-xs opacity-75">
        {total.toLocaleString()}
      </div>
      <div
        className={`absolute bottom-0 w-full rounded-t-sm ${
          type === "income" ? "bg-blue-500" : "bg-red-500"
        } animate-grow-up`}
      ></div>
      <div className="absolute top-[calc(100%_+_4px)] left-1/2 -translate-x-1/2 text-xs opacity-75">
        {date}
      </div>
    </div>
  );
}

type CarouselListItemProps = {
  data: number[];
  date: { start: string; end: string };
  type: BarChartProps["type"];
};

function CarouselListItem({ data, date, type }: CarouselListItemProps) {
  const total = data.reduce((acc, cur) => acc + cur, 0);
  let accumulated = 0;

  return (
    <CarouselItem>
      <header className="flex items-center justify-between">
        <div className="text-xs bg-slate-200 rounded-sm p-[2px]">
          {date.start} - {date.end}
        </div>
        <h3 className="font-semibold opacity-75">￥{total.toLocaleString()}</h3>
      </header>
      <Separator className="mt-2 mb-8" />
      <svg viewBox="0 0 32 32" className="w-60 h-60 mx-auto rounded-full">
        <circle
          r="16"
          cx="16"
          cy="16"
          fill="none"
          stroke="gray"
          strokeWidth="32"
        />
        {data.map((value, index) => {
          const dashArray = `${(value / total) * 100} ${
            100 - (value / total) * 100
          }`;
          const dashOffset = (-accumulated / total) * 100;
          accumulated += value;
          const angle = (accumulated / total) * 2 * Math.PI - Math.PI / 2;
          const textX = 16 + 16 * Math.cos(angle);
          const textY = 16 + 16 * Math.sin(angle);
          return (
            <g key={index}>
              <circle
                r="16"
                cx="16"
                cy="16"
                fill="none"
                stroke={`hsl(${(index / data.length) * 360}, 100%, 50%)`}
                strokeWidth="32"
                strokeDasharray={dashArray}
                strokeDashoffset={dashOffset}
                transform="rotate(-90) translate(-32)"
              />
            </g>
          );
        })}
      </svg>
    </CarouselItem>
  );
}
