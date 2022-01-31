import { useMemo } from "react";
import { useQuery } from "react-query";
import { VStack } from "@chakra-ui/react";

import { timeLeftInDay } from "services/dates/helpers";
import { ServiceResponse } from "models/service-response";
import { DailyAchivementsResponse } from "models/gw2-api/achivements/daily";
import { DailyType } from "./DailyType";

export const DailiesWrapper: React.FC = () => {
  const { isLoading, data } = useQuery<
    ServiceResponse<DailyAchivementsResponse>
  >(
    ["gw2-api", "achivements", "daily", "today"],
    () =>
      fetch("/api/gw2/daily")
        .then((res) => res.json())
        .then((json) => json),
    {
      staleTime: timeLeftInDay(),
    }
  );

  const dailies = useMemo(() => (data?.success ? data.data : null), [data]);

  return (
    <VStack maxW="100%" gap="8">
      <DailyType name="PVE" data={dailies?.pve} />
      <DailyType name="PVP" data={dailies?.pvp} />
      <DailyType name="WVW" data={dailies?.wvw} />
      <DailyType name="Fractals" data={dailies?.fractals} />
      { dailies?.special?.length && <DailyType name="Special" data={dailies?.special} /> }
    </VStack>
  );
};
