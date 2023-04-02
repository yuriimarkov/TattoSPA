
import { ReviewsSlider } from "../Sliders/Sliders";
import "./Reviews.scss";

export default function ReviewsSection({reviews}) {
  return (
    <section className="reviews">
      <div className="reviews__container">
        <div className="reviews__heading">
          <h2 className="heading__title">Відгуки</h2>
        </div>
        <ReviewsSlider reviews={reviews?.data} />
      </div>
    </section>
  );
}
