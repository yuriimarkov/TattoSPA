import { HeroSlider } from "../Sliders/Sliders";

import './Hero.scss'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__container">
        <HeroSlider />
      </div>
    </section>
  );
}
