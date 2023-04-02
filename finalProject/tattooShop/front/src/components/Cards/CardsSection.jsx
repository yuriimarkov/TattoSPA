
import ProductNavigation from "./ProductNavigation";
import { ProductSlider } from "../Sliders/Sliders";

import './CardsSection.scss'

export default function CardSection({products, addToBasket}) {


  return (
    <section className="card">
      <div className="card__container">
        <ProductNavigation />
        <div className="card__holder">
        <ProductSlider products={products} addToBasket={addToBasket}/>
        </div>
      </div>
    </section>
  );
}
