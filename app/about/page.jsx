import Image from 'next/image';

export default function About() {
  return (
    <div>
      <section className="bg-black text-white py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <span className="text-sm text-gray-400 tracking-widest uppercase mb-4 block">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Bima Dispute Action Forum
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
              Your trusted partner in resolving insurance disputes across India
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Who We Are
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Bima Dispute Action Forum (BDAF) is a dedicated insurance dispute assistance platform helping policyholders across India fight wrongful insurance claim rejections, delays, and unfair settlements.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Based in New Delhi, our team consists of experienced legal professionals along with experts who have worked in the insurance industry for more than 20 years and understand the internal functioning of insurance companies.
              </p>
            </div>
            <div className="hidden md:block">
              <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
                <Image
                  src="/Hero_image.png"
                  alt="About BDAF"
                  width={560}
                  height={420}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">
              What Makes Us Different
            </h2>
            <p className="text-gray-500 text-lg">
              Combining legal expertise with real insurance industry knowledge
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition">
              <div className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Legal Expertise</h3>
              <p className="text-gray-600">
                Experienced legal professionals specializing in insurance law and consumer disputes.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition">
              <div className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Industry Insights</h3>
              <p className="text-gray-600">
                20+ years of insurance industry experience, understanding how companies operate internally.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition">
              <div className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Pan India Support</h3>
              <p className="text-gray-600">
                Assisting individuals and families across India through both online and offline support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 hidden md:block">
              <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
                <Image
                  src="/promotion.png"
                  alt="Our Services"
                  width={560}
                  height={420}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Our Mission
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Our mission is to ensure that genuine policyholders are not left helpless against large insurance companies and that every rightful claim receives fair consideration.
              </p>

              <h3 className="text-2xl font-bold text-black mb-4">
                Our Services Include:
              </h3>
              <ul className="space-y-3">
                {[
                  'Claim dispute guidance',
                  'Legal notices',
                  'Complaint drafting',
                  'Consumer forum assistance',
                  'Ombudsman support',
                  'Document review',
                  'Complete claim dispute management'
                ].map((service, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-black rounded-full flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Help?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Don't let wrongful claim rejections or delays frustrate you. Contact us today for a free consultation.
          </p>
          <a
            href="tel:+918744030904"
            className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21L8.5 10.5s1.5 3 5 5l1.113-1.724a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 15.72V19a2 2 0 01-2 2C9.163 21 3 14.837 3 7V5z" />
            </svg>
            Call Now: +91 87440 30904
          </a>
        </div>
      </section>
    </div>
  );
}
