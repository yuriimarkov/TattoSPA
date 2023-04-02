import { Button } from "../Buttons/Buttons";

export default function BasketCard({
  imageSrc,
  name,
  price,
  onDeleteFromBasket,
  count,
  className,
  handleDecrement,
  handleIncrement,
}) {
  return (
    <div className="product__item">
      <div className="item__top">
        <div className="item__image">
          <img src={`http://localhost:1337${imageSrc}`} alt={name} />
        </div>
        <div className="item__content">
          <span className="content__name">{name}</span>
          <span className="content__price">Ціна: {price}</span>
        </div>
      </div>
      <div className="item__bottom">
        <div className="item__btn-holder">
          <Button className={className} text="-" onClick={handleDecrement} />
          <span className="count">{count}</span>
          <Button className={className} text="+" onClick={handleIncrement} />
        </div>
        <div className="item__price">
          <span className="price__text">Вартість: {price * count}грн</span>
        </div>
      </div>
      <span className="delete" onClick={onDeleteFromBasket}></span>
    </div>
  );
}
