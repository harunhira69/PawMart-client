// WhyAdopt.jsx
import React from "react";
import { Heart, PawPrint, ShieldCheck, Users } from "lucide-react";

const WhyAdopt = () => {
  const points = [
    {
      icon: <Heart />,
      title: "Give a Pet a Second Chance",
      desc: "Thousands of pets in Bangladesh are abandoned every year. Adoption helps save a life and gives them a loving home.",
    },
    {
      icon: <ShieldCheck />,
      title: "Verified & Health-Checked",
      desc: "All adoption listings on PawMart are reviewed to ensure pets are healthy, safe, and ready for a new family.",
    },
    {
      icon: <Users />,
      title: "Community Support",
      desc: "Our adopters’ community shares experiences, tips, and training guidance to help you care for your new friend.",
    },
    {
      icon: <PawPrint />,
      title: "Free & Ethical",
      desc: "Unlike buying, adoption is free and promotes ethical treatment of animals—no breeding or commercial exploitation.",
    },
  ];

  return (
    <section className="py-20">
      <div className=" px-6 text-center">
        {/* Heading */}
        <h2  className="text-4xl md:text-5xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">
  Why Adopt from{" "}
          <span className="bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            PawMart?
          </span>
        </h2>

        {/* Description */}
        <p className="text-gray-600 max-w-2xl mx-auto mb-16 text-lg md:text-xl">
          Adoption is not just a choice — it's a responsibility. At PawMart, we ensure
          every pet is cared for, safe, and matched with the right family.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((p, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500"
            >
              {/* Gradient Icon Circle */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-500 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500">
                  {React.cloneElement(p.icon, { className: "w-8 h-8 text-white" })}
                </div>
              </div>

              {/* Card Title */}
              <h3 className="font-semibold text-lg md:text-xl mb-3 text-gray-800">
                {p.title}
              </h3>

              {/* Card Description */}
              <p className="text-gray-600 text-sm md:text-base">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAdopt;
