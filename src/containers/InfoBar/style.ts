import styled from "styled-components";
import { textStyles } from "@styles/textStyles";

export const StyledInfoBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: var(--color-bg-tertiary);
  height: 40px;
  gap: 20px;
  overflow: hidden;
  padding: 0 50px;

  @media (max-width: 1024px) {
    padding: 0 20px;
    overflow: hidden;
  }

  .info-bar-left-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;

    .info-bar-item {
      color: var(--color-text-default);
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 8px;
      ${textStyles.bodyMediumStrong};

      @media (max-width: 1024px) {
        ${textStyles.bodySmallStrong};
      }

      @media (max-width: 700px) {
        ${textStyles.bodyMediumStrong};
      }

      //not recommended to use this, but it's a workaround to hide the text on mobile
      .info-bar-item-text {
        @media (max-width: 700px) {
          display: none;
        }
      }
    }
  }

  .info-bar-right-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 25px;
    color: var(--color-text-default);
    ${textStyles.headingSmallSemiBold};

    @media (max-width: 1024px) {
      ${textStyles.bodyMediumStrong};
    }

    @media (max-width: 700px) {
      ${textStyles.headingSmallSemiBold};
    }
  }
`;
