import Image from "next/image";

export default function matchAndReturnPhotoForTrip(country, city, className) {
  if (country === "Egipt") {
    if (city === "Kair") {
      return (
        <Image
          src={"https://supertramp.pl/images/tramping/efavhu_720x360.jpg"}
          alt={"kair"}
          width={1200}
          className={className}
          height={1200}
        />
      );
    }
  } else if (country === "Stany Zjednoczone Ameryki") {
    if (city === "Los Angeles") {
      return (
        <Image
          src={
            "https://bi.im-g.pl/im/9b/b4/1b/z29052827AMP,Przedmiescia-Los-Angeles.jpg"
          }
          width={1200}
          className={className}
          height={1200}
          alt={"losAngeles"}
        />
      );
    }
  } else if (country === "Albania") {
    if (city === "Durres") {
      return (
        <Image
          width={1000}
          height={1000}
          src={
            "https://traveltalks.esky.pl/wp-content/uploads/2024/03/Durres-Albania-©-Shutterstock-3-1.jpg"
          }
          alt={"durres"}
          className={className}
          // objectFit={"fill"}
        />
      );
    }
  } else if (country === "Brazylia") {
    if (city === "Rio de Janerio") {
      return (
        <Image
          width={1000}
          height={1000}
          src={
            "https://f4fcdn.eu/wp-content/uploads/2018/04/marchello74-shutterstock-2-1200x758.png"
          }
          alt={"rio"}
          className={className}
          // objectFit={"fill"}
        />
      );
    }
  } else if (country === "Bali") {
    if (city === "Denpasar") {
      return (
        <Image
          width={1000}
          height={1000}
          src={
            "https://www.indonesia.travel/content/dam/indtravelrevamp/en/destinations/bali-nusa-tenggara/bali/denpasar/denpasar1.jpg"
          }
          alt={"rio"}
          className={className}
          // objectFit={"fill"}
        />
      );
    }
  } else if (country === "Islandia") {
    if (city === "Rejkiawik") {
      return (
        <Image
          width={1000}
          height={1000}
          src={
            "https://t3.ftcdn.net/jpg/01/24/10/32/360_F_124103286_ivFh3DSEQpW6dXJRt6I9sjlSbMW1qDiO.jpg"
          }
          alt={"rio"}
          className={className}
          // objectFit={"fill"}
        />
      );
    }
  } else if (country === "RPA") {
    if (city === "Kapsztad") {
      return (
        <Image
          width={1000}
          height={1000}
          src={
            "https://ocdn.eu/pulscms-transforms/1/mIvk9kpTURBXy85YWQ2NGVkOTU5ZTdmMTUzMzFlNjZjOWUzODM0NDBmZS5qcGeTlQMCzK3NCEjNBKiVAs0EsADDw5MJpjQyYTg0MwbeAAGhMAE/kapsztad.jpeg"
          }
          alt={"rio"}
          className={className}
          // objectFit={"fill"}
        />
      );
    }
  } else if (country === "Japonia") {
    if (city === "Tokjo") {
      return (
        <Image
          width={1000}
          height={1000}
          src={
            "https://i.wpimg.pl/1000x0/i.wp.pl/a/f/jpeg/36850/rokio_japonia_Sean_Pavone_shutterstock_302738093.jpeg"
          }
          alt={"rio"}
          className={className}
          // objectFit={"fill"}
        />
      );
    }
  } else if (country === "Kuba") {
    if (city === "Hawana") {
      return (
        <Image
          width={1000}
          height={1000}
          src={"https://gocuba.pl/wp-content/uploads/2015/07/havana2.jpg"}
          alt={"rio"}
          className={className}
          // objectFit={"fill"}
        />
      );
    }
  }
}
