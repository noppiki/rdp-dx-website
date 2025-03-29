'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="font-bold text-xl text-blue-600">RDP DXソリューション</Link>
          
          {/* モバイルメニューボタン */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
          
          {/* デスクトップナビゲーション */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-600 hover:text-blue-600">ホーム</Link>
            <Link href="/services" className="text-gray-600 hover:text-blue-600">サービス</Link>
            <Link href="/cases" className="text-gray-600 hover:text-blue-600">導入事例</Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-600">会社概要</Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-600">お問い合わせ</Link>
          </nav>
        </div>
        
        {/* モバイルナビゲーション */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-2 border-t">
            <nav className="flex flex-col space-y-3">
              <Link href="/" className="text-gray-600 hover:text-blue-600 py-1">ホーム</Link>
              <Link href="/services" className="text-gray-600 hover:text-blue-600 py-1">サービス</Link>
              <Link href="/cases" className="text-gray-600 hover:text-blue-600 py-1">導入事例</Link>
              <Link href="/about" className="text-gray-600 hover:text-blue-600 py-1">会社概要</Link>
              <Link href="/contact" className="text-gray-600 hover:text-blue-600 py-1">お問い合わせ</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
