import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";
import { TOOLTIPS } from "@utils";
import { StyledScrollToTop } from "./style";

const SCROLL_THRESHOLD = 400;

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = (): void => {
      setVisible(window.scrollY > SCROLL_THRESHOLD);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <StyledScrollToTop
      type="button"
      $visible={visible}
      onClick={scrollToTop}
      aria-label="Scroll to top"
      title={TOOLTIPS.general.scrollTop}
      data-testid="button-scroll-top"
    >
      <FiArrowUp aria-hidden />
    </StyledScrollToTop>
  );
};

export default ScrollToTop;
