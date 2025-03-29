'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // スクロール時にヘッダーの背景を変更
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 現在のパスとリンクのパスを比較してactiveクラスを付与
  const isActive = (path: string) => pathname === path;

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white bg-opacity-90 dark:bg-gray-900 dark:bg-opacity-90 shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* ロゴ */}
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold text-primary">RDP</span>
          <span className="ml-2 text-lg font-semibold">DXソリューション</span>
        </Link>

        {/* デスクトップナビゲーション */}
        <nav className="hidden md:flex space-x-8 items-center">
          <Link href="/" className={`nav-link font-medium hover:text-primary transition-colors ${isActive('/') ? 'active' : ''}`}>
            ホーム
          </Link>
          <Link href="/services" className={`nav-link font-medium hover:text-primary transition-colors ${isActive('/services') ? 'active' : ''}`}>
            サービス
          </Link>
          <Link href="/cases" className={`nav-link font-medium hover:text-primary transition-colors ${isActive('/cases') ? 'active' : ''}`}>
            導入事例
          </Link>
          <Link href="/about" className={`nav-link font-medium hover:text-primary transition-colors ${isActive('/about') ? 'active' : ''}`}>
            会社概要
          </Link>
          <Link 
            href="/contact" 
            className="bg-primary hover:bg-primary-dark text-white px-5 py-2 rounded-md transition-colors ml-2"
          >
            お問い合わせ
          </Link>
        </nav>

        {/* モバイルメニューボタン */}
        <button 
          className="md:hidden flex items-center" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="メニューを開く"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            className="w-6 h-6"
          >
            {isMenuOpen ? (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            ) : (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            )}
          </svg>
        </button>
      </div>

      {/* モバイルメニュー */}
      <div 
        className={`md:hidden absolute w-full bg-white dark:bg-gray-900 shadow-lg transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-[-100%] opacity-0'
        }`}
      >
        <nav className="container mx-auto px-4 py-3 flex flex-col space-y-4">
          <Link 
            href="/" 
            className={`py-2 ${isActive('/') ? 'text-primary font-semibold' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            ホーム
          </Link>
          <Link 
            href="/services" 
            className={`py-2 ${isActive('/services') ? 'text-primary font-semibold' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            サービス
          </Link>
          <Link 
            href="/cases" 
            className={`py-2 ${isActive('/cases') ? 'text-primary font-semibold' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            導入事例
          </Link>
          <Link 
            href="/about" 
            className={`py-2 ${isActive('/about') ? 'text-primary font-semibold' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            会社概要
          </Link>
          <Link 
            href="/contact" 
            className="bg-primary text-white py-2 px-4 rounded-md text-center my-2"
            onClick={() => setIsMenuOpen(false)}
          >
            お問い合わせ
          </Link>
        </nav>
      </div>
    </header>
  );
}