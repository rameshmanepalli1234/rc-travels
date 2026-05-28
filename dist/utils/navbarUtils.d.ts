import { IntlShape } from "react-intl";
import type { IconType } from "react-icons";
import { type SectionId } from "@/constants/sectionIds";
export type NavItem = {
    name: string;
    href: string;
    sectionId: SectionId;
    Icon: IconType;
};
export declare const navbarUtils: (intl: IntlShape) => NavItem[];
//# sourceMappingURL=navbarUtils.d.ts.map