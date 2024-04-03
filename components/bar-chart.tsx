import { Card, CardContent, CardTitle } from "./ui/card";

type BarChartProps = {
  type: "expenses" | "income";
};

export default function BarChart({ type }: BarChartProps): JSX.Element {
  // ここにデータ取得処理を書く
  // 仮データとしてランダムな数値を生成
  const data = Array.from({ length: 10 }, () =>
    Math.floor(Math.random() * 100)
  );

  return (
    <Card>
      <CardTitle className="p-4 opacity-75 text-md font-normal">
        {type === "income" ? "収入推移" : "支出推移"}
      </CardTitle>
      <CardContent className="p-4 flex">
        <div className="h-60 flex items-end justify-between">
          {data.map((tick) => (
            <Bar key={tick} percent={tick} type={type} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

type BarProps = {
  percent: number;
  type: BarChartProps["type"];
};

function Bar({ percent, type }: BarProps): JSX.Element {
  return (
    <div className="relative w-8" style={{ height: percent + "%" }}>
      <div
        className={`absolute bottom-0 w-full ${
          type === "income" ? "bg-blue-500" : "bg-red-500"
        } animate-grow-up`}
      ></div>
    </div>
  );
}
