import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

type SkeletonAssetsCardProps = {
  type: "assets" | "liabilities";
};

export default function SkeletonAssetsCard({ type }: SkeletonAssetsCardProps) {
  return (
    <Card className="p-4 space-y-4">
      <div>
        <h2 className="opacity-75 text-sm">
          {type === "assets" ? "資産合計" : "未払い残高"}
        </h2>
        <Skeleton className="h-8 w-full" />
      </div>
      <hr />
      <Skeleton className="h-48 w-full" />
    </Card>
  );
}
