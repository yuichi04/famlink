import { SettingDialog } from "../setting-dialog";
import SettingAccountEditForm from "./setting-account-edit-form";

// API作成までの仮データ
const currencyData = [
  {
    name: "家族現金",
    type: "cash",
    amount: 50000,
  },
];

const bankData = [
  {
    name: "横浜銀行",
    type: "bank",
    amount: 300000,
  },
  {
    name: "セブン銀行",
    type: "bank",
    amount: 150000,
  },
  {
    name: "楽天銀行",
    type: "bank",
    amount: 50000,
  },
];

const creditData = [
  {
    name: "エポスカード",
    type: "credit-card",
    amount: 100000,
  },
  {
    name: "セブンカード",
    type: "credit-card",
    amount: 280000,
  },
  {
    name: "楽天カード",
    type: "credit-card",
    amount: 3000,
  },
];

export default function SettingAccountTable() {
  return (
    <div className="space-y-4">
      <SettingTableItem title="現金" data={currencyData} />
      <SettingTableItem title="銀行" data={bankData} />
      <SettingTableItem title="クレジットカード" data={creditData} />
    </div>
  );
}

type SettingTableProps = {
  title?: string;
  data: {
    name: string;
    type: string;
    amount: number;
  }[];
};

function SettingTableItem({ title, data }: SettingTableProps) {
  return (
    <div>
      {title && <h3 className="font-semibold text-sm mb-2">{title}</h3>}
      <ul className="space-y-2">
        {data.map((data, index) => (
          <li key={index}>
            <SettingDialog triggerText={data.name} title={data.name}>
              <SettingAccountEditForm
                type={data.type}
                name={data.name}
                amount={data.amount}
              />
            </SettingDialog>
          </li>
        ))}
      </ul>
    </div>
  );
}
