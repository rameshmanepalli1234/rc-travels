import { testimonialUtils } from "@utils";
import TestimonialCard from "@components/TestimonialCard";
import { StyledTestimonials } from "./style";

const Testimonials = () => {
  return (
    <StyledTestimonials data-testid="testimonials">
      <h1 className="testimonials-title">TESTIMONIALS</h1>
      <label className="testimonials-label">What Our Customers Say</label>
      <div className="testimonials-cards-container">
        {testimonialUtils.map((item) => (
          <TestimonialCard key={item.id} item={item} />
        ))}
      </div>
    </StyledTestimonials>
  );
};

export default Testimonials;
