import Image from 'next/image';

const steps = [
  {
    number: 1,
    title: "Reach Out to Us",
    desc: "Fill out the form with your name, email, and contact number. Alternatively, contact our claim experts by calling us at 95136-31312.",
    image: "/how_it_work_1.png",
    side: "left",
  },
  {
    number: 2,
    title: "Share Case Documents",
    desc: "We hear you out and ask you to share copies of case related documents with us.",
    image: "/how_it_work_2.png",
    side: "right",
  },
  {
    number: 3,
    title: "Case Acceptance",
    desc: "We will proceed with your insurance complaint after thoroughly reviewing your case particulars and insurance paperwork.",
    image: "/how_it_work_3.png",
    side: "right",
  },
  {
    number: 4,
    title: "Registration",
    desc: "We do not charge anything upfront other than a one-time registration fee of ₹999 only after case acceptance.",
    image: "/how_it_work_4.png",
    side: "left",
  },
  {
    number: 5,
    title: "Complaint Resolution",
    desc: "Upon successful resolution of your insurance complaint, we charge a success fee of 20% + GST.",
    image: "/how_it_work_5.png",
    side: "right",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-3">Our Hassle-Free Process</h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            We take pride in our process, and we want to share it with you. Discover the steps we take to ensure that our service meets the highest quality standards.
          </p>
        </div>

        {/* Desktop layout */}
        <div className="relative hidden md:block">

          {/* Vertical center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2" />

          <div className="flex flex-col">
            {steps.map((step, i) => {
              const isLeft = step.side === "left";
              const isLast = i === steps.length - 1;

              return (
                <div key={i} className={`relative grid grid-cols-2 ${isLast ? "mb-0" : "mb-10"}`}>

                  {/* CENTER number bubble */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-8 w-10 h-10 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center z-10">
                    <span className="text-sm font-bold text-black">{step.number}</span>
                  </div>

                  {/* LEFT column */}
                  <div className="pr-12 flex items-start justify-end">
                    {isLeft ? (
                      /* Card on left */
                      <StepCard step={step} align="right" />
                    ) : (
                      /* Image + arrow on left (card is on right) */
                      <div className="flex flex-col items-end justify-center gap-3 pt-4 pr-4">
                        <div className="w-64 h-64 rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 flex items-center justify-center">
                          <Image src={step.image} alt={step.title} width={220} height={220} className="object-contain" />
                        </div>
                        {!isLast && <ArrowRight />}
                      </div>
                    )}
                  </div>

                  {/* RIGHT column */}
                  <div className="pl-12 flex items-start justify-start">
                    {!isLeft ? (
                      /* Card on right */
                      <StepCard step={step} align="left" />
                    ) : (
                      /* Image + arrow on right (card is on left) */
                      <div className="flex flex-col items-start justify-center gap-3 pt-4 pl-4">
                        <div className="w-64 h-64 rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 flex items-center justify-center">
                          <Image src={step.image} alt={step.title} width={220} height={220} className="object-contain" />
                        </div>
                        {!isLast && <ArrowLeft />}
                      </div>
                    )}
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile layout */}
        <div className="flex flex-col gap-6 md:hidden">
          {steps.map((step) => (
            <div key={step.number} className="flex items-start gap-4">
              <div className="w-9 h-9 flex-shrink-0 bg-black rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">{step.number}</span>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-32 h-32 flex-shrink-0 rounded-xl overflow-hidden bg-gray-50 border border-gray-200 flex items-center justify-center">
                  <Image src={step.image} alt={step.title} width={110} height={110} className="object-contain" />
                </div>
                <div>
                  <h3 className="font-bold text-black text-base mb-1">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

function StepCard({ step, align }) {
  return (
    <div className={`bg-gray-50 border border-gray-200 rounded-2xl p-6 w-full ${align === "right" ? "text-right" : "text-left"}`}>
      <div className={`w-8 h-8 bg-black rounded-full flex items-center justify-center mb-4 ${align === "right" ? "ml-auto" : ""}`}>
        <span className="text-white text-xs font-bold">{step.number}</span>
      </div>
      <h3 className="font-bold text-black text-lg mb-2">{step.title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
    </div>
  );
}

/* Arrow pointing down-left (for right side → next card goes left) */
function ArrowLeft() {
  return (
    <svg width="72" height="52" viewBox="0 0 72 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M62 8 Q62 44 10 44" stroke="#9ca3af" strokeWidth="2" strokeDasharray="5 4" fill="none" strokeLinecap="round" />
      <path d="M20 38 L10 44 L18 52" stroke="#9ca3af" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* Arrow pointing down-right (for left side → next card goes right) */
function ArrowRight() {
  return (
    <svg width="72" height="52" viewBox="0 0 72 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 8 Q10 44 62 44" stroke="#9ca3af" strokeWidth="2" strokeDasharray="5 4" fill="none" strokeLinecap="round" />
      <path d="M52 38 L62 44 L54 52" stroke="#9ca3af" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}