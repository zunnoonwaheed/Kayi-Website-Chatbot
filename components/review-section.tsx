'use client';

import Image from 'next/image';

export default function ReviewsSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Why Teams Choose Us
        </h2>

        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 items-stretch">
          <div className="md:col-span-2 h-full">
            <CardText
              title="Rapid Talent Matching"
              description="Our AI-driven platform connects you with pre-vetted professionals in under 72 hours. No more endless interviews – just quality matches tailored to your specific needs."
              gradient="from-[#fce4ec] to-[#f8bbd0]"
            />
          </div>
          <div className="h-full">
            <CardWithImage
              name="Lina M."
              role="Product Lead"
              company="StartUp Ventures"
              testimonial="Found my ideal remote role with competitive compensation and great work-life balance."
              imageUrl="/images/T1.jpg"
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 items-stretch">
          <div className="h-full">
            <CardText
              title="Global Network"
              description="Access top talent across 50+ countries. Timezone-aligned matching ensures seamless collaboration."
              gradient="from-[#e0f7fa] to-[#b2ebf2]"
            />
          </div>
          <div className="h-full">
            <CardWithImage
              name="Sarah J."
              role="Senior Frontend Developer"
              company="TechCorp Inc."
              testimonial="The matching process was incredibly efficient – within 72 hours I was interviewing for perfect-fit roles."
              imageUrl="/images/T2.jpg"
            />
          </div>
          <div className="h-full">
            <CardText
              title="Transparent Pricing"
              description="Clear rates with no hidden fees. Know exactly what you're paying for with our straightforward pricing model."
              gradient="from-[#e8f5e9] to-[#c8e6c9]"
            />
          </div>
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          <div className="h-full">
            <CardWithImage
              name="Alex K."
              role="UX Design Director"
              company="DesignHub"
              testimonial="The platform helped me negotiate better rates and build long-term client relationships that transformed my freelance career."
              imageUrl="/images/T3.jpg"
              tall
            />
          </div>
          <div className="h-full">
            <CardText
              title="Quality Guaranteed"
              description="Every professional is rigorously vetted. We maintain high standards so you don't have to compromise on quality."
              gradient="from-[#fff3e0] to-[#ffe0b2]"
              tall
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// === Card With Image ===
function CardWithImage({
  name,
  role,
  company,
  testimonial,
  imageUrl,
  tall = false,
}: {
  name: string;
  role: string;
  company: string;
  testimonial: string;
  imageUrl: string;
  tall?: boolean;
}) {
  return (
    <div
      className={`bg-white rounded-2xl overflow-hidden flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 ${
        tall ? 'min-h-[400px]' : 'min-h-[300px]'
      }`}
    >
      <div className={`w-full ${tall ? 'h-60' : 'h-48'} relative`}>
        <Image
          src={imageUrl}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-top rounded-t-2xl"
        />
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <div className="mb-3">
          <h3 className="text-lg font-bold text-gray-800">{name}</h3>
          <p className="text-sm text-gray-600">
            {role} • {company}
          </p>
        </div>
        <p className="text-gray-600 mb-4 flex-1 italic">"{testimonial}"</p>
        <div className="flex space-x-1">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className="w-4 h-4 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>
    </div>
  );
}

// === Text Card ===
function CardText({
  title,
  description,
  gradient,
  tall = false,
}: {
  title: string;
  description: string;
  gradient: string;
  tall?: boolean;
}) {
  return (
    <div
      className={`bg-gradient-to-br ${gradient} p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full ${
        tall ? 'min-h-[400px]' : 'min-h-[300px]'
      }`}
    >
      <h3 className="text-xl font-bold text-gray-800 mb-3 tracking-tight">
        {title}
      </h3>
      <p className="text-gray-700 leading-relaxed">{description}</p>
    </div>
  );
}