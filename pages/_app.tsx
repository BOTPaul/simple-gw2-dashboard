import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Box background="gray.50">
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;
