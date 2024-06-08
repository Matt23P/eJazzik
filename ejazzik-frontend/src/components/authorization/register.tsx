"use client";
import { Button, ButtonToolbar, Form } from "rsuite";
import { useState } from "react";
import ArrowDownLineIcon from "@rsuite/icons/ArrowDownLine";
import ArrowUpLineIcon from "@rsuite/icons/ArrowUpLine";
import Link from "next/link";
import logo from "../../../public/logo.png";
import Image from "next/image";
import axios from "axios";
import { encodeToBase64 } from "next/dist/build/webpack/loaders/utils";
import { useRouter } from "next/navigation";

export const RegisterComp = () => {
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [passwordAgain, setPasswordAgain] = useState<string | null>(null);
  const [passwordAgainError, setPasswordAgainError] = useState<string | null>(
    null,
  );
  const [firstName, setFirstName] = useState<string | null>(null);
  const [firstNameError, setFirstNameError] = useState<string | null>(null);
  const [lastName, setLastName] = useState<string | null>(null);
  const [lastNameError, setLastNameError] = useState<string | null>(null);
  const [phoneNumber, setPhoneNumber] = useState<string | null>(null);
  const [phoneNumberError, setPhoneNumberError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [showMore, setShowMore] = useState(false);
  const [resError, setResError] = useState<string | null>(null);
  const router = useRouter();

  function handleSubmit() {
    if (email === null || email === "") {
      setEmailError("Wprowadź adres email");
      return;
    }

    if (
      !String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        )
    ) {
      setEmailError("Wprowadź poprawny adres email");
      return;
    }

    setEmailError(null);

    if (firstName === null || firstName === "") {
      setFirstNameError("Wprowadź imię");
      return;
    }

    setFirstNameError(null);

    if (lastName === null || lastName === "") {
      setLastNameError("Wprowadź nazwisko");
      return;
    }

    setLastNameError(null);

    if (phoneNumber === null || phoneNumber === "") {
      setPhoneNumberError("Wprowadź numer telefonu");
      return;
    }

    setPhoneNumberError(null);

    if (password === null || password === "") {
      setPasswordError("Wprowadź hasło");
      return;
    }

    setPasswordError(null);

    if (passwordAgain === null || passwordAgain === "") {
      setPasswordAgainError("Wprowadź hasło");
      return;
    }

    setPasswordAgainError(null);

    if (password !== passwordAgain) {
      setPasswordError("Hasła się nie zgadzają");
      return;
    }

    setPasswordError(null);

    axios
      .post(
        "http://localhost:8080/ejazzik/v1/user/signup",
        // { email: "adresemail@email.com", password: "Goodies123!@" },
        {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
          phoneNumber: phoneNumber,
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
          router.push("/logowanie");
        } else {
          setResError(r.data.errorMessage);
        }
      });
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <Image src={logo} alt={"logo"} width={200} height={200} />
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="email">
          <Form.Control
            name="email"
            type="email"
            placeholder="Email"
            onChange={(value) => setEmail(value)}
            errorMessage={emailError}
          />
        </Form.Group>
        <Form.Group controlId="firstName">
          <Form.Control
            name="firstName"
            type="string"
            placeholder="Imię"
            onChange={(value) => setFirstName(value)}
            errorMessage={firstNameError}
          />
        </Form.Group>
        <Form.Group controlId="lastName">
          <Form.Control
            name="lastName"
            type="string"
            placeholder="Nazwisko"
            onChange={(value) => setLastName(value)}
            errorMessage={lastNameError}
          />
        </Form.Group>
        <Form.Group controlId="phoneNumber">
          <Form.Control
            name="phoneNumber"
            type="string"
            placeholder="Numer telefonu"
            onChange={(value) => setPhoneNumber(value)}
            errorMessage={phoneNumberError}
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Control
            onChange={(value) => setPassword(value)}
            name="password"
            type="password"
            errorMessage={passwordError}
            autoComplete="off"
            placeholder="Hasło"
          />
        </Form.Group>
        <Form.Group controlId="passwordAgain">
          <Form.Control
            onChange={(value) => setPasswordAgain(value)}
            name="passwordAgain"
            type="password"
            errorMessage={passwordAgainError}
            autoComplete="off"
            placeholder="Powtórz hasło"
          />
        </Form.Group>
        {resError && (
          <div className="text-md text-center text-red-700 mb-2">
            {resError === "Wrong email or password"
              ? "Niewłasciwy emial lub hasło"
              : resError}
          </div>
        )}
        <Form.Group>
          <ButtonToolbar className="justify-center">
            <Button
              type="submit"
              appearance="primary"
              style={{ backgroundColor: "#bebbb4" }}
              className="self-center w-1/3"
            >
              Rejestracja
            </Button>
          </ButtonToolbar>
        </Form.Group>
        {showMore ? (
          <div className="flex flex-col justify-center items-center mt-[-10px]">
            <ArrowUpLineIcon
              className="size-8 cursor-pointer"
              style={{ color: "#bebbb4" }}
              onClick={() => setShowMore(false)}
            />
            <Link href={"/logowanie"} className="text-xs text-center mt-1">
              Posiadam już konto
            </Link>
          </div>
        ) : (
          <div
            className="flex w-full justify-center align-middle mt-[-15px] mb-2 items-center cursor-pointer"
            onClick={() => setShowMore(true)}
          >
            <ArrowDownLineIcon
              className="size-8"
              style={{ color: "#bebbb4" }}
            />
          </div>
        )}
      </Form>
    </div>
  );
};
