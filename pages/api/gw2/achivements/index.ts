// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { AchivementsResponse } from "models/gw2-api/achivements/achivement";
import type { ServiceResponse } from "models/service-response";
import type { NextApiRequest, NextApiResponse } from "next";
import { fetchAchivements } from "services/gw2-api/achivements/achivements";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ServiceResponse<AchivementsResponse>>
) {
  let serviceResponse: ServiceResponse<AchivementsResponse>;
  const achivementIds = req.query["ids"];
  if (Array.isArray(achivementIds) || achivementIds === "") {
    serviceResponse = {
      success: false,
      errorMessage:
        "Missing required query parameter `ids` which should be a comma seperated list of IDs",
    };
    return res.status(400).json(serviceResponse);
  }
  
  try {
    const ids = achivementIds.split(",").map(a => parseInt(a));
    const fetchResult = await fetchAchivements(ids);
    return res.status(200).json(fetchResult);
  } catch (err) {
    if (typeof err === "object" && err) {
      serviceResponse = {
        success: false,
        errorMessage:
          "Missing or invalid query parameter `ids` which should be a comma seperated list of IDs",
      };
      return res.status(400).json(serviceResponse);
    }

    serviceResponse = {
      success: false,
      errorMessage:
        "Unexpected error",
    };
    return res.status(500).json(serviceResponse);
  }
}
