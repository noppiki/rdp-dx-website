import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'サービス | RDP DXソリューション',
  description: 'RDP DXソリューションが提供するサービスのご紹介',
}

export default function ServicesPage() {
  const services = [
    {
      title: '業務効率化ソリューション',
      description: '既存の業務プロセスを分析し、無駄を省き、デジタル化によって効率を高めます。ペーパーレス化、自動化、クラウド化など、お客様のニーズに合わせた最適な効率化を提案します。',
      features: [
        'ビジネスプロセス分析と改善',
        'ワークフロー自動化',
        'クラウドサービス導入サポート',
        'ペーパーレスソリューション'
      ]
    },
    {
      title: 'カスタムシステム開発',
      description: '汎用ソフトウェアでは解決できない課題に対して、オーダーメイドのシステムを開発します。使いやすさと拡張性を重視し、お客様の業務にぴったり合うシステムを構築します。',
      features: [
        'ウェブアプリケーション開発',
        'モバイルアプリケーション開発',
        'データベース設計と実装',
        'API開発とシステム連携'
      ]
    },
    {
      title: 'DX戦略コンサルティング',
      description: 'デジタル技術を活用して新たなビジネス価値を創出するための戦略立案をサポートします。業界動向や技術トレンドを踏まえた実践的なアドバイスを提供します。',
      features: [
        'デジタル成熟度評価',
        'DXロードマップ策定',
        'テクノロジー選定アドバイス',
        '変革マネジメントサポート'
      ]
    },
    {
      title: 'データ活用支援',
      description: '蓄積されたデータを分析し、経営判断や業務改善に活かすためのサポートを行います。データの収集から分析、可視化まで一貫してサポートします。',
      features: [
        'データ分析基盤構築',
        'BIツール導入と活用支援',
        'データ可視化ダッシュボード作成',
        'データ駆動型意思決定支援'
      ]
    },
    {
      title: 'クラウド移行サポート',
      description: 'オンプレミスのシステムをクラウドへ移行し、コスト削減や柔軟性向上を実現します。セキュリティを確保しながら、最適なクラウド環境を構築します。',
      features: [
        'クラウド移行アセスメント',
        'マイグレーション計画と実行',
        'クラウド環境最適化',
        'ハイブリッドクラウド設計'
      ]
    },
    {
      title: 'デジタルマーケティング支援',
      description: 'オンライン上での顧客接点を強化し、効果的なデジタルマーケティングを実現します。データに基づいたアプローチで成果を最大化します。',
      features: [
        'デジタルマーケティング戦略立案',
        'マーケティングオートメーション導入',
        'ウェブサイト分析と改善',
        'オンラインカスタマージャーニー設計'
      ]
    }
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">サービス</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          RDP DXソリューションでは、企業のデジタルトランスフォーメーションを
          実現するための様々なサービスを提供しています。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-blue-600">{service.title}</h2>
              <p className="text-gray-700 mb-6">{service.description}</p>
              <h3 className="font-semibold text-lg mb-3">主な特徴</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 rounded-lg p-8 mb-12">
        <h2 className="text-3xl font-bold text-center mb-6">お客様に合わせたソリューション</h2>
        <p className="text-center text-lg text-gray-700 mb-8">
          業種や規模に関わらず、お客様の課題やニーズに合わせた最適なDXソリューションを提供します。
          まずはお気軽にご相談ください。
        </p>
        <div className="text-center">
          <Link href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            無料相談を申し込む
          </Link>
        </div>
      </div>
    </div>
  )
}