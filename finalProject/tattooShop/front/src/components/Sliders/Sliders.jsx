import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import ProductCard from "../Cards/ProductCard/ProductCard";
import { ButtonLink } from "../Buttons/Buttons";

import "swiper/css";
import "swiper/css/pagination";


export function ReviewsSlider ({reviews}){
  const settings = {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      clickable: true,
    },
    breakpoints: {
      768: {
        spaceBetween: 20,
        centeredSlides: true
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
    modules: [Autoplay, Pagination],
    className: "mySwiper",
  };
  return (
    <Swiper {...settings}>
      {reviews?.map(review => (
        <SwiperSlide key={review.id}>
          <div className="reviews__content">
            <div className="content__avatar">
              <img src={`http://localhost:1337${review.attributes.avatar.data.attributes.url}`} alt="" />
            </div>
            <div className="content__text-holder">
              <p className="content__text">{review.attributes.description}</p>
            </div>
            <div className="content__social">
              <span className="social__icon icon-Telegram"></span>
              <span className="social__text">{review.attributes.userName}</span>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export function HeroSlider() {
  const settings = {
    slidesPerView: 1,
    spaceBetween: 20,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      clickable: true,
    },
    modules: [Autoplay, Pagination],
    className: "hero__container",
  };
  return (
    <Swiper {...settings}>
      <SwiperSlide>
        <div className="hero__content">
          <div className="hero__heading">
            <h1 className="heading__title">Кращі товари у світі татуювань</h1>
            <div className="heading__text">
              <p>Обладнання та розхідники для найяскравіших і якісних робіт</p>
            </div>
          </div>
          <ButtonLink text='Дивитись каталог' url='/catalog' className='btn hero__btn' />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="hero__content">
          <div className="hero__heading">
            <h1 className="heading__title">Кращі товари у світі татуювань</h1>
            <div className="heading__text">
              <p>Обладнання та розхідники для найяскравіших і якісних робіт</p>
            </div>
          </div>
          <ButtonLink text='Дивитись каталог' url='/catalog' className='btn hero__btn' />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export function ProductSlider({ products,addToBasket }) {
  const settings = {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        centeredSlidesBounds: true,
        centeredSlides: true,
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
    modules: [Autoplay, Pagination],
    className: "mySwiper",
  };
  return (
    <Swiper {...settings}>
      {products?.data.map((product) => (
        <SwiperSlide key={product.id}>
          <ProductCard
          key={product.id}
            imageSrc={product.attributes.images.data.attributes.url}
            name={product.attributes.name}
            price={product.attributes.price}
            status={product.attributes.status}
            id={product.id}
            addToBasket={addToBasket}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
