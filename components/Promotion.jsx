import Image from 'next/image';

export default function Promotion() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-xl border border-gray-200">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                Are you facing similar issues while claiming your insurance?
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Let's connect! Reach out to us today and get your claim amount.
              </p>
              <a href="#contact" className="inline-block bg-black text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition">
                Contact us
              </a>
            </div>
            <div className="bg-gray-200">
              <Image
                src="/promotion.png"
                alt="Insurance Claim Promotion"
                width={600}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
