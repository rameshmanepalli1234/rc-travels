import { StyledTestimonialCard } from "./style";
import { TestimonialCardProps } from "./types";
import testimonialUserProfile from "@assets/testimonialUserProfile.png";

const TestimonialCard = ({ item }: TestimonialCardProps) => {
  return (
    <StyledTestimonialCard data-testid="testimonial-card">
      <div className="testimonial-card-summary">"{item.summary}"</div>
      <div className="testimonial-card-user-info">
        <img
          src={testimonialUserProfile}
          alt={item.name}
          className="testimonial-card-image"
        />
        <h4 className="testimonial-card-name">{item.name}</h4>
      </div>
    </StyledTestimonialCard>
  );
};

export default TestimonialCard;
