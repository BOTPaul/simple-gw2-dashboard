import { gw2Fetch } from "services/gw2-api/base";
import type { ServiceResponse } from "models/service-response";
import type { DailyAchivementsResponse } from "models/gw2-api/achivements/daily";

export const DayOptions = ["today", "tomorrow"] as const;
type DayOption = typeof DayOptions[number];

export function isDayOption(option: string): option is DayOption {
    return option === DayOptions[0] || option === DayOptions[1];
}

export const fetchDailyAchivements = async (day: DayOption = "today"): Promise<ServiceResponse<DailyAchivementsResponse>> => {
    return gw2Fetch("achievements/daily");
};
