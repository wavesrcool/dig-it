import { ApolloProvider } from "@apollo/client";
import { useGraph } from "@webs-hooks/use-graph";
import shape from "@webs-shapes/store";
import "@webs-styles/App.css";
import "@webs-styles/globals.css";
import "flag-icons/css/flag-icons.min.css";
import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import { Provider as ShapesProvider } from "react-redux";
import "tailwindcss/tailwind.css";

/**
 * * Dig It Documentation
 *
 * @created 01 03 2023
 * @collection webs app
 * @notes [ ]
 *
 */
const App = ({ Component, pageProps }: AppProps) => {
  const { graph } = useGraph(pageProps);

  return (
    <ShapesProvider store={shape}>
      <ApolloProvider client={graph}>
        <Component {...pageProps} />
      </ApolloProvider>
    </ShapesProvider>
  );
};

export default appWithTranslation(App);
