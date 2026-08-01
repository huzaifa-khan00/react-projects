function Faq() {
  return (
    <div className="text-slate-700 bg-slate-50 min-h-screen">
      <section className="text-center py-20 px-5">
        <h1 className="text-4xl font-bold text-slate-900 mb-3">
          Frequently Asked Questions
        </h1>
        <p className="text-base text-slate-500">
          Got questions? We've got answers.
        </p>
      </section>

      <section className="pb-20 px-5 max-w-3xl mx-auto space-y-6">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="font-semibold text-slate-900 mb-2">
            How long does delivery take?
          </h3>
          <p className="text-slate-600">
            Most orders arrive within 3–5 business days, depending on your location.
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="font-semibold text-slate-900 mb-2">
            What payment methods do you accept?
          </h3>
          <p className="text-slate-600">
            We accept major credit/debit cards and popular local payment methods.
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="font-semibold text-slate-900 mb-2">
            Can I return a product?
          </h3>
          <p className="text-slate-600">
            Yes, returns are accepted within 14 days of delivery, provided the item is unused.
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="font-semibold text-slate-900 mb-2">
            How can I track my order?
          </h3>
          <p className="text-slate-600">
            Once shipped, you'll receive a tracking link via email to monitor your delivery.
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="font-semibold text-slate-900 mb-2">
            Do you offer customer support?
          </h3>
          <p className="text-slate-600">
            Yes, our support team is available to help with any questions or issues.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Faq;