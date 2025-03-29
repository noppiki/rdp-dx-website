'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">RDP DXソリューション</h3>
            <p className="text-gray-300 mb-4">企業のデジタルトランスフォーメーションを支援します</p>
            <p className="text-gray-300">有限会社RDP</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">リンク</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-gray-300 hover:text-white">ホーム</Link>
              <Link href="/services" className="text-gray-300 hover:text-white">サービス</Link>
              <Link href="/cases" className="text-gray-300 hover:text-white">導入事例</Link>
              <Link href="/about" className="text-gray-300 hover:text-white">会社概要</Link>
              <Link href="/contact" className="text-gray-300 hover:text-white">お問い合わせ</Link>
            </nav>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">お問い合わせ</h3>
            <p className="text-gray-300 mb-2">ご質問やお問い合わせはこちらから</p>
            <Link href="/contact" className="bg-blue-600 text-white px-4 py-2 inline-block rounded hover:bg-blue-700 transition">
              お問い合わせフォーム
            </Link>
            <div className="mt-4">
              <p className="text-gray-300">会社サイト: <a href="https://rdp-reform.jp/" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">https://rdp-reform.jp/</a></p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} 有限会社RDP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
