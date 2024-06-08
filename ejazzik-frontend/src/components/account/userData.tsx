import { Button, ButtonToolbar, Form, useToaster, Notification } from "rsuite";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export const UserData = ({ encodedUser }: { encodedUser: any }) => {
  const router = useRouter();
  const toaster = useToaster();
  const [firstName, setFirstName] = useState<any>(encodedUser.firstName);
  const [lastName, setLastName] = useState<any>(encodedUser.lastName);
  const [phoneNumber, setPhoneNumber] = useState<any>(encodedUser.phoneNumber);

  function changeFirstName() {
    axios
      .put(
        `http://localhost:8080/ejazzik/v1/user/update/${encodedUser.userId}/firstName/${firstName}`,
        {},
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
        console.log(r);
      })
      .catch((e) => console.log(e));
  }

  function changeLastName() {
    axios
      .put(
        `http://localhost:8080/ejazzik/v1/user/update/${encodedUser.userId}/lastName/${lastName}`,
        {},
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
        console.log(r);
      });
  }

  function changePhoneNumber() {
    axios
      .put(
        `http://localhost:8080/ejazzik/v1/user/update/${encodedUser.userId}/phone/${phoneNumber}`,
        {},
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
        console.log(r);
      });
  }

  function handleSubmit() {
    if (firstName !== encodedUser.firstName) {
      changeFirstName();
    }

    if (lastName !== encodedUser.lastName) {
      changeLastName();
    }

    if (phoneNumber !== encodedUser.phoneNumber) {
      changePhoneNumber();
    }

    localStorage.setItem(
      "ejazzik-user",
      JSON.stringify({
        ...encodedUser,
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
      }),
    );

    const mess = (
      <Notification type={"success"} header={`Sukces!`} closable>
        <p>Dane użytkownika zmienione</p>
      </Notification>
    );

    toaster.push(mess);
    router.refresh();
  }
  return (
    <div>
      <div className="text-lg text-center mb-5">Zmień dane użytkownika</div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="firstName">
          <Form.Control
            name="firstName"
            value={firstName}
            type="string"
            placeholder="Imię"
            onChange={(value) => setFirstName(value)}
          />
        </Form.Group>
        <Form.Group controlId="lastName">
          <Form.Control
            name="lastName"
            value={lastName}
            type="string"
            placeholder="Nazwisko"
            onChange={(value) => setLastName(value)}
          />
        </Form.Group>
        <Form.Group controlId="phoneNumber">
          <Form.Control
            name="phoneNumber"
            value={phoneNumber}
            type="string"
            placeholder="Numer telefonu"
            onChange={(value) => setPhoneNumber(value)}
          />
        </Form.Group>
        <Form.Group>
          <ButtonToolbar className="justify-center">
            <Button
              type="submit"
              appearance="primary"
              style={{ backgroundColor: "#bebbb4" }}
              className="self-center w-1/3"
            >
              Zapisz
            </Button>
          </ButtonToolbar>
        </Form.Group>
      </Form>
    </div>
  );
};
