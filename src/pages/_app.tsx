import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloClient, ApolloProvider } from "@apollo/client";
import { Icon } from '@iconify/react';
import apolloClient from "../../lib/apollo";
import Aside from "@/components/Partial/Aside";
import Header from "@/components/Partial/Header";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <div className="flex flex-wrap h-auto">
        <div className="flex flex-1 justify-center align-center bg-gradient-to-l from-lime-500 via-lime-700 to-lime-800">
          <Header/>
        </div>
        <Component {...pageProps} />;
        <Aside/>
      </div>
    </ApolloProvider>)
}
