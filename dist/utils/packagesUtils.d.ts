import { extendedIndiaPackages } from "./indiaTourPackagesData";
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
export type TableTravelPackage = TravelPackage & {
    available: boolean;
};
export declare const packagesUtils: TravelPackage[];
export { extendedIndiaPackages };
export declare const packagesTableUtils: TableTravelPackage[];
export declare const formatPackagePrice: (price: number) => string;
//# sourceMappingURL=packagesUtils.d.ts.map