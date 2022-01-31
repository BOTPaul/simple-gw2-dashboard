// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { DailyAchivementsResponse } from 'models/gw2-api/achivements/daily';
import { ServiceResponse } from 'models/service-response';
import type { NextApiRequest, NextApiResponse } from 'next'
import { fetchDailyAchivements, isDayOption } from 'services/gw2-api/achivements/daily'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ServiceResponse<DailyAchivementsResponse>>
) {
  const dayParam = req.query["day"];
  let day = "";
  if (Array.isArray(dayParam)) {
    day = dayParam.length ? dayParam[0] : "";
  }

  const fetchResult = await fetchDailyAchivements(isDayOption(day) ? day : undefined);

  res.status(200).json(fetchResult);
}
