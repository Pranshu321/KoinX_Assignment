import { Landing } from "@/components/hero";
import MiniChartsCollection from "@/components/MiniCharts";
import About from "@/components/sections/About";
import InfoBar from "@/components/sections/InfoBar";
import PerformanceSection from "@/components/sections/PerformanceSection";
import Sentiment from "@/components/sections/Sentiments";
import Team from "@/components/sections/Team";
import Tokenomics from "@/components/sections/Tokenomics";
import SideHero from "@/components/ui/heroside";

export default function Home() {
  return (
    <main className="">
      <Landing />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 lg:px-12 bg-[#EFF2F5] mb-8">
        <div className="md:col-span-9">
          <InfoBar />
          <PerformanceSection />
          <Sentiment />
          <About />
          <Tokenomics />
          <Team />
        </div>
      </div>
      <MiniChartsCollection />
      <div className=" md:hidden flex items-center justify-center px-3  ">
        <SideHero />
      </div>
    </main>
  );
}
