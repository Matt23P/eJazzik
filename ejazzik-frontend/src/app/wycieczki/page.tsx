import Header from "@/components/global/header";
import Footer from "@/components/global/footer";
import { HeaderOne } from "@/components/home/headerOne";
import { OffersComp } from "@/components/offers/OffersComp";

export default function Offers() {
  return (
    <main className="relative min-h-screen flex flex-col bg-white w-full">
      <Header />
      <div className="min-h-screen h-full w-full flex-col flex pt-28 items-center gap-20 max-lg:flex-col mb-10">
        <div
          className={
            "flex items-center w-full justify-center mt-32 text-center"
          }
        >
          <HeaderOne text="Dostępne wycieczki" />
        </div>
        <OffersComp />
      </div>
      <Footer />
    </main>
  );
}
