"use client";
import IconGear from "@rsuite/icons/Speaker";
import { aboutCards } from "@/data/contents";
import {Badge} from "@/components/home/badge";
import {HeaderTwo} from "@/components/home/headerTwo";
import {AboutCard} from "@/components/home/aboutCard";

export const WhyUs = () => {
    return (
        <div className="py-28 bg-gray-50 flex flex-col w-full justify-center align-middle items-center">
            <Badge
                className="w-fit"
                style={{
                    background: "#c4baab",
                    color: "white",
                }}
                text="Najlepsze wycieczki"
                icon={<IconGear className={"size-6"} />}
            />
            <HeaderTwo
                styleDiv={{ color: "rgb(0, 23, 38)" }}
                classNameDiv="font-semibold text-4xl max-sm:text-3xl leading-snug max-w-4xl max-lg:max-w-2xl my-5 text-black text-center"
                text="Dlaczego warto polecieć z naszą pomocą?"
                classNameHeader=""
            />
            <div
                className={`flex flex-wrap w-full max-w-[1300px] justify-center pt-8 text-black items-center cardContainer`}
            >
                {aboutCards.map((about, i) => {
                    return (
                        <AboutCard
                            key={`aboutCard-${i}`}
                            title={about.title}
                            icon={about.icon}
                            description={about.description}
                        />
                    );
                })}
            </div>
        </div>
    );
}