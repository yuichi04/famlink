import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import Image from "next/image";

export default function Page() {
  return (
    <div className="p-4 space-y-8">
      <section>
        <h2 className="flex items-center space-x-1 font-bold text-slate-700 text-xl mb-2">
          <Image
            alt="残りの予算"
            src="/icons/payments-slate.svg"
            width={32}
            height={32}
          />
          <span>予算残金：80,000円</span>
        </h2>
        <div className="grid grid-cols-11 gap-y-1 text-xs">
          <div className="col-span-4 font-bold">店名</div>
          <div className="col-span-3 font-bold">支払い方法</div>
          <div className="col-span-2 font-bold">金額</div>
          <div className="col-span-2 font-bold">日時</div>
        </div>
        <hr className="my-1 bg-slate-700" />
        <div className="grid grid-cols-11 gap-y-1 text-xs">
          <div className="col-span-4">フレッシュマーケット</div>
          <div className="col-span-3">セブンカード</div>
          <div className="col-span-2">7,311円</div>
          <div className="col-span-2">03/31 14:00</div>
          <div className="col-span-4">フレッシュマーケット</div>
          <div className="col-span-3">セブンカード</div>
          <div className="col-span-2">7,311円</div>
          <div className="col-span-2">03/31 14:00</div>
          <div className="col-span-4">フレッシュマーケット</div>
          <div className="col-span-3">セブンカード</div>
          <div className="col-span-2">7,311円</div>
          <div className="col-span-2">03/31 14:00</div>
        </div>
      </section>
    </div>
  );
}
