import styled from "styled-components";
import footerIMG from "../../assets/footerImage.jpg";

export const StyledFooter = styled.div`
  /* height: 600px;
  width: 100%;
  background-image: url(${footerIMG});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; */

  /* position: relative; */
  min-height: 400px;
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${footerIMG});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  color: rgba(255, 255, 255, 0.8);

  .footer-container {
    display: flex;
    flex-direction: column;
    color: rgba(255, 255, 255, 0.8);
    font-weight: 600;
  }

  .footer-top {
    display: flex;
    flex-direction: row;
    color: rgba(255, 255, 255, 0.8);
    font-weight: 600;
    /* border-bottom: 1px solid red; */
    padding: 80px 60px 0 60px;
    gap: 20px;
    /* flex-grow: 1;
    flex-basis: 0;
    min-width: 0; */
    flex-wrap: wrap;

    @media (max-width: 560px) {
      padding: 40px 20px 0 20px;
    }
  }

  .footer-top > * {
    flex: 1;
  }

  .footer-bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    color: rgba(255, 255, 255, 0.8);
    font-weight: 600;
    margin-top: 20px;
    padding: 20px 0;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    flex-wrap: wrap;
  }

  .footer-copyright-link {
    color: #4fbd39;
  }

  .footer-top-title {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 25px;
    color: white;
  }

  .footer-top-section-title {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 35px;
    color: white;
  }

  .footer-top-section-title-span {
    padding-bottom: 15px;
    border-bottom: 2px solid #4fbd39;
  }

  .footer-top-title-description {
    margin-bottom: 25px;
  }

  .footer-top-title-icons {
    display: flex;
    flex-direction: row;
    gap: 15px;
    font-size: 18px;
  }

  .footer-top-title-icon {
    transition: all 0.3s ease;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    color: white;
    width: 40px;
    height: 40px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover {
      background: white;
      color: #4fbd39;
    }
  }

  .footer-top-section-links {
    display: flex;
    flex-direction: column;
  }

  .footer-top-section-links-list {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 16px;
    transition: all 0.3s ease;
    cursor: pointer;
  }

  .footer-top-section-links-list-icon {
    font-size: 24px;
    color: #4fbd39;
  }

  .footer-top-section-links-list-item {
    display: flex;
    flex-direction: row;
    gap: 6px;
  }

  .footer-top-section-links-quick-links {
    display: flex;
    flex-direction: column;
    margin-left: 40px;

    @media (max-width: 560px) {
      margin-left: 0;
    }
  }

  .footer-top-section-contact-info-address {
    display: flex;
    flex-direction: row;
    font-size: 16px;
    gap: 12px;
    color: white;
    margin-bottom: 20px;
  }

  .footer-top-section-contact-info-address-icon {
    font-size: 20px;
    color: #4fbd39;
    margin-top: 4px;
  }

  .footer-top-section-contact-info-phone-icon {
    font-size: 16px;
    color: #4fbd39;
    margin-top: 4px;
  }

  .footer-top-section-contact-info-phone-number {
    color: rgba(255, 255, 255, 0.8);
  }

  .footer-bottom-copyright-text {
    text-align: center;
    word-break: break-word;
  }

  .footer-bottom-copyright-info {
    text-align: center;
    word-break: break-word;
  }
`;
