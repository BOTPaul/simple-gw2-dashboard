import type { Expansion } from "../expansions";
const DailyTypes = ["pve", "pvp", "wvw", "fractals", "special"] as const;
type DailyType = typeof DailyTypes[number];

type AccessRequirement = {
    product: Expansion,
    condition: "HasAccess" | "NoAccess"
}

export type LevelRange = {
    min: number,
    max: number,
}

export type DailyAchivementRef = {
    id: number,
    level: LevelRange,
    required_access: AccessRequirement[]
}

export type DailyAchivementsResponse = {
    [key in DailyType]: DailyAchivementRef[];
}