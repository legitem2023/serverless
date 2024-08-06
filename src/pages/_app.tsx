import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { Icon } from '@iconify/react';
import Aside from "@/components/Partial/Aside";
import Header from "@/components/Partial/Header";
import { Head } from "next/document";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {

  return (
      <div className="flex flex-wrap h-[100vh]">
        <div className="flex flex-1 justify-center h-[8vh] align-center bg-gradient-to-t from-lime-500 via-lime-700 to-lime-800 z-50">
          <Header />
        </div>
        <Component {...pageProps} />;
        <Aside />
      </div>)
}
