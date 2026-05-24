import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>
            <span className="text-sm text-gray-400 tracking-widest uppercase mb-4 block">
              Insurance Dispute Resolution
            </span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Resolving Claims,<br /> Restoring Trust
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-md">
              Professional insurance dispute resolution and claim assistance helping policyholders across India fight wrongful claim rejections, delays, and underpayments.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+918744030904"
                className="inline-flex items-center justify-center gap-2 bg-white text-black px-7 py-3.5 rounded-full font-semibold text-base hover:bg-gray-100 transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21L8.5 10.5s1.5 3 5 5l1.113-1.724a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 15.72V19a2 2 0 01-2 2C9.163 21 3 14.837 3 7V5z" />
                </svg>
                Call Now
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border border-white text-white px-7 py-3.5 rounded-full font-semibold text-base hover:bg-white hover:text-black transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                Get Free Consultation
              </Link>
            </div>

            {/* Simple stats */}
            <div className="flex gap-10 mt-12 pt-10 border-t border-gray-800">
              <div>
                <div className="text-2xl font-bold">5000+</div>
                <div className="text-gray-500 text-sm mt-1">Cases Resolved</div>
              </div>
              <div>
                <div className="text-2xl font-bold">98%</div>
                <div className="text-gray-500 text-sm mt-1">Success Rate</div>
              </div>
              <div>
                <div className="text-2xl font-bold">15+</div>
                <div className="text-gray-500 text-sm mt-1">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="hidden md:block">
            <div className="rounded-2xl overflow-hidden border border-gray-800">
              <Image
                src="/Hero_image.png"
                alt="Insurance Claim Assistance"
                width={560}
                height={420}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
