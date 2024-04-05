import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

type BarChartProps = {
  type: "expenses" | "income";
  period?: {
    start: string;
    end: string;
  };
};

export default function PieChart({ type }: BarChartProps): JSX.Element {
  const styles = {
    pieChart: `h-48 w-48 rounded-full bg-${
      type === "expenses" ? "red" : "blue"
    }-500`,
  };
  // ここにデータ取得処理を書く

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">カテゴリ別</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-4">
        <div className="col-span-3">
          <div className={styles.pieChart}></div>
        </div>
        <ul className="col-span-1 text-xs">
          <li>日用品: 100%</li>
          <li>日用品: 100%</li>
          <li>日用品: 100%</li>
          <li>日用品: 100%</li>
          <li>日用品: 100%</li>
          <li>日用品: 100%</li>
          <li>日用品: 100%</li>
          <li>日用品: 100%</li>
          <li>日用品: 100%</li>
        </ul>
      </CardContent>
    </Card>
  );
}
