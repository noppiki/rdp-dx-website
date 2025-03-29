import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "導入事例 | 有限会社RDP DXソリューション",
  description: "有限会社RDPのDXソリューション事業部が支援した企業のデジタル変革事例をご紹介します。製造業、小売業、サービス業など業種別の導入事例です。",
};

export default function CasesPage() {
  return (
    <>
      {/* ヒーローセクション */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">導入事例</h1>
            <p className="text-xl">
              私たちがこれまでに支援してきた企業のデジタル変革事例をご紹介します。
              業種や課題別に様々な事例を掲載しています。
            </p>
          </div>
        </div>
      </section>

      {/* 事例フィルターセクション */}
      <section className="py-12 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/cases" 
              className="bg-primary text-white px-6 py-2 rounded-md"
            >
              すべて
            </Link>
            <Link 
              href="/cases?industry=manufacturing" 
              className="bg-white dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 px-6 py-2 rounded-md transition-colors"
            >
              製造業
            </Link>
            <Link 
              href="/cases?industry=retail" 
              className="bg-white dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 px-6 py-2 rounded-md transition-colors"
            >
              小売業
            </Link>
            <Link 
              href="/cases?industry=service" 
              className="bg-white dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 px-6 py-2 rounded-md transition-colors"
            >
              サービス業
            </Link>
            <Link 
              href="/cases?industry=finance" 
              className="bg-white dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 px-6 py-2 rounded-md transition-colors"
            >
              金融業
            </Link>
          </div>
        </div>
      </section>

      {/* 事例リストセクション */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* 事例1 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:translate-y-[-5px]">
              <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">事例イメージ</span>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-medium text-primary bg-primary bg-opacity-10 py-1 px-2 rounded">製造業</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">2023年実施</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">生産管理システムのクラウド移行</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  老朽化したオンプレミス生産管理システムをクラウドに移行し、リモートワーク対応と業務効率化を実現しました。
                </p>
                <div className="mb-4">
                  <span className="text-sm font-medium mr-2 mb-2 inline-block bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 py-1 px-2 rounded">システム刷新</span>
                  <span className="text-sm font-medium mr-2 mb-2 inline-block bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 py-1 px-2 rounded">クラウド移行</span>
                  <span className="text-sm font-medium mr-2 mb-2 inline-block bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 py-1 px-2 rounded">リモートワーク</span>
                </div>
                <Link 
                  href="/cases/manufacturing" 
                  className="text-primary hover:text-primary-dark font-medium inline-flex items-center transition-colors"
                >
                  詳細を見る
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* 事例2 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:translate-y-[-5px]">
              <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">事例イメージ</span>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-medium text-primary bg-primary bg-opacity-10 py-1 px-2 rounded">小売業</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">2023年実施</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">顧客データ分析基盤の構築</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  顧客データを一元管理し、購買行動分析によるパーソナライズされたマーケティング施策を実現しました。
                </p>
                <div className="mb-4">
                  <span className="text-sm font-medium mr-2 mb-2 inline-block bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 py-1 px-2 rounded">データ分析</span>
                  <span className="text-sm font-medium mr-2 mb-2 inline-block bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 py-1 px-2 rounded">マーケティング</span>
                  <span className="text-sm font-medium mr-2 mb-2 inline-block bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 py-1 px-2 rounded">顧客体験</span>
                </div>
                <Link 
                  href="/cases/retail" 
                  className="text-primary hover:text-primary-dark font-medium inline-flex items-center transition-colors"
                >
                  詳細を見る
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* 事例3 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:translate-y-[-5px]">
              <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">事例イメージ</span>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-medium text-primary bg-primary bg-opacity-10 py-1 px-2 rounded">サービス業</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">2022年実施</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">業務プロセスのデジタル化</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  紙ベースの業務プロセスをデジタル化し、作業時間の短縮とリモートワーク対応を実現しました。
                </p>
                <div className="mb-4">
                  <span className="text-sm font-medium mr-2 mb-2 inline-block bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 py-1 px-2 rounded">業務効率化</span>
                  <span className="text-sm font-medium mr-2 mb-2 inline-block bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 py-1 px-2 rounded">ペーパーレス</span>
                  <span className="text-sm font-medium mr-2 mb-2 inline-block bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 py-1 px-2 rounded">リモートワーク</span>
                </div>
                <Link 
                  href="/cases/service" 
                  className="text-primary hover:text-primary-dark font-medium inline-flex items-center transition-colors"
                >
                  詳細を見る
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* 事例4 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:translate-y-[-5px]">
              <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">事例イメージ</span>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-medium text-primary bg-primary bg-opacity-10 py-1 px-2 rounded">金融業</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">2022年実施</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">オンライン顧客対応システムの構築</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  対面中心だった顧客対応をオンライン化し、リモート相談や非対面取引を可能にしました。
                </p>
                <div className="mb-4">
                  <span className="text-sm font-medium mr-2 mb-2 inline-block bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 py-1 px-2 rounded">オンライン化</span>
                  <span className="text-sm font-medium mr-2 mb-2 inline-block bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 py-1 px-2 rounded">顧客対応</span>
                  <span className="text-sm font-medium mr-2 mb-2 inline-block bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 py-1 px-2 rounded">非対面取引</span>
                </div>
                <Link 
                  href="/cases/finance" 
                  className="text-primary hover:text-primary-dark font-medium inline-flex items-center transition-colors"
                >
                  詳細を見る
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* 事例5 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:translate-y-[-5px]">
              <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">事例イメージ</span>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-medium text-primary bg-primary bg-opacity-10 py-1 px-2 rounded">製造業</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">2021年実施</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">工場IoT化による生産性向上</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  工場の設備にIoTセンサーを導入し、リアルタイムでのデータ収集と分析により生産性を20%向上させました。
                </p>
                <div className="mb-4">
                  <span className="text-sm font-medium mr-2 mb-2 inline-block bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 py-1 px-2 rounded">IoT</span>
                  <span className="text-sm font-medium mr-2 mb-2 inline-block bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 py-1 px-2 rounded">生産性向上</span>
                  <span className="text-sm font-medium mr-2 mb-2 inline-block bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 py-1 px-2 rounded">データ分析</span>
                </div>
                <Link 
                  href="/cases/manufacturing-iot" 
                  className="text-primary hover:text-primary-dark font-medium inline-flex items-center transition-colors"
                >
                  詳細を見る
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* 事例6 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:translate-y-[-5px]">
              <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">事例イメージ</span>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-medium text-primary bg-primary bg-opacity-10 py-1 px-2 rounded">小売業</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">2021年実施</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">ECサイトリニューアルとオムニチャネル化</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  実店舗とECサイトの在庫連携や顧客データの統合により、シームレスな購買体験を実現しました。
                </p>
                <div className="mb-4">
                  <span className="text-sm font-medium mr-2 mb-2 inline-block bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 py-1 px-2 rounded">EC</span>
                  <span className="text-sm font-medium mr-2 mb-2 inline-block bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 py-1 px-2 rounded">オムニチャネル</span>
                  <span className="text-sm font-medium mr-2 mb-2 inline-block bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 py-1 px-2 rounded">顧客体験</span>
                </div>
                <Link 
                  href="/cases/retail-ec" 
                  className="text-primary hover:text-primary-dark font-medium inline-flex items-center transition-colors"
                >
                  詳細を見る
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 導入フローセクション */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">導入の流れ</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                RDP DXソリューションでは、お客様の課題解決に向けて以下のステップで支援を進めていきます。
              </p>
            </div>

            <div className="space-y-10">
              {/* ステップ1 */}
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">
                  1
                </div>
                <div className="md:flex-1">
                  <h3 className="text-xl font-bold mb-2">無料相談・ヒアリング</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    お客様の現状や課題をヒアリングし、デジタル変革の方向性について意見交換します。
                    この段階では費用は一切発生しません。
                  </p>
                </div>
              </div>
              
              {/* 矢印 */}
              <div className="flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>

              {/* ステップ2 */}
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">
                  2
                </div>
                <div className="md:flex-1">
                  <h3 className="text-xl font-bold mb-2">現状分析・提案</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    ヒアリング内容を基に、現状の分析と課題解決に向けた提案書を作成します。
                    具体的なソリューションと期待される効果、概算費用などを提示します。
                  </p>
                </div>
              </div>

              {/* 矢印 */}
              <div className="flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>

              {/* ステップ3 */}
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">
                  3
                </div>
                <div className="md:flex-1">
                  <h3 className="text-xl font-bold mb-2">プロジェクト計画・契約</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    提案内容に合意いただいた後、詳細なプロジェクト計画を策定します。
                    スケジュール、実施内容、成果物、費用などを明確にした契約を締結します。
                  </p>
                </div>
              </div>

              {/* 矢印 */}
              <div className="flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>

              {/* ステップ4 */}
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">
                  4
                </div>
                <div className="md:flex-1">
                  <h3 className="text-xl font-bold mb-2">プロジェクト実施</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    計画に基づいてプロジェクトを実施します。定期的な進捗報告や
                    課題解決のための打ち合わせを行いながら、確実に成果を出していきます。
                  </p>
                </div>
              </div>

              {/* 矢印 */}
              <div className="flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>

              {/* ステップ5 */}
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">
                  5
                </div>
                <div className="md:flex-1">
                  <h3 className="text-xl font-bold mb-2">効果測定・定着支援</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    プロジェクト完了後も効果測定や定着支援を行います。
                    必要に応じて改善提案も行い、継続的な支援を提供します。
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link 
                href="/contact" 
                className="bg-primary hover:bg-primary-dark text-white font-medium px-6 py-3 rounded-md transition-colors inline-block"
              >
                無料相談を予約する
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* お客様の声セクション */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">お客様の声</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              実際にRDP DXソリューションを利用されたお客様からいただいた声をご紹介します。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* 声1 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 relative">
              <div className="absolute top-6 left-6 text-5xl text-primary opacity-20">"</div>
              <div className="relative z-10">
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  オンプレミスだった生産管理システムのクラウド移行を支援していただきました。
                  単なる移行にとどまらず、業務改善のポイントも提案していただき、結果的に業務効率が
                  大幅に向上しました。リモートワークにも対応でき、コロナ禍でも事業を止めることなく
                  継続できたことに感謝しています。
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 dark:bg-gray-600 rounded-full mr-4"></div>
                  <div>
                    <p className="font-semibold">A社 製造部長</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">製造業</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 声2 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 relative">
              <div className="absolute top-6 left-6 text-5xl text-primary opacity-20">"</div>
              <div className="relative z-10">
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  弊社は小売業ですが、顧客データの分析・活用に課題を感じていました。
                  RDPさんの支援により、データの一元管理と分析基盤を構築でき、顧客の購買行動が
                  可視化できるようになりました。パーソナライズされたマーケティング施策を
                  実施できるようになり、売上向上に大きく貢献しています。
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 dark:bg-gray-600 rounded-full mr-4"></div>
                  <div>
                    <p className="font-semibold">B社 マーケティング責任者</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">小売業</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* お問い合わせCTAセクション */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">あなたの企業の成功事例を作りませんか？</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            デジタル変革に関するお悩みや課題をお聞かせください。
            最適なソリューションで、御社のビジネス成長をサポートします。
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