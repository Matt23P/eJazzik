"use client";
import Link from "next/link";
import { useState } from "react";

const CookieConsent = () => {
  const [open, setOpen] = useState(!localStorage.getItem("cookie-eJazzik"));

  return (
    <>
      {open && (
        <div className="cookieBox items-center">
          <span>
            Ta strona używa plików cookie w celu usprawnienia i ułatwienia
            dostępu do serwisu oraz prowadzenia danych statystycznych. Dalsze
            korzystanie z tej witryny oznacza akceptację tego stanu rzeczy.
            <br />
            <Link href={"/"} className="link">
              Polityka prywatności.
            </Link>
          </span>
          <button
            className="ml-auto mr-2 w-[100px] h-[40px] rounded-md"
            style={{ backgroundColor: "#6c6258" }}
            onClick={() => {
              setOpen(false);
              localStorage.setItem("cookie-eJazzik", "true");
            }}
          >
            Ok
          </button>
        </div>
      )}
    </>
  );

  // if (reset || !localStorage.getItem('cookie-eJazzik') || localStorage.getItem('cookie-eJazzik') === 'false') {
  //     return (
  //         <div className="cookieBox items-center">
  //     <span>
  //       Ta strona używa plików cookie w celu usprawnienia i ułatwienia dostępu
  //       do serwisu oraz prowadzenia danych statystycznych. Dalsze korzystanie
  //         z tej witryny oznacza akceptację tego stanu rzeczy.<br/>
  //       <Link href={"/"} className="link">
  //         Polityka prywatności.
  //       </Link>
  //     </span>
  //             <button
  //                 className="ml-auto mr-2 w-[100px] h-[40px] rounded-md"
  //                 style={{backgroundColor: "#6c6258"}}
  //                 onClick={() => {
  //                     setReset(true);
  //                     localStorage.setItem('cookie-eJazzik','true');
  //                 }}
  //             >
  //                 Ok
  //             </button>
  //         </div>
  //     );
  // }
};

export default CookieConsent;
