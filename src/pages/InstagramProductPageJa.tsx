import { useState } from 'react'
import imgHero from '../assets/images/anh1.png'
import imgAutomationList from '../assets/images/automation_list.png'
import imgAutomation1 from '../assets/images/automation1.png'
import imgAutomation2 from '../assets/images/automation2.png'
import imgAutomation3 from '../assets/images/automation3.png'
import imgAutomation4 from '../assets/images/automation4.png'
import imgSendLinks from '../assets/images/send_links.png'
import imgReplyComments from '../assets/images/reply_to_comments.png'
import imgReplyDms from '../assets/images/reply_to_DM.png'
import imgGetFollowers from '../assets/images/get_followers.png'

type TabKey = 'send_links' | 'reply_comments' | 'reply_dms' | 'get_followers'

// このページはInstagram自動返信機能を日本語で紹介します
export default function InstagramProductPageJa() {
  const [activeTab, setActiveTab] = useState<TabKey>('send_links')
  const [previewSrc, setPreviewSrc] = useState<string | null>(null)

  // タブごとの右側パネル内容
  const IMAGE_PATHS: Record<TabKey, string> = {
    send_links: imgSendLinks,
    reply_comments: imgReplyComments,
    reply_dms: imgReplyDms,
    get_followers: imgGetFollowers,
  }

  const tabContent: Record<
    TabKey,
    { title: string; description: string; bullets: string[]; image: string }
  > = {
    send_links: {
      title: 'リンクを自動送信',
      description:
        'コメントやDMをトラフィックと売上につなげます。求められたリンクを数秒で自動送信。',
      bullets: ['投稿・リール・ストーリーのキーワードで発火', 'キャンペーン別のリンク管理', 'UTM自動付与で計測も簡単'],
      image: IMAGE_PATHS.send_links,
    },
    reply_comments: {
      title: 'コメントに自動返信',
      description:
        '会話を絶やさずアルゴリズムを後押し。公開の関心をDMへつないで成約へ。',
      bullets: ['人間らしい温かい返信', '速度制御とスマートタイミング', '自動でDMフォローアップ'],
      image: IMAGE_PATHS.reply_comments,
    },
    reply_dms: {
      title: 'DMに自動返信',
      description:
        '24時間稼働のスマート受信箱。見込み客の判定、FAQ回答、必要時のみ人に引き継ぎ。',
      bullets: ['FAQ・価格の即時回答', '質問でリードスコアリング', '人への引き継ぎもスムーズ'],
      image: IMAGE_PATHS.reply_dms,
    },
    get_followers: {
      title: '新規フォロワー獲得',
      description:
        'ウェルカムフローとインセンティブで訪問者をフォロワーに、フォロワーを顧客に。',
      bullets: ['新規フォロワーへの挨拶', 'プレゼント/クーポン/コンテンツ配布', 'ナーチャリングで信頼構築'],
      image: IMAGE_PATHS.get_followers,
    },
  }

  // タブボタン
  const TabButton = ({
    label,
    tab,
    icon,
  }: {
    label: string
    tab: TabKey
    icon: string
  }) => (
    <button
      onClick={() => setActiveTab(tab)}
      className={`w-full text-left flex items-center gap-3 px-4 py-3 rounded-lg border transition-colors ${
        activeTab === tab
          ? 'bg-orange-600 text-white border-orange-600'
          : 'bg-white text-gray-800 border-gray-200 hover:border-orange-300 hover:bg-orange-50'
      }`}
    >
      <span className="text-xl">{icon}</span>
      <span className="font-semibold">{label}</span>
    </button>
  )

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* ヒーロー（背景画像） */}
      <section
        className="relative w-full"
        style={{
          backgroundImage: `url(${imgHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              あなたのInstagramがもっとスマートに
            </h1>
            <p className="text-lg md:text-xl text-gray-100">
              リンク送信、質問対応、リード収集、成約まで自動化。日々のエンゲージを“フルタイムの仕事”から解放します。
            </p>
            <div className="mt-4 text-sm text-gray-200/90">実運用に導入済みの自動返信ソリューション</div>
          </div>
        </div>
      </section>

      {/* インタラクティブタブ */}
      <section className="w-full py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-3">
            <TabButton label="リンク送信" tab="send_links" icon="🔗" />
            <TabButton label="コメント返信" tab="reply_comments" icon="💬" />
            <TabButton label="DM返信" tab="reply_dms" icon="📥" />
            <TabButton label="フォロワー獲得" tab="get_followers" icon="⭐" />
          </div>

          <div className="bg-white rounded-xl shadow-xl border border-gray-200 p-8">
            {/* Header with icon and title */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-2xl">
                {activeTab === 'send_links' && '🔗'}
                {activeTab === 'reply_comments' && '💬'}
                {activeTab === 'reply_dms' && '📥'}
                {activeTab === 'get_followers' && '⭐'}
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">{tabContent[activeTab].title}</h3>
                <p className="text-gray-600 text-lg mt-1">{tabContent[activeTab].description}</p>
              </div>
            </div>

            {/* Content grid */}
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              {/* Left: Features list */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">主な機能:</h4>
                <ul className="space-y-3">
                  {tabContent[activeTab].bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-orange-600 text-sm font-bold">✓</span>
                      </div>
                      <span className="text-gray-700 leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: Image */}
              <div className="lg:order-last">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-4">
                  <img
                    src={tabContent[activeTab].image}
                    alt={tabContent[activeTab].title}
                    className="w-full h-auto rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </div>

            {/* Results section */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-4">
                <p className="text-gray-700 font-medium text-center">
                  <span className="text-orange-600 font-semibold">導入効果:</span> 返信速度の向上、質の高いリード増、売上への貢献
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* トリガー/メッセージ/アクション/条件 */}
      <section className="w-full py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">強力な自動化機能</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Instagramを24時間稼働のセールスマシンに変えるために必要なすべて。コーディング不要、結果だけ。
            </p>
          </div>

          <div className="space-y-12">
            {/* Triggers */}
            <div className="bg-white rounded-3xl border border-gray-200 shadow-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">スマートトリガー</h2>
                  <p className="text-gray-600 mt-2">オーディエンスとのエンゲージ機会を逃しません</p>
                </div>
                <div className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold">4種類のトリガー</div>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
                  <div className="text-3xl mb-3">💬</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">コメント（投稿）</h3>
                  <p className="text-gray-600 text-sm mb-3">投稿・リールのコメントに自動反応</p>
                  <div className="text-xs text-blue-600 font-medium">✓ アルゴリズムリーチ向上</div>
                </div>
                <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-6 border border-red-100">
                  <div className="text-3xl mb-3">🔴</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">コメント（ライブ）</h3>
                  <p className="text-gray-600 text-sm mb-3">ライブセッション中の視聴者とリアルタイム交流</p>
                  <div className="text-xs text-red-600 font-medium">✓ ライブエンゲージ向上</div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-6 border border-purple-100">
                  <div className="text-3xl mb-3">📥</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Instagramメッセージ</h3>
                  <p className="text-gray-600 text-sm mb-3">受信DM・ストーリー返信に即時対応</p>
                  <div className="text-xs text-purple-600 font-medium">✓ リード転換加速</div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100">
                  <div className="text-3xl mb-3">📸</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">コメント（ストーリー）</h3>
                  <p className="text-gray-600 text-sm mb-3">ストーリーのコメント・リアクションから開始</p>
                  <div className="text-xs text-green-600 font-medium">✓ ストーリー視聴者獲得</div>
                </div>
              </div>
            </div>

            {/* Message Types */}
            <div className="bg-white rounded-3xl border border-gray-200 shadow-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">リッチメッセージタイプ</h2>
                  <p className="text-gray-600 mt-2">訪問者を顧客に変える魅力的な会話を作成</p>
                </div>
                <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold">6種類のコンテンツ</div>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { type: 'テキスト', desc: '要点を明確に伝えるシンプルで分かりやすいメッセージ', icon: '📝' },
                  { type: 'テキスト+ボタン', desc: 'アクションとクリックを促進するインタラクティブボタン', icon: '🔘' },
                  { type: '画像', desc: '瞬時にストーリーを伝えるビジュアルコンテンツ', icon: '🖼️' },
                  { type: '動画', desc: '商品を魅力的に紹介するダイナミックな動画', icon: '🎥' },
                  { type: '音声', desc: '個人的なつながりを築く音声メッセージ', icon: '🎵' },
                  { type: 'カード', desc: '画像、タイトル、CTAボタンを含むリッチカード', icon: '🎴' },
                ].map((item) => (
                  <div key={item.type} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 border border-gray-200">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xl">{item.icon}</span>
                      <span className="font-semibold text-gray-800">{item.type}</span>
                    </div>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="bg-white rounded-3xl border border-gray-200 shadow-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">スマートアクション</h2>
                  <p className="text-gray-600 mt-2">バックグラウンドで動作するインテリジェントなアクションでワークフローを自動化</p>
                </div>
                <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">3つの基本アクション</div>
              </div>
              <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 border border-orange-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                      <span className="text-orange-600 text-xl">🏷️</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">タグを追加</h3>
                  </div>
                  <p className="text-gray-600 mb-4">オーディエンスを自動分類・セグメント化し、ターゲットフォローアップキャンペーンを実行</p>
                  <div className="text-sm text-orange-600 font-medium">✓ より良い顧客セグメンテーション</div>
                </div>
                <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-2xl p-6 border border-red-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                      <span className="text-red-600 text-xl">🗑️</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">タグを削除</h3>
                  </div>
                  <p className="text-gray-600 mb-4">オーディエンスデータをクリーンアップし、古いタグを削除して正確なターゲティングを維持</p>
                  <div className="text-sm text-red-600 font-medium">✓ よりクリーンなオーディエンスデータ</div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 text-xl">⏱️</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">遅延時間</h3>
                  </div>
                  <p className="text-gray-600 mb-4">メッセージ間に自然な間隔を追加し、ボットに見えないようにして本物の会話を維持</p>
                  <div className="text-sm text-blue-600 font-medium">✓ より人間らしいインタラクション</div>
                </div>
              </div>
            </div>

            {/* Conditions */}
            <div className="bg-white rounded-3xl border border-gray-200 shadow-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">スマート条件分岐</h2>
                  <p className="text-gray-600 mt-2">インテリジェントなフィルタリングで適切な人に適切なタイミングでターゲット</p>
                </div>
                <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold">3つのターゲティングオプション</div>
              </div>
              <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-6 border border-purple-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <span className="text-purple-600 text-xl">🏷️</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">タグで送信</h3>
                  </div>
                  <p className="text-gray-600 mb-4">ユーザーのタグに基づいて含める/除外する。VIP顧客、新規リード、スパム回避に最適</p>
                  <div className="text-sm text-purple-600 font-medium">✓ パーソナライズされた体験</div>
                </div>
                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-6 border border-indigo-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                      <span className="text-indigo-600 text-xl">👥</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">フォロワー数で送信</h3>
                  </div>
                  <p className="text-gray-600 mb-4">フォロワー数レンジに基づいてマイクロインフルエンサー、マクロインフルエンサー、一般ユーザーをターゲット</p>
                  <div className="text-sm text-indigo-600 font-medium">✓ インフルエンサーアウトリーチ</div>
                </div>
                <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-6 border border-emerald-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <span className="text-emerald-600 text-xl">⭐</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">フォロワー限定</h3>
                  </div>
                  <p className="text-gray-600 mb-4">忠実なフォロワー向けの限定コンテンツとオファー。コミュニティとのより強い関係を構築</p>
                  <div className="text-sm text-emerald-600 font-medium">✓ フォロワーリテンション</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 画像プレビュー */}
      <section className="w-full py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900">オートメーションの実例</h2>
            <p className="text-gray-600 mt-2">一覧とワークフロー（トリガー→条件→メッセージ→アクション）の流れ。</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow border border-gray-200 p-3">
              <img
                src={imgAutomationList}
                alt="Automation list"
                className="w-full h-auto rounded-lg object-cover cursor-zoom-in hover:opacity-90 transition-opacity"
                onClick={() => setPreviewSrc(imgAutomationList)}
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {[imgAutomation1, imgAutomation2, imgAutomation3, imgAutomation4].map(
                (src, i) => (
                  <div key={i} className="bg-white rounded-xl shadow border border-gray-200 p-3">
                    <img
                      src={src}
                      alt={`Automation step ${i + 1}`}
                      className="w-full h-auto rounded-lg object-cover cursor-zoom-in hover:opacity-90 transition-opacity"
                      onClick={() => setPreviewSrc(src)}
                    />
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Image preview modal */}
      {previewSrc && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
          onClick={() => setPreviewSrc(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <img
              src={previewSrc}
              alt="Preview"
              className="max-h-[90vh] w-auto rounded-lg shadow-2xl mx-auto"
            />
            <button
              onClick={() => setPreviewSrc(null)}
              className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}


