import { DatePickerWithRange } from "@/components/date-picker-with-range";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AssetsCard from "./(components)/assets-card";
import { Suspense } from "react";
import SkeletonAssetsCard from "./(components)/skeleton-assets-card";
import BudgetCard from "./(components)/budget-card";
import BarChart from "@/components/bar-chart";

export default function Page() {
  return (
    <>
      <h1 className="text-xl font-semibold mb-2">資産管理</h1>
      <DatePickerWithRange className="mb-2" />
      <Tabs defaultValue="assets">
        <TabsList className="w-full grid grid-cols-3 bg-slate-200 mb-2">
          <TabsTrigger value="assets">資産</TabsTrigger>
          <TabsTrigger value="expenses">支出</TabsTrigger>
          <TabsTrigger value="income">収入</TabsTrigger>
        </TabsList>
        <TabsContent value="assets" className="grid grid-cols-1 gap-y-4">
          <Suspense fallback={<SkeletonAssetsCard type="assets" />}>
            <AssetsCard type="assets" />
          </Suspense>
          <Suspense fallback={<SkeletonAssetsCard type="liabilities" />}>
            <AssetsCard type="liabilities" />
          </Suspense>
        </TabsContent>
        <TabsContent value="expenses" className="grid grid-cols-1 gap-y-4">
          <Suspense fallback={<SkeletonAssetsCard type="assets" />}>
            <BudgetCard type="expenses" />
            <BarChart type="expenses" />
          </Suspense>
        </TabsContent>
        <TabsContent value="income" className="grid grid-cols-1 gap-y-4">
          <Suspense fallback={<SkeletonAssetsCard type="assets" />}>
            <BudgetCard type="income" />
            <BarChart type="income" />
          </Suspense>
        </TabsContent>
      </Tabs>
    </>
  );
}