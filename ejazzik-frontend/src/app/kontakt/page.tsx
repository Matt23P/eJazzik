import Header from "@/components/global/header";
import Footer from "@/components/global/footer";
import {Button, Checkbox, Input} from "rsuite";
import Link from "next/link";

export default function Contact() {
    return (
        <main className="relative min-h-screen flex flex-col bg-white w-full">
            <Header />
            <div className="min-h-screen h-full w-full flex pt-28 justify-center gap-32 max-lg:flex-col max-lg:justify-center max-lg:items-center mb-10">
                <div className="w-1/3 flex flex-col mt-20 max-lg:w-2/3 ">
                    <h2 className="font-thin text-center">Dane kontaktowe biura</h2>
                    <div className="flex flex-col gap-5 mt-10">
                        <div className="flex flex-row text-xl gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-map-pin-filled"
                                width="30"
                                height="30"
                                viewBox="0 0 24 24"
                                stroke-width="2"
                                stroke="currentColor"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path
                                    d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z"
                                    stroke-width="0"
                                    fill="currentColor"
                                />
                            </svg>
                            Adres - ul. Łódzka 123, 00-000 Łódź
                        </div>
                        <div className="flex flex-row text-xl gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-phone"
                                width="30"
                                height="30"
                                viewBox="0 0 24 24"
                                stroke-width="2"
                                stroke="currentColor"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                            </svg>
                            Telefon - 123 456 789
                        </div>
                        <div className="flex flex-row text-xl gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-mail-filled"
                                width="30"
                                height="30"
                                viewBox="0 0 24 24"
                                stroke-width="2"
                                stroke="currentColor"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path
                                    d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z"
                                    stroke-width="0"
                                    fill="currentColor"
                                />
                                <path
                                    d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z"
                                    stroke-width="0"
                                    fill="currentColor"
                                />
                            </svg>
                            Email - ejazzik@biuro.pl
                        </div>
                        <div className="flex flex-row text-xl gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-building"
                                width="30"
                                height="30"
                                viewBox="0 0 24 24"
                                stroke-width="2"
                                stroke="currentColor"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M3 21l18 0" />
                                <path d="M9 8l1 0" />
                                <path d="M9 12l1 0" />
                                <path d="M9 16l1 0" />
                                <path d="M14 8l1 0" />
                                <path d="M14 12l1 0" />
                                <path d="M14 16l1 0" />
                                <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16" />
                            </svg>
                            NIP - 123-456-789-10
                        </div>
                    </div>

                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2471.5584949074123!2d19.413955976883354!3d51.72281947186316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471a35aeaeba6919%3A0x14b39d8e28765073!2zxYHDs2R6a2EsIDkzLTQ2NiDFgcOzZMW6!5e0!3m2!1spl!2spl!4v1717345790674!5m2!1spl!2spl"
                        width="100%"
                        height="48%"
                        className="max-lg:h-96"
                        style={{ border: 0, marginTop: "2em" }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <div className="w-1/3 flex flex-col mt-20 max-lg:w-2/3 max-lg:mt-0">
                    <div className="flex flex-col">
                        <h2 className="font-normal text-center">Jak możemy pomóc?</h2>
                        <p className="mt-5 text-xl text-center">Wyślij do nas wiadomość</p>
                        <form className="flex flex-col gap-4 mt-5">
                            <Input placeholder={"Imie i nazwisko"} className="formInput" />
                            <Input
                                placeholder={"Email"}
                                className="formInput"
                                type={"email"}
                            />
                            <Input
                                placeholder={"Telefon kontaktowy"}
                                className="formInput"
                                type={"tel"}
                            />
                            <Input
                                placeholder={"Wiadomość"}
                                as="textarea"
                                rows={8}
                                className="formInput resize-none"
                            />
                            <div className="flex flex-col">
                                <div className="flex flex-row text-black">
                                    <Checkbox className="text-black mt-[-5px]" />
                                    <p>
                                        Wyrażam zgodę na przetwarzanie podanych przeze mnie danych
                                        osobowych
                                    </p>
                                </div>
                                <div className="flex flex-row text-black">
                                    <Checkbox className="text-black mt-[-5px]" />
                                    <p>
                                        Oświadczam, że zapoznałem się oraz akceptuję{" "}
                                        <Link
                                            href={"/polityka-prywatnosci"}
                                            target={"_blank"}
                                            className="underline"
                                        >
                                            Politykę prywatności
                                        </Link>
                                    </p>
                                </div>
                            </div>
                            <Button
                                appearance="default"
                                style={{ backgroundColor: "#c4baab", color: "black" }}
                                className="mt-4"
                                size={"lg"}
                            >
                                Wyślij
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
