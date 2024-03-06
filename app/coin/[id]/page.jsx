"use client";
import PerformanceSection from "@/components/sections/PerformanceSection";
import Trading from "@/components/ui/trading";
import { fetchingPrice } from "@/lib/utils";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";
import useState from "react-usestateref";

const SelectedCoin = () => {
  const symbolMappings = {
    EURUSD: "euro",
    BTCUSD: "bitcoin",
    SOL: "solana",
    XRP: "ripple",
    ADA: "cardano",
    DOGE: "dogecoin",
    DOT: "polkadot",
    UNI: "uniswap",
    LINK: "chainlink",
    AVAX: "avalanche",
  };
  const { id } = useParams();
  return (
    <div>
      <div className="text-2xl font-bold p-5 uppercase">
        {symbolMappings[id]}
      </div>
      <div className="px-5 w-full h-96 lg:h-[710px] bg-white rounded overflow-hidden">
        <Trading symbol={id} />
      </div>
      <div className="p-5 mt-5">
        <PerformanceSection coinType={symbolMappings[id]} />
      </div>
    </div>
  );
};

export default SelectedCoin;
