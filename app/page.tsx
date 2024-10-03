import Head from "next/head";
import {BsFillMoonStarsFill} from 'react-icons/bs';
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Image from "next/image";
import deved from './images/sapiens.png';
import design from './images/design.png';
import code from './images/code.png';
import consulting from './images/consulting.png';


export default function Home() {
  return (
    <div>
       <Head>
          <title> Maodan ADJAGBONI Portfolio</title>
          <meta name="description" content="" />
          <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
       </Head>

       <main className="bg-white px-10">
          <section className="min-h-screen">
            <nav className="py-10 mb-12 flex justify-between">
              <h1 className="text-xl font-mono">MadebyMaodan</h1>
              <ul className="flex items-center">
                <li>
                  <BsFillMoonStarsFill className="cursor-pointer text-2xl"/>
                </li>
                <li><a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="#">Resume</a></li>
              </ul>
            </nav>
            <div className="text-center p-10">
              <h2 className="text-4xl py-2 text-teal-600 font-medium">Maodan ADJAGBONI</h2>
              <h3 className="text-2xl py-2">Etudiant en ingénierie logiciel</h3>
              <p className="text-md py-5 leading-8 text-gray-800">Passionné par le développement et toujours en quête d'apprentissage, je transforme les défis techniques en solutions créatives. N'hésitez pas à me contacter, je serai ravi d'échanger avec vous.</p>
            </div>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
              <AiFillLinkedin />
              <AiFillGithub />
            </div>
            <div className="relative flex justify-center">
              <Image src={deved} alt="" />
            </div>
          </section>

          <section>
            <div>
              <h3 className="text-3xl py-1">
                Mes technologies de prédilection
              </h3>
              <p className="text-md py-2 leading-8 text-gray-80">Dans le cadre de ma formation, j'ai eu à utiliser du <span className="text-teal-500">Java</span> , le Html, le Css, du <span className="text-teal-500">JavaScript</span> et les framework <span className="text-teal-500">React et Vue </span>pour concevoir des applications performantes et dynamiques. Ces technologies me permettent de créer des solutions robustes, évolutives et orientées utilisateur, tout en restant à la pointe des meilleures pratiques du développement.</p>
              <p className="text-md py-2 leading-8 text-gray-80">
              Pour concevoir des interfaces claires et intuitives, j'utilise des outils me permettant de créer des designs collaboratifs, précis et m'offrant la flexibilité nécessaire pour intégrer mes idées créatives directement dans mes projets de développement.
              </p>
            </div>
            <div>
              <div className="text-center shadow-lg p-10 rounded-xl my-10" >
                <Image src={design} width={100} height={100} alt="" style={{ display:"inline"}}/>
                <h3 className="text-lg font-medium pt-8 pb-2">Création de beau design</h3>
                <p className="py-2">La conception d'élément élégant répondant à vos attentes necessite des outils assez performant.</p>
                <h4 className="py-4 text-teal-600">Les outils de design que j'utilise</h4>
                <p className="text-gray-800 py-1">Canvas</p>
                <p className="text-gray-800 py-1">Figma</p>
              </div>
              <div className="text-center shadow-lg p-10 rounded-xl my-10" >
                <Image src={consulting} width={100} height={100} alt="" style={{ display:"inline"}}/>
                <h3 className="text-lg font-medium pt-8 pb-2">Création de beau design</h3>
                <p className="py-2">La conception d'élément élégant répondant à vos attentes necessite des outils assez performant.</p>
                <h4 className="py-4 text-teal-600">Les outils de design que j'utilise</h4>
                <p className="text-gray-800 py-1">Canvas</p>
                <p className="text-gray-800 py-1">Figma</p>
              </div>
              <div className="text-center shadow-lg p-10 rounded-xl my-10" >
                <Image src={code} width={100} height={100} alt="" style={{ display:"inline"}}/>
                <h3 className="text-lg font-medium pt-8 pb-2">Création de beau design</h3>
                <p className="py-2">La conception d'élément élégant répondant à vos attentes necessite des outils assez performant.</p>
                <h4 className="py-4 text-teal-600">Les outils de design que j'utilise</h4>
                <p className="text-gray-800 py-1">Canvas</p>
                <p className="text-gray-800 py-1">Figma</p>
              </div>
            </div>
          </section>
          <section>
            <div>
              <h3 className="text-3xl py-1">Portfolio</h3>
              <p className="text-md py-2 leading-8 text-gray-80">Dans le cadre de ma formation, j'ai eu à utiliser du <span className="text-teal-500">Java</span> , le Html, le Css, du <span className="text-teal-500">JavaScript</span> et les framework <span className="text-teal-500">React et Vue </span>pour concevoir des applications performantes et dynamiques. Ces technologies me permettent de créer des solutions robustes, évolutives et orientées utilisateur, tout en restant à la pointe des meilleures pratiques du développement.</p>
              <p className="text-md py-2 leading-8 text-gray-80">
              Pour concevoir des interfaces claires et intuitives, j'utilise des outils me permettant de créer des designs collaboratifs, précis et m'offrant la flexibilité nécessaire pour intégrer mes idées créatives directement dans mes projets de développement.
              </p>
            </div>
          </section>
       </main>
    </div>
  );
}
