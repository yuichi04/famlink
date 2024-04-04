import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Suspense } from "react";

type BudgetCardProps = {
  type: "expenses" | "income";
};

export default async function BudgetCard({ type }: BudgetCardProps) {
  // TODO: typeに応じてデータの取得先を変える

  return (
    <Card className="relative">
      <CardTitle className="pt-4 pl-4 opacity-75 text-lg">合計</CardTitle>
      <CardContent
        className={`text-lg font-semibold ${
          type === "income" ? "text-blue-500" : "text-red-500"
        } px-4`}
      >
        ￥10,000,000
      </CardContent>
    </Card>
  );
}
