import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TransactionForm from "./transaction-form";
import BarChart from "@/components/bar-chart";
import PieChart from "@/components/pie-chart";
import { DatePickerWithRange } from "@/components/date-picker-with-range";
import RegularForm from "./regular-form";
import RegularTable from "./regular-table";
import TransactionListTable from "./transaction-list-table";

type TransactionTabsProps = {
  type: "expenses" | "income";
};

export default function TransactionTabs({ type }: TransactionTabsProps) {
  return (
    <Tabs defaultValue="transaction">
      <TabsList className="z-50 fixed top-12 left-1/2 -translate-x-1/2 rounded-sm w-[calc(100%_-_16px)] grid grid-cols-4 bg-slate-300">
        <TabsTrigger value="transaction">登録</TabsTrigger>
        <TabsTrigger value="regular">
          {type === "expenses" ? "固定費" : "定期収入"}
        </TabsTrigger>
        <TabsTrigger value="list">一覧</TabsTrigger>
        <TabsTrigger value="report">レポート</TabsTrigger>
      </TabsList>

      <TabsContent value="transaction" className="mt-0">
        <TransactionForm type={type} />
      </TabsContent>

      <TabsContent value="regular" className="mt-0 space-y-2">
        <RegularForm />
        <RegularTable />
      </TabsContent>

      <TabsContent value="list" className="mt-0">
        <DatePickerWithRange />
        <TransactionListTable date={{ start: new Date(), end: new Date(1) }} />
      </TabsContent>

      <TabsContent value="report" className="grid grid-cols-1 gap-y-2 mt-0">
        <DatePickerWithRange />
        <BarChart type={type} />
        <PieChart type={type} />
      </TabsContent>
    </Tabs>
  );
}
