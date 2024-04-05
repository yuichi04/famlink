import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SettingTabs() {
  return (
    <Tabs defaultValue="category">
      <TabsList className="z-50 fixed top-12 left-1/2 -translate-x-1/2 rounded-sm w-[calc(100%_-_16px)] grid grid-cols-4 bg-slate-300">
        <TabsTrigger value="account">口座</TabsTrigger>
        <TabsTrigger value="category">カテゴリ</TabsTrigger>
        <TabsTrigger value="tag">タグ</TabsTrigger>
        <TabsTrigger value="budget">予算</TabsTrigger>
      </TabsList>

      <TabsContent value="account" className="space-y-2 mt-0">
        <Card>
          <CardHeader className="pb-0">
            <CardTitle className="text-lg">新規登録</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>口座種別</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="cash">現金</SelectItem>
                    <SelectItem value="bank">銀行</SelectItem>
                    <SelectItem value="card">クレジットカード</SelectItem>
                    <SelectItem value="private">プライベート</SelectItem>
                    <SelectItem value="other">その他</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>口座名</Label>
              <Input />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-0">
            <CardTitle className="text-lg">一覧</CardTitle>
          </CardHeader>
          <CardContent>テーブル追加予定</CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="category" className="space-y-2 mt-0">
        <Card>
          <CardHeader className="pb-0">
            <CardTitle className="text-lg">新規登録</CardTitle>
          </CardHeader>
          <CardContent>
            <Label>カテゴリ名</Label>
            <Input />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-0">
            <CardTitle className="text-lg">一覧</CardTitle>
          </CardHeader>
          <CardContent>テーブル追加予定</CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="tag" className="space-y-2 mt-0">
        <Card>
          <CardHeader className="pb-0">
            <CardTitle className="text-lg">新規登録</CardTitle>
          </CardHeader>
          <CardContent>
            <Label>タグ名</Label>
            <Input />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-0">
            <CardTitle className="text-lg">一覧</CardTitle>
          </CardHeader>
          <CardContent>テーブル追加予定</CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="budget" className="mt-0">
        <Card>
          <CardHeader className="pb-0">
            <CardTitle className="text-lg">現在の予算設定</CardTitle>
          </CardHeader>
          <CardContent className="text-right">
            <p className="text-xl font-semibold">380,000 円</p>
          </CardContent>
          <CardContent>
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="relative">
                  <Label>新しい予算設定</Label>
                  <Input type="number" className="pr-8" />
                  <span className="absolute right-2 bottom-2 text-sm">円</span>
                </div>
                <Button className="w-full">更新</Button>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
