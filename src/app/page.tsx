import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center py-16">
        <h1 className="text-4xl font-bold mb-6">RDP DXソリューション</h1>
        <p className="text-xl mb-8">企業のデジタルトランスフォーメーションを支援します</p>
        <Link href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          お問い合わせ
        </Link>
      </section>

      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-8">私たちのサービス</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">業務効率化</h3>
            <p className="text-gray-700">既存の業務プロセスを分析し、最適なデジタルソリューションで効率化します。</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">システム開発</h3>
            <p className="text-gray-700">お客様のニーズに合わせたカスタムシステムを開発します。</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">DX戦略立案</h3>
            <p className="text-gray-700">デジタル時代に適応するための戦略立案をサポートします。</p>
          </div>
        </div>
        <div className="text-center mt-8">
          <Link href="/services" className="text-blue-600 hover:underline">
            全てのサービスを見る →
          </Link>
        </div>
      </section>

      <section className="py-12 bg-gray-50 rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-8">選ばれる理由</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-start">
            <div className="mr-4 text-blue-600 text-2xl font-bold">01</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">豊富な実績</h3>
              <p className="text-gray-700">多様な業種での導入実績があります。</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="mr-4 text-blue-600 text-2xl font-bold">02</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">ユーザー視点</h3>
              <p className="text-gray-700">実際のユーザーの視点に立ったソリューション提案を行います。</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="mr-4 text-blue-600 text-2xl font-bold">03</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">継続的サポート</h3>
              <p className="text-gray-700">導入後も継続的なサポートとアップデートを提供します。</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="mr-4 text-blue-600 text-2xl font-bold">04</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">カスタマイズ性</h3>
              <p className="text-gray-700">お客様のニーズに合わせた柔軟なカスタマイズが可能です。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-8">お問い合わせ</h2>
        <p className="text-center mb-6">DXに関するご相談は、お気軽にお問い合わせください。</p>
        <div className="text-center">
          <Link href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            お問い合わせフォーム
          </Link>
        </div>
      </section>
    </div>
  )
}
