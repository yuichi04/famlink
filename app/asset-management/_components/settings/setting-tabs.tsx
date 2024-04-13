import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import SettingAccountForm from "./account/setting-account-form";
import SettingAccountTable from "./account/setting-account-table";
import SettingCategoryForm from "./category/setting-category-form";
import SettingCategoryTable from "./category/setting-category-table";
import SettingTagForm from "./tag/setting-tag-form";
import SettingTagTable from "./tag/setting-tag-table";

export default function SettingTabs() {
  return (
    <Tabs defaultValue="account">
      <TabsList className="z-50 fixed top-12 left-1/2 -translate-x-1/2 rounded-sm w-[calc(100%_-_16px)] grid grid-cols-4 bg-slate-300">
        <TabsTrigger value="account">口座</TabsTrigger>
        <TabsTrigger value="category">カテゴリ</TabsTrigger>
        <TabsTrigger value="tag">タグ</TabsTrigger>
        <TabsTrigger value="budget">予算</TabsTrigger>
      </TabsList>

      <TabsContent value="account" className="space-y-2 mt-0">
        <Card>
          <CardHeader>
            <CardTitle>口座登録</CardTitle>
          </CardHeader>
          <CardContent>
            <SettingAccountForm />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>登録済み口座</CardTitle>
          </CardHeader>
          <CardContent>
            <SettingAccountTable />
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="category" className="space-y-2 mt-0">
        <Card>
          <CardHeader>
            <CardTitle>カテゴリ登録</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <SettingCategoryForm />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>登録済みカテゴリ</CardTitle>
          </CardHeader>
          <CardContent>
            <SettingCategoryTable />
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="tag" className="space-y-2 mt-0">
        <Card>
          <CardHeader>
            <CardTitle>タグ登録</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <SettingTagForm />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>登録済みタグ</CardTitle>
          </CardHeader>
          <CardContent>
            <SettingTagTable />
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="budget" className="mt-0">
        <Card>
          <CardHeader>
            <CardTitle>現在の予算設定</CardTitle>
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
