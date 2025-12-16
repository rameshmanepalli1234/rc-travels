import styled from "styled-components";

export const StyledTestimonialCard = styled.div`
  background: white;
  padding: 20px;
  min-height: 250px;
  width: 350px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;

  .testimonial-card-image {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  .testimonial-card-user-info {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
  }

  .testimonial-card-name {
    font-size: 25px;
    font-weight: 500;
    color: #000000;
  }
`;
