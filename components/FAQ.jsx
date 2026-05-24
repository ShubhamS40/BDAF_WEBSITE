'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Bima Dispute Action Forum?",
      answer: "Bima Dispute Action Forum (BDAF) is a professional insurance dispute resolution and claim assistance platform that helps policyholders fight wrongful claim rejections, delays, underpayments, and unfair insurance practices."
    },
    {
      question: "What type of insurance disputes do you handle?",
      answer: "We assist in matters related to: Health Insurance Claims, Life Insurance Claims, Motor Insurance Claims, Property Insurance Claims, Fire Insurance Claims, Accidental Insurance Claims, Corporate Insurance Disputes, Group Insurance Claims, Mediclaim Rejections, Commercial Insurance Disputes."
    },
    {
      question: "Do you only work in Delhi?",
      answer: "No. BDAF provides assistance across India through online consultations, digital documentation, phone support, and virtual case handling."
    },
    {
      question: "What should I do if my insurance claim has been rejected?",
      answer: "You should immediately: Preserve all documents and emails, Obtain the rejection letter from the insurer, Avoid signing any settlement under pressure, Contact BDAF for professional assessment and guidance."
    },
    {
      question: "Can you help if my claim is delayed and not formally rejected?",
      answer: "Yes. We assist in cases involving unreasonable delays, repeated document demands, non responsive insurers, and prolonged claim processing."
    },
    {
      question: "Do you provide legal support?",
      answer: "Yes. Our team consists of insurance experts, claims professionals, and legal practitioners who assist in representations, complaints, negotiations, and legal proceedings wherever required."
    },
    {
      question: "How does the process work?",
      answer: "Our process generally includes: Initial consultation, Document review, Case assessment, Strategy planning, Representation before insurer, Escalation if required, Resolution and recovery support."
    },
    {
      question: "What documents are usually required?",
      answer: "Documents may include: Insurance policy copy, Claim form, Rejection letter, Medical records or invoices, FIR or accident documents where applicable, Communication exchanged with insurer, Surveyor reports."
    },
    {
      question: "How long does the process take?",
      answer: "The timeline depends on the nature of dispute, insurance company response, complexity of matter, and whether legal proceedings are required. Some matters settle quickly while others may take longer."
    },
    {
      question: "Do you guarantee claim approval?",
      answer: "No professional organization can legally guarantee claim approval. However, we provide strategic assistance, detailed case preparation, and experienced representation to maximize the chances of a fair outcome."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">Find answers to common questions</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-xl shadow-md overflow-hidden border border-gray-200">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center font-semibold text-black hover:bg-gray-100 transition"
              >
                <span>{faq.question}</span>
                <svg className={`w-6 h-6 transition transform ${openFaq === index ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFaq === index && (
                <div className="px-6 py-5 text-gray-600 border-t border-gray-200">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
