import { Card, CardContent, CardTitle } from "./ui/card";

type BarChartProps = {
  type: "expenses" | "income";
};

export default function BarChart({ type }: BarChartProps) {
  return (
    <Card>
      <CardTitle className="p-4 opacity-75 text-md font-normal">
        {type === "income" ? "収入推移" : "支出推移"}
      </CardTitle>
      <CardContent className="flex space-x-2">
        <Indicator />
        <div className="h-60 w-full flex items-end justify-between">
          <Bar percent={50} type={type} />
          <Bar percent={30} type={type} />
          <Bar percent={70} type={type} />
          <Bar percent={90} type={type} />
          <Bar percent={20} type={type} />
          <Bar percent={80} type={type} />
          <Bar percent={60} type={type} />
        </div>
      </CardContent>
    </Card>
  );
}

type BarProps = {
  percent: number;
  type: BarChartProps["type"];
};

function Bar({ percent, type }: BarProps) {
  return (
    <div style={{ height: percent + "%", transform: "rotate(180deg)" }}>
      <div
        className={`w-8 ${
          type === "income" ? "bg-blue-500" : "bg-red-500"
        } animate-grow-up`}
      ></div>
    </div>
  );
}

function Indicator() {
  return (
    <div className="h-60 flex flex-col justify-between">
      <div className="text-xs">100</div>
      <div className="text-xs">50</div>
      <div className="text-xs">0</div>
    </div>
  );
}
