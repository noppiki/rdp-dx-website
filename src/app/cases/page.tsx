import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: '導入事例 | RDP DXソリューション',
  description: 'RDP DXソリューションの導入事例をご紹介します',
}

export default function CasesPage() {
  const caseStudies = [
    {
      industry: '製造業',
      title: '生産管理システムの刷新による生産性向上',
      challenge: '老朽化した生産管理システムにより、データの入力や集計に多くの時間がかかり、リアルタイムな状況把握が困難でした。',
      solution: 'クラウドベースの新生産管理システムを開発・導入。モバイル端末からのデータ入力も可能にし、生産状況をリアルタイムに可視化できるダッシュボードを実装しました。',
      result: '作業効率が30%向上し、リアルタイムなデータに基づく迅速な意思決定が可能になりました。また、在庫の最適化により在庫コストを15%削減することに成功しました。',
    },
    {
      industry: '小売業',
      title: 'オムニチャネル戦略の実現によるCX向上',
      challenge: '実店舗とECサイトが別々のシステムで管理されており、顧客体験が分断されていました。在庫情報も連携しておらず、販売機会の損失が課題でした。',
      solution: '実店舗とECサイトを統合する顧客管理・在庫管理システムを構築。顧客はどのチャネルからでも同じサービスを受けられる環境を整備しました。',
      result: 'クロスチャネルでの購入が25%増加し、顧客満足度スコアが15ポイント向上しました。また、在庫の一元管理により欠品率が60%減少しました。',
    },
    {
      industry: 'サービス業',
      title: '予約・顧客管理システムのDX推進',
      challenge: '電話やFAXでの予約受付が主流で、スタッフの業務負荷が高く、顧客からも予約の取りづらさが指摘されていました。',
      solution: 'オンライン予約システムを開発し、顧客自身がWebやモバイルから24時間予約可能な環境を構築。あわせて顧客データベースを整備し、マーケティングにも活用できるようにしました。',
      result: '予約受付業務の工数が70%削減され、顧客満足度が向上。データを活用したターゲットマーケティングにより、リピート率が15%向上しました。',
    },
    {
      industry: '医療・福祉',
      title: '介護記録デジタル化による業務効率化',
      challenge: '紙ベースでの介護記録により、情報共有に時間がかかり、記録作成や集計にも多くの時間を要していました。',
      solution: 'タブレットで入力できる介護記録システムを導入。音声入力にも対応し、スタッフの負担を軽減。データはクラウドで共有され、必要な情報にすぐにアクセスできる環境を構築しました。',
      result: '記録作業の時間が50%短縮され、スタッフが利用者と関わる時間が増加。データの分析により、サービス品質の向上にもつながっています。',
    },
    {
      industry: '建設業',
      title: '現場管理のデジタル化による効率向上',
      challenge: '現場の進捗管理や安全確認が紙の報告書ベースで行われており、リアルタイムな状況把握や迅速な対応が難しい状況でした。',
      solution: 'モバイルアプリを活用した現場管理システムを導入。写真や動画も含めたリアルタイムな現場報告が可能になり、本社からも現場の状況を即時に確認できるようになりました。',
      result: '現場と本社の情報共有がスムーズになり、問題発生時の対応時間が60%短縮。安全管理の徹底により、インシデント発生率も25%低減しました。',
    }
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">導入事例</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          さまざまな業種のお客様におけるDXの取り組みをご紹介します。
          それぞれのビジネス課題に対して、どのようなソリューションを提供し、
          どのような成果を上げたのかをご覧ください。
        </p>
      </div>

      <div className="space-y-12 mb-16">
        {caseStudies.map((caseStudy, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-8">
              <div className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
                {caseStudy.industry}
              </div>
              <h2 className="text-2xl font-bold mb-4">{caseStudy.title}</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div>
                  <h3 className="font-bold text-lg mb-2 text-gray-800">課題</h3>
                  <p className="text-gray-700">{caseStudy.challenge}</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-gray-800">ソリューション</h3>
                  <p className="text-gray-700">{caseStudy.solution}</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-gray-800">成果</h3>
                  <p className="text-gray-700">{caseStudy.result}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">お客様のDXを成功に導きます</h2>
        <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
          これらは当社が支援したDX事例の一部です。
          お客様固有の課題や目標に合わせたソリューションを提供いたします。
          まずはお気軽にご相談ください。
        </p>
        <Link href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          無料相談を申し込む
        </Link>
      </div>
    </div>
  )
}