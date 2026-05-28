import styled from "styled-components";

export const StyledContactUs = styled.section`
  width: 100%;
  padding: 60px 24px 35px;
  background: linear-gradient(180deg, #f8faf8 0%, #ffffff 40%, #eef8eb 100%);

  @media (max-width: 768px) {
    padding: 48px 16px 64px;
  }

  .contact-header {
    max-width: 720px;
    margin: 0 auto 48px;
    text-align: center;
  }

  .contact-eyebrow {
    display: inline-block;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #4fbd39;
    margin-bottom: 12px;
  }

  .contact-title {
    font-size: 40px;
    font-weight: 700;
    color: #1a1a1a;
    margin-bottom: 16px;
    line-height: 1.2;

    @media (max-width: 768px) {
      font-size: 32px;
    }

    @media (max-width: 480px) {
      font-size: 28px;
    }
  }

  .contact-subtitle {
    font-size: 18px;
    font-weight: 500;
    color: #555;
    line-height: 1.6;
    margin: 0;

    @media (max-width: 480px) {
      font-size: 16px;
    }
  }

  .contact-layout {
    display: grid;
    grid-template-columns: 1fr 1.1fr;
    gap: 36px;
    max-width: 1100px;
    margin: 0 auto;
    align-items: start;

    @media (max-width: 900px) {
      grid-template-columns: 1fr;
      gap: 32px;
    }
  }

  .contact-info-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;

    @media (max-width: 520px) {
      grid-template-columns: 1fr;
    }
  }

  .contact-map-section {
    max-width: 1100px;
    margin: 48px auto 0;
  }

  .contact-map-header {
    text-align: center;
    margin-bottom: 24px;
  }

  .contact-map-eyebrow {
    display: inline-block;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #4fbd39;
    margin-bottom: 10px;
  }

  .contact-map-title {
    font-size: 26px;
    font-weight: 700;
    color: #1a1a1a;
    margin: 0 0 10px;
  }

  .contact-map-address {
    font-size: 15px;
    color: #555;
    line-height: 1.6;
    margin: 0;
    max-width: 640px;
    margin-left: auto;
    margin-right: auto;
  }

  .contact-map-wrap {
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(79, 189, 57, 0.2);
    background: #e8ece8;
    aspect-ratio: 21 / 9;
    min-height: 320px;

    iframe {
      display: block;
      width: 100%;
      height: 100%;
      min-height: 320px;
      border: none;
    }

    @media (max-width: 768px) {
      aspect-ratio: 4 / 3;
      min-height: 280px;

      iframe {
        min-height: 280px;
      }
    }
  }

  .contact-map-directions {
    display: inline-flex;
    margin: 20px auto 0;
    width: 100%;
    justify-content: center;
    font-size: 15px;
    font-weight: 700;
    color: #4fbd39;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const StyledContactInfoCard = styled.div`
  background: #ffffff;
  border-radius: 16px;
  padding: 24px 22px;
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.06);
  border: 1px solid rgba(79, 189, 57, 0.15);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 14px 36px rgba(79, 189, 57, 0.14);
  }

  .contact-info-icon-wrap {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    background: linear-gradient(135deg, #4fbd39 0%, #3da82c 100%);
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    margin-bottom: 16px;
  }

  .contact-info-title {
    font-size: 13px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: #4fbd39;
    margin-bottom: 8px;
  }

  .contact-info-value {
    font-size: 15px;
    font-weight: 500;
    color: #333;
    line-height: 1.5;
    margin: 0;
    word-break: break-word;
  }

  .contact-info-link {
    text-decoration: none;
    color: inherit;
    display: block;

    &:hover .contact-info-value {
      color: #4fbd39;
    }
  }
`;

export const StyledContactForm = styled.form`
  background: #ffffff;
  border-radius: 20px;
  padding: 32px 28px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(79, 189, 57, 0.12);

  @media (max-width: 480px) {
    padding: 24px 20px;
  }

  .contact-form-title {
    font-size: 22px;
    font-weight: 700;
    color: #1a1a1a;
    margin: 0 0 8px;
  }

  .contact-form-subtitle {
    font-size: 14px;
    color: #666;
    margin: 0 0 24px;
    line-height: 1.5;
  }

  .contact-form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-bottom: 16px;

    @media (max-width: 520px) {
      grid-template-columns: 1fr;
    }
  }

  .contact-form-field {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 16px;

    &.contact-form-field-full {
      grid-column: 1 / -1;
    }
  }

  .contact-form-label {
    font-size: 14px;
    font-weight: 600;
    color: #333;
  }

  .contact-form-input,
  .contact-form-textarea {
    width: 100%;
    padding: 12px 14px;
    font-size: 15px;
    font-family: inherit;
    color: #1a1a1a;
    background: #f8faf8;
    border: 1px solid #e0e8de;
    border-radius: 10px;
    transition:
      border-color 0.2s ease,
      box-shadow 0.2s ease;
    box-sizing: border-box;

    &:focus {
      outline: none;
      border-color: #4fbd39;
      box-shadow: 0 0 0 3px rgba(79, 189, 57, 0.15);
      background: #ffffff;
    }

    &::placeholder {
      color: #999;
    }
  }

  .contact-form-textarea {
    min-height: 120px;
    resize: vertical;
  }

  .contact-form-submit {
    width: 100%;
    margin-top: 8px;
    padding: 16px 24px;
    border: none;
    border-radius: 12px;
    background: linear-gradient(135deg, #4fbd39 0%, #3da82c 100%);
    color: #ffffff;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    transition:
      opacity 0.2s ease,
      transform 0.2s ease,
      box-shadow 0.2s ease;
    box-shadow: 0 8px 24px rgba(79, 189, 57, 0.3);

    &:hover {
      opacity: 0.95;
      transform: translateY(-1px);
      box-shadow: 0 12px 28px rgba(79, 189, 57, 0.38);
    }

    &:active {
      transform: translateY(0);
    }
  }

  .contact-form-success {
    margin-top: 16px;
    padding: 14px 16px;
    border-radius: 10px;
    background: rgba(79, 189, 57, 0.12);
    color: #2d7a22;
    font-size: 14px;
    font-weight: 600;
    text-align: center;
    line-height: 1.5;
  }
`;
