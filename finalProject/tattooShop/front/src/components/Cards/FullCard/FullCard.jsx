import { Button } from "../../Buttons/Buttons";
import "./FullCard.scss";

export default function FullCard({ data, addToBasket }) {
  let imageSrc = data?.images.data.attributes.url;
  let name = data?.name;
  let price = data?.price;
  let id = data?.id;
  return (
    <div className="full__card">
      <div className="full__card--container">
        <h2 className="full__card--title">{name}</h2>
        <div className="full__card--info">
          <div className="info__img">
            <img
              src={`http://localhost:1337${imageSrc}`}
            />
            <div className="info__img--icon">
              <span className="cat">{data?.status}</span>
              <span className="favorite icon-favorite"></span>
            </div>
          </div>
          <div className="info__content">
            <div className="content__price--info">
              <strong className="price">{price} грн</strong>
              <span className="available"><b>Наявність:</b> {data?.available}</span>
            </div>
            <div className="content__text">
              <span>Короткий опис:</span>
              <p>{data?.shortDescription}</p>
            </div>
            <Button text="Додати в корзину" className="btn btn__add"  onClick={() => addToBasket({ imageSrc, name, price,id })}/>
          </div>
        </div>
        <div className="full__card--about">
          <div className="about__description">
            <strong>Опис</strong>
            <p>{data?.description}</p>
          </div>
          <div className="about__features">
            <strong>Характеристики</strong>
            <div className="features__item">
              <span className="item__name">Хід голки</span>
              <span className="item__feature">{data?.recognition}</span>
            </div>
            <div className="features__item">
              <span className="item__name">Робочий вольтаж</span>
              <span className="item__feature">До 12 V</span>
            </div>
            <div className="features__item">
              <span className="item__name">Роз'єм</span>
              <span className="item__feature">RCA</span>
            </div>
            <div className="features__item">
              <span className="item__name">Виробник</span>
              <span className="item__feature">{data?.maker}</span>
            </div>
            <div className="features__item">
              <span className="item__name">Тип</span>
              <span className="item__feature">{data?.type}</span>
            </div>
            <div className="features__item">
              <span className="item__name">Призначення</span>
              <span className="item__feature">{data?.recognition}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
