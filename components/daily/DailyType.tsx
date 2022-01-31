import { Box, Heading, Flex, Skeleton } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { useMemo } from "react";

import type { AchivementsResponse } from "models/gw2-api/achivements/achivement";
import {
  DailyAchivementRef,
  LevelRange,
} from "models/gw2-api/achivements/daily";
import type { ServiceResponse } from "models/service-response";
import { Daily } from "./Daily";

export type DailyTypeProps = {
  name: "PVE" | "PVP" | "WVW" | "Fractals" | "Special";
  data?: DailyAchivementRef[];
};

const DailiesList: React.FC<{
  achivementsRef: DailyAchivementRef[];
  dailyTypeName: "PVE" | "PVP" | "WVW" | "Fractals" | "Special";
}> = ({ achivementsRef, dailyTypeName }) => {
  const achivementIds = useMemo(
    () => achivementsRef.map((a) => a.id),
    [achivementsRef]
  );

  const { isLoading, data } = useQuery<ServiceResponse<AchivementsResponse>>(
    ["gw2-api", "achivements", ...achivementIds],
    () =>
      fetch(`/api/gw2/achivements?ids=${achivementIds.join(",")}`)
        .then((res) => res.json())
        .then((json) => json),
    {
      staleTime: Infinity,
    }
  );

  if (isLoading)
    return (
      <>
        {achivementIds.map((a) => (
          <Skeleton key={a} h="150px" w="300px" />
        ))}
      </>
    );

  if (!data || !data.success) return null;

  const achivementLevelRange = (achivementId: number): LevelRange => {
    const matchedAchivement = achivementsRef.find((a) => a.id === achivementId);

    if (!matchedAchivement) return { min: 0, max: 0 };

    return matchedAchivement.level;
  };

  return (
    <>
      {data.data.map((a) => (
        <Daily
          key={a.id}
          levelRange={achivementLevelRange(a.id)}
          data={a}
          parentSectionName={dailyTypeName}
        />
      ))}
    </>
  );
};

export const DailyType: React.FC<DailyTypeProps> = ({ name, data }) => {
  return (
    <Flex flexDir="column" w="100%" gap="8" p="4">
      <Heading>{name}</Heading>
      <Flex w="100%" wrap="wrap" justify="center" gap="4">
        {!data && (
          <>
            <Skeleton h="150px" w="300px" />
            <Skeleton h="150px" w="300px" />
            <Skeleton h="150px" w="300px" />
          </>
        )}
        {data && <DailiesList dailyTypeName={name} achivementsRef={data} />}
      </Flex>
    </Flex>
  );
};
