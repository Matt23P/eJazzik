import ArrowRightLineIcon from "@rsuite/icons/ArrowRightLine";
import Link from "next/link";
import matchAndReturnPhotoForTrip from "@/helpers/matchPhotoForTrip";

export const OfferCard = ({ trip }: { trip: Trip }) => {
  return (
    <div
      className="flex flex-col w-[350px] h-[450px] rounded-2xl "
      style={{ backgroundColor: "#f6f2ec" }}
    >
      <div className=" w-full h-[300px] rounded-xl text-center text-white">
        {/* @ts-ignore */}
        {matchAndReturnPhotoForTrip(trip.country, trip.city, "offerBoxImgImg")}
      </div>
      <div className="flex w-full mt-2 flex-col justify-center items-center">
        <div className="mt-2 text-lg">{trip.name}</div>
        <div className="mt-2">
          {trip.country} - {trip.city}
        </div>
        <div className="mt-2">{trip.date}</div>
        <div className="mt-2">
          <div className="flex gap-2">
            {trip.numberOfPeople}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="size-4"
            >
              <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
            </svg>
            - {trip.pricePerPerson}/os
          </div>
        </div>
        <div className="self-end mt-[-10px] text-black">
          <Link
            href={`/wycieczki/${trip.tripId}`}
            className="text-black hover:text-black"
          >
            <ArrowRightLineIcon className="size-8" />
          </Link>
        </div>
      </div>
    </div>
  );
};
