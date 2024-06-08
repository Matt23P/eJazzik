import Header from "@/components/global/header";
import Footer from "@/components/global/footer";
import { Carousel } from "@/components/home/carousel";
import { WhyUs } from "@/components/home/whyUs";
import { AboutUs } from "@/components/home/AboutUs";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col bg-white w-full">
      <Header />
      <div className="flex flex-col mt-28 w-full">
        <Carousel />
        <AboutUs />
        <WhyUs />
      </div>
      <Footer />
    </main>
  );
}
