"use client";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    insuranceType: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Enquiry submitted! We will contact you soon.");
  };

  return (
    <section id="contact" className="py-20 bg-white text-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Form + Map */}
        <div className="grid md:grid-cols-2 gap-10 mb-14">

          {/* Form */}
          <div className="border border-gray-200 rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-6">Send an Enquiry</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-black placeholder-gray-400 focus:outline-none focus:border-black transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-black placeholder-gray-400 focus:outline-none focus:border-black transition"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 99999 99999"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-black placeholder-gray-400 focus:outline-none focus:border-black transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Insurance Type</label>
                  <select
                    name="insuranceType"
                    value={formData.insuranceType}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-black focus:outline-none focus:border-black transition bg-white"
                  >
                    <option value="" disabled>Select insurance type</option>
                    <option value="health">Health Insurance</option>
                    <option value="life">Life Insurance</option>
                    <option value="motor">Motor Insurance</option>
                    <option value="property">Property / Fire Insurance</option>
                    <option value="accident">Accidental Claims</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your insurance claim issue..."
                  rows={5}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-black placeholder-gray-400 focus:outline-none focus:border-black transition resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white py-3.5 rounded-lg font-semibold text-base hover:bg-gray-900 transition"
              >
                Submit Enquiry
              </button>
            </form>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden border border-gray-200 min-h-[400px]">
            <iframe
              title="BDAF Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.3!2d77.0510!3d28.6280!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d053b6666666%3A0x0!2sC-113%2C%20Janakpuri%2C%20New%20Delhi%2C%20Delhi%20110058!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "440px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Our team at Bima Dispute Action Forum is committed to helping policyholders understand their rights and pursue fair insurance claim resolutions.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="border border-gray-200 rounded-2xl p-8 text-center">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <p className="font-semibold text-base mb-1">Phone</p>
            <p className="text-gray-500 text-sm">+91 87440 30904</p>
          </div>
          <div className="border border-gray-200 rounded-2xl p-8 text-center">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="font-semibold text-base mb-1">Email</p>
            <p className="text-gray-500 text-sm">support@bdaf.in</p>
          </div>
          <div className="border border-gray-200 rounded-2xl p-8 text-center">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <p className="font-semibold text-base mb-1">Address</p>
            <p className="text-gray-500 text-sm">C-113, Janakpuri,<br />New Delhi - 110058</p>
          </div>
        </div>

      </div>
    </section>
  );
}