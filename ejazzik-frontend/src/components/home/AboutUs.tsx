"use client";
import { Badge } from "@/components/home/badge";
import { HeaderTwo } from "@/components/home/headerTwo";
import IconGear from "@rsuite/icons/Speaker";
import { Description } from "@/components/home/description";

export const AboutUs = () => {
  return (
    <div className="pt-28 pb-14 bg-gray-50 flex flex-col w-full justify-center align-middle items-center">
      <Badge
        className="w-fit"
        style={{
          background: "#c4baab",
          color: "white",
        }}
        text="Poznaj nas"
        icon={<IconGear className={"size-6"} />}
      />
      <HeaderTwo
        styleDiv={{ color: "rgb(0, 23, 38)" }}
        classNameDiv="font-semibold text-4xl max-sm:text-3xl leading-snug max-w-4xl max-lg:max-w-2xl my-5 text-white text-center"
        text="Kim jesteśmy?"
        classNameHeader=""
      />
      <Description
        text="Jesteśmy fanami podróży, którzy pewnego dnia postanowili zacząć zwiedzać
        świat razem. Po wielu podróżach i niezapomnianych przygodach doszliśmy
        do wniosku, że powinniśmy podzielić się naszym doświadczeniem z innymi,
        tak żeby każdy mógł w tani sposób poznawać nowe zakątki świata!"
      />
    </div>
  );
};
