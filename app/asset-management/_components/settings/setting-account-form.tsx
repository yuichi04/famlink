import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Selectbox, SelectboxProps } from "@/components/ui/select";

const accountOptions: SelectboxProps["options"] = [
  { value: "cash", label: "現金" },
  { value: "bank", label: "銀行" },
  { value: "credit-card", label: "クレジットカード" },
  { value: "electric-cash", label: "電子決済" },
  { value: "private", label: "プライベート" },
  { value: "other", label: "その他" },
];

export default function SettingAccountForm() {
  return (
    <form action="" className="space-y-4">
      <div>
        <Label>口座種別</Label>
        <Selectbox defaultValue="cash" options={accountOptions} />
      </div>
      <div>
        <Label>口座名</Label>
        <Input />
      </div>
      <div>
        <Label>現在の残高</Label>
        <div className="relative">
          <Input type="number" className="pr-8" />
          <span className="absolute right-2 bottom-2 text-sm">円</span>
        </div>
      </div>
      <Button className="w-full">登録</Button>
    </form>
  );
}
