import { useState } from 'react'
import imgHero from '../assets/images/anh1.png'
import imgAutomationList from '../assets/images/automation_list.png'
import imgSendLinks from '../assets/images/send_links.png'
import imgReplyComments from '../assets/images/reply_to_comments.png'
import imgReplyDms from '../assets/images/reply_to_DM.png'
import imgGetFollowers from '../assets/images/get_followers.png'
import imgAutomation1 from '../assets/images/automation1.png'
import imgAutomation2 from '../assets/images/automation2.png'
import imgAutomation3 from '../assets/images/automation3.png'
import imgAutomation4 from '../assets/images/automation4.png'

type TabKey = 'send_links' | 'reply_comments' | 'reply_dms' | 'get_followers'

// This page showcases Instagram automation features with an interactive tab panel
export default function InstagramProductPage() {
  const [activeTab, setActiveTab] = useState<TabKey>('send_links')
  const [previewSrc, setPreviewSrc] = useState<string | null>(null)

  // This content map drives the right-hand panel based on selected tab
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
      title: 'Send links automatically',
      description:
        'Convert comments and DMs into traffic and sales. Deliver the exact link in seconds—no manual copy/paste.',
      bullets: [
        'Keyword triggers on posts, reels, and stories',
        'Unique links per campaign for tracking conversions',
        'UTM auto-append for analytics-ready reporting',
      ],
      image: IMAGE_PATHS.send_links,
    },
    reply_comments: {
      title: 'Reply to comments',
      description:
        'Keep conversations alive and kickstart the algorithm. Turn public interest into private chats that convert.',
      bullets: [
        'Auto-reply with warm, human-like messages',
        'Throttle and smart timing to stay compliant',
        'Optional DM follow-up to continue the conversation',
      ],
      image: IMAGE_PATHS.reply_comments,
    },
    reply_dms: {
      title: 'Reply to DMs',
      description:
        '24/7 smart inbox that never sleeps. Qualify leads, answer FAQs, and escalate to humans only when needed.',
      bullets: [
        'Fast answers for FAQs and price requests',
        'Lead qualification with custom questions',
        'Seamless human handoff with notes and context',
      ],
      image: IMAGE_PATHS.reply_dms,
    },
    get_followers: {
      title: 'Get new followers',
      description:
        'Welcome flows and incentives that turn visitors into followers—and followers into customers.',
      bullets: [
        'Welcome messages for new followers',
        'Giveaways, coupon delivery, and content unlocks',
        'Nurture sequences to build trust over time',
      ],
      image: IMAGE_PATHS.get_followers,
    },
  }

  // This helper renders a tab button with active state styles
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
      {/* Hero with background image */}
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
              Your Instagram just got smarter
            </h1>
            <p className="text-lg md:text-xl text-gray-100">
              Send links, answer questions, collect leads, and close sales automatically — stop
              treating engagement like a full-time job. Built by a team that has shipped real
              Instagram auto-replies at scale.
            </p>
            <div className="mt-4 text-sm text-gray-200/90">
              Trusted by creators, online shops, and agencies
            </div>
          </div>
        </div>
      </section>

      {/* Interactive tab section */}
      <section className="w-full py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-8 items-start">
          {/* Left: tabs */}
          <div className="space-y-3">
            <TabButton label="Send links" tab="send_links" icon="🔗" />
            <TabButton label="Reply to comments" tab="reply_comments" icon="💬" />
            <TabButton label="Reply to DMs" tab="reply_dms" icon="📥" />
            <TabButton label="Get new followers" tab="get_followers" icon="⭐" />
          </div>

          {/* Right: content changes by tab */}
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
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Key Features:</h4>
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
                  <span className="text-orange-600 font-semibold">Results our clients see:</span> higher reply speed, more qualified leads, and measurable lift in revenue from IG.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature blocks: Trigger, Message types, Actions, Conditions */}
      <section className="w-full py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white" id="capabilities">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful Automation Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to turn Instagram into your 24/7 sales machine. No coding required, just results.
            </p>
          </div>

          <div className="space-y-12">
            {/* Triggers */}
            <div className="bg-white rounded-3xl border border-gray-200 shadow-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Smart Triggers</h2>
                  <p className="text-gray-600 mt-2">Never miss an opportunity to engage with your audience</p>
                </div>
                <div className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold">4 Trigger Types</div>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
                  <div className="text-3xl mb-3">💬</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Comment Post</h3>
                  <p className="text-gray-600 text-sm mb-3">Auto-react to comments under posts and reels</p>
                  <div className="text-xs text-blue-600 font-medium">✓ Boost algorithm reach</div>
                </div>
                <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-6 border border-red-100">
                  <div className="text-3xl mb-3">🔴</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Comment Live</h3>
                  <p className="text-gray-600 text-sm mb-3">Engage viewers during live sessions in real time</p>
                  <div className="text-xs text-red-600 font-medium">✓ Increase live engagement</div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-6 border border-purple-100">
                  <div className="text-3xl mb-3">📥</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Instagram Message</h3>
                  <p className="text-gray-600 text-sm mb-3">Reply instantly to inbound DMs and story replies</p>
                  <div className="text-xs text-purple-600 font-medium">✓ Convert leads faster</div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100">
                  <div className="text-3xl mb-3">📸</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Comment Story</h3>
                  <p className="text-gray-600 text-sm mb-3">Trigger flows from story comments and reactions</p>
                  <div className="text-xs text-green-600 font-medium">✓ Capture story viewers</div>
                </div>
              </div>
            </div>

            {/* Message Types */}
            <div className="bg-white rounded-3xl border border-gray-200 shadow-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Rich Message Types</h2>
                  <p className="text-gray-600 mt-2">Create engaging conversations that convert visitors into customers</p>
                </div>
                <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold">6 Content Types</div>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { type: 'Text', desc: 'Simple, clear messages that get straight to the point', icon: '📝' },
                  { type: 'Text + Button', desc: 'Interactive buttons that drive action and clicks', icon: '🔘' },
                  { type: 'Image', desc: 'Visual content that tells your story instantly', icon: '🖼️' },
                  { type: 'Video', desc: 'Dynamic videos that showcase your products', icon: '🎥' },
                  { type: 'Audio', desc: 'Voice messages that build personal connections', icon: '🎵' },
                  { type: 'Card', desc: 'Rich cards with images, titles, and call-to-action buttons', icon: '🎴' },
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
                  <h2 className="text-3xl font-bold text-gray-900">Smart Actions</h2>
                  <p className="text-gray-600 mt-2">Automate your workflow with intelligent actions that work behind the scenes</p>
                </div>
                <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">3 Core Actions</div>
              </div>
              <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 border border-orange-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                      <span className="text-orange-600 text-xl">🏷️</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Add Tag to User</h3>
                  </div>
                  <p className="text-gray-600 mb-4">Automatically categorize and segment your audience for targeted follow-up campaigns</p>
                  <div className="text-sm text-orange-600 font-medium">✓ Better customer segmentation</div>
                </div>
                <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-2xl p-6 border border-red-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                      <span className="text-red-600 text-xl">🗑️</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Remove Tag from User</h3>
                  </div>
                  <p className="text-gray-600 mb-4">Clean up your audience data and remove outdated tags to maintain accurate targeting</p>
                  <div className="text-sm text-red-600 font-medium">✓ Cleaner audience data</div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 text-xl">⏱️</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Delay Time</h3>
                  </div>
                  <p className="text-gray-600 mb-4">Add natural pauses between messages to avoid looking like a bot and maintain authentic conversations</p>
                  <div className="text-sm text-blue-600 font-medium">✓ More human-like interactions</div>
                </div>
              </div>
            </div>

            {/* Conditions */}
            <div className="bg-white rounded-3xl border border-gray-200 shadow-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Smart Conditions</h2>
                  <p className="text-gray-600 mt-2">Target the right people at the right time with intelligent filtering</p>
                </div>
                <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold">3 Targeting Options</div>
              </div>
              <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-6 border border-purple-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <span className="text-purple-600 text-xl">🏷️</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Send by Tag</h3>
                  </div>
                  <p className="text-gray-600 mb-4">Include or exclude users based on their tags. Perfect for VIP customers, new leads, or avoiding spam</p>
                  <div className="text-sm text-purple-600 font-medium">✓ Personalized experiences</div>
                </div>
                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-6 border border-indigo-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                      <span className="text-indigo-600 text-xl">👥</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Send by Follower Count</h3>
                  </div>
                  <p className="text-gray-600 mb-4">Target micro-influencers, macro-influencers, or regular users based on their follower count range</p>
                  <div className="text-sm text-indigo-600 font-medium">✓ Influencer outreach</div>
                </div>
                <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-6 border border-emerald-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <span className="text-emerald-600 text-xl">⭐</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Followers Only</h3>
                  </div>
                  <p className="text-gray-600 mb-4">Exclusive content and offers for your loyal followers. Build stronger relationships with your community</p>
                  <div className="text-sm text-emerald-600 font-medium">✓ Follower retention</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Automation in action - image gallery */}
      <section className="w-full py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900">Automation in action</h2>
            <p className="text-gray-600 mt-2">A real workflow preview: list of automations and a sample flow from trigger → conditions → messages → actions.</p>
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
              <div className="bg-white rounded-xl shadow border border-gray-200 p-3">
                <img
                  src={imgAutomation1}
                  alt="Automation step 1"
                  className="w-full h-auto rounded-lg object-cover cursor-zoom-in hover:opacity-90 transition-opacity"
                  onClick={() => setPreviewSrc(imgAutomation1)}
                />
              </div>
              <div className="bg-white rounded-xl shadow border border-gray-200 p-3">
                <img
                  src={imgAutomation2}
                  alt="Automation step 2"
                  className="w-full h-auto rounded-lg object-cover cursor-zoom-in hover:opacity-90 transition-opacity"
                  onClick={() => setPreviewSrc(imgAutomation2)}
                />
              </div>
              <div className="bg-white rounded-xl shadow border border-gray-200 p-3">
                <img
                  src={imgAutomation3}
                  alt="Automation step 3"
                  className="w-full h-auto rounded-lg object-cover cursor-zoom-in hover:opacity-90 transition-opacity"
                  onClick={() => setPreviewSrc(imgAutomation3)}
                />
              </div>
              <div className="bg-white rounded-xl shadow border border-gray-200 p-3">
                <img
                  src={imgAutomation4}
                  alt="Automation step 4"
                  className="w-full h-auto rounded-lg object-cover cursor-zoom-in hover:opacity-90 transition-opacity"
                  onClick={() => setPreviewSrc(imgAutomation4)}
                />
              </div>
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


