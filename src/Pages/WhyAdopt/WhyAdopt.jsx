// WhyAdopt.jsx
import React from "react";
import { Heart, PawPrint, ShieldCheck, Users } from "lucide-react";

const WhyAdopt = () => {
  const points = [
    {
      icon: <Heart size={36} />,
      title: "Give a Pet a Second Chance",
      desc: "Thousands of pets in Bangladesh are abandoned every year. Adoption helps save a life and gives them a loving home.",
    },
    {
      icon: <ShieldCheck size={36} />,
      title: "Verified & Health-Checked",
      desc: "All adoption listings on PawMart are reviewed to ensure pets are healthy, safe, and ready for a new family.",
    },
    {
      icon: <Users size={36} />,
      title: "Community Support",
      desc: "Our adopters’ community shares experiences, tips, and training guidance to help you care for your new friend.",
    },
    {
      icon: <PawPrint size={36} />,
      title: "Free & Ethical",
      desc: "Unlike buying, adoption is free and promotes ethical treatment of animals—no breeding or commercial exploitation.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">
          Why Adopt from <span className="text-blue-600">PawMart?</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Adoption is not just a choice — it's a responsibility. At PawMart, we ensure 
          every pet is cared for, safe, and matched with the right family.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((p, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition duration-300"
            >
              <div className="text-blue-600 mb-4 flex justify-center">
                {p.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
              <p className="text-gray-600 text-sm">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAdopt;
