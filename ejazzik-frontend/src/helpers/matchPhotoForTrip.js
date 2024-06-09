import Image from "next/image";

export default function matchAndReturnPhotoForTrip(country, city, className) {
  if (country === "Egypt") {
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
  } else if (country === "United States of America") {
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
  }
}
