import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SettingCategoryForm() {
  return (
    <form action="" className="space-y-4">
      <div>
        <Label>カテゴリ名</Label>
        <Input />
      </div>
      <Button className="w-full mt-2">登録</Button>
    </form>
  );
}
