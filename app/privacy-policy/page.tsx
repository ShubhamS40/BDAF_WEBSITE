import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | Bima Dispute Action Forum',
  description: 'Privacy Policy for Bima Dispute Action Forum (BDAF).',
};

export default function PrivacyPolicy() {
  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-600">Last updated: {new Date().toLocaleDateString('en-IN')}</p>
        </div>

        <div className="prose prose-lg text-gray-700 max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
            <p className="mb-4">
              Bima Dispute Action Forum ("we", "our", or "us") is committed to protecting the privacy and security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <Link href="/" className="text-blue-600 hover:underline">www.bdaf.in</Link> or use our services.
            </p>
            <p>
              Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the site or use our services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
            <p className="mb-4">We may collect information about you in a variety of ways:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Personal Information:</strong> Name, email address, phone number, address, and other contact details you provide when filling out forms or contacting us.</li>
              <li><strong>Insurance Information:</strong> Details related to your insurance policies, claims, and disputes that you provide when using our services.</li>
              <li><strong>Usage Data:</strong> Information about how you use our website, including your IP address, browser type, operating system, pages visited, and time spent on our site.</li>
              <li><strong>Communication Data:</strong> Any messages or communications you send to us, including emails and form submissions.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <p className="mb-4">We may use the information we collect in the following ways:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>To provide, maintain, and improve our services</li>
              <li>To process and manage your insurance dispute cases</li>
              <li>To communicate with you about your cases and our services</li>
              <li>To send you updates, newsletters, and marketing communications (with your consent)</li>
              <li>To respond to your inquiries and provide customer support</li>
              <li>To analyze website usage and improve our website's functionality</li>
              <li>To comply with legal obligations and protect our rights</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Disclosure of Your Information</h2>
            <p className="mb-4">We may share your information in the following situations:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Service Providers:</strong> With third-party service providers who assist us in operating our website and providing our services (e.g., payment processors, IT service providers).</li>
              <li><strong>Legal Requirements:</strong> When required by law, court order, or government request.</li>
              <li><strong>Business Transfers:</strong> In connection with any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
              <li><strong>With Your Consent:</strong> When you have explicitly agreed to the disclosure.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Security</h2>
            <p className="mb-4">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, disclosure, alteration, or destruction. However, please note that no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Your Rights</h2>
            <p className="mb-4">You have certain rights regarding your personal information:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Right to access, update, or delete your personal information</li>
              <li>Right to object to processing of your personal information</li>
              <li>Right to data portability</li>
              <li>Right to withdraw consent</li>
            </ul>
            <p>To exercise these rights, please contact us at <a href="mailto:support@bdaf.in" className="text-blue-600 hover:underline">support@bdaf.in</a>.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Cookies</h2>
            <p className="mb-4">
              Our website uses cookies and similar tracking technologies to enhance your browsing experience. You can manage your cookie preferences through your browser settings.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Children's Privacy</h2>
            <p>
              Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18. If you believe we have collected such information, please contact us immediately.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contact Us</h2>
            <p className="mb-2">If you have any questions about this Privacy Policy, please contact us at:</p>
            <p><strong>Email:</strong> <a href="mailto:support@bdaf.in" className="text-blue-600 hover:underline">support@bdaf.in</a></p>
            <p><strong>Phone:</strong> <a href="tel:+918744030904" className="text-blue-600 hover:underline">+91 87440 30904</a></p>
            <p><strong>Address:</strong> C2A/113, Janakpuri, New Delhi - 110058</p>
          </section>
        </div>
      </div>
    </div>
  );
}
