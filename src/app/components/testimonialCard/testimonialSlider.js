"use client";
import React from "react";
import Slider from "react-slick";
import TestimonialCard from "./testimonialCard";

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const testimonials = [
    {
      message: "This product is amazing! It has changed my life.",
      name: "John Doe",
      designation: "CEO, Example Company",
    },
    {
      message: "Fantastic service and support. Highly recommend!",
      name: "Jane Smith",
      designation: "Marketing Manager, Example Company",
    },
    {
      message: "Great experience from start to finish.",
      name: "Mike Johnson",
      designation: "Product Manager, Example Company",
    },
  ];

  return (
    <div className="slider-section">
      {/* <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </Slider> */}
      <TestimonialCard  />
      
    </div>
  );
};

export default TestimonialSlider;
