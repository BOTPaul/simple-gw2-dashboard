export const Regions = ["Tyria", "Maguuma", "Desert", "Tundra"] as const;
export type Region = typeof Regions[number];