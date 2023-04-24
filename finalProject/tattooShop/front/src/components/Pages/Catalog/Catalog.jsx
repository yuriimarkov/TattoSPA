import { Button } from "../../Buttons/Buttons";
import ProductCard from "../../Cards/ProductCard/ProductCard";

import "./Catalog.scss";

export default function Catalog({ data, addToBasket }) {
  const products = data?.products;
  return (
    <div className="product__page">
      <div className="product__page--container">
        <div className="product__page-heading">
          <h2 className="heading__title">Каталог</h2>
        </div>
        <div className="product__page-nav">
          <ul className="nav__list-product">
            <li className="nav__item-product active">
              <span>Тату машинки</span>
            </li>
            <li className="nav__item-product">
              <span>Тату краски</span>
            </li>
            <li className="nav__item-product">
              <span>Тату иглы</span>
            </li>
            <li className="nav__item-product">
              <span>Тату держатели</span>
            </li>
          </ul>
        </div>
        <div className="product__page-products">
          <div className="products__filters">
            <span className="filters__icon icon-sliders"></span>
            <span className="filters__text">Фільтр</span>
          </div>
          <div className="products__holder">
            {products?.data.map((product) => (
              <ProductCard
                key={product.id}
                imageSrc={product.attributes.images.data.attributes.url}
                name={product.attributes.name}
                price={product.attributes.price}
                status={product.attributes.status}
                id={product.id}
                addToBasket={addToBasket}
              />
            ))}
          </div>
        </div>
        <Button text='Показати ще' className='btn btn__add' />
      </div>
    </div>
  );
}
