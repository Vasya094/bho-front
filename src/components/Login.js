import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  useDispatch,
  useSelector
} from "react-redux";
import {
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  ButtonToolbar,
  Button,
} from "rsuite";
import {registerUser} from '../slices/userSlice'

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [information, setInformation] = useState("");
    const dispatch = useDispatch()

    const register = async () => {
      try {
        const reqObject = {
          userInfo: {
            userName: name,
            information,
            phoneNumber: number,
            email: regEmail,
            password: regPassword
          }
        }
        const resultAction = await dispatch(registerUser(reqObject))
        console.log(resultAction)
      } catch (err) {
        console.error("REG error")
      }
    }
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
            < FormControl value = {
              name
            }
            onChange = {
              (e) => setName(e)
            }
            name = "name" / >
          </FormGroup>
          <FormGroup>
            <ControlLabel>{t("email")}</ControlLabel>
            < FormControl value={regEmail}
            onChange= {
              (e) => setRegEmail(e)
            }
            name = "email"
            type = "email" />
          </FormGroup>
          <FormGroup>
            <ControlLabel>{t("number_call")}</ControlLabel>
            < FormControl value = {
              number
            }
            onChange = {
              (e) => setNumber(e)
            }
            name = "number"
            type = "text" />
          </FormGroup>
          <FormGroup>
            <ControlLabel>{t("password")}</ControlLabel>
            <FormControl 
            value = {
              regPassword
            }
            onChange = {
              (e) => setRegPassword(e)
            }
            name = "password"
            type = "password" / >
          </FormGroup>
          <FormGroup>
            <ControlLabel>{t("information")}</ControlLabel>
            < FormControl value = {
              information
            }
            onChange = {
              (e) => setInformation(e)
            }
            rows = {
              5
            }
            name = "textarea"
            componentClass = "textarea" / >
          </FormGroup>
          <FormGroup>
            <ButtonToolbar>
              <Button appearance="primary"  onClick={register}>{t("registration")}</Button>
              <Button appearance="default">{t("cancel")}</Button>
            </ButtonToolbar>
          </FormGroup>
        </Form>
      </div>
    </div>
  );
};

export default Login;
