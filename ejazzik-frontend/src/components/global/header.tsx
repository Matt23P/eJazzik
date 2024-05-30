"use client";
import { Navbar, Nav } from "rsuite";
import MenuIcon from "@rsuite/icons/Menu";
import CloseIcon from "@rsuite/icons/Close";
import { useState } from "react";
import logo from "/public/logo.png";
import Image from "next/image";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div className="fixed w-full overflow-visible" style={{ zIndex: 9 }}>
      <Navbar className="h-28 pl-5 menu">
        <Navbar.Brand href="/">
          <div className="flex flex-row">
            <Image
              src={logo}
              alt={"logo"}
              className="h-[120px] w-40 mt-[-20px] ml-[-39px] pl-[0px]"
            />
          </div>
        </Navbar.Brand>
        <Nav
          pullRight
          className="p-7 text-xl max-md:text-base md:flex max-md:hidden w-fit"
        >
          <Nav.Item href={"/konto"} className="">
            Konto
          </Nav.Item>
          <Nav.Item href={"/"} className="">
            Strona główna
          </Nav.Item>
          <Nav.Item href={"/wycieczki"} className="">
            Wycieczki
          </Nav.Item>
          <Nav.Item href={"/kontakt"} className="">
            Kontakt
          </Nav.Item>
        </Nav>
        <div className="md:hidden max-md:flex p-11">
          <button
            style={{ marginLeft: "auto" }}
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? (
              <CloseIcon style={{ fontSize: "2em" }} />
            ) : (
              <MenuIcon style={{ fontSize: "2em" }} />
            )}
          </button>
        </div>
      </Navbar>
      {mobileMenu && (
        <div
          className="md:hidden max-md:flex justify-center items-center h-[calc(100vh-112px)] mobileMenu"
          style={{ backgroundColor: "#f3e9d9" }}
        >
          <Nav
            vertical
            className="flex flex-col text-xl gap-5 mt-[-100px] text-center items-center"
          >
            <Nav.Item href={"/konto"} className="text-black hover:bg-none">
              Konto
            </Nav.Item>
            <Nav.Item href={"/"} className="text-black hover:bg-none">
              Strona główna
            </Nav.Item>
            <Nav.Item href={"/wycieczki"} className="text-black">
              Wycieczki
            </Nav.Item>
            <Nav.Item href={"/kontakt"} className="text-black">
              Kontakt
            </Nav.Item>
          </Nav>
        </div>
      )}
    </div>
  );
};

export default Header;
