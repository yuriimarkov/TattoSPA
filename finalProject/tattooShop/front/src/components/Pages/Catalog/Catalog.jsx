import { useState } from "react";
import { Button } from "../../Buttons/Buttons";
import ProductCard from "../../Cards/ProductCard/ProductCard";

import "./Catalog.scss";

export default function Catalog({ data, addToBasket }) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const products = data?.products;
  const categories = new Set(
    products?.data.map((product) => product.attributes.category)
  );

  const productsToDisplay =
    selectedCategory === "all"
      ? products?.data
      : products?.data.filter(
          (product) => product.attributes.category === selectedCategory
        );
  return (
    <div className="product__page">
      <div className="product__page--container">
        <div className="product__page-heading">
          <h2 className="heading__title">Каталог</h2>
        </div>
        <div className="product__page-nav">
          <ul className="nav__list-product">
            <li
              key="all"
              className={`nav__item-product ${
                selectedCategory === "all" ? "active" : ""
              }`}
              data-category="all"
              onClick={() => setSelectedCategory("all")}
            >
              <span>Всі</span>
            </li>
            {[...categories].map((category) => (
              <li
                key={category}
                className={`nav__item-product ${
                  selectedCategory === category ? "active" : ""
                }`}
                data-category={category}
                onClick={() => setSelectedCategory(category)}
              >
                <span>{category}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="product__page-products">
          <div className="products__filters">
            <span className="filters__icon icon-sliders"></span>
            <span className="filters__text">Фільтр</span>
          </div>
          <div className="products__holder">
            {productsToDisplay.map((product) => (
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
        <Button text="Показати ще" className="btn btn__add" />
      </div>
    </div>
  );
}
