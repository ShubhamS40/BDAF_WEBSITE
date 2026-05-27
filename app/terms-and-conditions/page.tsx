import Link from 'next/link';

export const metadata = {
  title: 'Terms and Conditions | Bima Dispute Action Forum',
  description: 'Terms and Conditions for Bima Dispute Action Forum (BDAF).',
};

export default function TermsAndConditions() {
  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms and Conditions</h1>
          <p className="text-gray-600">Last updated: {new Date().toLocaleDateString('en-IN')}</p>
        </div>

        <div className="prose prose-lg text-gray-700 max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Agreement to Terms</h2>
            <p className="mb-4">
              Welcome to Bima Dispute Action Forum ("we", "our", or "us"). By accessing our website <Link href="/" className="text-blue-600 hover:underline">www.bdaf.in</Link> or using our services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services or access our website.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Services</h2>
            <p className="mb-4">
              BDAF provides insurance dispute resolution and claim assistance services to policyholders across India. Our services include, but are not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Review and analysis of insurance claims and disputes</li>
              <li>Legal consultation and guidance</li>
              <li>Representation before Insurance Ombudsman, Consumer Forums, and other authorities</li>
              <li>Negotiation with insurance companies</li>
              <li>Documentation and case management</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Registration and Fees</h2>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>A registration fee of ₹999 is charged only after your case has been accepted by us.</li>
              <li>A success fee of 20% + GST is applicable upon successful resolution of your case.</li>
              <li>All fees are non-refundable except as required by law.</li>
              <li>We reserve the right to change our fees at any time without prior notice.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Client Responsibilities</h2>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Provide accurate, complete, and timely information and documents.</li>
              <li>Cooperate fully with our team throughout the dispute resolution process.</li>
              <li>Comply with all applicable laws and regulations.</li>
              <li>Make timely payments of all fees as agreed.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Our Responsibilities</h2>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Provide professional and competent services in good faith.</li>
              <li>Maintain confidentiality of your information in accordance with our Privacy Policy.</li>
              <li>Communicate with you regularly regarding the progress of your case.</li>
              <li>Act in your best interests within the bounds of law.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Confidentiality</h2>
            <p>
              We will maintain the confidentiality of all information provided by you, except as required by law or with your explicit consent. Our confidentiality obligations survive the termination of our services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Intellectual Property</h2>
            <p>
              All content on our website, including text, graphics, logos, images, and software, is the property of Bima Dispute Action Forum and is protected by copyright and other intellectual property laws. You may not use, reproduce, or distribute our content without our prior written permission.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Disclaimer of Warranties</h2>
            <p>
              Our services are provided on an "as is" and "as available" basis. We do not warrant that our services will be uninterrupted, error-free, or that any particular outcome will be achieved. We disclaim all warranties, express or implied, to the fullest extent permitted by law.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Limitation of Liability</h2>
            <p>
              In no event shall Bima Dispute Action Forum be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of our services or website. Our total liability to you for any claim shall not exceed the total fees paid by you to us.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Termination</h2>
            <p>
              We reserve the right to terminate our services at any time for any reason without prior notice. You may also terminate our services at any time by providing written notice to us.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Governing Law</h2>
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any dispute arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the courts in New Delhi, India.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Changes to Terms</h2>
            <p>
              We may update these Terms and Conditions from time to time. We will notify you of any changes by posting the updated terms on our website and updating the "Last updated" date. Your continued use of our services after such changes constitutes your acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Contact Us</h2>
            <p className="mb-2">If you have any questions about these Terms and Conditions, please contact us at:</p>
            <p><strong>Email:</strong> <a href="mailto:support@bdaf.in" className="text-blue-600 hover:underline">support@bdaf.in</a></p>
            <p><strong>Phone:</strong> <a href="tel:+918744030904" className="text-blue-600 hover:underline">+91 87440 30904</a></p>
            <p><strong>Address:</strong> C2A/113, Janakpuri, New Delhi - 110058</p>
          </section>
        </div>
      </div>
    </div>
  );
}
