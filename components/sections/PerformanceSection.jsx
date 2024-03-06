"use client";
import Image from "next/image";
import FundamentalsRow from "../ui/FundamentalRow";
import PerformanceBar from "../ui/PerformanceBar";
import { fetchingPrice, formatNumberWithCommas } from "@/lib/utils";
import useState from "react-usestateref";
import { useEffect } from "react";

export default function PerformanceSection(coinType) {
  const [market_data, setMarketData, market_data_ref] = useState({});

  useEffect(() => {
    async function fetching() {
      const data = await fetchingPrice("bitcoin");
      setMarketData(data[0]);
    }
    fetching();
  }, []);

  const todayLow = market_data_ref.current.low_24h;
  console.log(market_data_ref.current);
  const todayHigh = market_data_ref.current.high_24h;
  const lowPrice = market_data_ref.current.atl;
  const highPrice = market_data_ref.current.ath;

  return (
    <div className="bg-white drop-shadow-lg rounded-lg lg:p-8 p-4 h-fit my-6">
      <p className="font-semibold text-2xl">Performance</p>

      <div className="flex flex-row justify-between items-center p-8 gap-4">
        <div className="flex flex-col items-center w-[15%] text-center">
          <p>Today's Low</p>
          <p>${formatNumberWithCommas(todayLow)}</p>
        </div>
        <PerformanceBar
          highPrice={todayHigh}
          currentPrice={market_data_ref.current.current_price}
        />

        <div className="flex flex-col items-center w-[15%] text-center ">
          <p>Today's High</p>
          <p>${formatNumberWithCommas(todayHigh)}</p>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center p-8 gap-4">
        <div className="flex flex-col items-center w-[15%] text-center">
          <p>52W Low</p>
          <p>${formatNumberWithCommas(lowPrice)}</p>
        </div>

        {/* Performance Bar needs currenPrice and highPrice */}
        <PerformanceBar
          highPrice={highPrice}
          currentPrice={market_data_ref.current.current_price}
        />
        <div className="flex flex-col items-center w-[15%] text-center">
          <p>52W High</p>
          <p>${formatNumberWithCommas(highPrice)}</p>
        </div>
      </div>

      <div className="flex flex-row gap-2 items-center flex-wrap">
        <p className="font-semibold text-xl">Fundamentals</p>
        {/* <Image
          src={info}
          alt="more info"
          className="opacity-50"
          width={25}
          height={25}
        /> */}
      </div>
      {market_data && (
        <div className="flex lg:flex-row flex-col lg:gap-12">
          <div className="w-full">
            <FundamentalsRow
              title={`${market_data_ref.current.name} Price`}
              value={`$${formatNumberWithCommas(
                market_data_ref.current.current_price
              )}`}
            />
            <FundamentalsRow
              title="24h Low/24h High"
              value={`$${formatNumberWithCommas(
                market_data_ref.current.low_24h
              )} / $${formatNumberWithCommas(
                market_data_ref.current.high_24h
              )}`}
            />

            <FundamentalsRow
              title="Trading Volume"
              value={`${formatNumberWithCommas(
                market_data_ref.current.circulating_supply
              )} ${market_data_ref.current.symbol?.toUpperCase()}`}
            />

            <FundamentalsRow
              title="Market Cap Rank"
              value={`#${market_data_ref.current.market_cap_rank}`}
            />
          </div>
          <div className="w-full">
            <FundamentalsRow
              title="Market Cap"
              value={`$${formatNumberWithCommas(
                market_data_ref.current.market_cap
              )}`}
            />
            <FundamentalsRow
              title="Volume / Market Cap"
              value={`$${formatNumberWithCommas(
                market_data_ref.current.total_volume
              )}`}
            />

            <FundamentalsRow
              title="All Time High"
              value={`$${formatNumberWithCommas(market_data_ref.current.ath)}`}
            />
            <FundamentalsRow
              title="All Time Low"
              value={`$${formatNumberWithCommas(market_data_ref.current.atl)}`}
            />
          </div>
        </div>
      )}
    </div>
  );
}
