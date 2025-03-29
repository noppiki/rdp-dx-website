import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "サービス | 有限会社RDP DXソリューション",
  description: "有限会社RDPのDXソリューション事業部が提供するDXコンサルティング、システム開発、クラウド移行、データ分析などのサービスをご紹介します。",
};

export default function ServicesPage() {
  return (
    <>
      {/* ヒーローセクション */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">サービス</h1>
            <p className="text-xl">
              企業のデジタル変革を実現するために、RDP DXソリューションが提供する各種サービスをご紹介します。
            </p>
          </div>
        </div>
      </section>

      {/* 概要セクション */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">包括的なDXサポート</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              DXは単なるIT導入ではなく、企業文化や業務プロセスの変革を含む包括的な取り組みです。
              私たちはお客様のビジネス課題を深く理解し、最適なソリューションを提供します。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="h-[300px] bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-400">サービス概要イメージ</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">なぜDXが必要なのか</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                デジタル技術の急速な進化により、ビジネス環境は劇的に変化しています。こうした変化に対応し、
                競争力を維持・強化するためにDXは不可欠です。しかし、多くの企業がDX推進に課題を抱えています。
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-600 dark:text-gray-400">既存システムの老朽化による業務効率の低下</p>
                </div>
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-600 dark:text-gray-400">デジタル人材の不足</p>
                </div>
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-600 dark:text-gray-400">データ活用の遅れによる機会損失</p>
                </div>
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-600 dark:text-gray-400">デジタル変革に対する社内の抵抗感</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/contact"
              className="bg-primary hover:bg-primary-dark text-white font-medium px-6 py-3 rounded-md transition-colors inline-block"
            >
              無料相談を予約する
            </Link>
          </div>
        </div>
      </section>

      {/* サービス詳細セクション */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">提供サービス</h2>

          {/* DXコンサルティング */}
          <div id="consulting" className="max-w-5xl mx-auto bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden mb-12">
            <div className="md:flex">
              <div className="md:w-2/5 h-[250px] md:h-auto bg-gray-200 dark:bg-gray-600 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">コンサルティングイメージ</span>
              </div>
              <div className="md:w-3/5 p-8">
                <h3 className="text-2xl font-bold mb-4">DXコンサルティング</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  企業のデジタル変革を成功に導くためには、明確な戦略と実行計画が不可欠です。
                  私たちは、現状分析からDX戦略策定、ロードマップ作成まで、企業のデジタル変革を包括的に支援します。
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-primary font-semibold mr-2">01.</span>
                    <div>
                      <h4 className="font-semibold">DX診断・現状分析</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        企業のデジタル成熟度を診断し、課題と機会を特定します。
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-primary font-semibold mr-2">02.</span>
                    <div>
                      <h4 className="font-semibold">DX戦略策定</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        経営戦略と連動したDX戦略を策定し、KPIを設定します。
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-primary font-semibold mr-2">03.</span>
                    <div>
                      <h4 className="font-semibold">DXロードマップ作成</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        短期・中期・長期の実行計画を策定し、具体的な施策を提案します。
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-primary font-semibold mr-2">04.</span>
                    <div>
                      <h4 className="font-semibold">変革マネジメント支援</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        組織文化の変革や社内の抵抗感を軽減するための施策を提案します。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* システム開発・導入 */}
          <div id="system" className="max-w-5xl mx-auto bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden mb-12">
            <div className="md:flex flex-row-reverse">
              <div className="md:w-2/5 h-[250px] md:h-auto bg-gray-200 dark:bg-gray-600 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">システム開発イメージ</span>
              </div>
              <div className="md:w-3/5 p-8">
                <h3 className="text-2xl font-bold mb-4">システム開発・導入</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  業務効率化から顧客体験向上まで、目的に応じたシステム開発・導入を行います。
                  既存システムの刷新やクラウド移行も対応可能です。
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-primary font-semibold mr-2">01.</span>
                    <div>
                      <h4 className="font-semibold">業務システム開発</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        業務効率化を実現する基幹システムや業務アプリケーションを開発します。
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-primary font-semibold mr-2">02.</span>
                    <div>
                      <h4 className="font-semibold">クラウド移行</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        オンプレミスシステムのクラウド移行を支援し、コスト削減と柔軟性向上を実現します。
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-primary font-semibold mr-2">03.</span>
                    <div>
                      <h4 className="font-semibold">システム連携・API開発</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        異なるシステム間の連携やAPIの開発により、データの一元管理を実現します。
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-primary font-semibold mr-2">04.</span>
                    <div>
                      <h4 className="font-semibold">モバイルアプリ開発</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        社内業務や顧客向けのモバイルアプリケーションを開発します。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* データ活用支援 */}
          <div id="data" className="max-w-5xl mx-auto bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden mb-12">
            <div className="md:flex">
              <div className="md:w-2/5 h-[250px] md:h-auto bg-gray-200 dark:bg-gray-600 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">データ分析イメージ</span>
              </div>
              <div className="md:w-3/5 p-8">
                <h3 className="text-2xl font-bold mb-4">データ活用支援</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  企業内に蓄積されたデータを有効活用するための基盤構築から分析、可視化まで支援します。
                  データドリブン経営を実現します。
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-primary font-semibold mr-2">01.</span>
                    <div>
                      <h4 className="font-semibold">データ基盤構築</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        散在するデータを一元管理するためのデータ基盤を構築します。
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-primary font-semibold mr-2">02.</span>
                    <div>
                      <h4 className="font-semibold">データ分析・BI導入</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        ビジネスインテリジェンスツールを導入し、データの可視化と分析を支援します。
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-primary font-semibold mr-2">03.</span>
                    <div>
                      <h4 className="font-semibold">AI・機械学習の活用</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        AIや機械学習を活用した予測分析や自動化を実現します。
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-primary font-semibold mr-2">04.</span>
                    <div>
                      <h4 className="font-semibold">データ活用ワークショップ</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        データを活用したビジネス課題の解決方法を探るワークショップを実施します。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* デジタル人材育成 */}
          <div id="training" className="max-w-5xl mx-auto bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden">
            <div className="md:flex flex-row-reverse">
              <div className="md:w-2/5 h-[250px] md:h-auto bg-gray-200 dark:bg-gray-600 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">人材育成イメージ</span>
              </div>
              <div className="md:w-3/5 p-8">
                <h3 className="text-2xl font-bold mb-4">デジタル人材育成</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  DX推進に必要な人材育成プログラムを提供します。技術スキルだけでなく、
                  デジタルマインドセットの醸成もサポートします。
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-primary font-semibold mr-2">01.</span>
                    <div>
                      <h4 className="font-semibold">DX研修プログラム</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        経営層からIT部門まで、階層別のDX研修プログラムを提供します。
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-primary font-semibold mr-2">02.</span>
                    <div>
                      <h4 className="font-semibold">デジタルリテラシー向上</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        全社員のデジタルリテラシー向上を目的とした研修を実施します。
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-primary font-semibold mr-2">03.</span>
                    <div>
                      <h4 className="font-semibold">DX推進リーダー育成</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        社内のDX推進をけん引するリーダーを育成するプログラムを提供します。
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-primary font-semibold mr-2">04.</span>
                    <div>
                      <h4 className="font-semibold">デジタル人材採用支援</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        DX推進に必要な人材の採用計画策定から採用活動まで支援します。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 料金プランセクション */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">料金プラン</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              お客様のニーズや予算に合わせて、柔軟な料金プランをご用意しています。
              まずはお気軽にご相談ください。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* スポットプラン */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 transition-transform hover:translate-y-[-5px]">
              <div className="p-6">
                <h3 className="text-xl font-bold text-center mb-4">スポットプラン</h3>
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold">要お見積り</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">単発のコンサルティング</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">小規模システム開発</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">単発の研修プログラム</span>
                  </li>
                </ul>
                <div className="text-center">
                  <Link 
                    href="/contact?plan=spot" 
                    className="bg-primary hover:bg-primary-dark text-white font-medium px-6 py-2 rounded-md transition-colors inline-block w-full"
                  >
                    お問い合わせ
                  </Link>
                </div>
              </div>
            </div>

            {/* ベーシックプラン */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border-2 border-primary transition-transform hover:translate-y-[-5px] relative">
              <div className="absolute top-0 right-0 bg-primary text-white py-1 px-4 text-sm font-semibold">
                おすすめ
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-center mb-4">ベーシックプラン</h3>
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold">月額20万円〜</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">月次コンサルティング</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">システム保守・運用</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">定期的な研修プログラム</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">DX推進支援</span>
                  </li>
                </ul>
                <div className="text-center">
                  <Link 
                    href="/contact?plan=basic" 
                    className="bg-primary hover:bg-primary-dark text-white font-medium px-6 py-2 rounded-md transition-colors inline-block w-full"
                  >
                    お問い合わせ
                  </Link>
                </div>
              </div>
            </div>

            {/* エンタープライズプラン */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 transition-transform hover:translate-y-[-5px]">
              <div className="p-6">
                <h3 className="text-xl font-bold text-center mb-4">エンタープライズプラン</h3>
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold">月額50万円〜</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">専任コンサルタントの配置</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">大規模システム開発・運用</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">全社的なDX推進支援</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">データ分析・AI活用支援</span>
                  </li>
                </ul>
                <div className="text-center">
                  <Link 
                    href="/contact?plan=enterprise" 
                    className="bg-primary hover:bg-primary-dark text-white font-medium px-6 py-2 rounded-md transition-colors inline-block w-full"
                  >
                    お問い合わせ
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* よくある質問セクション */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">よくある質問</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              サービスについてのよくある質問をまとめました。その他のご質問は
              お気軽にお問い合わせください。
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">DX推進にはどのくらいの期間が必要ですか？</h3>
              <p className="text-gray-600 dark:text-gray-300">
                企業の規模や現状によって異なりますが、一般的に短期（3〜6ヶ月）の成果創出から中長期（1〜3年）の本格的な変革まで段階的に進めることをお勧めしています。まずは現状診断から始め、短期的な成果を出しながら中長期的な変革を進めていくアプローチが効果的です。
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">小規模な会社でもDXは必要ですか？</h3>
              <p className="text-gray-600 dark:text-gray-300">
                はい、企業規模に関わらずDXは重要です。特に小規模企業はリソースが限られているからこそ、デジタル技術を活用した業務効率化や新たな顧客価値の創出が競争力強化につながります。規模に合わせた適切なアプローチをご提案いたします。
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">DX推進に必要な社内体制はどのようなものですか？</h3>
              <p className="text-gray-600 dark:text-gray-300">
                理想的には、経営層のコミットメントと専任のDX推進チームの設置が効果的です。ただし、初期段階では兼任のプロジェクトチームから始め、徐々に体制を整えていくアプローチも可能です。当社のコンサルタントが御社の状況に応じた最適な体制づくりをサポートします。
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">システム開発の費用はどのくらいかかりますか？</h3>
              <p className="text-gray-600 dark:text-gray-300">
                システムの規模や複雑さによって大きく異なります。小規模なシステムであれば数百万円から、大規模なシステムでは数千万円以上になることもあります。まずは無料相談で御社のニーズをお聞かせください。具体的な要件に基づいてお見積りを作成いたします。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* お問い合わせCTAセクション */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">お客様のDX推進をサポートします</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            まずは無料相談で、お客様のビジネス課題やDXに関するお悩みをお聞かせください。
            専門コンサルタントが最適なソリューションをご提案いたします。
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