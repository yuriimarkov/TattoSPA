import { ButtonLink } from "../Buttons/Buttons";

import cardImg11 from "./../../assets/images/11.jpg";
import cardImg12 from "./../../assets/images/image12.jpg";
import cardImg13 from "./../../assets/images/image15.jpg";
import cardImg2 from "./../../assets/images/2.jpg";

import './CatalogSection.scss';


export default function CatalogSection () {
    return (
        <section className="catalog">
        <div className="catalog__container">
          <h2 className="catalog__title">Каталог</h2>
          <div className="catalog__card">
            <div className="catalog__item">
              <h3 className="item__title">Тату набори</h3>
              <div className="item__img">
                <img src={cardImg2} alt="img" />
              </div>
            </div>
            <div className="catalog__item">
              <h3 className="item__title">Тату набори</h3>
              <div className="item__img">
                <img src={cardImg11} alt="img" />
              </div>
            </div>
            <div className="catalog__item">
              <h3 className="item__title">Тату набори</h3>
              <div className="item__img">
                <img src={cardImg11} alt="img" />
              </div>
            </div>
            <div className="catalog__item">
              <h3 className="item__title">Тату набори</h3>
              <div className="item__img">
                <img src={cardImg11} alt="img" />
              </div>
            </div>
            <div className="catalog__item">
              <h3 className="item__title">Тату набори</h3>
              <div className="item__img">
                <img src={cardImg12} alt="img" />
              </div>
            </div>
            <div className="catalog__item">
              <h3 className="item__title">Тату набори</h3>
              <div className="item__img">
                <img src={cardImg13} alt="img" />
              </div>
            </div>
          </div>
          <ButtonLink  text='Дивитись каталог' url='/catalog' className='btn catalog__btn' />
        </div>
      </section>
    )
}