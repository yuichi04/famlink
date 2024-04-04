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
import Image from "next/image";

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
      <CardTitle className="pt-4 pl-4 opacity-75 text-lg">内訳</CardTitle>
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

type CarouselListItemProps = {
  data: number[];
  date: { start: string; end: string };
  type: BarChartProps["type"];
};

function CarouselListItem({ data, date }: CarouselListItemProps) {
  const total = data.reduce((acc, cur) => acc + cur, 0);
  let accumulated = 0;

  return (
    <CarouselItem>
      <header>
        <span className="text-xs opacity-75">
          {date.start.slice(5)} - {date.end.slice(5)}
        </span>
        <p className="font-semibold text-lg opacity-75">
          ￥{total.toLocaleString()}
        </p>
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
