// PetHeroes.jsx
import React from "react";
import { PawPrint } from "lucide-react";

const heroes = [
  {
    name: "Ayesha Rahman",
    role: "Adopted: Golden Retriever",
    img: "https://i.ibb.co.com/ccdY3zMx/Lucid-Origin-Cinematic-photoreal-portrait-of-a-young-South-Asi-2.jpg",
    quote:
      "PawMart helped me find Bella — she changed my life. The adoption process was smooth and safe.",
  },
  {
    name: "Sajid Ahmed",
    role: "Rescuer & Foster Volunteer",
    img: "https://i.ibb.co.com/ccKmzQjy/Lucid-Origin-Highdetail-portrait-of-a-South-Asian-man-Sajid-Ah-3.jpg",
    quote:
      "I rescue stray puppies and PawMart gives them visibility so they can get a loving home.",
  },
  {
    name: "Munni Akter",
    role: "Adopted: Persian Cat",
    img: "https://i.ibb.co.com/RM65DNR/Lucid-Origin-Warm-photoreal-portrait-of-a-South-Asian-woman-Mu-2.jpg",
    quote:
      "Adoption is the best decision I made. PawMart’s support team guided me through every step.",
  },
  {
    name: "Rezaul Karim",
    role: "Animal Caregiver",
    img: "https://i.ibb.co.com/ccG7P4Fj/Lucid-Origin-Documentarystyle-photoreal-portrait-of-a-South-As-2.jpg",
    quote:
      "I help injured street pets recover. PawMart connects them with families who truly care.",
  },
];

const PetHeroes = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">
          Meet Our <span className="text-blue-600">Pet Heroes</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          These incredible individuals adopted, rescued, or cared for pets through 
          PawMart — making the world kinder, one pet at a time.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {heroes.map((h, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-6 shadow hover:shadow-xl transition duration-300"
            >
              <img
                src={h.img}
                alt={h.name}
                className="w-28 h-28 mx-auto rounded-full object-cover mb-4 border-4 border-blue-100"
              />
              <h3 className="text-lg font-semibold">{h.name}</h3>
              <p className="text-blue-600 text-sm mb-3">{h.role}</p>
              <p className="text-gray-600 text-sm italic">“{h.quote}”</p>

              <div className="flex justify-center mt-4 text-blue-600">
                <PawPrint size={20} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PetHeroes;
