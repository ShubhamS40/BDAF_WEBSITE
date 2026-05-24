export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-6">Need More Help?</h2>
        <p className="text-xl mb-8 text-gray-300">
          Our team at Bima Dispute Action Forum is committed to helping policyholders understand their rights and pursue fair insurance claim resolutions through professional support, strategic guidance, and experienced representation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:+918744030904" className="bg-white text-black px-10 py-4 rounded-full font-semibold text-lg hover:bg-gray-200 transition">
            📞 +91 87440 30904
          </a>
          <a href="mailto:support@bdaf.in" className="border-2 border-white text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-black transition">
            📧 support@bdaf.in
          </a>
        </div>
      </div>
    </section>
  );
}
