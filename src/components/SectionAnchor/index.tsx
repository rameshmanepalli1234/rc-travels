import React from "react";
import { SectionId } from "@/constants/sectionIds";
import { StyledSectionAnchor } from "./style";

type SectionAnchorProps = {
  id: SectionId;
  children: React.ReactNode;
};

const SectionAnchor: React.FC<SectionAnchorProps> = ({ id, children }) => (
  <StyledSectionAnchor id={id}>{children}</StyledSectionAnchor>
);

export default SectionAnchor;
