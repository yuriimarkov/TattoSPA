import { ButtonLink } from "../Buttons/Buttons"

import cardImg1 from './../../assets/images/4.svg'
import cardImg2 from './../../assets/images/Rectangle66.svg'
import cardImg3 from './../../assets/images/partner-4.svg'
import cardImg4 from './../../assets/images/partner5.svg'
import cardImg5 from './../../assets/images/partner6.svg'
import cardImg6 from './../../assets/images/Rectangle61.svg'

import './BrandSection.scss'

export default function BrandSection () {
    return (
        <section className="brands">
        <div className="brands__container">
          <div className="brands__heading">
            <h2 className="heading__title">Наші партнери</h2>
            <ButtonLink text="Дивитись усі" url="/brands" className='btn banner__btn' />
          </div>
          <div className="brand__card">
            <div className="item__img-holder">
              <img src={cardImg1} alt="" />
            </div>
            <div className="item__img-holder">
              <img src={cardImg2} alt="" />
            </div>
            <div className="item__img-holder">
              <img src={cardImg3} alt="" />
            </div>
            <div className="item__img-holder">
              <img src={cardImg4} alt="" />
            </div>
            <div className="item__img-holder">
              <img src={cardImg5} alt="" />
            </div>
            <div className="item__img-holder">
              <img src={cardImg6} alt="" />
            </div>
          </div>
        </div>
      </section>
    )
}