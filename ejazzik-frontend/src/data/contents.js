import IconDevices from "@rsuite/icons/Device";
import IconCombo from "@rsuite/icons/Combination";
import IconAuthorize from "@rsuite/icons/Dashboard";
import IconMove from "@rsuite/icons/MoveUp";
import IconShield from "@rsuite/icons/Shield";
import IconUpload from "@rsuite/icons/Send";

const aboutCards = [
  {
    title: "Brak zmartwień organizacją",
    description:
      "Nie musisz przejmować się organizowaniem przelotu i noclegów - Twoim zadaniem jest zabranie uśmiechu i dużej dawki energii!",
    icon: <IconDevices className={"size-8"} />,
  },
  {
    title: "Atrakcyjne ceny",
    description:
      "Opieramy się na tanich lotach i okazyjnych noclegach dzięki czemu oferowane przez nas wycieczki wyróżniają się cenami!",
    icon: <IconCombo className={"size-8"} />,
  },
  {
    title: "Pomożemy Ci zorganizować czas",
    description:
      "Jeśli nie jesteś pewny co chciałbyś robić lub co powinieneś zobaczyć - pomożemy Ci wybrać odpowiednie atrakcje!",
    icon: <IconAuthorize className={"size-8"} />,
  },
  {
    title: "Znajomości w branży",
    description:
      "Wiele noclegów przez nas proponowanych zostało przez nas przetestowanych a ich właściciele są z nami w stałym kontakcie - dzięki czemu otrzymujemy specjalne oferty",
    icon: <IconMove className={"size-8"} />,
  },
  {
    title: "Brak ukrytych kosztów",
    description:
      "Płacisz dodatkowo wyłącznie opłate organizacyjną, której dzięki atrakcyjnym cenom nawet nie odczujesz!",
    icon: <IconUpload className={"size-8"} />,
  },
  {
    title: "Pomoc 24/7",
    description: (
      <>
        Będziemy zawsze pod telefonem tak, aby rozwiązać wszelkie Twoje potencjalne problemy!
      </>
    ),
    icon: <IconShield className={"size-8"} />,
  },
];

export {  aboutCards };
