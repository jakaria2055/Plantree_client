import React from "react";

function TreePlanting() {
  return (
    <section>
      <div className="flex flex-col items-center gap-3 text-center mb-10 animate-slide-down">
        <h2 className="lobster-regular text-yellow-500">
          Tree Planting- Join the movement.
        </h2>
        <p className="max-w-2xl">
          Plant a Tree Today—Grow a Legacy for Tomorrow
        </p>
      </div>

      {/* HERO */}
      <div className="bg-green-950 relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background video/image */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            poster="/tree-planting-poster.jpg"
          >
            <source src="/tree-growth-timelapse.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content */}
        <div className=" relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Transform Your Space with{" "}
            <span className="text-green-600">Living</span> Decor
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Professional planting services for homes, offices, and urban spaces.
            We handle everything from design to maintenance.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-all">
              Book Your Project
            </button>
            <button className="bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-full text-lg font-medium backdrop-blur-sm transition-all">
              How It Works
            </button>
          </div>
        </div>

        {/* Scrolling indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>

      {/* BOOKING PROJECT */}
      <div className="py-20 md:py-28 bg-gradient-to-b from-green-900 to-white ">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-yellow-500">
            <span className="border-b-4 text-yellow-500 pb-2">
              Complete Planting Packages
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Home Sanctuary",
                locations: ["Living Room", "Balcony", "Yard"],
                includes: [
                  "3 Plants",
                  "Design Consultation",
                  "Self-Watering Pots",
                  "Soil Mix",
                ],
                price: "$299",
              },
              {
                title: "Office Oasis",
                locations: ["Reception", "Workspaces", "Parking Area"],
                includes: [
                  "5+ Plants",
                  "Air-Purifying Species",
                  "Monthly Maintenance",
                  "LED Grow Lights",
                ],
                price: "$599",
              },
              {
                title: "Rooftop Garden",
                locations: ["Full Roof Conversion", "Partial Green Space"],
                includes: [
                  "10+ Plants",
                  "Irrigation System",
                  "Weatherproof Planters",
                  "Yearly Checkups",
                ],
                price: "$1,299+",
              },
            ].map((pkg, index) => (
              <div
                key={index}
                className="bg-green-200 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-green-700 relative">
                  <img
                    src={`/package-${index + 1}.jpg`}
                    alt={pkg.title}
                    className="w-full h-full object-cover opacity-90"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-2xl font-bold text-white">
                      {pkg.title}
                    </h3>
                    <p className="text-green-200 font-medium">{pkg.price}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="font-semibold text-green-700 mb-2">
                      Perfect for:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {pkg.locations.map((loc, i) => (
                        <span
                          key={i}
                          className="bg-green-300 text-green-800 text-sm px-3 py-1 rounded-full"
                        >
                          {loc}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-semibold text-green-800 mb-2">
                      Includes:
                    </h4>
                    <ul className="space-y-2">
                      {pkg.includes.map((item, i) => (
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
                  </div>
                  <button className="w-full bg-green-800 hover:bg-green-700 text-white py-3 rounded-lg font-medium transition-colors">
                    Customize This Package
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-green-800 mb-4">
              How Our Planting Service Works
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  icon: "📅",
                  title: "1. Book Consultation",
                  text: "Schedule a free design call",
                },
                {
                  icon: "🏡",
                  title: "2. Site Visit",
                  text: "Our experts assess your space",
                },
                {
                  icon: "✍️",
                  title: "3. Receive Plan",
                  text: "Customized planting proposal",
                },
                {
                  icon: "🌿",
                  title: "4. Installation",
                  text: "We handle everything in 1 day",
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
        </div>
      </div>

      <div className="py-16 bg-gradient-to-b from-white to-green-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-green-900 lobster-regular font-bold text-center mb-4">
            Our Collective Impact
          </h2>
          <p className="text-center text-green-800 max-w-2xl mx-auto mb-12">
            Every planting project contributes to a greener planet. Here's what
            we've achieved together.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { value: "24,871", label: "Trees Planted", icon: "🌳" },
              { value: "198", label: "Urban Projects", icon: "🏙️" },
              { value: "58", label: "Tonnes CO₂ Absorbed", icon: "☁️" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-green-800 rounded-xl p-6 text-center backdrop-blur-sm"
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <p className="text-5xl font-bold mb-2 text-green-300">
                  {stat.value}
                </p>
                <p className="text-green-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

   
    </section>
  );
}

export default TreePlanting;
