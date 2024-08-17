import Image from "next/image";
import testimonial from "@/image/testimonial.jpeg";
import "./testimonialCard.css";

function TestimonialCard() {
  return (
    <div className="testimonial-card-container">
      <div>
      <Image
        className="testimonial-img"
        src={testimonial}
        width={235}
        height={234}
        alt="Picture of the author"
      />
      </div>
      <div className="testimonial-detail-container">
        <p className="testimonial-description">
          “Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan.
          Id leo urna velit neque mattis id tellus arcu condimentum. Augue
          dictum dolor elementum convallis dignissim malesuada commodo ultrices.
          “
        </p>
        <p className="testimonial-author">Name</p>
        <p className="author-position">CEO</p>
      </div>
    </div>
  );
}
export default TestimonialCard;
