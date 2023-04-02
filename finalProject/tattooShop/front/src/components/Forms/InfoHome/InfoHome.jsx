import "./InfoHome.scss";

export default function InfoHome() {
  return (
    <div className="form__info--home">
      <h3 className="form__title">02. Адреса доставки </h3>
      <form className="form">
          <div className="form__item">
          <div className="form__input-holder">
            <label htmlFor="input__town" className="label">
              Місто
            </label>
            <input
              type="text"
              className="input"
              id="input__town"
              placeholder="Київ"
            />
          </div>
          <div className="form__input-holder">
            <label htmlFor="input__street" className="label">
              Вулиця, будинок
            </label>
            <input
              type="text"
              className="input"
              id="input__street"
              placeholder="вул.Степана Бандери буд.48"
            />
          </div>
          </div>
          <div className="form__item">
          <div className="form__input-holder row">
            <label htmlFor="input__office" className="label">
              Квартира/ офіс
            </label>
            <input
              type="number"
              className="input"
              id="input__office"
              placeholder="555"
            />
          </div>
          <div className="form__input-holder row">
            <label htmlFor="input__entrance" className="label">
              Під'їзд
            </label>
            <input
              type="number"
              className="input"
              id="input__entrance"
              placeholder="1"
            />
          </div>
          </div>
          <div className="form__item">
          <div className="form__input-holder row">
            <label htmlFor="input__floor" className="label">
              Етаж
            </label>
            <input
              type="number"
              className="input"
              id="input__floor"
              placeholder="6"
            />
          </div>
          <div className="form__input-holder row">
            <label htmlFor="input__code" className="label">
              Домофон
            </label>
            <input
              type="number"
              className="input"
              id="input__code"
              placeholder="380"
            />
          </div>
          </div>
      </form>
    </div>
  );
}
