import { Region } from "../regions";

const AchivementTypes = [
  "Pvp",
  "CategoryDisplay",
  "MoveToTop",
  "IngoreNearlyComplete",
  "Repeatable",
  "Hidden",
  "RequiresUnlock",
  "Daily",
  "Weekly",
  "Monthly",
  "Permanent",
] as const;
type AchivementType = typeof AchivementTypes[number];

type AchivementTier = {
  count: number;
  points: number;
};

type AchivementCoinReward = {
  type: "Coins";
  count: number;
};

type AchivementItemReward = {
  type: "Item";
  id: number;
  count: number;
};

type AchivementMasteryReward = {
  type: "Mastery";
  id: number;
  region: Region;
};

type AchivementTitleReward = {
  id: number;
};

type AchivementReward =
  | AchivementCoinReward
  | AchivementItemReward
  | AchivementMasteryReward
  | AchivementTitleReward;

export type Achivement = {
  id: number;
  name: string;
  description: string;
  requirement: string;
  flags: AchivementType[];
  tiers: AchivementTier[];
  rewards: AchivementReward[];
};

export type AchivementsResponse = Achivement[];
