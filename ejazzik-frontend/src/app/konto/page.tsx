"use client";
import Header from "@/components/global/header";
import Footer from "@/components/global/footer";
import { useRouter } from "next/navigation";
import { UserData } from "@/components/account/userData";
import React from "react";
import { PasswordChange } from "@/components/account/passwordChange";
import { MyReservations } from "@/components/account/myReservations";

export default function Account() {
  const router = useRouter();
  const user = localStorage.getItem("ejazzik-user");

  if (!user) {
    router.push("/");
  }

  // @ts-ignore
  const encodedUser = JSON.parse(user);

  return (
    <main className="relative min-h-screen flex flex-col bg-white w-full">
      <Header />
      <div className="h-full w-full flex pt-28 justify-center items-center gap-52 max-lg:flex-col mt-[112px] mb-10 py-32">
        <div className="flex flex-col gap-10">
          <div className="text-2xl text-center">Moje rezerwacje</div>
          <MyReservations encodedUser={encodedUser} />
        </div>
        <div className="flex flex-col gap-10">
          <div className="text-2xl text-center">Ustawienia konta</div>
          <div className="flex flex-col gap-10">
            <UserData encodedUser={encodedUser} />
            <PasswordChange encodedUser={encodedUser} />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
