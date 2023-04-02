
import CardSection from "../../Cards/CardsSection";
import Subscribe from "../../Forms/Subscribe/Subscribe";
import Hero from "../../Hero/Hero";
import CatalogSection from "../../CatalogSection/CatalogSection";
import BrandSection from "../../Brands/BrandSection";
import AboutSection from "../../AboutSection/AboutSection";
import BannersSection from "../../BannersSection/BannersSection";
import ReviewsSection from "../../ReviewsSection/ReviewsSection";

import "./../../../assets/styles/icomoon/icomoon.css";

export default function Home({data,addToBasket}) {

  const products = data?.products;
  const reviews = data?.reviews;

  return (
    <>
      <Hero />
      <CardSection products={products} addToBasket={addToBasket} />
      <CatalogSection />
      <BannersSection />
      <BrandSection />
      <AboutSection />
      <ReviewsSection reviews={reviews} />
      <Subscribe />
    </>
  );
}
