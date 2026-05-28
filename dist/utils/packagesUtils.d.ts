export type TravelPackage = {
    id: number;
    title: string;
    location: string;
    duration: string;
    price: number;
    image: string;
    highlights: string[];
    badge?: string;
};
export declare const packagesUtils: TravelPackage[];
export declare const formatPackagePrice: (price: number) => string;
//# sourceMappingURL=packagesUtils.d.ts.map