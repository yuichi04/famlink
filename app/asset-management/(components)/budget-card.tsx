import { Card } from "@/components/ui/card";

type BudgetCardProps = {
  type: "expenses" | "income";
};

export default async function BudgetCard({ type }: BudgetCardProps) {
  // TODO: typeに応じてデータの取得先を変える

  return (
    <Card className="p-4">
      <div>
        <h2 className="opacity-75">
          {type === "expenses" ? "支出合計" : "収入合計"}
        </h2>
        <p
          className={`font-semibold text-lg ${
            type === "income" ? "text-blue-500" : "text-red-500"
          }`}
        >
          ¥45,231,890
        </p>
      </div>
    </Card>
  );
}
