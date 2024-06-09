import {
  Accordion,
  Button,
  Input,
  InputGroup,
  Modal,
  Notification,
  useToaster,
} from "rsuite";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function MakeReservationButton({ trip }: { trip: Trip }) {
  const router = useRouter();
  const toaster = useToaster();
  const [open, setOpen] = useState(false);
  const [participantsInfo, setParticipantsInfo] = useState(
    createPeopleArray(trip.numberOfPeople),
  );

  const makeReservation = () => {
    const user = localStorage.getItem("ejazzik-user");
    // @ts-ignore
    const encodedUser = JSON.parse(user);

    axios
      .post(
        "http://localhost:8080/ejazzik/v1/reservation/create",
        {
          tripId: trip.tripId,
          userId: encodedUser.userId,
          participants: participantsInfo,
        },
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
        if (r.data.success) {
          const mess = (
            <Notification type={"success"} header={`Sukces!`} closable>
              <p>Dokonano rezerwacji</p>
            </Notification>
          );

          toaster.push(mess);
          router.push("/konto");
        }
      });
  };

  const handleInputChange = (index: number, name: string, value: any) => {
    const newParticipantsInfo = [...participantsInfo];
    // @ts-ignore
    newParticipantsInfo[index][name] = value;
    setParticipantsInfo(newParticipantsInfo);
  };

  const areAllParticipantsInfoFilled = () => {
    return participantsInfo.every((participant) => {
      return Object.values(participant).every((value) => value !== "");
    });
  };

  return (
    <div className="mt-5">
      {localStorage.getItem("ejazzik-user") ? (
        <Button
          appearance="primary"
          size={"lg"}
          style={{ backgroundColor: "#bebbb4" }}
          className="self-center mt-5"
          onClick={() => setOpen(true)}
        >
          Zarezerwuj
        </Button>
      ) : (
        <Link href="/logowanie">
          <Button
            appearance="primary"
            size={"lg"}
            style={{ backgroundColor: "#bebbb4" }}
            className="self-center mt-5"
          >
            Zaloguj aby zarezerwować
          </Button>
        </Link>
      )}
      <Modal
        size={"lg"}
        open={open}
        className="max-h-[100vh - 100px] overflow-auto"
        onClose={() => {
          setOpen(false);
        }}
      >
        <Modal.Header>
          <Modal.Title>Rezerwacja wycieczki {trip.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="flex flex-col w-full h-full">
            <Accordion className="flex flex-col w-full max-w-[1000px]">
              {participantsInfo.map((p, index) => (
                <Accordion.Panel
                  header={`${p.firstName !== "" || p.lastName !== "" ? p.firstName + " " + p.lastName : `Uzupełnij dane uczestnika ${index + 1}`}`}
                  key={index}
                >
                  <div className="flex flex-col w-full">
                    <InputGroup className="flex max-sm:flex-col">
                      <Input
                        name="firstName"
                        type="string"
                        placeholder="Imię"
                        value={p.firstName}
                        onChange={(value) =>
                          handleInputChange(index, "firstName", value)
                        }
                      />
                      <InputGroup.Addon></InputGroup.Addon>
                      <Input
                        name="lastName"
                        type="string"
                        placeholder="Nazwisko"
                        value={p.lastName}
                        onChange={(value) =>
                          handleInputChange(index, "lastName", value)
                        }
                      />
                    </InputGroup>
                    <InputGroup className="flex max-sm:flex-col mt-2">
                      <Input
                        name="pesel"
                        type="string"
                        placeholder="Pesel"
                        value={p.pesel}
                        onChange={(value) =>
                          handleInputChange(index, "pesel", value)
                        }
                      />
                      <InputGroup.Addon></InputGroup.Addon>
                      <Input
                        name="passportNumber"
                        type="string"
                        placeholder="Numer dokumentu"
                        value={p.passportNumber}
                        onChange={(value) =>
                          handleInputChange(index, "passportNumber", value)
                        }
                      />
                    </InputGroup>
                    <InputGroup className="flex max-sm:flex-col mt-2">
                      <Input
                        name="email"
                        type="email"
                        placeholder="Email"
                        value={p.email}
                        onChange={(value) =>
                          handleInputChange(index, "email", value)
                        }
                      />
                      <InputGroup.Addon></InputGroup.Addon>
                      <Input
                        name="birthDate"
                        type="date"
                        placeholder="Data urodzenia"
                        value={formatDateToISO(p.birthDate)}
                        onChange={(value) =>
                          handleInputChange(
                            index,
                            "birthDate",
                            formatDate(value),
                          )
                        }
                      />
                    </InputGroup>
                  </div>
                </Accordion.Panel>
              ))}
            </Accordion>
            {areAllParticipantsInfoFilled() ? (
              <Button
                appearance="primary"
                size={"lg"}
                onClick={() => makeReservation()}
                style={{ backgroundColor: "#bebbb4" }}
                className="self-center mt-5"
              >
                Zarezerwuj
              </Button>
            ) : (
              <Button
                appearance="primary"
                disabled
                size={"lg"}
                style={{ backgroundColor: "#94928d" }}
                className="self-center mt-5"
              >
                Wypełnij dane uczestników
              </Button>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => {
              setOpen(false);
            }}
            appearance="primary"
          >
            Zamknij
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

function createPeopleArray(numberOfPeople: number) {
  let peopleArray = [];

  for (let i = 0; i < numberOfPeople; i++) {
    let person = {
      firstName: "",
      lastName: "",
      pesel: "",
      email: "",
      passportNumber: "",
      birthDate: "",
    };

    peopleArray.push(person);
  }

  return peopleArray;
}

function formatDate(inputDate: string) {
  const [year, month, day] = inputDate.split("-");
  return `${day}.${month}.${year}`;
}

function formatDateToISO(inputDate: string) {
  const [day, month, year] = inputDate.split(".");
  return `${year}-${month}-${day}`;
}
