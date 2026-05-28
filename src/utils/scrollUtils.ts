import {
  SectionId,
  hashForSection,
} from "@/constants/sectionIds";

/** Approximate height of sticky InfoBar + NavBar for scroll offset */
const SCROLL_OFFSET_PX = 120;

export const scrollToSection = (sectionId: SectionId): void => {
  const element = document.getElementById(sectionId);
  if (!element) {
    return;
  }

  const top =
    element.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET_PX;

  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
};

export const navigateToSection = (sectionId: SectionId): void => {
  window.history.pushState(null, "", hashForSection(sectionId));
  scrollToSection(sectionId);
};

export const sectionIdFromHash = (hash: string): SectionId | null => {
  const id = hash.replace(/^#/, "").trim();
  if (!id) {
    return null;
  }
  return id as SectionId;
};
