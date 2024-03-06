"use client";
import React from "react";
import Minichart from "./ui/minichart";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useRouter } from "next/navigation";

const MiniChartsCollection = () => {
  const history = useRouter();
  const symbols = [
    "FX:EURUSD",
    "CRYPTO:BTCUSD",
    "CRYPTOCAP:SOL",
    "CRYPTOCAP:XRP",
    "CRYPTOCAP:ADA",
    "CRYPTOCAP:DOGE",
    "CRYPTOCAP:DOT",
    "CRYPTOCAP:UNI",
    "CRYPTOCAP:LINK",
    "CRYPTOCAP:AVAX",
  ];
  return (
    <div className="bg-white  p-20 w-full space-y-5 ">
      <p className="font-bold text-2xl ">You May Also Like</p>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full "
      >
        <CarouselPrevious />
        <CarouselContent>
          {symbols.map((symbol, index) => (
            <CarouselItem
              key={index}
              className=" md:basis-1/3 mx-5 lg:mx-1  lg:basis-1/4 xl:basis-1/5 "
            >
              <div className="p-3 w-fit" onClick={(e) => e.preventDefault()}>
                <Minichart symbol={symbol} />
                <button
                  onClick={(e) => history.push(`/coin/${symbol.split(":")[1]}`)}
                  className="bg-blue-500 mt-2 hover:bg-blue-400 text-white p-2 rounded-md w-full"
                >
                  View in Detail
                </button>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext />
      </Carousel>
      <p className="font-bold text-2xl ">Trending Coins</p>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full "
      >
        <CarouselPrevious />
        <CarouselContent>
          {symbols.map((symbol, index) => (
            <CarouselItem
              key={index}
              className=" md:basis-1/3 mx-5 lg:mx-1  lg:basis-1/4 xl:basis-1/5 p-2"
            >
              <div className="p-3 w-fit">
                <Minichart symbol={symbol} />
                <button
                  onClick={(e) => history.push(`/coin/${symbol.split(":")[1]}`)}
                  className="bg-blue-500 mt-2 hover:bg-blue-400 text-white p-2 rounded-md w-full"
                >
                  View in Detail
                </button>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default MiniChartsCollection;
