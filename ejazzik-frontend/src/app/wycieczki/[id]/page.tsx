"use client";
import Header from "@/components/global/header";
import Footer from "@/components/global/footer";
import OfferComp from "@/components/offers/OfferComp";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Offer({ params }: { params: { id: string } }) {
  const [trip, setTrip] = useState<null | Trip>(null);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/ejazzik/v1/trip/${params.id}`, {
        headers: {
          "Content-Type": "application/json",
        },
        auth: {
          username: "user",
          password: "password",
        },
      })
      .then((r) => {
        setTrip(r.data);
      });
  }, []);

  return (
    <main className="relative min-h-screen flex flex-col bg-white w-full">
      <Header />
      <div className="min-h-screen h-full w-full flex-col flex pt-52 items-center gap-20 max-lg:flex-col mb-10">
        {trip ? <OfferComp trip={trip} /> : <div>Loading</div>}
      </div>
      <Footer />
    </main>
  );
}
