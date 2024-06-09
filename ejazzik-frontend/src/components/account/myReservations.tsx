"use client";
import React, { useEffect, useState } from "react";
import {
  Accordion,
  Button,
  Loader,
  Modal,
  Notification,
  Panel,
  useToaster,
} from "rsuite";
import axios from "axios";
import ArrowRightLineIcon from "@rsuite/icons/ArrowRightLine";
import { useRouter } from "next/navigation";

export const MyReservations = ({ encodedUser }: { encodedUser: any }) => {
  const [loading, setLoading] = useState(true);
  const toaster = useToaster();
  const router = useRouter();
  const [reservations, setReservations] = useState(null);
  const [open, setOpen] = useState(false);
  const [chosenReservation, setChosenReservation] = useState<any>(null);

  useEffect(() => {
    axios
      .get(
        `http://localhost:8080/ejazzik/v1/reservation/user/${encodedUser.userId}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          auth: {
            username: "user",
            password: "password",
          },
        },
      )
      .then((r) => {
        console.log(r.data.reservations);
        setReservations(r.data.reservations);
        setLoading(false);
      });
  }, [open]);

  function handleCancelReservation() {
    axios
      .delete(
        `http://localhost:8080/ejazzik/v1/reservation/${chosenReservation.reservationId}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          auth: {
            username: "user",
            password: "password",
          },
        },
      )
      .then((r) => {
        setOpen(false);
      });

    const mess = (
      <Notification type={"success"} header={`Sukces!`} closable>
        <p>Hasło zostało zmienione</p>
      </Notification>
    );

    toaster.push(mess);
    router.refresh();
  }

  return (
    <div className="self-center">
      {loading ? (
        <Loader size="lg" />
      ) : (
        <>
          {/* @ts-ignore*/}
          {reservations.length === 0 ? (
            <div>Brak rezerwacji</div>
          ) : (
            <div className="flex flex-col">
              {/*// @ts-ignore*/}
              {reservations.map((r, i) => {
                return (
                  <Panel
                    className="w-[400px] py-2 rounded-xl text-white shadow-xl"
                    style={{ backgroundColor: "#bebbb4" }}
                    key={i}
                  >
                    <div className="flex flex-col gap-2">
                      <div className="text-semibold text-lg">
                        {r.trip.name +
                          " - " +
                          r.trip.city +
                          " - " +
                          r.trip.country}
                      </div>
                      <div className="flex justify-between">
                        {r.trip.date}
                        <ArrowRightLineIcon
                          className="size-10 mt-[-10px] cursor-pointer"
                          onClick={() => {
                            setOpen(true);
                            setChosenReservation(r);
                          }}
                        />
                      </div>
                      <div className="mt-[-10px]">{r.trip.description}</div>
                    </div>
                  </Panel>
                );
              })}
            </div>
          )}
        </>
      )}
      {chosenReservation && (
        <Modal
          size={"lg"}
          open={open}
          className="max-h-[100vh - 100px] overflow-auto"
          onClose={() => {
            setOpen(false);
            setChosenReservation(null);
          }}
        >
          <Modal.Header>
            <Modal.Title>
              Rezerwacja nr {chosenReservation.reservationId}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="flex flex-col w-full h-full gap-14">
              <div className="flex flex-col gap-2">
                <div className="text-xl mb-2">Informacje podstawowe</div>
                <div>Nazwa: {chosenReservation.trip.name}</div>
                <div>
                  Miejsce: {chosenReservation.trip.country} /{" "}
                  {chosenReservation.trip.city}
                </div>
                <div>Data: {chosenReservation.trip.date}</div>
                <div>Opis wyjazdu: {chosenReservation.trip.description}</div>
                <div>Liczba osób: {chosenReservation.trip.numberOfPeople}</div>
                <div>
                  Cena za osobę:{" "}
                  {parseFloat(chosenReservation.trip.pricePerPerson).toFixed(2)}{" "}
                  zł
                </div>
                <div>
                  Cena całkowita:{" "}
                  {parseFloat(chosenReservation.trip.totalPrice).toFixed(2)} zł
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-xl mb-2">Osoba obsługująca wyjazd</div>
                <div>
                  {chosenReservation.attendant.firstName +
                    " " +
                    chosenReservation.attendant.lastName}
                </div>
                <div>
                  Mail:{" "}
                  <a
                    className="cursor-pointer"
                    href={`mailto:${chosenReservation.attendant.email}?subject=Pomoc`}
                  >
                    {chosenReservation.attendant.email}
                  </a>
                </div>
                <div>Telefon: {chosenReservation.attendant.phoneNumber}</div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-xl mb-2">Informacje o lotach</div>
                <div>
                  Z lotniska:{" "}
                  {chosenReservation.trip.flightDeparture.airportDeparture} na
                  lotnisko{" "}
                  {chosenReservation.trip.flightDeparture.airportArrival}
                </div>
                <div>
                  Linia: {chosenReservation.trip.flightDeparture.carrier}
                </div>
                <div>
                  Data: {chosenReservation.trip.flightDeparture.dateDeparture},
                  godzina wylotu:{" "}
                  {chosenReservation.trip.flightDeparture.timeDeparture},
                  godzina przylotu:{" "}
                  {chosenReservation.trip.flightDeparture.timeArrival}
                </div>
                <br />
                <div>
                  Z lotniska:{" "}
                  {chosenReservation.trip.flightArrival.airportDeparture} na
                  lotnisko {chosenReservation.trip.flightArrival.airportArrival}
                </div>
                <div>Linia: {chosenReservation.trip.flightArrival.carrier}</div>
                <div>
                  Data: {chosenReservation.trip.flightArrival.dateDeparture},
                  godzina wylotu:{" "}
                  {chosenReservation.trip.flightArrival.timeDeparture}, godzina
                  przylotu: {chosenReservation.trip.flightArrival.timeArrival}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-xl mb-2">Informacje o noclegu</div>
                <div>
                  Nazwa obiektu: {chosenReservation.trip.accommodation.name}
                </div>
                <div>
                  Adres obiektu: {chosenReservation.trip.accommodation.address}
                </div>
                <div>
                  Standard: {chosenReservation.trip.accommodation.standard}
                </div>
                <div>
                  Telefon: {chosenReservation.trip.accommodation.phoneNumber}
                </div>
                <div>
                  Opis: {chosenReservation.trip.accommodation.description}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-xl mb-2">Informacje o uczestnikach</div>
                <Accordion className="flex flex-col w-full max-w-[1000px]">
                  {/* @ts-ignore */}
                  {chosenReservation.participants.map((p, i) => {
                    return (
                      <Accordion.Panel header={`${p.fistName} ${p.lastName}`}>
                        <div className="flex flex-col w-full">
                          <div className="ml-5">Mail: {p.email}</div>
                          <div className="ml-5">
                            Numer paszportu: {p.passportNumber}
                          </div>
                          <div className="ml-5">Numer pesel: {p.pesel}</div>
                        </div>
                      </Accordion.Panel>
                    );
                  })}
                </Accordion>
              </div>
              <div className="flex gap-4">
                <a
                  href={`mailto:${chosenReservation.attendant.email}?subject=Pomoc`}
                  className={"bg-red-500 w-fit p-4 rounded-xl text-white"}
                >
                  Dane uczestników się nie zgadzają?
                </a>
                <div
                  className={
                    "bg-red-500 w-fit p-4 rounded-xl text-white cursor-pointer"
                  }
                  onClick={handleCancelReservation}
                >
                  Anuluj rezerwacje
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              onClick={() => {
                setOpen(false);
                setChosenReservation(null);
              }}
              appearance="subtle"
            >
              Zamknij
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};
