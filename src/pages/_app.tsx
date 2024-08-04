import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {ApolloProvider} from "@apollo/client";
import { Icon } from '@iconify/react';
import apolloClient from "../../lib/apollo";
import Aside from "@/components/Partial/Aside";
import Header from "@/components/Partial/Header";
import useNav from "../../store/useNav";
export default function App({ Component, pageProps }: AppProps) {
  const {curNav} = useNav();

  console.log(curNav)
  return (
    <ApolloProvider client={apolloClient}>
      <div className="flex flex-wrap h-[100vh]">
        <div className="flex flex-1 justify-center h-[8vh] align-center bg-gradient-to-t from-lime-500 via-lime-700 to-lime-800 z-50">
          <Header/>
        </div>
        <Component {...pageProps} />;
        <Aside/>
      </div>
    </ApolloProvider>)
}
