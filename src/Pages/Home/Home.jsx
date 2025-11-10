import React from "react";
import Category from "../Category/Category";
import CategoryProducts from "../CategoryProducts/CategoryProducts";


import PetHeroes from "../PetHeroes/PetHeroes";
import WhyAdopt from "../WhyAdopt/WhyAdopt";
import RecentListings from "../RecentListings/RecentListings";
import BannerSection from "../BannerSection/BannerSection";



const Home = () => {
  return (
    <div>
    <BannerSection></BannerSection>
      <Category></Category>
     
      <RecentListings />
      <WhyAdopt />
      <PetHeroes />
    </div>
  );
};

export default Home;
