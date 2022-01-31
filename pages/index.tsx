import type { NextPage } from "next";
import { Container, VStack } from "@chakra-ui/react";
import { DailiesWrapper } from "components/daily";

const IndexPage: NextPage = () => (
  <Container maxW="container.lg" backgroundColor="white">
    <VStack py="8">
      <DailiesWrapper />
    </VStack>
  </Container>
);

export default IndexPage;
