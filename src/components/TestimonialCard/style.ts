import styled from "styled-components";

const ANIMATION_DURATION = "0.45s";
const ANIMATION_EASING = "cubic-bezier(0.4, 0, 0.2, 1)";

export const StyledTestimonialCard = styled.article<{
  $isExpanded: boolean;
  $bodyMaxHeight: number;
  $animateExpand: boolean;
}>`
  background: #ffffff;
  padding: 22px 20px 18px;
  width: 350px;
  max-width: 100%;
  min-height: 250px;
  border-radius: 12px;
  box-shadow: ${({ $isExpanded }) =>
    $isExpanded
      ? "0 12px 28px rgba(79, 189, 57, 0.22)"
      : "0 4px 14px rgba(0, 0, 0, 0.1)"};
  text-align: left;
  display: flex;
  flex-direction: column;
  transform: ${({ $isExpanded }) =>
    $isExpanded ? "translateY(-2px)" : "translateY(0)"};
  transition: ${({ $animateExpand }) =>
    $animateExpand
      ? `box-shadow ${ANIMATION_DURATION} ${ANIMATION_EASING}, transform ${ANIMATION_DURATION} ${ANIMATION_EASING}`
      : "none"};

  .testimonial-card-body {
    overflow: hidden;
    max-height: ${({ $bodyMaxHeight }) =>
      $bodyMaxHeight > 0 ? `${$bodyMaxHeight}px` : "none"};
    transition: ${({ $animateExpand }) =>
      $animateExpand
        ? `max-height ${ANIMATION_DURATION} ${ANIMATION_EASING}`
        : "none"};
  }

  .testimonial-card-text {
    margin: 0;
    font-size: 15px;
    line-height: 1.55;
    color: #333;
  }

  .testimonial-card-toggle {
    align-self: flex-start;
    margin-top: 10px;
    padding: 0;
    border: none;
    background: none;
    font-size: 14px;
    font-weight: 700;
    color: #4fbd39;
    cursor: pointer;
    text-decoration: underline;
    text-underline-offset: 3px;
    transition: color 0.2s ease;

    &:hover {
      color: #3da82c;
    }

    &:focus-visible {
      outline: 2px solid #4fbd39;
      outline-offset: 2px;
      border-radius: 4px;
    }
  }

  .testimonial-card-user-info {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    margin-top: auto;
    padding-top: 18px;
  }

  .testimonial-card-image {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    flex-shrink: 0;
  }

  .testimonial-card-name {
    margin: 0;
    font-size: 20px;
    font-weight: 600;
    color: #1a1a1a;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 18px 16px 16px;

    .testimonial-card-name {
      font-size: 18px;
    }
  }
`;
