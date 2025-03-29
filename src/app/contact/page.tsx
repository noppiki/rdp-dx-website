'use client';

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

// メタデータは別ファイルに分離する必要があります
// クライアントコンポーネント内では直接メタデータを宣言できないため

function ContactForm() {
  const searchParams = useSearchParams();
  const planParam = searchParams?.get('plan') || '';
  
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    inquiry_type: planParam || '',
    message: '',
    privacy_policy: false,
  });
  
  const [errors, setErrors] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    inquiry_type: '',
    message: '',
    privacy_policy: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      company: '',
      name: '',
      email: '',
      phone: '',
      inquiry_type: '',
      message: '',
      privacy_policy: '',
    };
    
    if (!formData.company.trim()) {
      newErrors.company = '会社名を入力してください';
      isValid = false;
    }
    
    if (!formData.name.trim()) {
      newErrors.name = 'お名前を入力してください';
      isValid = false;
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'メールアドレスを入力してください';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = '有効なメールアドレスを入力してください';
      isValid = false;
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = '電話番号を入力してください';
      isValid = false;
    } else if (!/^[0-9-+() ]+$/.test(formData.phone)) {
      newErrors.phone = '有効な電話番号を入力してください';
      isValid = false;
    }
    
    if (!formData.inquiry_type) {
      newErrors.inquiry_type = 'お問い合わせ種別を選択してください';
      isValid = false;
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'お問い合わせ内容を入力してください';
      isValid = false;
    }
    
    if (!formData.privacy_policy) {
      newErrors.privacy_policy = 'プライバシーポリシーに同意してください';
      isValid = false;
    }
    
    setErrors(newErrors);
    return isValid;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    const fieldName = name as keyof typeof formData;
    
    setFormData({
      ...formData,
      [fieldName]: type === 'checkbox' ? checked : value,
    });
    
    // エラーメッセージをクリア
    if (errors[fieldName as keyof typeof errors]) {
      setErrors({
        ...errors,
        [fieldName]: '',
      });
    }
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // ここで実際のフォーム送信処理を行う（今回はモックとして setTimeout を使用）
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // フォームをリセット
      setFormData({
        company: '',
        name: '',
        email: '',
        phone: '',
        inquiry_type: '',
        message: '',
        privacy_policy: false,
      });
    }, 1500);
  };
  
  return (
    <>
      {/* ヒーローセクション */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">お問い合わせ</h1>
            <p className="text-xl">
              デジタル変革に関するご相談やお見積もり依頼など、
              お気軽にお問い合わせください。
            </p>
          </div>
        </div>
      </section>

      {/* お問い合わせフォームセクション */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {isSubmitted ? (
              // 送信完了メッセージ
              <div className="bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-700 rounded-lg p-8 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-500 mx-auto mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <h2 className="text-2xl font-bold mb-4">お問い合わせを受け付けました</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  ご入力いただいたメールアドレス宛に確認メールをお送りしております。
                  内容を確認の上、担当者より折り返しご連絡いたします。
                </p>
                <Link 
                  href="/" 
                  className="bg-primary hover:bg-primary-dark text-white font-medium px-6 py-3 rounded-md transition-colors inline-block"
                >
                  トップページに戻る
                </Link>
              </div>
            ) : (
              // お問い合わせフォーム
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold mb-6">お問い合わせフォーム</h2>
                <form onSubmit={handleSubmit}>
                  {/* 会社名 */}
                  <div className="mb-6">
                    <label htmlFor="company" className="block mb-2 font-medium">
                      会社名 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:border-gray-600 ${
                        errors.company ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-600'
                      }`}
                    />
                    {errors.company && (
                      <p className="mt-1 text-sm text-red-500">{errors.company}</p>
                    )}
                  </div>

                  {/* お名前 */}
                  <div className="mb-6">
                    <label htmlFor="name" className="block mb-2 font-medium">
                      お名前 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:border-gray-600 ${
                        errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-600'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>

                  {/* メールアドレス */}
                  <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 font-medium">
                      メールアドレス <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:border-gray-600 ${
                        errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-600'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                    )}
                  </div>

                  {/* 電話番号 */}
                  <div className="mb-6">
                    <label htmlFor="phone" className="block mb-2 font-medium">
                      電話番号 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:border-gray-600 ${
                        errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-600'
                      }`}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                    )}
                  </div>

                  {/* お問い合わせ種別 */}
                  <div className="mb-6">
                    <label htmlFor="inquiry_type" className="block mb-2 font-medium">
                      お問い合わせ種別 <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="inquiry_type"
                      name="inquiry_type"
                      value={formData.inquiry_type}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:border-gray-600 ${
                        errors.inquiry_type ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-600'
                      }`}
                    >
                      <option value="">選択してください</option>
                      <option value="spot">スポットプラン</option>
                      <option value="basic">ベーシックプラン</option>
                      <option value="enterprise">エンタープライズプラン</option>
                      <option value="consultation">無料相談</option>
                      <option value="estimate">お見積もり依頼</option>
                      <option value="other">その他</option>
                    </select>
                    {errors.inquiry_type && (
                      <p className="mt-1 text-sm text-red-500">{errors.inquiry_type}</p>
                    )}
                  </div>

                  {/* お問い合わせ内容 */}
                  <div className="mb-6">
                    <label htmlFor="message" className="block mb-2 font-medium">
                      お問い合わせ内容 <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:border-gray-600 ${
                        errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-600'
                      }`}
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                    )}
                  </div>

                  {/* プライバシーポリシー同意 */}
                  <div className="mb-8">
                    <div className={`flex items-start ${errors.privacy_policy ? 'text-red-500' : ''}`}>
                      <input
                        type="checkbox"
                        id="privacy_policy"
                        name="privacy_policy"
                        checked={formData.privacy_policy}
                        onChange={handleChange}
                        className="mt-1 mr-2"
                      />
                      <label htmlFor="privacy_policy" className="text-sm">
                        <Link href="/privacy-policy" className="text-primary hover:underline">
                          プライバシーポリシー
                        </Link>
                        に同意します <span className="text-red-500">*</span>
                      </label>
                    </div>
                    {errors.privacy_policy && (
                      <p className="mt-1 text-sm text-red-500">{errors.privacy_policy}</p>
                    )}
                  </div>

                  {/* 送信ボタン */}
                  <div className="text-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`bg-primary hover:bg-primary-dark text-white font-medium px-8 py-3 rounded-md transition-colors ${
                        isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                      }`}
                    >
                      {isSubmitting ? '送信中...' : '送信する'}
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* お問い合わせ情報 */}
            <div className="mt-12 bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6">お問い合わせ先</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">本社</h3>
                  <address className="not-italic text-gray-600 dark:text-gray-400">
                    <p>〒225-0015</p>
                    <p className="mb-4">神奈川県横浜市青葉区荏田北1-2-1 PLATFORM218</p>
                    <p className="mt-4">Email: rdp@6330.jp</p>
                  </address>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-4">営業時間</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">平日 9:00〜18:00</p>
                  <p className="text-gray-600 dark:text-gray-400">
                    ※土日祝日、年末年始（12/29〜1/3）は休業
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ セクション */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">よくある質問</h2>

            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-3">初回相談は無料ですか？</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  はい、初回のご相談は無料で承っております。お客様の現状や課題をヒアリングし、
                  デジタル変革の方向性について意見交換いたします。お気軽にお問い合わせください。
                </p>
              </div>

              <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-3">対応エリアはどこまでですか？</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  基本的には全国対応しております。オンラインでのミーティングも可能です。
                  また、一部サービスはリモートで提供することも可能ですので、ご相談ください。
                </p>
              </div>

              <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-3">相談から実際の支援開始までどのくらいかかりますか？</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  初回相談後、1〜2週間程度で提案書をご提出いたします。その後、契約締結を経て、
                  通常は契約後2週間〜1ヶ月程度でプロジェクトを開始いたします。
                  ただし、お客様のご要望や案件の規模によって異なる場合もございます。
                </p>
              </div>

              <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-3">小規模な会社でも対応してもらえますか？</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  はい、企業規模に関わらず対応しております。特に小規模企業向けのプランもご用意しており、
                  予算や規模に合わせた最適なソリューションをご提案いたします。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="container mx-auto px-4 py-20 text-center">Loading...</div>}>
      <ContactForm />
    </Suspense>
  );
}