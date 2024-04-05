import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TransactionTabs from "./(components)/transaction-tabs";
import FinanceTabs from "./(components)/finance-tabs";
import SettingTabs from "./(components)/setting-tabs";

export default function Page() {
  return (
    <>
      <Tabs defaultValue="account">
        <TabsList className="z-50 fixed top-1 left-1/2 -translate-x-1/2 rounded-sm w-[calc(100%_-_16px)] grid grid-cols-4 bg-slate-700 text-white">
          <TabsTrigger value="account">予算・口座</TabsTrigger>
          <TabsTrigger value="expenses">支出</TabsTrigger>
          <TabsTrigger value="income">収入</TabsTrigger>
          <TabsTrigger value="settings">設定</TabsTrigger>
        </TabsList>

        <TabsContent value="account">
          <FinanceTabs />
        </TabsContent>

        <TabsContent value="expenses" className="pt-10">
          <TransactionTabs type="expenses" />
        </TabsContent>

        <TabsContent value="income" className="pt-10">
          <TransactionTabs type="income" />
        </TabsContent>

        <TabsContent value="settings" className="pt-10">
          <SettingTabs />
        </TabsContent>
      </Tabs>
    </>
  );
}
