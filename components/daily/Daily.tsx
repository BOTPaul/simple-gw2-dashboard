import { Box, Heading, HStack, Tag, Text, VStack } from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";

import { Achivement } from "models/gw2-api/achivements/achivement";
import { LevelRange } from "models/gw2-api/achivements/daily";
import { useMemo } from "react";

export type DailyProps = {
  levelRange: LevelRange;
  data: Achivement;
  parentSectionName: "PVE" | "PVP" | "WVW" | "Fractals" | "Special";
};

function stripDaily(text: string) {
  return;
}

export const Daily: React.FC<DailyProps> = ({ data, levelRange }) => {
  const title = useMemo(
    () =>
      data.name.startsWith("Daily ")
        ? data.name.substring("Daily ".length)
        : data.name,
    [data.name]
  );

  return (
    <Box
      minW="300px"
      maxW="300px"
      minH="150px"
      p="4"
      borderRadius="15px"
      backgroundColor="purple.100"
    >
      <VStack align="left">
        <Heading size="sm">
          <HStack justify="left" align="center">
            <InfoOutlineIcon />
            <span>{title}</span>
          </HStack>
        </Heading>
        <Text fontSize="sm">{data.requirement}</Text>
        <Text fontSize="sm">{JSON.stringify(data.rewards)}</Text>
      </VStack>
    </Box>
  );
};
