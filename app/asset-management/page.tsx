import { DatePickerWithRange } from "@/components/date-picker-with-range";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AssetsCard from "./(components)/assets-card";
import { Suspense } from "react";
import SkeletonAssetsCard from "./(components)/skeleton-assets-card";
import BudgetCard from "./(components)/budget-card";
import BarChart from "@/components/bar-chart";
import PieChart from "@/components/pie-chart";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function Page() {
  return (
    <>
      <Tabs defaultValue="assets">
        <TabsList className="w-full grid grid-cols-3 bg-slate-600 text-white mb-2">
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

        <TabsContent value="expenses" className="grid grid-cols-1 gap-y-4 mt-0">
          <Tabs defaultValue="transaction">
            <TabsList className="w-full grid grid-cols-3 bg-slate-300 mb-2">
              <TabsTrigger value="transaction">取引登録</TabsTrigger>
              <TabsTrigger value="report">レポート</TabsTrigger>
              <TabsTrigger value="settings">設定</TabsTrigger>
            </TabsList>

            <TabsContent
              value="transaction"
              className="grid grid-cols-1 gap-y-2 mt-0"
            >
              日付：
              <DatePickerWithRange />
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="amount">金額</Label>
                <Input id="amount" type="number" />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="category">カテゴリ</Label>
                <Input id="category" />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="shop">お店</Label>
                <Input id="shop" />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="memo">メモ</Label>
                <Textarea id="memo" />
              </div>
              <Button>登録</Button>
            </TabsContent>

            <TabsContent
              value="report"
              className="grid grid-cols-1 gap-y-2 mt-0"
            >
              <DatePickerWithRange />
              <BudgetCard type="expenses" />
              <BarChart type="expenses" />
              <PieChart type="expenses" />
            </TabsContent>

            <TabsContent
              value="settings"
              className="grid grid-cols-1 gap-y-2 mt-0"
            >
              <Button>カテゴリ設定</Button>
              <Button>支払い先設定</Button>
            </TabsContent>
          </Tabs>
        </TabsContent>

        <TabsContent value="income" className="grid grid-cols-1 gap-y-4 mt-0">
          <Tabs defaultValue="transaction">
            <TabsList className="w-full grid grid-cols-3 bg-slate-300 mb-2">
              <TabsTrigger value="transaction">取引登録</TabsTrigger>
              <TabsTrigger value="report">レポート</TabsTrigger>
              <TabsTrigger value="settings">設定</TabsTrigger>
            </TabsList>

            <TabsContent
              value="transaction"
              className="grid grid-cols-1 gap-y-2 mt-0"
            >
              日付：
              <DatePickerWithRange />
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="amount">金額</Label>
                <Input id="amount" type="number" />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="category">カテゴリ</Label>
                <Input id="category" />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="shop">お店</Label>
                <Input id="shop" />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="memo">メモ</Label>
                <Textarea id="memo" />
              </div>
              <Button>登録</Button>
            </TabsContent>

            <TabsContent
              value="report"
              className="grid grid-cols-1 gap-y-2 mt-0"
            >
              <DatePickerWithRange />
              <BudgetCard type="income" />
              <BarChart type="income" />
              <PieChart type="income" />
            </TabsContent>

            <TabsContent
              value="settings"
              className="grid grid-cols-1 gap-y-2 mt-0"
            >
              <Button>カテゴリ設定</Button>
              <Button>支払い先設定</Button>
            </TabsContent>
          </Tabs>
        </TabsContent>
      </Tabs>
    </>
  );
}
