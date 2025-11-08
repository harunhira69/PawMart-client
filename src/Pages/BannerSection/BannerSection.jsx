import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { motion } from "framer-motion";
import CategorySection from "../Category/Category";

const slides = [
  {
    id: 1,
    title: "Find Your Furry Friend Today!",
    subtitle: "Browse pets for adoption or find the perfect pet product.",
    img: "https://i.ibb.co.com/v44GBGXp/Lucid-Origin-A-happy-dog-and-a-playful-cat-in-a-sunny-backyard-3.jpg",
  },
  {
    id: 2,
    title: "Adopt, Don’t Shop — Give a Pet a Home.",
    subtitle: "Help pets find loving homes and bring joy to your life.",
    img: "https://i.ibb.co.com/LzV1djFr/Lucid-Origin-A-young-couple-adopting-a-small-puppy-at-a-cozy-a-2.jpg",
  },
  {
    id: 3,
    title: "Because Every Pet Deserves Love and Care.",
    subtitle: "Join our community and share happiness with pets.",
    img: "https://i.ibb.co.com/gM4sYm4c/Lucid-Origin-A-happy-pet-owner-cuddling-a-golden-retriever-and-3.jpg",
  },
  {
    id: 4,
    title: "Playtime Brings Happiness.",
    subtitle: "Watch your pets thrive with fun and care every day.",
    img: "https://i.ibb.co.com/jvSdGCMB/Lucid-Origin-Two-playful-dogs-running-in-a-green-park-with-col-2.jpg",
  },
    {
    id: 4,
    title: "Pets and Their Families.",
    subtitle: "Build unforgettable memories with your furry friends.",
    img: "https://i.ibb.co.com/6RfsMybH/Lucid-Origin-A-family-parents-and-kids-playing-with-a-cat-and-0.jpg",
  },
];

const HeroSlider = () => {
  return (
    <div className="relative w-full rounded-2xl overflow-hidden shadow-xl">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        effect="fade"
        loop={true}
        className="h-[550px]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              {/* Background Image */}
              <img
                src={slide.img}
                alt={slide.title}
                className="w-full h-full object-cover brightness-75 transition-all duration-700 hover:scale-105"
              />

              {/* Subtle Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-black/10"></div>

              {/* Text Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-white text-4xl sm:text-5xl font-extrabold mb-3 drop-shadow-lg"
                >
                  {slide.title}
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="text-gray-200 text-lg sm:text-xl max-w-2xl mx-auto mb-6 leading-relaxed"
                >
                  {slide.subtitle}
                </motion.p>

                <motion.button
                  whileHover={{ scale: 1.07 }}
                  whileTap={{ scale: 0.96 }}
                  className="px-6 py-3 rounded-full bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold shadow-md hover:shadow-lg transition-all tracking-wide"
                >
                  Explore Now
                </motion.button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div>
        <CategorySection></CategorySection>
      </div>
    </div>

  );
};

export default HeroSlider;
