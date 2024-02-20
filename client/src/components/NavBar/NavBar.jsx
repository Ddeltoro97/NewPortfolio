import { Link as LinkR } from "react-router-dom";
import React, { useState } from "react";
import styled, { useTheme } from "styled-components";
import { CgBriefcase } from "react-icons/cg";
import { Bio } from "../../data/constantsEN";
import { FaBars, FaAngleDown } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Nav = styled.div`
  background-color: ${({ theme }) => theme.card_light};
  height: 80px;
  display: flex;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media screen and (max-width: 960px) {
    transition: 0.8 all ease;
  }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

const NavLogo = styled(LinkR)`
width: 80%,
padding: 0 6px;
display: flex;
justify-self: flex-start;
cursor: pointer;
text-decoration: none;
align-items: center;
@media screen and (max-width: 640px){
    padding: 0 0px;
}
`;

const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 50%);
    font-size: 1.8rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`;

const NavItems = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  padding: 0 6px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 80%;
  height: 100%;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const GithubButton = styled.a`
border: 1.8px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;
    :hover {
      background: ${({ theme }) => theme.primary};
      color: ${({ theme }) => theme.white};     
    }
    @media screen and (max-width: 768px) { 
    font-size: 14px;
    }
`;

export const Span = styled.div`
  padding: 0 4px;
  font-weight: bold;
  font-size: 15px;
  margin-left: -3px;
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  position: absolute;
  top: 80;
  right: 0;
  width: 100%;
  padding: 12px 40px 24px 40px;
  background: ${({ theme }) => theme.card_light + 99};
  transition: all 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100)")};
  border-radius: 0 0 20 20px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  opacity: ${({ open }) => (open ? "1" : "0")};
  z-index: ${({ open }) => (open ? "1" : "-1")};
`;

const MobileLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2 ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

const LanguageModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  width: 49px;
  height: 65px;
  background-color: white;
  position: absolute;
  top: 57%;
  left: calc(100%+10px);
  //   border: 2px solid black;
  border-top-color: rgb(84, 84, 84);
  border-left-color: rgb(84, 84, 84);
  //   padding: 1px;
  //   background-color: #1C1C27;
  background: transparent;
  transition: all 0.9s ease-in-out;
`;


export default function NavBar() {
  const [t, i18n] = useTranslation("NavBar");

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const [language, setLanguage] = useState(false);

  const openModal = () => {
    setLanguage(!language);
  };

  const english = () => {
    changeLanguage("en");
    openModal();
  };

  const spanish = () => {
    changeLanguage("es");
    openModal();
  };

  const [open, setOpen] = useState(false);
  const theme = useTheme();
  return (
    <Nav>
      <NavContainer>
        <NavLogo to="/">
          <a
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              marginBottom: "20",
              cursor: "pointer",
            }}
          >
            <CgBriefcase size="2.8rem" /> <Span>David's</Span>
            <Span>Portfolio</Span>
          </a>
          <div>
            <button
              onClick={openModal}
              style={{
                display: "flex",
                cursor: "pointer",
                background: "transparent",
                border: "none",
                color: "white",
              }}
            >
              {" "}
              <img styles={{ width: "10px" }} src={t("navBar.flag")} alt="" />
              <FaAngleDown />
            </button>

            {language && (
              <LanguageModal>
                <img
                  onClick={english}
                  style={{ width: "32px" }}
                  src="https://cdn.sofifa.net/flags/us.png"
                  alt=""
                />
                <img
                  onClick={spanish}
                  style={{ width: "32px" }}
                  src="https://cdn.sofifa.net/flags/es.png"
                  alt=""
                />
              </LanguageModal>
            )}
          </div>
        </NavLogo>

        <MobileIcon>
          <FaBars
            onClick={() => {
              setOpen(!open);
            }}
          />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">{t("navBar.about")}</NavLink>
          <NavLink href="#skills">{t("navBar.skills")}</NavLink>
          <NavLink href="#projects">{t("navBar.projects")}</NavLink>
          <NavLink href="#education">{t("navBar.education")}</NavLink>
          <NavLink href="#contact">{t("navBar.contact")}</NavLink>
        </NavItems>
        <ButtonContainer>
          <GithubButton href={Bio.github} target="_blank">
            Github
          </GithubButton>
        </ButtonContainer>
      </NavContainer>
      {open && (
        <MobileMenu open={open}>
          <MobileLink
            href="#about"
            onClick={() => {
              setOpen(!open);
            }}
          >
            {t("navBar.about")}
          </MobileLink>
          <MobileLink
            href="#skills"
            onClick={() => {
              setOpen(!open);
            }}
          >
            {t("navBar.skills")}
          </MobileLink>
          <MobileLink
            href="#projects"
            onClick={() => {
              setOpen(!open);
            }}
          >
            {t("navBar.projects")}
          </MobileLink>
          <MobileLink
            href="#education"
            onClick={() => {
              setOpen(!open);
            }}
          >
            {t("navBar.education")}
          </MobileLink>
          <MobileLink
            href="#contact"
            onClick={() => {
              setOpen(!open);
            }}
          >
            {t("navBar.contact")}
          </MobileLink>
          <GithubButton
            href={Bio.github} 
            target="_blank"
            style={{
              padding: "10px 16px",
              background: `${theme.primary}`,
              color: "white",
              width: "max-content",
            }}
          >
            Github
          </GithubButton>
        </MobileMenu>
      )}
    </Nav>
  );
}
