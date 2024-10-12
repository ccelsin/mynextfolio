"use client";
import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";
import Image from "next/image";
import deved from './images/sapiens.png';
import design from './images/design.png';
import code from './images/code.png';
import consulting from './images/consulting.png';
import { useState } from "react";
import { AiOutlineDownload } from "react-icons/ai";


export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Maodan ADJAGBONI Portfolio</title>
        <meta name="description" content="" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen" id="section1">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-mono dark:text-white">MadebyMaodan</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl dark:text-white"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-2 py-2 rounded-md ml-6 flex items-center"
                  href="/CV_Alternance_Maodan_ADJAGBONI.pdf"
                  download
                >
                  <AiOutlineDownload className="mr-2" /> Mon CV
                </a>
              </li>
            </ul>
          </nav>
          <div className="md:fixed md:right-5 md:top-1/2 md:transform md:-translate-y-1/2 md:space-y-16 hidden md:block">
            <button
              onClick={() => {
                const section1 = document.getElementById('section1');
                if (section1) {
                  section1.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="w-20 h-20 rounded-full bg-teal-500 text-white text-lg flex justify-center items-center hover:bg-teal-700"
            >
              Contact
            </button>
            <button
              onClick={() => {
                const section2 = document.getElementById('section2');
                if (section2) {
                  section2.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="w-20 h-20 rounded-full bg-teal-500 text-white text-lg flex justify-center items-center hover:bg-teal-700"
            >
              About
            </button>
            <button
              onClick={() => {
                const section3 = document.getElementById('section3');
                if (section3) {
                  section3.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="w-20 h-20 rounded-full bg-teal-500 text-white text-lg flex justify-center items-center hover:bg-teal-700"
            >
              Projet
            </button>
          </div>
          <div className="text-center p-10">
            <h2 className="text-4xl py-2 text-teal-600 font-medium dark:text-teal-400">
              Maodan ADJAGBONI
            </h2>
            <h3 className="text-2xl py-2 dark:text-white">
              Étudiant en ingénierie logiciel
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200">
              Passionné par le développement et toujours en quête
              d'apprentissage, je transforme les défis techniques en solutions
              créatives. N'hésitez pas à me contacter, je serai ravi
              d'échanger avec vous.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
            <a href="https://www.linkedin.com/in/celsin-adjagboni-/" target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/ccelsin" target="_blank" rel="noopener noreferrer">
              <AiFillGithub />
            </a>
            <a href="mailto:maodan.adjagboni@groupe-esigelec.org">
              <AiFillMail />
            </a>
          </div>

          <div className="relative flex justify-center">
            <Image src={deved} alt="" />
          </div>
        </section>

        <section id="section2">
          <div>
            <h3 className="text-3xl py-1 dark:text-white">
              Mes technologies de prédilection
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Dans le cadre de ma formation, j'ai utilisé du{" "}
              <span className="text-teal-500">Java</span>, le Html, le Css, du{" "}
              <span className="text-teal-500">JavaScript</span> et les
              frameworks <span className="text-teal-500">React</span> et{" "}
              <span className="text-teal-500">Vue</span> pour concevoir des
              applications performantes et dynamiques.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Pour concevoir des interfaces claires et intuitives, j'utilise des
              outils comme <span className="text-teal-500">Canvas</span> et{" "}
              <span className="text-teal-500">Figma</span> pour des designs
              collaboratifs et créatifs.
            </p>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-800">
            <Image src={design} width={100} height={100} alt=""  style={{ display:"inline"}}/>
            <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">
              Création de beau design
            </h3>
            <p className="py-2 dark:text-gray-200">
              La conception d'éléments élégants nécessite des outils performants.
            </p>
            <h4 className="py-4 text-teal-600 dark:text-teal-400">
              Les outils de design que j'utilise
            </h4>
            <p className="text-gray-800 dark:text-gray-200">Canvas</p>
            <p className="text-gray-800 dark:text-gray-200">Figma</p>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-800">
            <Image src={code} width={100} height={100} alt="" style={{ display: "inline" }} />
            <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">
              Développement d'applications web 
            </h3>
            <p className="py-2 dark:text-gray-200">
              Conception d'applications performantes et dynamiques.
            </p>
            <h4 className="py-4 text-teal-600 dark:text-teal-400">
              Les technologies que j'utilise
            </h4>
            <p className="text-gray-800 dark:text-gray-200">Java</p>
            <p className="text-gray-800 dark:text-gray-200">HTML, CSS</p>
            <p className="text-gray-800 dark:text-gray-200">JavaScript</p>
            <p className="text-gray-800 dark:text-gray-200">React, Vue</p>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-800">
            <Image src={consulting} width={100} height={100} alt="" style={{ display:"inline"}}/>
            <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">
              Consultation et Stratégie
            </h3>
            <p className="py-2 dark:text-gray-200">
              Création de stratégies technologiques répondant à vos attentes.
            </p>
            <h4 className="py-4 text-teal-600 dark:text-teal-400">
              Mes expertises
            </h4>
            <p className="text-gray-800 dark:text-gray-200">Analyse</p>
            <p className="text-gray-800 dark:text-gray-200">Consultation</p>
          </div>
        </section>
        <section id="section3">
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Projets</h3> 
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Découvrez une sélection de mes <span className="text-teal-500">projets informatiques</span> où j'ai mis en pratique mes compétences en développement. Chaque projet reflète mon engagement à créer des solutions innovantes et fonctionnelles.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Que ce soit des <span className="text-teal-500">applications web</span>, des outils interactifs ou des <span className="text-teal-500">conceptions d'interfaces utilisateur</span>, ces réalisations illustrent mon parcours et ma passion pour le code.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Projet 1 */}
            <div className="text-center shadow-lg p-10 rounded-xl my-2 dark:bg-gray-800">
              <h3 className="text-lg font-medium pt-2 pb-2 dark:text-white">Ownlands</h3>
              <p className="py-2 dark:text-gray-200">
                Plateforme web pour les acteurs du monde foncier
              </p>
              <a href="https://dev.ownland.fr" className="text-teal-600 dark:text-teal-400">Voir plus</a>
            </div>

            {/* Projet 2 */}
            <div className="text-center shadow-lg p-10 rounded-xl my-1 dark:bg-gray-800">
              <h3 className="text-lg font-medium pt-2 pb-2 dark:text-white">FitGroove</h3>
              <p className="py-2 dark:text-gray-200">
              Application web de recherche de clubs de sport
              </p>
              <a href="#" className="text-teal-600 dark:text-teal-400">Voir plus</a>
            </div>

            {/* Projet 3 */}
            <div className="text-center shadow-lg p-10 rounded-xl my-1 dark:bg-gray-800">
              <h3 className="text-lg font-medium pt-5 pb-2 dark:text-white">Mancala</h3>
              <p className="py-2 dark:text-gray-200">
                Jeu desktop inspiré du jeu de pion Mancala
              </p>
              <a href="#" className="text-teal-600 dark:text-teal-400">Voir plus</a>
            </div>

            {/* Projet 4 */}
            <div className="text-center shadow-lg p-10 rounded-xl my-1 dark:bg-gray-800">
              <h3 className="text-lg font-medium pt-5 pb-2 dark:text-white">FLFamily</h3>
              <p className="py-2 dark:text-gray-200">
                Application web de gestion de parties de jeux en ligne
              </p>
              <a href="#" className="text-teal-600 dark:text-teal-400">Voir plus</a>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
