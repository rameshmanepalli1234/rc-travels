import styled from "styled-components";

export const StyledTutorialTrigger = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-left: 12px;
  padding: 8px 14px;
  border: none;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 700;
  color: #2d8a47;
  background: rgba(79, 189, 57, 0.12);
  cursor: pointer;
  white-space: nowrap;
  transition:
    background 0.2s ease,
    color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background: #4fbd39;
    color: #ffffff;
    transform: translateY(-1px);
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

export const StyledTutorialTriggerMobile = styled(StyledTutorialTrigger)`
  display: none;
  margin-left: 0;
  width: 100%;
  justify-content: center;
  padding: 12px 16px;

  @media (max-width: 900px) {
    display: inline-flex;
  }
`;
