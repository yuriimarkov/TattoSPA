import React, { useState } from "react";
import { Button } from "../../Buttons/Buttons";

import './Subscribe.scss'


export default function Subscribe() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !name || !isChecked) {
      alert(
        "Please fill out all fields and agree to the data processing policy."
      );
      return;
    }

    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0AData processing agreement: ${
      isChecked ? "Yes" : "No"
    }`;
    const subject = "New subscription from your website";

    window.location.href = `mailto:yurko.markov@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleCheckboxChange(e) {
    setIsChecked(e.target.checked);
  }

  return (
    <section className="subscribe">
      <div className="subscribe__container">
        <div className="subscribe__heading">
          <h2 className="heading__title">Дізнайтесь першими</h2>
          <div className="heading__text">
            <p>
              Підпишіться на нову розсилку з найцікавішими новинами та акціями
            </p>
          </div>
        </div>
        <div className="subscribe__form-holder">
          <form onSubmit={handleSubmit} className="form">
            <div className="form__item">
              <div className="form__input-holder">
                <label htmlFor="input__email" className="label">
                  Ел.пошта
                </label>
                <input
                  type="email"
                  className="input"
                  id="input__email"
                  placeholder="Email@gmail.com"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div className="form__input-holder">
                <label htmlFor="input__name" className="label">
                  Ваше Ім'я
                </label>
                <input
                  type="text"
                  className="input"
                  id="input__name"
                  placeholder="Введіть ваше ім'я"
                  value={name}
                  onChange={handleNameChange}
                />
              </div>
            </div>
            <div className="form__item">
              <div className="form__input-holder checkbox">
                <input
                  type="checkbox"
                  className="input__checkbox"
                  id="input__checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <label
                  htmlFor="input__checkbox"
                  className="label label__checkbox"
                >
                  Ви погоджуєтесь на обробку ваших персональних даних
                </label>
              </div>
              <div className="hero__btn-holder">
              <Button text='Підписатись' className='btn hero__btn' />
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
