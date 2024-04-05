import FinanceOverview from "./finance-overview";

export default function FinanceTabs() {
  return (
    <div className="grid grid-cols-1 gap-y-2 mt-0 pt-0">
      <FinanceOverview
        category="今月の残り予算"
        description="4月1日 ~ 4月30日"
        amount={30000}
        subDescription="予算設定：380,000 円"
      />
      <FinanceOverview category="現金" amount={30000} />
      <FinanceOverview
        category="銀行口座"
        amount={100000}
        list={[
          { name: "セブン銀行", amount: 10000 },
          { name: "横浜銀行", amount: 90000 },
        ]}
      />
      <FinanceOverview
        category="クレジットカード"
        amount={-100000}
        list={[
          { name: "セブンカード", amount: -10000 },
          { name: "エポスカード", amount: -70000 },
          { name: "楽天カード", amount: -20000 },
        ]}
      />
      <FinanceOverview
        category="プライベート"
        amount={-3000}
        list={[
          { name: "美公", amount: -10000 },
          { name: "勇一", amount: 7000 },
        ]}
      />
    </div>
  );
}
