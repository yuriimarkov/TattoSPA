import { ButtonLink } from "../Buttons/Buttons"
import cardImg4 from "./../../assets/images/5.jpg"

import "./AboutSection.scss";

export default function AboutSection () {
    return (
        <section className="about">
        <div className="about__container">
          <div className="about__img">
            <img src={cardImg4} alt="" />
          </div>
          <div className="about__content">
            <h2 className="content__heading">Тату магазин Mr. Driskell</h2>
            <div className="content__text">
              <div className="text__holder">
                <p>Вітаємо вас у Tattoo Mall — у нашому тату магазині збираються ентузіасти індустрії, професійні майстри та новачки, які тільки роблять перші кроки в тату мистецтві. Ми знаємо, наскільки важливо грамотно і точно підібрати інструменти для продуктивних тату сеансів, і допомагаємо швидко знайти те, що допоможе їх зробити саме такими.</p>
              </div>
              <div className="text__holder">
                <p>У нашому асортименті не просто тату обладнання, це буквально ціла команда з грамотних і дійсно ефективних помічників на вашому робочому столі. Пройшовши етап довгих розробок і незліченних тестів під пильним поглядом вітчизняних машинобудівників, космецевтів і брендів зі світовим ім'ям, ці товари напрацьовували досвід і щодня ставали кращими, щоб показати, на що вони здатні, і допомогти.</p>
              </div>
            </div>
            <ButtonLink  text='Дивитись каталог' url='/about' className='btn catalog__btn' />
          </div>
        </div>
      </section>
    )
}