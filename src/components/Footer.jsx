import GitHubLogo from "@/assets/images/logo_tech/GitHub.svg";
import LinkedInLogo from "@/assets/images/logo_tech/LinkedIn.svg";
import Image from "next/image";

export default function Footer() {
  return (
    <div
      id="footer"
      className="mb-2 mt-2 flex flex-col items-center border-t-2"
    >
      <p className="text-1xl mb-5 text-center text-gray-500 md:text-2xl lg:text-3xl">
        Mes Liens :
      </p>
      <div className="flex">
        <a href="https://fr.linkedin.com/in/rayan-saintenoy-591195251">
          <Image
            src={LinkedInLogo}
            alt="LinkedIn logo"
            width={40}
            height={40}
          />
        </a>
        <a href="https://github.com/Rayan-Saintenoy">
          <Image src={GitHubLogo} alt="GitHub logo" width={40} height={40} />
        </a>
      </div>
    </div>
  );
}
