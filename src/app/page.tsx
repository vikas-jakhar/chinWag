import Header from "@/components/common/Header";
import PreLoader from "@/components/common/PreLoader";
import ScrollToTop from "@/components/common/ScrollToTop";
import Conversations from "@/components/home/Conversations";
import Faq from "@/components/home/Faq";
import Footer from "@/components/home/Footer";
import Hero from "@/components/home/Hero";
import RoadMap from "@/components/home/RoadMap";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <div className="bg-section-layer bg-cover bg-no-repeat">
        <RoadMap />
        <Conversations />
        <Faq />
      </div>
      <Footer />
      <PreLoader />
      <ScrollToTop />
    </>
  );
}
