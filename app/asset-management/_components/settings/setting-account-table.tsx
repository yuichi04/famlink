import SettingTable from "./setting-table";

// API作成までの仮データ
const currencyData = [
  {
    name: "家族現金",
  },
];

const bankData = [
  {
    name: "横浜銀行",
  },
  {
    name: "セブン銀行",
  },
  {
    name: "楽天銀行",
  },
];

const creditData = [
  {
    name: "エポスカード",
  },
  {
    name: "セブンカード",
  },
  {
    name: "楽天カード",
  },
];

export default function SettingAccountTable() {
  return (
    <div className="space-y-4">
      <SettingTable title="現金" data={currencyData} />
      <SettingTable title="銀行" data={bankData} />
      <SettingTable title="クレジットカード" data={creditData} />
    </div>
  );
}
