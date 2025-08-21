import React from "react";

function GrassCutting() {
  return (
    <section>
      <div className="flex flex-col items-center gap-3 text-center mb-10 animate-slide-down">
        <h2 className="lobster-regular text-yellow-500">
          Professional Grass Cutting Service
        </h2>
        <p className="max-w-2xl">
          Keep your lawn perfectly manicured with our expert cutting, edging,
          and cleanup services
        </p>
      </div>

      {/* GRASS CUTTING SERVICE */}
      <div className="py-20 md:py-28 bg-gradient-to-b from-green-950 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-yellow-500">
            <span className="border-b-4 text-yellow-500 pb-2">
              Professional Grass Cutting Services
            </span>
          </h2>

          {/* Service Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Standard Cut",
                price: "$35",
                frequency: "One-Time",
                includes: [
                  "Precision mowing",
                  "Grass trimming",
                  "Basic edging",
                  "Debris removal",
                ],
                bestFor: "Small to medium yards",
              },
              {
                title: "Premium Cut",
                price: "$55",
                frequency: "One-Time",
                includes: [
                  "Precision mowing",
                  "Detailed edging",
                  "Weed whacking",
                  "Thorough cleanup",
                  "Leaf blowing",
                ],
                bestFor: "Large yards & commercial",
              },
              {
                title: "Maintenance Plan",
                price: "$120/mo",
                frequency: "Weekly",
                includes: [
                  "Regular mowing",
                  "Full edging",
                  "Weed control",
                  "Debris removal",
                  "Fertilizer application",
                  "Priority scheduling",
                ],
                bestFor: "Year-round lawn care",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-green-200 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-green-700 relative">
                  <img
                    src={`/grass-cutting-${index + 1}.jpg`}
                    alt={service.title}
                    className="w-full h-full object-cover opacity-90"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-2xl font-bold text-white">
                      {service.title}
                    </h3>
                    <p className="text-green-200 font-medium">
                      {service.frequency} Service
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-3xl font-bold text-green-800">
                      {service.price}
                    </span>
                    <span className="bg-green-300 text-green-800 px-3 py-1 rounded-full text-sm">
                      {service.bestFor}
                    </span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {service.includes.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-green-800 mr-2 mt-0.5 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-green-800">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-green-800 hover:bg-green-700 text-white py-3 rounded-lg font-medium transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* How It Works */}
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto mb-12">
            <h3 className="text-2xl font-bold text-green-800 mb-4">
              Our Grass Cutting Process
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  icon: "📅",
                  title: "1. Schedule",
                  text: "Book online or call us",
                },
                {
                  icon: "✂️",
                  title: "2. Cutting",
                  text: "Expert mowing & edging",
                },
                {
                  icon: "🧹",
                  title: "3. Cleanup",
                  text: "Thorough debris removal",
                },
                {
                  icon: "👍",
                  title: "4. Enjoy",
                  text: "Perfect lawn guaranteed",
                },
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-3">{step.icon}</div>
                  <h4 className="font-bold text-green-700 mb-1">
                    {step.title}
                  </h4>
                  <p className="text-gray-600">{step.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-green-800 mb-2">
              Why Choose Our Service?
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
              We use commercial-grade equipment and eco-friendly practices for a
              healthier lawn
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "🔧", text: "Professional Equipment" },
                { icon: "🌱", text: "Eco-Friendly" },
                { icon: "⏱️", text: "On-Time Service" },
                { icon: "💯", text: "Satisfaction Guaranteed" },
              ].map((item, index) => (
                <div key={index} className="bg-green-200 p-4 rounded-lg">
                  <span className="text-3xl mb-2 block">{item.icon}</span>
                  <p className="font-medium text-green-800">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GrassCutting;
