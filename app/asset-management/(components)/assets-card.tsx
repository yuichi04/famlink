import { Card } from "@/components/ui/card";

type AssetsCardProps = {
  type: "assets" | "liabilities";
};

export default async function AssetsCard({ type }: AssetsCardProps) {
  // TODO: typeに応じてデータの取得先を変える

  await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
    <Card className="p-4 space-y-4">
      <div>
        <h2 className="opacity-75">
          {type === "assets" ? "資産合計" : "未払い残高"}
        </h2>
        <p
          className={`font-semibold text-lg ${
            type === "assets" ? "text-blue-500" : "text-red-500"
          }`}
        >
          ¥45,231,890
        </p>
      </div>
      <hr />
      <div>
        <h2 className="opacity-75 text-sm">現金</h2>
        <p className="text-lg">¥231,890</p>
      </div>
      <div>
        <h2 className="opacity-75 text-sm">横浜銀行</h2>
        <p className="text-lg">¥231,890</p>
      </div>
      <div>
        <h2 className="opacity-75 text-sm">セブン銀行</h2>
        <p className="text-lg">¥231,890</p>
      </div>
    </Card>
  );
}
