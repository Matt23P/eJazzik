import { HeaderOne } from "@/components/home/headerOne";
import matchAndReturnPhotoForTrip from "@/helpers/matchPhotoForTrip";
import calculateDaysBetweenDates from "@/helpers/calculateDays";
import { Accordion } from "rsuite";
import MakeReservationButton from "@/components/offers/MakeReservationButton";

export default function OfferComp({ trip }: { trip: Trip }) {
  console.log(trip);
  return (
    <div className="flex w-full  max-lg:w-[90%] flex-col justify-center items-center pb-32">
      <HeaderOne text={trip.name} />
      <div className="font-thin text-xl mt-2">
        {trip.country} - {trip.city}
      </div>
      <div className=" w-full max-w-[1000px] h-full max-h-[500px] text-center text-white mt-5">
        {matchAndReturnPhotoForTrip(
          trip.country,
          trip.city,
          "offerImg rounded-xl",
        )}
      </div>
      <div className="flex flex-col w-full mt-8 justify-center items-center">
        <div className="font-normal text-3xl mb-5 mt-5 text-black">
          Opis wycieczki
        </div>
        <div className="text-lg max-w-[800px] text-justify">
          Zapraszamy Cię do rezerwacji wycieczki w wyjątkowe miejsce jakim jest{" "}
          <span className="italic">
            {trip.country} - {trip.city}
          </span>
          . Podróż odbędzie się w dniach {trip.date}, co daje{" "}
          {calculateDaysBetweenDates(trip.date)} dni niezapomnianej podróży.
          Sugerowana liczba osób biorąca udział w wycieczce to{" "}
          {trip.numberOfPeople}, a dzięki naszym wyszukiwarkom przygotowaliśmy
          dla Ciebie wyjątkową cenę, jaką jest {trip.pricePerPerson} PLN
          <span className="font-thin text-sm">/os</span>. Łączna cena wyjazdu
          wynosi {trip.totalPrice} PLN. W trakcie wycieczki zatrzymasz się w
          wyjątkowym miejscu{" "}
          <span className="italic">{trip.accommodation.name}</span>.
        </div>
      </div>
      <div className="flex flex-col w-full mt-8 justify-center items-center">
        <div className="font-normal text-3xl mb-5 mt-5 text-black">
          Informacje o lotach
        </div>
        <div className="flex max-sm:flex-col max-sm:justify-center max-sm:items-center w-full max-w-[1000px] flex-wrap gap-5 mt-5">
          <div className="flex flex-col w-[45%] max-sm:w-[90%] items-center justify-center">
            <div className="text-2xl mb-3">Lot do</div>
            <div className="flex w-full flex-col">
              <span className="text-lg">Z lotniska:</span>
              {trip.flightDeparture.airportDeparture}
            </div>
            <div className="flex w-full flex-col mt-2">
              <span className="text-lg">Na lotnisko:</span>
              {trip.flightDeparture.airportArrival}
            </div>
            <div className="flex w-full flex-col mt-2">
              <span className="text-lg">Przewoźnik:</span>
              {trip.flightDeparture.carrier}
            </div>
            <div className="flex w-full flex-col mt-2">
              <span className="text-lg">Data i godzina wylotu:</span>
              {trip.flightDeparture.dateDeparture} -{" "}
              {trip.flightDeparture.timeDeparture}
            </div>
            <div className="flex w-full flex-col mt-2">
              <span className="text-lg">Data i godzina lądowania:</span>
              {trip.flightDeparture.dateArrival} -{" "}
              {trip.flightDeparture.timeArrival}
            </div>
            <div className="flex w-full flex-col mt-2">
              <span className="text-lg">Bagaż:</span>
              {trip.flightDeparture.luggage}
            </div>
          </div>
          <div className="flex flex-col w-[45%] max-sm:w-[90%] items-center ">
            <div className="text-2xl mb-3">Lot powrotny</div>
            <div className="flex w-full flex-col">
              <span className="text-lg">Z lotniska:</span>
              {trip.flightArrival.airportDeparture}
            </div>
            <div className="flex w-full flex-col mt-2">
              <span className="text-lg">Na lotnisko:</span>
              {trip.flightArrival.airportArrival}
            </div>
            <div className="flex w-full flex-col mt-2">
              <span className="text-lg">Przewoźnik:</span>
              {trip.flightArrival.carrier}
            </div>
            <div className="flex w-full flex-col mt-2">
              <span className="text-lg">Data i godzina wylotu:</span>
              {trip.flightArrival.dateDeparture} -{" "}
              {trip.flightArrival.timeDeparture}
            </div>
            <div className="flex w-full flex-col mt-2">
              <span className="text-lg">Data i godzina lądowania:</span>
              {trip.flightArrival.dateArrival} -{" "}
              {trip.flightArrival.timeArrival}
            </div>
            <div className="flex w-full flex-col mt-2">
              <span className="text-lg">Bagaż:</span>
              {trip.flightArrival.luggage}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full mt-8 justify-center items-center">
        <div className="font-normal text-3xl mb-5 mt-5 text-black">
          Proponowane atrakcje
        </div>
        <Accordion className="flex flex-col w-full max-w-[1000px]">
          {trip.attractions.map((a) => {
            return (
              <Accordion.Panel header={`${a.name}`}>
                <div className="flex flex-col w-full">
                  <div>Opis: {a.description}</div>
                  <div>Cena: {a.price} PLN</div>
                </div>
              </Accordion.Panel>
            );
          })}
        </Accordion>
      </div>
      <MakeReservationButton trip={trip} />
    </div>
  );
}
