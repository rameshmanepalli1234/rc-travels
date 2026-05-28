import { useEffect } from "react";
import { scrollToSection, sectionIdFromHash } from "@/utils/scrollUtils";

const scrollToHashSection = (): void => {
  const sectionId = sectionIdFromHash(window.location.hash);
  if (!sectionId) {
    return;
  }

  requestAnimationFrame(() => {
    scrollToSection(sectionId);
  });
};

export const useHashScroll = (): void => {
  useEffect(() => {
    scrollToHashSection();

    const onHashChange = (): void => {
      scrollToHashSection();
    };

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);
};
