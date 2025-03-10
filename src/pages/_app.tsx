import React from "react";
import { ConfigProvider } from "antd";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import theme from "@/theme/themeConfig";
import "@/styles/globals.css";
import { PagesTopLoader } from "nextjs-toploader/pages";

const queryClient = new QueryClient();

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ConfigProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <PagesTopLoader />
        <Component {...pageProps} />
      </QueryClientProvider>
    </ConfigProvider>
  );
};

export default App;
