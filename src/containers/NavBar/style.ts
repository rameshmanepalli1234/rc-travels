import styled from "styled-components";

export const StyledNavBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1rem 2rem;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1000;
  min-width: 0;
  overflow: hidden;

  h3 {
    margin: 0;
    color: #333;
    font-size: 1.5rem;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }

  @media (max-width: 320px) {
    padding: 0.75rem;

    h3 {
      font-size: 1.25rem;
    }
  }

  @media (max-width: 150px) {
    padding: 0.5rem;
    flex-wrap: wrap;
    gap: 0.5rem;
    min-height: auto;

    h3 {
      font-size: 1rem;
      min-width: 0;
      flex-shrink: 1;
      word-break: break-word;
      line-height: 1.2;
    }
  }
`;

export const StyledNavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    transition: color 0.3s ease;
    padding: 0.5rem 0;

    &:hover {
      color: #007bff;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const StyledHamburger = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #333;
  cursor: pointer;
  padding: 0.5rem;
  transition: color 0.3s ease;
  min-width: 44px;
  min-height: 44px;

  &:hover {
    color: #007bff;
  }

  @media (max-width: 768px) {
    display: block;
  }

  @media (max-width: 320px) {
    font-size: 1.25rem;
    padding: 0.25rem;
  }

  @media (max-width: 150px) {
    font-size: 1rem;
    padding: 0.125rem;
    min-width: 32px;
    min-height: 32px;
  }
`;

export const StyledDrawerOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1001;
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const StyledDrawer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  width: 300px;
  height: 100vh;
  background-color: #ffffff;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.15);
  z-index: 1002;
  transition: right 0.3s ease;
  overflow-y: auto;
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  pointer-events: ${({ isOpen }) => (isOpen ? "auto" : "none")};

  @media (max-width: 480px) {
    width: 280px;
  }

  @media (max-width: 320px) {
    width: 100%;
    right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  }

  @media (max-width: 150px) {
    width: 100%;
    right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
    font-size: 0.875rem;
  }
`;

export const StyledDrawerContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const StyledDrawerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid #e0e0e0;

  h3 {
    margin: 0;
    color: #333;
    font-size: 1.25rem;
    font-weight: bold;
  }

  @media (max-width: 150px) {
    padding: 1rem 0.75rem;

    h3 {
      font-size: 1rem;
    }
  }
`;

export const StyledDrawerClose = styled.button`
  background: none;
  border: none;
  font-size: 1.25rem;
  color: #666;
  cursor: pointer;
  padding: 0.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #333;
  }
`;

export const StyledDrawerNav = styled.nav`
  flex: 1;
  padding: 1rem 0;

  a {
    display: block;
    text-decoration: none;
    color: #333;
    font-weight: 500;
    padding: 1rem 1.5rem;
    transition:
      background-color 0.3s ease,
      color 0.3s ease;
    border-bottom: 1px solid #f0f0f0;

    &:hover {
      background-color: #f8f9fa;
      color: #007bff;
    }

    &:last-child {
      border-bottom: none;
    }
  }

  @media (max-width: 150px) {
    a {
      padding: 0.75rem 1rem;
      font-size: 0.875rem;
    }
  }
`;
