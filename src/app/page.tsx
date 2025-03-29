import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* ヒーローセクション */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white pt-20 pb-32">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                企業のデジタル変革を<br />成功に導きます
              </h1>
              <p className="text-xl mb-8">
                有限会社RDPのDXソリューションは、企業が抱えるデジタル化の課題を解決し、
                業務効率化からイノベーション創出まで、トータルにサポートします。
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-accent hover:bg-opacity-90 text-white font-medium px-6 py-3 rounded-md text-center transition-colors"
                >
                  無料相談を予約する
                </Link>
                <Link
                  href="/services"
                  className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-medium px-6 py-3 rounded-md text-center transition-colors"
                >
                  サービスを見る
                </Link>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] fade-in">
              {/* ここにヒーロー画像を追加 */}
              <div className="absolute inset-0 bg-blue-500 bg-opacity-20 rounded-lg flex items-center justify-center">
                <span className="text-xl">ここにイメージ画像</span>
              </div>
            </div>
          </div>
        </div>
        {/* 装飾的な背景要素 */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-white dark:bg-gray-900 transform -skew-y-3 origin-left"></div>
      </section>

      {/* 特徴セクション */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">RDP DXソリューションの特徴</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              企業のデジタル変革を成功に導くために、私たちが大切にしている3つの特徴をご紹介します。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 特徴1 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-transform hover:translate-y-[-5px]">
              <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">戦略的アプローチ</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                デジタル変革は単なるIT導入ではありません。企業の経営戦略と密接に連携した戦略的アプローチを提供します。
              </p>
            </div>

            {/* 特徴2 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-transform hover:translate-y-[-5px]">
              <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">伴走型支援</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                プロジェクトの計画からシステム導入、定着化まで、お客様に寄り添いながら一貫して支援します。
              </p>
            </div>

            {/* 特徴3 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-transform hover:translate-y-[-5px]">
              <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">技術と業務の融合</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                最新技術の導入だけでなく、業務プロセスの改善とデジタル技術を融合させたソリューションを提供します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* サービス概要セクション */}
      <section className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">提供サービス</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              企業のデジタル変革を推進するために、私たちは包括的なサービスを提供しています。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* サービス1 */}
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">DXコンサルティング</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  現状分析からDX戦略策定、ロードマップ作成まで、企業のデジタル変革を包括的に支援します。経営戦略と連動したDX推進を実現します。
                </p>
                <Link 
                  href="/services#consulting" 
                  className="text-primary hover:text-primary-dark font-medium inline-flex items-center transition-colors"
                >
                  詳細を見る
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* サービス2 */}
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">システム開発・導入</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  業務効率化から顧客体験向上まで、目的に応じたシステム開発・導入を行います。既存システムの刷新やクラウド移行も対応可能です。
                </p>
                <Link 
                  href="/services#system" 
                  className="text-primary hover:text-primary-dark font-medium inline-flex items-center transition-colors"
                >
                  詳細を見る
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* サービス3 */}
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">データ活用支援</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  企業内に蓄積されたデータを有効活用するための基盤構築から分析、可視化まで支援します。データドリブン経営を実現します。
                </p>
                <Link 
                  href="/services#data" 
                  className="text-primary hover:text-primary-dark font-medium inline-flex items-center transition-colors"
                >
                  詳細を見る
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* サービス4 */}
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">デジタル人材育成</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  DX推進に必要な人材育成プログラムを提供します。技術スキルだけでなく、デジタルマインドセットの醸成もサポートします。
                </p>
                <Link 
                  href="/services#training" 
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

          <div className="text-center mt-12">
            <Link 
              href="/services" 
              className="bg-primary hover:bg-primary-dark text-white font-medium px-6 py-3 rounded-md inline-block transition-colors"
            >
              すべてのサービスを見る
            </Link>
          </div>
        </div>
      </section>

      {/* 事例紹介セクション */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">導入事例</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              私たちがこれまでに支援してきた企業のデジタル変革事例をご紹介します。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 事例1 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">事例イメージ</span>
              </div>
              <div className="p-6">
                <span className="text-sm font-medium text-primary bg-primary bg-opacity-10 py-1 px-2 rounded">製造業</span>
                <h3 className="text-xl font-semibold mt-3 mb-2">生産管理システムのクラウド移行</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  老朽化したオンプレミス生産管理システムをクラウドに移行し、リモートワーク対応と業務効率化を実現。
                </p>
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
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">事例イメージ</span>
              </div>
              <div className="p-6">
                <span className="text-sm font-medium text-primary bg-primary bg-opacity-10 py-1 px-2 rounded">小売業</span>
                <h3 className="text-xl font-semibold mt-3 mb-2">顧客データ分析基盤の構築</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  顧客データを一元管理し、購買行動分析によるパーソナライズされたマーケティング施策を実現。
                </p>
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
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">事例イメージ</span>
              </div>
              <div className="p-6">
                <span className="text-sm font-medium text-primary bg-primary bg-opacity-10 py-1 px-2 rounded">サービス業</span>
                <h3 className="text-xl font-semibold mt-3 mb-2">業務プロセスのデジタル化</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  紙ベースの業務プロセスをデジタル化し、作業時間の短縮とリモートワーク対応を実現。
                </p>
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
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/cases" 
              className="bg-primary hover:bg-primary-dark text-white font-medium px-6 py-3 rounded-md inline-block transition-colors"
            >
              すべての導入事例を見る
            </Link>
          </div>
        </div>
      </section>

      {/* お問い合わせCTAセクション */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">デジタル変革の第一歩を踏み出しましょう</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            お客様のビジネス課題やDXに関するご相談を無料でお受けしています。
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