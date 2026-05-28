import { useLayoutEffect, useRef, useState } from "react";
import { StyledTestimonialCard } from "./style";
import { TestimonialCardProps } from "./types";
import testimonialUserProfile from "@assets/testimonialUserProfile.png";

const TestimonialCard = ({ item }: TestimonialCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [bodyMaxHeight, setBodyMaxHeight] = useState(0);
  const [animateExpand, setAnimateExpand] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  const canExpand = item.fullText.length > item.summary.length;
  const displayText = isExpanded ? item.fullText : item.summary;

  useLayoutEffect(() => {
    if (textRef.current) {
      setBodyMaxHeight(textRef.current.scrollHeight);
    }
  }, [displayText, isExpanded]);

  const handleToggle = (): void => {
    if (isExpanded) {
      setAnimateExpand(false);
      setIsExpanded(false);
      return;
    }

    setAnimateExpand(true);
    if (textRef.current) {
      setBodyMaxHeight(textRef.current.scrollHeight);
    }

    requestAnimationFrame(() => {
      setIsExpanded(true);
      requestAnimationFrame(() => {
        if (textRef.current) {
          setBodyMaxHeight(textRef.current.scrollHeight);
        }
      });
    });
  };

  return (
    <StyledTestimonialCard
      data-testid={`card-testimonial-${item.id}`}
      $isExpanded={isExpanded}
      $bodyMaxHeight={bodyMaxHeight}
      $animateExpand={animateExpand}
    >
      <div className="testimonial-card-body">
        <p ref={textRef} className="testimonial-card-text">
          &ldquo;{displayText}&rdquo;
        </p>
      </div>

      {canExpand && (
        <button
          type="button"
          className="testimonial-card-toggle"
          aria-expanded={isExpanded}
          onClick={handleToggle}
          data-testid={`button-testimonial-more-${item.id}`}
        >
          {isExpanded ? "See less" : "See more"}
        </button>
      )}

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
