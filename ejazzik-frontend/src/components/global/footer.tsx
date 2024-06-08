"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "/public/logo.png";

const Footer = () => {
  return (
    <footer className="self-end w-full" style={{ backgroundColor: "#f6f2ec" }}>
      <div className="flex flex-row pt-12 pb-5 justify-center align-middle content-center footerDivOne">
        <Image
          src={logo}
          alt={"logo"}
          className="h-[150px] w-40 mt-[-20px] ml-[-39px] pl-[0px] mr-10"
        />
        <div className="flex flex-row">
          <div className="flex flex-col gap-3 p-1 pt-0.5">
            <div className=" text-lg">EJazzik</div>
            <div>Łódzka 123 00-000 Łódź</div>
            <div>NIP - 123-456-789-10</div>
          </div>
        </div>
        <div className="flex flex-row ml-16">
          <div className="flex flex-col gap-3 p-1 pt-0.5">
            <div className=" text-lg">Strona główna</div>
            <Link href={"/"}>Początek</Link>
          </div>
        </div>
        <div className="flex flex-row ml-16">
          <div className="flex flex-col gap-3 p-1 pt-0.5">
            <div className=" text-lg">Wycieczki</div>
            <Link href={"/wycieczki"}>Lista wycieczek</Link>
          </div>
        </div>
        <div className="flex flex-row ml-16">
          <div className="flex flex-col gap-3 p-1 pt-0.5">
            <div className=" text-lg">Kontakt</div>
            <Link href={"/kontakt"}>Skontaktuj się z nami</Link>
          </div>
        </div>
      </div>
      <div className="hidden flex-row gap-10  p-5 justify-center align-middle content-center footerDivTwo">
        <div className="flex flex-col gap-6">
          <Image src={logo} alt={"logo"} className="h-[150px] w-40 mt-10" />
          <div className="flex flex-row justify-center items-center text-center">
            <div className="flex flex-col gap-3 p-1 pt-0.5">
              <div className=" text-lg">EJazzik</div>
              <div>00-000 Łódź</div>
              <div>Łódzka 123</div>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center text-center">
            <div className="flex flex-col gap-3 p-1 pt-0.5">
              <div className=" text-lg">Strona główna</div>
              <Link href={"/"}>Początek</Link>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center text-center">
            <div className="flex flex-col gap-3 p-1 pt-0.5">
              <div className=" text-lg">Wycieczki</div>
              <Link href={"/wycieczki"}>Lista wycieczek</Link>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center text-center">
            <div className="flex flex-col gap-3 p-1 pt-0.5">
              <div className=" text-lg">Kontakt</div>
              <Link href={"/kontakt"}>Skontaktuj się z nami</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden flex-col items-center gap-10  p-5 justify-center align-middle content-center footerDivThree">
        <Image
          src={logo}
          alt={"logo"}
          className="h-[150px] w-40 mt-10 self-center"
        />
        <div className="flex flex-row gap-3">
          <div className="flex flex-col gap-6">
            <div className="flex flex-row">
              <div className="flex flex-col gap-3 p-1 pt-0.5">
                <div className=" text-lg">EJazzik</div>
                <div>Łódzka 123 00-000 Łódź</div>
                <div>NIP - 123-456-789-10</div>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="flex flex-col gap-3 p-1 pt-0.5">
                <div className=" text-lg">Strona główna</div>
                <Link href={"/"}>Początek</Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-row ml-10">
              <div className="flex flex-col gap-3 p-1 pt-0.5">
                <div className=" text-lg">Wycieczki</div>
                <Link href={"/about"}>Motywacja</Link>
                <Link href={"/wycieczki"}>Lista wycieczek</Link>
              </div>
            </div>
            <div className="flex flex-row ml-10">
              <div className="flex flex-col gap-3 p-1 pt-0.5">
                <div className=" text-lg">Kontakt</div>
                <Link href={"/kontakt"}>Skontaktuj się z nami</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-2 mt-2 text-center">
        Copyright © 2023 Filip Warchoł All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
