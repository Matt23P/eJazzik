import { Button, ButtonToolbar, Form, useToaster, Notification } from "rsuite";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export const PasswordChange = ({ encodedUser }: { encodedUser: any }) => {
  const router = useRouter();
  const toaster = useToaster();
  const [password, setPassword] = useState<any>(null);
  const [passwordError, setPasswordError] = useState<any>(null);
  const [passwordRepeat, setPasswordRepeat] = useState<any>(null);

  function handleSubmit() {
    if (password !== passwordRepeat) {
      setPasswordError("Hasła nie są identyczne");
    }

    setPasswordError(null);

    axios
      .put(
        `http://localhost:8080/ejazzik/v1/user/update/${encodedUser.userId}/password/${password}`,
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

    const mess = (
      <Notification type={"success"} header={`Sukces!`} closable>
        <p>Hasło zostało zmienione</p>
      </Notification>
    );

    toaster.push(mess);
    router.refresh();
  }
  return (
    <div>
      <div className="text-lg text-center mb-5">Zmień dane użytkownika</div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="password">
          <Form.Control
            name="password"
            value={password}
            type="password"
            placeholder="Hasło"
            errorMessage={passwordError}
            onChange={(value) => setPassword(value)}
          />
        </Form.Group>
        <Form.Group controlId="passwordAgain">
          <Form.Control
            name="passwordAgain"
            value={passwordRepeat}
            type="password"
            placeholder="Powtórz hasło"
            onChange={(value) => setPasswordRepeat(value)}
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
              Zmień hasło
            </Button>
          </ButtonToolbar>
        </Form.Group>
      </Form>
    </div>
  );
};
