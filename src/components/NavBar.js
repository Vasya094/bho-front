import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Flags from "country-flag-icons/react/3x2";
import { Navbar, Nav, Dropdown, ButtonToolbar } from "rsuite";
import "rsuite/dist/styles/rsuite-default.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {
  const [activeLang, setActiveLang] = useState("ar");
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    setActiveLang(language);
    i18n.changeLanguage(language);
  };
  const { data } = useSelector((state) => state.user);
  return (
    <div className="navbar">
      <Navbar>
        <Nav className="links">
          <Link to="/">
            <Nav.Item className="linknavbar">{t("home")}</Nav.Item>
          </Link>
          {data.type === "Admin" && (
            <Link to="/admin_panel">
              <Nav.Item className="linknavbar">{t("admin_panel")}</Nav.Item>
            </Link>
          )}
          <Link to="/events">
            <Nav.Item className="linknavbar">{t("events")}</Nav.Item>
          </Link>
          <Link to="/about">
            <Nav.Item className="linknavbar">{t("about")}</Nav.Item>
          </Link>
          <Link to="/login">
            <Nav.Item className="linknavbar">{t("login")}</Nav.Item>
          </Link>
          <Link to="/registration">
            <Nav.Item className="linknavbar"> {t("registration")} </Nav.Item>
          </Link>
        </Nav>
      </Navbar>
      <ButtonToolbar id="droppdownlang">
        {data.name && <span>{data.name}</span>}
        <Dropdown title={t("lang")} activeKey={activeLang}>
          <Dropdown.Item className="langflag" eventKey="en">
            <span className="langabb" onClick={() => changeLanguage("en")}>
              <Flags.GB className="flag" title="EN" />
            </span>
          </Dropdown.Item>
          <Dropdown.Item className="langflag" eventKey="ar">
            <span className="langabb" onClick={() => changeLanguage("ar")}>
              <Flags.SA className="flag" title="AR" />
            </span>
          </Dropdown.Item>
        </Dropdown>
      </ButtonToolbar>
    </div>
  );
};

export default NavBar;
