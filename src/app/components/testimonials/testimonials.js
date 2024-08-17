"use client";

import Headline from "../headline/headline";
import TestimonialSlider from "../testimonialCard/testimonialSlider";
import "./testimonials.css";

const Testimonials = () => {
  return (
    <section className="testimonial-section marginY-50">
      <Headline
        title="Testimonials"
        description="Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium"
        center
      />

      <TestimonialSlider/>
    </section>
  );
};

export default Testimonials;
