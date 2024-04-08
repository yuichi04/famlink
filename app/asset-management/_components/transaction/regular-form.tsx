import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Selectbox, SelectboxProps } from "@/components/ui/select";
import { RegularDialog } from "./regular-dialog";

const categoryOptions: SelectboxProps["options"] = [
  {
    value: "default",
    label: "カテゴリを選択",
  },
  {
    value: "daily-necessities",
    label: "日用品",
  },
  {
    value: "food-expenses",
    label: "食費",
  },
  {
    value: "other",
    label: "その他",
  },
];

const accountOptions: SelectboxProps["options"] = [
  {
    value: "cash",
    label: "現金",
  },
  {
    value: "seven-bank",
    label: "セブン銀行",
  },
  {
    value: "yokohama-bank",
    label: "横浜銀行",
  },
  {
    value: "seven-credit-card",
    label: "セブンカード",
  },
  {
    value: "epos-credit-card",
    label: "エポスカード",
  },
];

export default function RegularForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>新規登録</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-x-2 gap-y-4">
        <div>
          <Label>カテゴリ</Label>
          <Selectbox defaultValue="default" options={categoryOptions} />
        </div>
        <div>
          <Label>口座</Label>
          <Selectbox
            defaultValue="seven-credit-card"
            options={accountOptions}
          />
        </div>
        <div>
          <Label>金額</Label>
          <div className="relative">
            <Input type="number" className="pr-8" />
            <span className="absolute right-2 bottom-2 text-sm">円</span>
          </div>
        </div>
        <div>
          <Label>タグ</Label>
          <Input />
        </div>
        <div className="col-span-2">
          <Label>ルール設定</Label>
          <RegularDialog
            trigger={
              <Button className="w-full" variant="secondary">
                繰り返しルールを設定する
              </Button>
            }
          />
        </div>
        <div className="col-span-2 pt-4">
          <Button className="w-full">保存</Button>
        </div>
      </CardContent>
    </Card>
  );
}
