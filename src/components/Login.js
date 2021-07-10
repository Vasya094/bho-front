import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { loginUser } from "../slices/userSlice";
import { useDispatch } from "react-redux";
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
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const login = async () => {
      const reqObject = { email: loginEmail, password: loginPassword };
      console.log(reqObject)
    try {
      const resultAction = await dispatch(loginUser(reqObject));
    } catch (err) {
      console.error("LOGIN error");
    }
  };
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
            <Button appearance="primary" onClick={login}>
              {t("come_in")}
            </Button>
            <Button appearance="default">{t("cancel")}</Button>
          </ButtonToolbar>
          <Link to="/registration">{t("no_account_question")}</Link>
        </Form>
      </div>
    </div>
  );
};

export default Login;
