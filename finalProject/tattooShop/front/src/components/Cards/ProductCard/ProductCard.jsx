import { Button } from "../../Buttons/Buttons";

import './ProductCard.scss'

export default function ProductCard ({ imageSrc, id, name, price, status,addToBasket  }) {
        return (
          <div className="card__item" id="{id}" >
            <div className="card__icon">
              <span className="cat">{status}</span>
              <span className="favorite icon-favorite"></span>
            </div>
            <div className="item__image">
              <img src={`http://localhost:1337${imageSrc}`} alt={name} />
            </div>
            <div className="item__content">
              <span className="content__name">{name}</span>
              <span className="content__price">{price} грн</span>
            </div>
            <Button text='Додати в корзину' className='btn btn__add' onClick={() => addToBasket({ imageSrc, name, price,id })}/>
          </div>
        );
      }
