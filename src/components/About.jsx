export default function About() {
  return (
    <div id="about" className="flex flex-col gap-3 pt-28 text-center lg:pt-32">
      <p className="text-gray-500 md:text-3xl lg:text-4xl">À propos de moi :</p>
      <span className="aw-full animate-waving-hand text-3xl md:text-4xl lg:text-5xl">
        👋🏻
      </span>
      <p className="text-1xl mb-5 text-center text-gray-500 md:text-2xl lg:text-3xl">
        Salut ! Moi c'est Rayan, je suis étudiant en développement. Je
        m'investis pleinement dans le code dans l'objectif de devenir
        développeur fullstack, même si j'ai une préférence marquée pour le
        back-end. J'ai déjà travaillé avec Next.js pour le front-end et j'ai
        exploré des outils comme NestJs et Swagger UI pour le back-end.
      </p>
    </div>
  );
}
