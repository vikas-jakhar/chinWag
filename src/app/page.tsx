import Header from "@/components/common/Header";
import Conversations from "@/components/home/Conversations";
import Hero from "@/components/home/Hero";
import RoadMap from "@/components/home/RoadMap";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <RoadMap />
      <Conversations />
    </>
  );
}
