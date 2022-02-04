import type { NextPage } from "next";
import NextLink from "next/link";
import { PageBase } from "components/PageBase";
import { ContainerBase } from "components/ContainerBase";
import {
  Box,
  Heading,
  Image,
  VStack,
  Link,
  Flex,
  Divider,
} from "@chakra-ui/react";

const IndexPage: NextPage = () => {
  const tools = [
    {
      imageSrc: "https://via.placeholder.com/250",
      title: "Dailies",
      path: "/dailies",
    },
    {
      imageSrc: "https://via.placeholder.com/250",
      title: "Timers",
      path: "/timers",
    },
    {
      imageSrc: "https://via.placeholder.com/250",
      title: "Crafting",
      path: "/crafting",
    },
    {
      imageSrc: "https://via.placeholder.com/250",
      title: "Tools",
      path: "/tools",
    },
  ];

  return (
    <PageBase py="16">
      <ContainerBase>
        <VStack gap="16">
          <Box
            py={{ base: "8", md: "16" }}
            borderRadius="lg"
            background="primary.500"
          >
            <Heading
              px={{ base: "8", md: "16" }}
              py={{ base: "8", md: "16" }}
              textAlign="center"
              color="white"
            >
              The quick and simple daily dashboard
            </Heading>
          </Box>
          <Divider borderColor="primary.700" borderBottomWidth="4px" />
          <Heading fontFamily="Oswald-Medium" fontSize="3xl">
            Get Started
          </Heading>
          <Flex w="100%" wrap="wrap" justify="space-between" gap="2">
            {tools.map((t) => (
              <Box
                key={t.path}
                borderRadius="lg"
                background="whiteAlpha.700"
                w={{ base: "48%", md: "23%" }}
              >
                <NextLink href={t.path} passHref>
                  <Link>
                    <Image
                      src={t.imageSrc}
                      alt={t.title}
                      objectFit="cover"
                      w="100%"
                      borderTopRadius="lg"
                    />

                    <Heading
                      fontSize="xl"
                      fontFamily="Oswald"
                      textAlign="center"
                      mt="2"
                      mb="2"
                    >
                      {t.title}
                    </Heading>
                  </Link>
                </NextLink>
              </Box>
            ))}
          </Flex>
        </VStack>
      </ContainerBase>
    </PageBase>
  );
};

export default IndexPage;
