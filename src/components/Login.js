import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  ButtonToolbar,
  Button,
} from "rsuite";

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  console.log(loginEmail);
  const { t } = useTranslation();
  return (
    <div className="login">
      <div className="signin">
        <h3>{t("login_title")}</h3>
        <Form fluid>
          <FormGroup>
            <ControlLabel>{t("email")}</ControlLabel>
            <FormControl
              value={loginEmail}
              onChange={(e) => setLoginEmail(e)}
              name="email"
              type="email"
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel>{t("password")}</ControlLabel>
            <FormControl
              value={loginPassword}
              onChange={(e) => setLoginPassword(e)}
              name="password"
              type="password"
            />
          </FormGroup>
          <ButtonToolbar>
            <Button appearance="primary">{t("come_in")}</Button>
            <Button appearance="default">{t("cancel")}</Button>
          </ButtonToolbar>
        </Form>
      </div>
      <div className="registration">
        <h3>{t("registration_title")}</h3>
        <Form fluid>
          <FormGroup>
            <ControlLabel>{t("reg_name")}</ControlLabel>
            <FormControl name="name" />
          </FormGroup>
          <FormGroup>
            <ControlLabel>{t("email")}</ControlLabel>
            <FormControl name="email" type="email" />
          </FormGroup>
          <FormGroup>
            <ControlLabel>{t("number_call")}</ControlLabel>
            <FormControl name="number" type="text" />
          </FormGroup>
          <FormGroup>
            <ControlLabel>{t("password")}</ControlLabel>
            <FormControl name="password" type="password" />
          </FormGroup>
          <FormGroup>
            <ControlLabel>{t("information")}</ControlLabel>
            <FormControl rows={5} name="textarea" componentClass="textarea" />
          </FormGroup>
          <FormGroup>
            <ButtonToolbar>
              <Button appearance="primary">{t("registration")}</Button>
              <Button appearance="default">{t("cancel")}</Button>
            </ButtonToolbar>
          </FormGroup>
        </Form>
      </div>
    </div>
  );
};

export default Login;
