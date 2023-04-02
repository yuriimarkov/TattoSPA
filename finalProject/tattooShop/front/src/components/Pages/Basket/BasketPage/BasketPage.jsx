import { useState, useEffect } from "react";

import BasketCard from "../../../Cards/BasketCards";
import InfoUser from "../../../Forms/InfoUser/InfoUser";

import "./BasketPage.scss";
import InfoHome from "../../../Forms/InfoHome/InfoHome";
import { Button } from "../../../Buttons/Buttons";

export function BasketPage({ basketItems }) {
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    const storedBasket = JSON.parse(localStorage.getItem("basket") || "[]");
    setBasket(storedBasket);
  }, []);

  const totalQuantity = basket?.reduce((sum, item) => sum + item.count, 0);
  const total = basket.reduce((acc, item) => acc + item.price * item.count, 0);

  const onDeleteFromBasket = (item) => {
    const updatedBasket = basket.filter(
      (basketItem) => basketItem.id !== item.id
    );
    setBasket(updatedBasket);

    const basketData = JSON.parse(localStorage.getItem("basket"));
    const updatedBasketData = basketData.filter(
      (basketItem) => basketItem.id !== item.id
    );
    localStorage.setItem("basket", JSON.stringify(updatedBasketData));
  };

  const handleIncrement = (item) => {
    const updatedBasket = basket.map((basketItem) => {
      if (basketItem.id === item.id) {
        return {
          ...basketItem,
          count: basketItem.count + 1,
        };
      }
      return basketItem;
    });
    localStorage.setItem("basket", JSON.stringify(updatedBasket));
    setBasket(updatedBasket);
  };

  const handleDecrement = (item) => {
    const updatedBasket = basket
      .map((basketItem) => {
        if (basketItem.id === item.id && basketItem.count > 1) {
          return {
            ...basketItem,
            count: basketItem.count - 1,
          };
        } else if (basketItem.id === item.id && basketItem.count === 1) {
          return null;
        }
        return basketItem;
      })
      .filter((item) => item !== null);
    localStorage.setItem("basket", JSON.stringify(updatedBasket));
    setBasket(updatedBasket);
  };

  console.log(basket);
  return (
    <div className="basket__page">
      <div className="basket__container">
        <div className="product__heading">
          <h2 className="heading__title">Корзина</h2>
        </div>
        <div className="basket__product">
          {basket?.map((item) => {
            return (
              <BasketCard
                key={item.id}
                imageSrc={item.imageSrc}
                name={item.name}
                price={item.price}
                count={item.count}
                className="btn banner__btn"
                handleIncrement={() => handleIncrement(item)}
                handleDecrement={() => handleDecrement(item)}
                onDeleteFromBasket={() => onDeleteFromBasket(item)}
              />
            );
          })}
        </div>
        <div className="basket__forms">
          <InfoUser />
          <InfoHome />
        </div>
        <div className="basket__order--info">
          <div className="order__delivery--holder">
            <div className="delivery-item">
              <h3 className="item__title">Оплата</h3>
              <div className="items__radio">
                <div className="radio__item">
                  <label htmlFor="online" className="label">
                    Онлайн на сайті
                  </label>
                  <input type="radio" name="payment" id="online" />
                </div>
                <div className="radio__item">
                  <label htmlFor="offline" className="label">
                    Наложенний платіж
                  </label>
                  <input type="radio" name="payment" id="offline" />
                </div>
                <div className="radio__item">
                  <label htmlFor="internet" className="label">
                    Безготівковий розрахунок
                  </label>
                  <input type="radio" name="payment" id="internet" />
                </div>
              </div>
            </div>
            <div className="delivery-item">
              <h3 className="item__title">Доставка</h3>

              <div className="items__radio">
                <div className="radio__item">
                  <label htmlFor="newpost" className="label">
                    Нова Пошта
                  </label>
                  <input type="radio" name="delivery" id="newpost" />
                </div>
                <div className="radio__item">
                  <label htmlFor="ukrpost" className="label">
                    Укрпошта
                  </label>
                  <input type="radio" name="delivery" id="ukrpost" />
                </div>
                <div className="radio__item">
                  <label htmlFor="meest" className="label">
                    Meest
                  </label>
                  <input type="radio" name="delivery" id="meest" />
                </div>
              </div>
            </div>
          </div>
          <div className="order__price--info">
            <div className="price__info--content">
              <div className="content__item">
                <span>Усього одиниць товару:</span>
                <span>{totalQuantity}</span>
              </div>
              <div className="content__item">
                <span>Загальна знижка:</span>
                <span>Coming Soon</span>
              </div>
              <div className="content__item total">
                <span>Разом:</span>
                <span>{total} грн</span>
              </div>
            </div>
          </div>
          <div className="order__buttons">
            <Button className="btn hero__btn" text="Оформити замовлення" />
            <Button className="btn catalog__btn" text="Купити за 1 клік" />
            <div className="btn__holder">
              <input type="checkbox" name="checkbox" id="checkbox" />
              <label htmlFor="checkbox" className="label label__checkbox">
                Згодний з публічною офертою та опрацюванням персональних даних
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
