import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "会社概要 | 有限会社RDP DXソリューション",
  description: "有限会社RDPのDXソリューション事業部の会社概要、経営理念、代表メッセージ、事業内容などをご紹介します。",
};

export default function AboutPage() {
  return (
    <>
      {/* ヒーローセクション */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">会社概要</h1>
            <p className="text-xl">
              有限会社RDPのDXソリューション事業部についてご紹介します。
              私たちの理念や事業内容をご覧ください。
            </p>
          </div>
        </div>
      </section>

      {/* 会社概要セクション */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div className="h-[300px] bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">会社外観イメージ</span>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">有限会社RDP</h2>
                <dl className="space-y-4">
                  <div className="grid grid-cols-3">
                    <dt className="font-semibold">会社名</dt>
                    <dd className="col-span-2">有限会社RDP</dd>
                  </div>
                  <div className="grid grid-cols-3">
                    <dt className="font-semibold">設立</dt>
                    <dd className="col-span-2">2005年4月</dd>
                  </div>
                  <div className="grid grid-cols-3">
                    <dt className="font-semibold">代表者</dt>
                    <dd className="col-span-2">代表取締役 鈴木 一郎</dd>
                  </div>
                  <div className="grid grid-cols-3">
                    <dt className="font-semibold">所在地</dt>
                    <dd className="col-span-2">
                      〒225-0015<br />
                      神奈川県横浜市青葉区荏田北1-2-1 PLATFORM218
                    </dd>
                  </div>
                  <div className="grid grid-cols-3">
                    <dt className="font-semibold">Eメール</dt>
                    <dd className="col-span-2">rdp@6330.jp</dd>
                  </div>
                  <div className="grid grid-cols-3">
                    <dt className="font-semibold">事業内容</dt>
                    <dd className="col-span-2">
                      インテリアデザイン・建築設計<br />
                      DXコンサルティング<br />
                      システム開発・導入<br />
                      データ活用支援<br />
                      デジタル人材育成
                    </dd>
                  </div>
                </dl>
              </div>
            </div>

            {/* アクセスマップ */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-4">アクセス</h3>
              <div className="h-[400px] bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">Googleマップを埋め込む予定</span>
              </div>
              <div className="mt-4 text-gray-600 dark:text-gray-400">
                <p>東急田園都市線「江田駅」から徒歩10分</p>
                <p>横浜市営地下鉄「センター北駅」「センター南駅」からバスで15分</p>
                <p>お車でお越しの際は事前にご連絡ください</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 経営理念セクション */}
      <section id="philosophy" className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">経営理念</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              私たちRDP DXソリューションは、以下の理念に基づき、
              お客様のデジタル変革を支援しています。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* 理念1 */}
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">技術と人間の調和</h3>
              <p className="text-gray-600 dark:text-gray-300">
                デジタル技術は人間の創造性や判断力を拡張するものであり、
                人間中心の視点でテクノロジーを活用することで、
                真の価値を生み出します。
              </p>
            </div>

            {/* 理念2 */}
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">持続可能な成長</h3>
              <p className="text-gray-600 dark:text-gray-300">
                短期的な成果だけでなく、お客様のビジネスが
                長期的に成長し続けるための基盤づくりを
                支援します。
              </p>
            </div>

            {/* 理念3 */}
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">共創と挑戦</h3>
              <p className="text-gray-600 dark:text-gray-300">
                お客様と共に考え、共に創り、共に成長することを
                大切にし、常に新しい価値の創出に
                挑戦し続けます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 代表メッセージセクション */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-center mb-8">
              <div className="md:w-1/3">
                <div className="w-64 h-64 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400">代表写真</span>
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold mb-6">代表メッセージ</h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>
                    私たちRDP DXソリューションは、「技術と人間の調和」を理念に掲げ、
                    企業のデジタル変革を支援しています。
                  </p>
                  <p>
                    現代のビジネス環境は、デジタル技術の急速な進化によって大きく変化しています。
                    この変化に対応し、競争力を維持・強化するためには、
                    デジタルトランスフォーメーション（DX）が不可欠です。
                  </p>
                  <p>
                    しかし、DXは単なるIT化やシステム導入ではありません。
                    企業文化や業務プロセスの変革を含む、包括的な取り組みです。
                    私たちは、お客様のビジネス課題を深く理解し、
                    経営戦略と連動したDX推進を支援します。
                  </p>
                  <p>
                    お客様と共に考え、共に創り、共に成長することを大切にし、
                    お客様のビジネスが持続的に成長するためのパートナーとして、
                    最適なソリューションを提供してまいります。
                  </p>
                </div>
                <div className="mt-6 text-right">
                  <p className="font-semibold">代表取締役 鈴木 一郎</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 沿革セクション */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">沿革</h2>

            <div className="relative">
              {/* 中央線 */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300 dark:bg-gray-600"></div>

              {/* 沿革アイテム */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                {/* 2005年 */}
                <div className="md:col-start-1 md:text-right relative">
                  <div className="absolute right-0 md:left-auto top-0 transform translate-x-1/2 md:translate-x-1/2 w-4 h-4 bg-primary rounded-full z-10"></div>
                  <div className="pr-12 md:pl-0 pb-8">
                    <h3 className="text-xl font-bold mb-2">2005年4月</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      有限会社RDPを設立。<br />
                      システム開発事業を開始。
                    </p>
                  </div>
                </div>
                <div className="md:col-start-2 invisible md:visible"></div>

                {/* 2010年 */}
                <div className="md:col-start-1 invisible md:visible"></div>
                <div className="md:col-start-2 relative">
                  <div className="absolute left-0 md:left-0 top-0 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full z-10"></div>
                  <div className="pl-12 pb-8">
                    <h3 className="text-xl font-bold mb-2">2010年6月</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      クラウドサービス事業を開始。<br />
                      AWSパートナー認定取得。
                    </p>
                  </div>
                </div>

                {/* 2015年 */}
                <div className="md:col-start-1 md:text-right relative">
                  <div className="absolute right-0 md:left-auto top-0 transform translate-x-1/2 md:translate-x-1/2 w-4 h-4 bg-primary rounded-full z-10"></div>
                  <div className="pr-12 md:pl-0 pb-8">
                    <h3 className="text-xl font-bold mb-2">2015年10月</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      データ分析事業を開始。<br />
                      BIツール導入支援サービスを開始。
                    </p>
                  </div>
                </div>
                <div className="md:col-start-2 invisible md:visible"></div>

                {/* 2020年 */}
                <div className="md:col-start-1 invisible md:visible"></div>
                <div className="md:col-start-2 relative">
                  <div className="absolute left-0 md:left-0 top-0 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full z-10"></div>
                  <div className="pl-12 pb-8">
                    <h3 className="text-xl font-bold mb-2">2020年4月</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      DXソリューション事業部を設立。<br />
                      DXコンサルティングサービスを開始。
                    </p>
                  </div>
                </div>

                {/* 2022年 */}
                <div className="md:col-start-1 md:text-right relative">
                  <div className="absolute right-0 md:left-auto top-0 transform translate-x-1/2 md:translate-x-1/2 w-4 h-4 bg-primary rounded-full z-10"></div>
                  <div className="pr-12 md:pl-0 pb-8">
                    <h3 className="text-xl font-bold mb-2">2022年7月</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      AI・機械学習活用支援サービスを開始。<br />
                      デジタル人材育成プログラムを開始。
                    </p>
                  </div>
                </div>
                <div className="md:col-start-2 invisible md:visible"></div>

                {/* 2023年 */}
                <div className="md:col-start-1 invisible md:visible"></div>
                <div className="md:col-start-2 relative">
                  <div className="absolute left-0 md:left-0 top-0 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full z-10"></div>
                  <div className="pl-12">
                    <h3 className="text-xl font-bold mb-2">2023年11月</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      東京本社オフィスを移転・拡大。<br />
                      地方自治体向けDX支援サービスを開始。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* パートナー企業セクション */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">パートナー企業</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {/* パートナー企業ロゴ */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md h-32 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">パートナーA社</span>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md h-32 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">パートナーB社</span>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md h-32 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">パートナーC社</span>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md h-32 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">パートナーD社</span>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md h-32 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">パートナーE社</span>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md h-32 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">パートナーF社</span>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md h-32 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">パートナーG社</span>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md h-32 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">パートナーH社</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* お問い合わせCTAセクション */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">私たちと一緒にデジタル変革を始めませんか？</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            企業のデジタル変革に関するご相談を無料で承っております。
            まずはお気軽にお問い合わせください。
          </p>
          <Link 
            href="/contact" 
            className="bg-white text-primary hover:bg-gray-100 font-medium px-8 py-4 rounded-md inline-block transition-colors text-lg"
          >
            無料相談を予約する
          </Link>
        </div>
      </section>
    </>
  );
}