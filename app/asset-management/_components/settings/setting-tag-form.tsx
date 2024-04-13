import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SettingTagForm() {
  return (
    <form action="" className="space-y-4">
      <div>
        <Label>タグ名</Label>
        <Input />
      </div>
      <Button className="w-full">登録</Button>
    </form>
  );
}
