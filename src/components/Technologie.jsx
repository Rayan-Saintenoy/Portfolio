import CSSLogo from "@/assets/images/logo_tech/CSS.svg";
import GitHubLogo from "@/assets/images/logo_tech/GitHub.svg";
import HTMLLogo from "@/assets/images/logo_tech/HTML.svg";
import JavaLogo from "@/assets/images/logo_tech/Java.svg";
import JSLogo from "@/assets/images/logo_tech/JS.svg";
import LinuxLogo from "@/assets/images/logo_tech/Linux.svg";
import MySqlLogo from "@/assets/images/logo_tech/MySQL.svg";
import NextJSLogo from "@/assets/images/logo_tech/NextJs.svg";
import PHPLogo from "@/assets/images/logo_tech/PHP.svg";
import ReactLogo from "@/assets/images/logo_tech/React.svg";
import TailwindLogo from "@/assets/images/logo_tech/TailwindCSS.svg";
import VSCLogo from "@/assets/images/logo_tech/VSC.svg";
import WindowsLogo from "@/assets/images/logo_tech/Windows.svg";

import Image from "next/image";

export default function Technologie() {
  return (
    <div
      id="technologie"
      className="mb-5 flex flex-col justify-evenly gap-3 pt-32"
    >
      <p className="mb-2 text-center text-gray-500 md:text-3xl lg:text-4xl">
        Technologie :
      </p>
      <div className="flex flex-col items-center justify-around gap-3 text-center lg:flex-row">
        <div className="flex">
          <Image src={HTMLLogo} alt="HTML logo" width={80} height={100} />
          <Image src={CSSLogo} alt="CSS logo" width={80} height={100} />
          <Image src={JSLogo} alt="JS logo" width={80} height={100} />
        </div>
        <div className="flex">
          <Image src={NextJSLogo} alt="Nextjs logo" width={80} height={100} />
          <Image src={ReactLogo} alt="React logo" width={80} height={100} />
          <Image
            src={TailwindLogo}
            alt="Tailwind logo"
            width={80}
            height={100}
          />
        </div>
        <div className="flex">
          <Image src={JavaLogo} alt="Java logo" width={80} height={100} />
          <Image src={PHPLogo} alt="PHP logo" width={80} height={100} />
          <Image src={MySqlLogo} alt="MySQL logo" width={80} height={100} />
        </div>

        <div className="flex"></div>
        <div className="flex">
          <Image
            src={VSCLogo}
            alt="Visual Studio Code logo"
            width={80}
            height={100}
          />
          <Image src={GitHubLogo} alt="GitHub logo" width={80} height={100} />
          <Image src={LinuxLogo} alt="Linux logo" width={80} height={100} />
          <Image src={WindowsLogo} alt="Windows logo" width={80} height={100} />
        </div>
      </div>
    </div>
  );
}
