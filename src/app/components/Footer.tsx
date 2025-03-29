'use client';

import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* 会社情報 */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">有限会社RDP</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              企業のデジタルトランスフォーメーションを支援し、業務効率化とイノベーションを促進します。
            </p>
          </div>

          {/* サービス */}
          <div>
            <h4 className="text-lg font-semibold mb-4">サービス</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services#consulting" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                  DXコンサルティング
                </Link>
              </li>
              <li>
                <Link href="/services#system" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                  システム開発
                </Link>
              </li>
              <li>
                <Link href="/services#cloud" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                  クラウド移行
                </Link>
              </li>
              <li>
                <Link href="/services#data" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                  データ分析
                </Link>
              </li>
            </ul>
          </div>

          {/* 企業情報 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">企業情報</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                  会社概要
                </Link>
              </li>
              <li>
                <Link href="/about#philosophy" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                  経営理念
                </Link>
              </li>
              <li>
                <Link href="/cases" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                  導入事例
                </Link>
              </li>
            </ul>
          </div>

          {/* お問い合わせ */}
          <div>
            <h4 className="text-lg font-semibold mb-4">お問い合わせ</h4>
            <address className="not-italic text-gray-600 dark:text-gray-400">
              <p>〒225-0015</p>
              <p>神奈川県横浜市青葉区荏田北1-2-1</p>
              <p>PLATFORM218</p>
              <p className="mt-2">Email: rdp@6330.jp</p>
            </address>
            <div className="mt-4">
              <Link 
                href="/contact" 
                className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md transition-colors inline-block"
              >
                お問い合わせ
              </Link>
            </div>
          </div>
        </div>

        {/* コピーライト */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 mt-8 text-center text-gray-600 dark:text-gray-400">
          <p>© {year} 有限会社RDP. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}