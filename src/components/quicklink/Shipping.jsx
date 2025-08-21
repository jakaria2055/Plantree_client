import React from "react";

function Shipping() {
  return (
    <section>
      <div className="flex flex-col items-center gap-3 text-center mb-10 animate-slide-down">
        <h2 className="lobster-regular text-yellow-500">
          Shipping Information
        </h2>
        <p className="max-w-2xl">
          How we deliver your green friends to your doorstep
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Shipping Methods */}
        <div className="bg-white border-2 border-green-800 rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-green-900 mb-4 flex items-center">
            <svg
              className="w-6 h-6 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
            Shipping Methods
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Standard Shipping",
                price: "$4.99",
                time: "3-5 business days",
                desc: "Our eco-friendly packaging ensures safe delivery",
              },
              {
                title: "Express Shipping",
                price: "$9.99",
                time: "1-2 business days",
                desc: "Priority handling for urgent deliveries",
              },
              {
                title: "Free Shipping",
                price: "FREE",
                time: "5-7 business days",
                desc: "On orders over $50",
              },
            ].map((method, index) => (
              <div
                key={index}
                className="border border-green-900 rounded-lg p-4 hover:bg-green-100 transition-colors"
              >
                <h3 className="font-bold text-lg text-green-900">
                  {method.title}
                </h3>
                <p className="text-2xl text-green-900 font-bold my-2">
                  {method.price}
                </p>
                <p className="text-gray-700 mb-1">
                  <span className="font-medium">Delivery:</span> {method.time}
                </p>
                <p className="text-sm lobster-regular text-gray-800">
                  {method.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Shipping Process */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-green-900 mb-4 flex items-center">
            {/* Icon */}
            <svg
              className="w-6 h-6 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              />
            </svg>
            Our Shipping Process
          </h2>

          {/* Shipping steps list */}
          <div className="space-y-4">
            {[
              "Order Processing: We prepare your plants within 1 business day",
              "Careful Packaging: Each plant is secured with biodegradable materials",
              "Shipment Notification: You'll receive tracking when your order ships",
              "Transit Care: Special labels ensure proper handling",
              "Delivery: Requires signature for plant safety",
            ].map((step, index) => (
              <div key={index} className="flex items-start">
                <div className="bg-green-100 text-green-900 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                  {index + 1}
                </div>
                <p className="text-green-900">{step}</p>{" "}
              </div>
            ))}
          </div>
        </div>

        {/* Shipping Rules */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-green-700 mb-4 flex items-center">
            <svg
              className="w-6 h-6 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Important Shipping Rules
          </h2>

          <ul className="list-disc pl-5 space-y-2 text-green-900">
            <li>Live plants ship Monday-Wednesday to avoid weekend delays</li>
            <li>Delivery dates are estimates, not guarantees</li>
            <li>Extreme weather may delay shipments for plant safety</li>
            <li>Please inspect plants immediately upon arrival</li>
            <li>Contact us within 24 hours for damaged items</li>
          </ul>

          <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
            <p className="font-medium text-yellow-700 mb-1">Note:</p>
            <p className="text-sm text-gray-800">
              We cannot ship to P.O. boxes. A <strong>physical address</strong>{" "}
              is required for plant deliveries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Shipping;
