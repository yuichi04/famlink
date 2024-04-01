import Image from "next/image";

export default function RootPage() {
  return (
    <div className="p-4 space-y-8">
      <section>
        <h2 className="flex items-center space-x-1 font-bold text-slate-700 text-xl mb-2">
          <Image
            alt="今月の支出"
            src="/icons/payments-slate.svg"
            width={32}
            height={32}
          />
          <span>今月の支出</span>
        </h2>
        <div className="w-full min-h-64 border shadow-sm rounded-md p-4">
          <ul className="space-y-2">
            <li className="flex items-center justify-between">
              <div>現金</div>
              <div>￥2,000</div>
            </li>
            <li className="flex items-center justify-between">
              <div>セブンカード</div>
              <div>￥100,000</div>
            </li>
            <li className="flex items-center justify-between">
              <div>楽天カード</div>
              <div>￥10,000</div>
            </li>
            <li className="flex items-center justify-between">
              <div>エポスカード</div>
              <div>￥100,000</div>
            </li>
          </ul>
          <hr className="my-2" />
          <div className="flex items-center justify-between text-lg">
            <div>合計</div>
            <div>￥400,000</div>
          </div>
        </div>
      </section>
      <section>
        <h2 className="flex items-center space-x-1 font-bold text-slate-700 text-xl mb-2">
          <Image
            alt="イベントアイコン"
            src="/icons/event-available-slate.svg"
            width={32}
            height={32}
          />
          <span>今日のイベント</span>
        </h2>
        <div className="w-full h-64 border shadow-sm rounded-md">
          <div className="h-full flex items-center justify-center">
            今日開催予定のイベントはありません
          </div>
        </div>
      </section>
    </div>
  );
}
