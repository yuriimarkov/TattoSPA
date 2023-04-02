import { ButtonLink } from "../Buttons/Buttons";

import './BannerSection.scss'

export default function BannersSection() {
  return (
    <section className="banners">
      <div className="banners__container">
        <div className="banners__item">
          <div className="item__heading">
            <h3 className="heading__title">Краски Lip Nitn</h3>
          </div>
          <ButtonLink text="Дивитись каталог" url="/catalog" className='btn banner__btn' />
        </div>
        <div className="banners__item">
          <div className="item__heading">
            <h3 className="heading__title">Краски Lip Nitn</h3>
          </div>
          <ButtonLink text="Дивитись каталог" url="/catalog" className='btn banner__btn' />
        </div>
      </div>
    </section>
  );
}
