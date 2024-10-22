import GitHubLogo from "@/assets/images/logo_tech/GitHub.svg";
import Image from "next/image";

export default function Projet() {
  return (
    <div id="parcours" className="flex flex-col pt-32">
      <p className="mb-2 text-center text-gray-500 md:text-3xl lg:text-4xl">
        Mes Projets :
      </p>

      <div className="mx-4 mb-4 rounded-lg border border-gray-500">
        <p className="mb-2 text-center text-2xl text-gray-500 lg:text-3xl">
          Portfolio
        </p>

        <p className="text-1xl mb-5 text-center text-gray-500 md:text-2xl lg:text-3xl">
          Mon premier projet est ce portfolio que j'ai réaliser sur deux jours
          avec NextJs et TailWindCSS. Cela m'as apporter beaucoup étant donné
          que je n'avez jamais utiliser ses Technologie auparavant
        </p>
        <div className="flex justify-center">
          <a href="https://github.com/Rayan-Saintenoy/Portfolio">
            <Image src={GitHubLogo} alt="GitHub logo" width={40} height={40} />
          </a>
        </div>
      </div>

      <div className="mx-4 mb-4 rounded-lg border border-gray-500">
        <p className="mb-2 text-center text-2xl text-gray-500 lg:text-3xl">
          Jobboard
        </p>
        <p className="text-1xl mb-5 text-center text-gray-500 md:text-2xl lg:text-3xl">
          Au cour de mon cursus chez Epitech j'ai du créer un jobboard dans les
          technologies aux choix avec un de mes camarades. Nous avons choisis
          d'utiliser NextJs et TailWindCSS pour le front, NestJs pour le back,
          Swagger UI pour la documentation.
        </p>
        <div className="flex justify-center">
          <a href="https://github.com/Rayan-Saintenoy/Jobboard">
            <Image src={GitHubLogo} alt="GitHub logo" width={40} height={40} />
          </a>
        </div>
      </div>
    </div>
  );
}
