import { Suspense } from "react";
import { Card, CardContent, CardTitle } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

type BarChartProps = {
  type: "expenses" | "income";
  period?: {
    start: string;
    end: string;
  };
};

export default function BarChart({ type }: BarChartProps): JSX.Element {
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
        {type === "income" ? "収入推移" : "支出推移"}
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
  const max = Math.max(...data);
  const total = data.reduce((acc, cur) => acc + cur, 0);

  return (
    <CarouselItem>
      <header className="flex items-center justify-between">
        <div className="text-xs bg-slate-200 rounded-sm p-[2px]">
          {date.start} - {date.end}
        </div>
        <h3 className="font-semibold opacity-75">￥{total.toLocaleString()}</h3>
      </header>
      <hr className="mt-2 mb-4" />
      <div className="h-60 flex items-end space-x-4 pt-4">
        {data.map((item) => (
          <Bar
            key={item}
            percent={Math.round((item / max) * 100)}
            total={item}
            type={type}
            date="4/1"
          />
        ))}
      </div>
    </CarouselItem>
  );
}
