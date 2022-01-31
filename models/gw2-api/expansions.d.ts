export const Expansions = ["GuildWars2", "HeartOfThorns", "PathOfFire"] as const;
export type Expansion = typeof Expansions[number];