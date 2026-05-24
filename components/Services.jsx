"use client";
import Image from 'next/image';

const services = [
  { title: "Health Insurance", image: "/Health_Insurance.png" },
  { title: "Life Insurance", image: "/Life_insurance.png" },
  { title: "Motor Insurance", image: "/Car_insurance.png" },
  { title: "General Insurance", image: "/General_insurance.png" },
  { title: "Term Insurance", image: "/Term_insurance.png" },
  { title: "Travel Insurance", image: "/Travel_Insurance.png" },
];

// Duplicate for seamless infinite loop
const ticker = [...services, ...services, ...services];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-black mb-3">Our Services</h2>
          <p className="text-gray-500 text-lg">Comprehensive insurance dispute resolution services</p>
        </div>
      </div>

      {/* Scrolling cards strip — full width, no container constraint */}
      <div className="relative w-full">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex gap-6 animate-services-scroll w-max px-6">
          {ticker.map((service, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-48 bg-white border border-gray-200 rounded-2xl p-6 flex flex-col items-center gap-4 shadow-sm hover:shadow-md transition hover:-translate-y-1"
            >
              <div className="w-20 h-20 flex items-center justify-center">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={72}
                  height={72}
                  className="object-contain"
                />
              </div>
              <p className="text-sm font-semibold text-black text-center leading-snug">
                {service.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes services-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-services-scroll {
          animation: services-scroll 18s linear infinite;
        }
        .animate-services-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}