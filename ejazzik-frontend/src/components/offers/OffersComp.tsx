"use client";

import { OfferCard } from "@/components/offers/offerCard";
import { useEffect, useState } from "react";
import axios from "axios";

export const OffersComp = () => {
  const [trips, setTrips] = useState<null | []>(null);
  useEffect(() => {
    axios
      .get("http://localhost:8080/ejazzik/v1/trip/available", {
        headers: {
          "Content-Type": "application/json",
        },
        auth: {
          username: "user",
          password: "password",
        },
      })
      .then((r) => {
        setTrips(r.data.trips);
      });
  }, []);

  return (
    <div className="flex gap-16 flex-wrap w-[90%] max-w-[1400px] items-center justify-center">
      {trips !== null ? (
        trips.map((t: object) => {
          return <OfferCard trip={t} />;
        })
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};
