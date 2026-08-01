function AboutPage() {
  return (
    <div className="text-gray-600">
      <section className="text-center py-24 px-5 bg-gray-50">
        <h1 className="text-4xl md:text-5xl font-medium text-gray-900 mb-4">
          About Us
        </h1>
        <p className="text-lg max-w-2xl mx-auto">
          We're on a mission to make quality products accessible and affordable for everyone.
        </p>
      </section>

      <section className="py-20 px-5 container mx-auto">
        <div className="flex flex-wrap items-center gap-12">
          <div className="flex-1 min-w-[280px]">
            <h2 className="text-2xl font-medium text-gray-900 mb-4">Our Story</h2>
            <p className="leading-relaxed">
              What started as a small idea has grown into a trusted destination for shoppers
              looking for quality, value, and convenience. We work directly with reliable
              suppliers to bring you products we genuinely stand behind.
            </p>
          </div>
          <div className="flex-1 min-w-[280px]">
            <h2 className="text-2xl font-medium text-gray-900 mb-4">Our Mission</h2>
            <p className="leading-relaxed">
              To make online shopping simple, honest, and reliable — with fair prices,
              fast delivery, and support you can count on every step of the way.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-5 bg-gray-50">
        <h2 className="text-2xl font-medium text-gray-900 text-center mb-12">
          What We Stand For
        </h2>
        <div className="flex flex-wrap gap-8 justify-center container mx-auto">
          <div className="w-full sm:w-64 text-center p-6 bg-white rounded border">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Trust</h3>
            <p>Every product is verified for quality before it reaches you.</p>
          </div>
          <div className="w-full sm:w-64 text-center p-6 bg-white rounded border">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Transparency</h3>
            <p>Clear pricing, honest descriptions, no hidden surprises.</p>
          </div>
          <div className="w-full sm:w-64 text-center p-6 bg-white rounded border">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Customer First</h3>
            <p>Your experience and satisfaction guide everything we do.</p>
          </div>
        </div>
      </section>

      <section className="text-center py-20 px-5">
        <h2 className="text-2xl font-medium text-gray-900 mb-4">
          Have questions?
        </h2>
        <p className="mb-8">We'd love to hear from you. Reach out anytime.</p>
        <button className="bg-indigo-500 text-white px-8 py-3 rounded hover:bg-indigo-600 focus:outline-none">
          Contact Us
        </button>
      </section>
    </div>
  );
}

export default AboutPage;