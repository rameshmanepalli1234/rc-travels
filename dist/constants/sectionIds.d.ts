export declare const SECTION_IDS: {
    readonly HOME: "home";
    readonly ABOUT_US: "aboutus";
    readonly SERVICES: "services";
    readonly PACKAGES: "packages";
    readonly GALLERY: "gallery";
    readonly CONTACT_US: "contactus";
    readonly TESTIMONIALS: "testimonials";
};
export type SectionId = (typeof SECTION_IDS)[keyof typeof SECTION_IDS];
export declare const hashForSection: (sectionId: SectionId) => string;
//# sourceMappingURL=sectionIds.d.ts.map