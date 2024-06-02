import Header from "@/components/global/header";
import Footer from "@/components/global/footer";
import {Carousel} from "@/components/home/carousel";

export default function Home() {
  return (
      <main className="relative min-h-screen flex flex-col bg-white w-full">
          <Header />
          <div className="flex mt-28 w-full">
            <Carousel />
          </div>
          <Footer />
    </main>
  );
}
