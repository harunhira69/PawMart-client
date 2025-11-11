// PetHeroes.jsx
import React from "react";
import { PawPrint } from "lucide-react";

const heroes = [
  {
    name: "Ayesha Rahman",
    role: "Adopted: Golden Retriever",
    img: "https://i.ibb.co/ccdY3zMx/Lucid-Origin-Cinematic-photoreal-portrait-of-a-young-South-Asi-2.jpg",
    quote:
      "PawMart helped me find Bella — she changed my life. The adoption process was smooth and safe.",
  },
  {
    name: "Sajid Ahmed",
    role: "Rescuer & Foster Volunteer",
    img: "https://i.ibb.co/ccKmzQjy/Lucid-Origin-Highdetail-portrait-of-a-South-Asian-man-Sajid-Ah-3.jpg",
    quote:
      "I rescue stray puppies and PawMart gives them visibility so they can get a loving home.",
  },
  {
    name: "Munni Akter",
    role: "Adopted: Persian Cat",
    img: "https://i.ibb.co/RM65DNR/Lucid-Origin-Warm-photoreal-portrait-of-a-South-Asian-woman-Mu-2.jpg",
    quote:
      "Adoption is the best decision I made. PawMart’s support team guided me through every step.",
  },
  {
    name: "Rezaul Karim",
    role: "Animal Caregiver",
    img: "https://i.ibb.co/ccG7P4Fj/Lucid-Origin-Documentarystyle-photoreal-portrait-of-a-South-As-2.jpg",
    quote:
      "I help injured street pets recover. PawMart connects them with families who truly care.",
  },
];

const PetHeroes = () => {
  return (
    <section className="py-20">
      <div className=" px-6 text-center">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
          Meet Our{" "}
          <span className="bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Pet Heroes
          </span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-16 text-lg md:text-xl">
          These incredible individuals adopted, rescued, or cared for pets through
          PawMart — making the world kinder, one pet at a time.
        </p>

        {/* Hero Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {heroes.map((h, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500"
            >
              {/* Gradient Circle Avatar */}
              <div className="w-32 h-32 mx-auto rounded-full p-1 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg hover:scale-105 transform transition-transform duration-500">
                <img
                  src={h.img}
                  alt={h.name}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>

              {/* Name and Role */}
              <h3 className="text-lg md:text-xl font-semibold mt-4 text-gray-800">{h.name}</h3>
              <p className="text-sm md:text-base text-indigo-600 mb-3">{h.role}</p>

              {/* Quote */}
              <p className="text-gray-600 text-sm md:text-base italic">“{h.quote}”</p>

              {/* Paw Icon */}
<div className="flex justify-center mt-4">
  <PawPrint className="w-6 h-6 text-indigo-500 stroke-[2.5]" />
</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PetHeroes;
