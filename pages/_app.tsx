import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";

import { CustomTheme } from "styles/chakra-theme";
import { Toolbar } from "components/toolbar/Toolbar";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={CustomTheme}>
      <QueryClientProvider client={queryClient}>
        <Toolbar />
        <Component {...pageProps} />
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default MyApp;
