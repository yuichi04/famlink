import Navigation from "@/components/navigation";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

export default function RootPage() {
  return (
    <>
      <section className="p-2">
        <h1 className="text-xl font-semibold mb-2">ホーム画面</h1>
        <Card className="p-4">
          <p className="opacity-50 text-sm">予算設定金額 ¥80,000</p>
          <h2 className="font-semibold text-lg">今月の残り予算額</h2>
          <p className="font-semibold text-2xl">¥45,231,890</p>
        </Card>
      </section>
      <section className="fixed bottom-0 w-full">
        <Navigation />
      </section>
    </>
  );
}
