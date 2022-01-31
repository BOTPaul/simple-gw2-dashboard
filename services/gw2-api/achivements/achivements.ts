import { gw2Fetch } from "services/gw2-api/base";
import type { ServiceResponse } from "models/service-response";
import type { AchivementsResponse } from "models/gw2-api/achivements/achivement";

export const fetchAchivements = async (
  ids: number[]
): Promise<ServiceResponse<AchivementsResponse>> => {
  if (ids.length) {
    return gw2Fetch(`achievements?ids=${ids.join(",")}`);
  }

  return {
    success: true,
    data: [],
  };
};
