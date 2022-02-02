import { createContext, useCallback, useContext, useMemo } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { HStack, Image, Button, Box, Link } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { ContainerBase } from "components/ContainerBase";

type ToolbarContext = {
  height: number;
};

export const ToolbarContext = createContext<ToolbarContext>({ height: 70 });

type ToolbarContextProviderProps = {
  toolbarHeight: number;
};

export const ToolbarContextProvider: React.FC<ToolbarContextProviderProps> = ({
  children,
  toolbarHeight,
}) => {
  return (
    <ToolbarContext.Provider value={{ height: toolbarHeight }}>
      {children}
    </ToolbarContext.Provider>
  );
};

export const Toolbar: React.FC = () => {
  const toolbarContext = useContext(ToolbarContext);
  const toolbarHeight = useMemo(() => `${toolbarContext.height}px`, [toolbarContext]);

  const router = useRouter();

  const isActiveLink = useCallback(
    (linkPath: string) => linkPath === router.pathname,
    [router]
  );

  const getLinkColor = useCallback(
    (linkPath: string) => (isActiveLink(linkPath) ? "accent.300" : "white"),
    [isActiveLink]
  );

  return (
    <Box background="primary.500" textColor="white">
      <ContainerBase>
        <HStack h={toolbarHeight} px="4" justify="space-between">
          <NextLink href="/" passHref>
            <Link>
              <Image alt="GW2 Dashboard" src="/lockup.svg" h="48px" />
            </Link>
          </NextLink>
          <HStack display={{ base: "none", md: "block" }} spacing="8">
            <NextLink href="/test/styles" passHref>
              <Link color={getLinkColor("/test/styles")} fontSize="xl">
                Dailies
              </Link>
            </NextLink>
            <NextLink href="/test/styles" passHref>
              <Link color={getLinkColor("/test/styles")} fontSize="xl">
                Crafting
              </Link>
            </NextLink>
            <NextLink href="/test/styles" passHref>
              <Link color={getLinkColor("/test/styles")} fontSize="xl">
                Tools
              </Link>
            </NextLink>
            <NextLink href="/about" passHref>
              <Link color={getLinkColor("/about")} fontSize="xl">
                About
              </Link>
            </NextLink>
          </HStack>
          <Button variant="unstyled" display={{ md: "none" }}>
            <HamburgerIcon w="8" h="8" />
          </Button>
        </HStack>
      </ContainerBase>
    </Box>
  );
};
