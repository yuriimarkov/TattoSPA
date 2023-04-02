import "./InfoUser.scss";

export default function InfoUser() {
  return (
    <div className="form__info--user">
      <h3 className="form__title">01. Інформація про одержувача</h3>
      <form className="form">
        <div className="form__input-holder">
          <label htmlFor="input__name" className="label">
            ПІБ
          </label>
          <input
            type="text"
            className="input"
            id="input__name"
            placeholder="Іванов Іван Іванович"
          />
        </div>
        <div className="form__input-holder">
          <label htmlFor="input__phone" className="label">
            Телефон
          </label>
          <input
            type="number"
            className="input"
            id="input__phone"
            placeholder="+380988090900"
          />
        </div>
        <div className="form__input-holder">
          <label htmlFor="input__email" className="label">
            Email
          </label>
          <input
            type="text"
            className="input"
            id="input__email"
            placeholder="Email@gmail.com"
          />
        </div>
      </form>
    </div>
  );
}
