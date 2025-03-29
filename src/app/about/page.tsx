import Link from 'next/link'

export const metadata = {
  title: '会社概要 | RDP DXソリューション',
  description: 'RDP DXソリューションの会社概要、ミッション、ビジョンについてご紹介します',
}

export default function AboutPage() {
  const companyInfo = [
    { label: '会社名', value: '有限会社RDP' },
    { label: '設立', value: '2002年' },
    { label: '所在地', value: '京都府' },
    { label: '代表者', value: '尾高 俊勝' },
    { label: '事業内容', value: 'リフォーム事業、DXソリューション事業' },
    { label: 'ウェブサイト', value: 'https://rdp-reform.jp/' },
  ]

  const values = [
    {
      title: 'お客様中心',
      description: 'お客様の課題を深く理解し、真の価値を提供することを最優先に考えます。技術はあくまで手段であり、目的はお客様のビジネス成果です。'
    },
    {
      title: '実用性重視',
      description: '最新技術を追い求めるだけでなく、お客様のビジネスにとって本当に役立つソリューションを提供します。使いやすさと実用性を重視し、持続可能なデジタル変革を支援します。'
    },
    {
      title: '誠実さと透明性',
      description: 'すべてのプロジェクトにおいて、誠実かつ透明性のある対応を心がけています。課題や進捗状況を包み隠さず共有し、信頼関係を築きます。'
    },
    {
      title: '継続的な改善',
      description: '常に学び、改善し続けることで、最高品質のサービスを提供します。お客様のフィードバックを大切にし、より良いソリューションを追求し続けます。'
    }
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">会社概要</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          RDP DXソリューションは有限会社RDPのデジタルトランスフォーメーション事業部門です。
          企業のDXを支援し、デジタル時代における成長を促進します。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold mb-6 text-blue-600">私たちのミッション</h2>
          <p className="text-gray-700 mb-4">
            私たちのミッションは、テクノロジーの力を活用して企業の持続可能な成長を支援することです。
            単なるデジタル化ではなく、企業文化やビジネスモデルの変革を含めた真のデジタルトランスフォーメーションをサポートします。
          </p>
          <p className="text-gray-700">
            お客様一人ひとりに寄り添い、その業界や事業特性を深く理解した上で、最適なDXソリューションを提供することを目指しています。
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6 text-blue-600">私たちのビジョン</h2>
          <p className="text-gray-700 mb-4">
            私たちは、すべての企業がデジタル技術を効果的に活用し、イノベーションを生み出せる社会を目指しています。
            特に中小企業におけるDXの壁を低くし、規模に関わらずすべての企業がデジタルの恩恵を受けられる環境づくりに貢献します。
          </p>
          <p className="text-gray-700">
            テクノロジーの導入自体が目的ではなく、人々の仕事や生活をより豊かにするためのDXを推進していきます。
          </p>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-8 mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">会社情報</h2>
        <div className="max-w-2xl mx-auto">
          <table className="w-full">
            <tbody>
              {companyInfo.map((info, index) => (
                <tr key={index} className={index !== companyInfo.length - 1 ? 'border-b border-gray-200' : ''}>
                  <th className="py-4 px-2 text-left font-semibold text-gray-700 w-1/3">{info.label}</th>
                  <td className="py-4 px-2 text-gray-800">
                    {info.label === 'ウェブサイト' ? (
                      <a href={info.value} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        {info.value}
                      </a>
                    ) : (
                      info.value
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">私たちの価値観</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">{value.title}</h3>
              <p className="text-gray-700">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <Link href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          お問い合わせ
        </Link>
      </div>
    </div>
  )
}