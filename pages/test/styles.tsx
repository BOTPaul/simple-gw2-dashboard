import {
  Box,
  VStack,
  HStack,
  Text,
  Heading,
  Divider,
} from "@chakra-ui/react";

import { PageBase } from "components/PageBase";

const Styles: React.FC = () => {
  return (
    <PageBase>
      <VStack gap="8">
        <Heading fontSize="3xl">
          Colours
        </Heading>
        <VStack gap="2">
          <HStack justify="space-between" w="100%">
            <Text fontFamily="Oswald-Medium">Primary</Text>
            <Text fontFamily="Oswald-Medium">Secondary</Text>
            <Text fontFamily="Oswald-Medium">Accent</Text>
          </HStack>
          <HStack>
            <Box bg="primary.300" h="64px" w="64px" />
            <Box bg="secondary.300" h="64px" w="64px" />
            <Box bg="accent.300" h="64px" w="64px" />
          </HStack>
          <HStack>
            <Box bg="primary.500" h="64px" w="64px" />
            <Box bg="secondary.500" h="64px" w="64px" />
            <Box bg="accent.500" h="64px" w="64px" />
          </HStack>
          <HStack>
            <Box bg="primary.700" h="64px" w="64px" />
            <Box bg="secondary.700" h="64px" w="64px" />
            <Box bg="accent.700" h="64px" w="64px" />
          </HStack>
        </VStack>
        <Divider borderColor="gray.700" />
        <Heading fontSize="3xl">
          Shades
        </Heading>
        <VStack gap="2">
          <HStack justify="space-between" w="100%">
            <Text fontFamily="Oswald-Medium">White</Text>
            <Text fontFamily="Oswald-Medium">300</Text>
            <Text fontFamily="Oswald-Medium">500</Text>
            <Text fontFamily="Oswald-Medium">700</Text>
            <Text fontFamily="Oswald-Medium">Black</Text>
          </HStack>
          <HStack w="100%">
            <Box bg="white" h="64px" w="64px" />
            <Box bg="gray.300" h="64px" w="64px" />
            <Box bg="gray.500" h="64px" w="64px" />
            <Box bg="gray.700" h="64px" w="64px" />
            <Box bg="black" h="64px" w="64px" />
          </HStack>
        </VStack>
        <Divider borderColor="gray.700" />
        <Heading fontSize="3xl">
          Headings
        </Heading>
        <VStack gap="2">
          <Heading fontSize="4xl">
            H0 4xl Heading 72px
          </Heading>
          <Heading fontSize="3xl">
            H1 3xl Heading 48px
          </Heading>
          <Heading fontSize="2xl">
            H2 2xl Heading 32px
          </Heading>
          <Heading fontSize="xl">
            H3 xl Heading 24px
          </Heading>
          <Heading fontSize="lg">
            H4 lg Heading 18px
          </Heading>
          <Text fontFamily="Merriweather">
            P md Heading 16px
          </Text>
        </VStack>
        <Divider borderColor="gray.700" />
        <Heading fontSize="3xl">
          Body
        </Heading>
        <VStack gap="2">
          <Heading fontSize="4xl" fontFamily="Oswald-Medium">
            H0 4xl Body 72px
          </Heading>
          <Heading fontSize="3xl" fontFamily="Oswald-Medium">
            H1 3xl Body 48px
          </Heading>
          <Heading fontSize="2xl" fontFamily="Oswald-Medium">
            H2 2xl Body 32px
          </Heading>
          <Heading fontSize="xl" fontFamily="Oswald-Medium">
            H3 xl Body 24px
          </Heading>
          <Heading fontSize="lg" fontFamily="Oswald-Medium">
            H4 lg Body 18px
          </Heading>
          <Text fontFamily="Oswald">
            P md Body 16px
          </Text>
        </VStack>
      </VStack>
    </PageBase>
  );
};

export default Styles;
