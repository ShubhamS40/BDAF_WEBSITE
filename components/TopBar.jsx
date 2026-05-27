"use client"
import Image from 'next/image';

const slogans = [
  "⚖️ Fighting Wrongful Claim Rejections Across India",
  "🏥 Health • Life • Motor • Property — All Insurance Disputes",
  "📋 Legal Notices • Consumer Forum • Ombudsman Support",
  "🛡️ 20+ Years of Insurance Industry Expertise",
  "📍 Based in New Delhi — Serving Pan India Online & Offline",
  "✅ Don't Let Insurance Companies Deny Your Rightful Claim",
  "💼 Claim Dispute Guidance • Document Review • Full Case Management",
];

const ticker = [...slogans, ...slogans];

export default function TopBar() {
  return (
    <div className="bg-black text-white py-2 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">

          {/* Left: Contact links */}
          <div className="flex items-center gap-4 text-sm shrink-0">
            <a href="mailto:support@bdaf.in" className="flex items-center gap-1.5 hover:text-gray-300 transition">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="hidden sm:inline">support@bdaf.in</span>
            </a>
            <a href="tel:+918744030904" className="flex items-center gap-1.5 hover:text-gray-300 transition">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="hidden md:inline">+91 87440 30904</span>
            </a>
            <a href="https://wa.me/918744030904" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-gray-300 transition">
              <Image src="/whatsapp.png" alt="WhatsApp" width={24} height={24} />
              <span className="hidden lg:inline">+91 87440 30904</span>
            </a>
          </div>

          {/* Right: Scrolling ticker - hidden on mobile */}
          <div className="overflow-hidden flex-1 min-w-0 hidden md:block">
            <div className="flex whitespace-nowrap animate-marquee text-sm text-gray-400">
              {ticker.map((text, i) => (
                <span key={i} className="mx-8">{text}</span>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}