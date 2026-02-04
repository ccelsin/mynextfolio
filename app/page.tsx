"use client";

import Head from "next/head";
import Image from "next/image";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineDownload,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import photoImage from "./images/photo.jpg";
import codeImage from "./images/code.png";
import designImage from "./images/design.png";
import consultingImage from "./images/consulting.png";
import {
  Briefcase,
  Code2,
  GraduationCap,
  MapPin,
  Languages,
  PhoneCall,
  Star,
  Zap,
  ArrowRight,
  Palette,
  Handshake,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const skills = [
  "Java",
  "C#",
  "SQL",
  "HTML",
  "CSS",
  "JavaScript",
  "Spring Boot",
  "React",
  "Node.js",
  ".NET",
  "Vue.js",
  "Nuxt.js",
  "React Native",
  "Git",
  "Docker",
  "Jira",
];

const experiences = [
  {
    title: "Ingénieur Software",
    company: "Capgemini Engineering  Toulouse",
    period: "Mai 2025 - Octobre 2025",
    points: [
      "Conception de modules Frontend WPF et Backend .NET/C#.",
      "Mise en place et maintenance de pipelines CI/CD (GitLab CI, Jenkins, JFrog Artifactory).",
      "Gestion de migrations de base de données et optimisation multithreading.",
      "Contribution à l'intégration continue et aux tests logiciels en environnement Agile/Scrum.",
    ],
  },
  {
    title: "Développeur Fullstack",
    company: "DEFAR SCI  Rouen",
    period: "Juillet 2024 - Septembre 2024",
    points: [
      "Développement web avec Vue.js/Nuxt.js et Spring Boot.",
      "Conception d'API REST sécurisées et documentation Swagger.",
      "Conteneurisation et déploiement des services avec Docker.",
      "Intégration continue GitLab CI et consommation d'API externes (Google Maps).",
    ],
  },
];

const projects = [
  {
    name: "Terrafinder  Plateforme immobilière",
    period: "Déc. 2024 - Fév. 2025",
    description:
      "Application web React + Spring Boot avec environnement Docker et documentation technique complète.",
  },
  {
    name: "GotoEsig  Application de covoiturage",
    period: "Oct. 2024 - Déc. 2025",
    description:
      "Développement Android Java avec Firebase, gestion de l'authentification et des trajets.",
  },
];

const education = [
  {
    title: "Diplôme d'Ingénieur généraliste en Développement Logiciel",
    school: "ESIGELEC  Rouen",
    period: "Sept. 2022 - Juin 2025",
  },
  {
    title: "Cycle Préparatoire ESIGELEC",
    school: "Père Aupiais  Bénin",
    period: "Sept. 2020 - Mai 2022",
  },
];

const expertiseAreas = [
  {
    title: "Développement",
    description: "Code clean et architecture scalable",
    image: codeImage,
    icon: Code2,
  },
  {
    title: "Design UX/UI",
    description: "Interfaces modernes et intuitives",
    image: designImage,
    icon: Palette,
  },
  {
    title: "Conseil",
    description: "Architecture et stratégie logicielle",
    image: consultingImage,
    icon: Handshake,
  },
];

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Maodan ADJAGBONI  Ingénieur en Développement Logiciel</title>
        <meta
          name="description"
          content="Portfolio de Maodan ADJAGBONI, ingénieur en développement logiciel."
        />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>

      <main className="bg-white text-slate-900 dark:bg-gradient-to-b dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 dark:text-slate-50 transition-colors duration-300">
        {/* Navigation fixe */}
        <nav className="sticky top-0 z-50 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md">
          <div className="mx-auto max-w-6xl px-6 py-4 md:px-12 flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-slate-900 dark:text-white">
                MADE BY MAODAN
              </h1>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Basculer le thème"
              className="rounded-full"
            >
              <BsFillMoonStarsFill className="text-lg" />
            </Button>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="hero" className="mx-auto max-w-6xl px-6 py-16 md:px-12 md:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            {/* Contenu texte */}
            <div className="space-y-8 order-1 lg:order-1">
              <div className="space-y-4">
                <div className="inline-block">
                  <Badge className="bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-300 hover:bg-slate-200">
                    <Zap className="h-3 w-3 mr-1" />
                    Disponible pour des missions
                  </Badge>
                </div>
                <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-tight text-slate-900 dark:text-white">
                  <span className="block">Transformez</span>
                  <span className="block text-slate-600 dark:text-slate-400">
                    vos idées en réalité
                  </span>
                  <span className="block"></span>
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-lg">
                  Ingénieur fullstack passionné. Spécialisé en React, Spring Boot et DevOps. Je crée des applications web robustes, élégantes et performantes.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="gap-2 bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 shadow-lg hover:shadow-xl transition-shadow">
                  <a href="/CV_MAODAN_ADJAGBONI_CDI.pdf" download>
                    <AiOutlineDownload className="text-lg" />
                    Télécharger le CV
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="gap-2">
                  <a href="mailto:adjagbonimaodan@gmail.com">
                    <AiFillMail className="text-lg" />
                    Me contacter
                  </a>
                </Button>
              </div>

              {/* Infos rapides */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-slate-600 dark:text-slate-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold">Rouen, France</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Mobilité nationale</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold">AWS Certified</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Solutions Architect</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4 pt-4">
                <a
                  href="https://www.linkedin.com/in/maodan-"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                  aria-label="LinkedIn"
                >
                  <AiFillLinkedin className="text-xl text-blue-600 dark:text-blue-400" />
                </a>
                <a
                  href="https://github.com/ccelsin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                  aria-label="GitHub"
                >
                  <AiFillGithub className="text-xl" />
                </a>
                <a
                  href="tel:+33604456449"
                  className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors"
                  aria-label="Téléphone"
                >
                  <PhoneCall className="text-xl text-green-600 dark:text-green-400" />
                </a>
                <a
                  href="mailto:adjagbonimaodan@gmail.com"
                  className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors"
                  aria-label="Email"
                >
                  <AiFillMail className="text-xl text-red-600 dark:text-red-400" />
                </a>
              </div>
            </div>

            {/* Image Hero avec effet */}
            <div className="relative order-2 lg:order-2 w-56 h-56 md:w-full md:h-auto md:aspect-square mx-auto">
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-200 dark:border-slate-700">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-blue-500/10 dark:to-purple-500/10 z-10"></div>
                <Image
                  src={photoImage}
                  alt="Maodan ADJAGBONI"
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Expertise Areas avec images */}
        <section className="mx-auto max-w-6xl px-6 py-16 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Mes domaines d'expertise</h2>
            <p className="text-slate-600 dark:text-slate-400 mt-2">Des solutions complètes pour vos projets</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {expertiseAreas.map((area, idx) => {
              const IconComponent = area.icon;
              return (
                <Card key={idx} className="overflow-hidden hover:shadow-xl transition-shadow border-slate-200 dark:border-slate-700">
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-100 dark:from-slate-800 dark:to-slate-800">
                    <Image
                      src={area.image}
                      alt={area.title}
                      className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <IconComponent className="h-8 w-8 text-white mb-2" />
                      <h3 className="text-xl font-bold text-white">{area.title}</h3>
                    </div>
                  </div>
                  <CardContent className="pt-4">
                    <p className="text-slate-600 dark:text-slate-300">{area.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mx-auto max-w-6xl px-6 py-16 md:px-12">
          <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl p-8 md:p-12">
            <div className="flex items-center gap-3 mb-4">
              <Code2 className="h-8 w-8 text-slate-700 dark:text-slate-300" />
              <h2 className="text-3xl font-bold">Compétences techniques</h2>
            </div>
            <p className="text-slate-600 dark:text-slate-300 mb-8">
              Langages, frameworks et outils maîtrisés pour construire des applications modernes et scalables.
            </p>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <Badge key={skill} className="bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 px-4 py-2 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mx-auto max-w-6xl px-6 py-16 md:px-12">
          <div className="flex items-center gap-3 mb-4">
            <Briefcase className="h-8 w-8 text-slate-700 dark:text-slate-300" />
            <h2 className="text-3xl font-bold">Expériences professionnelles</h2>
          </div>
          <p className="text-slate-600 dark:text-slate-300 mb-8">
            Parcours riche avec des missions variées en développement et DevOps.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {experiences.map((experience) => (
              <Card key={experience.title} className="border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{experience.title}</CardTitle>
                  <CardDescription className="flex flex-col gap-1">
                    <span className="font-semibold text-slate-700 dark:text-slate-300">{experience.company}</span>
                    <span className="text-xs">{experience.period}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {experience.points.map((point) => (
                      <li key={point} className="flex gap-3 text-sm text-slate-600 dark:text-slate-300">
                        <ArrowRight className="h-4 w-4 flex-shrink-0 mt-0.5 text-slate-600 dark:text-slate-400" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mx-auto max-w-6xl px-6 py-16 md:px-12">
          <div className="flex items-center gap-3 mb-4">
            <Star className="h-8 w-8 text-slate-700 dark:text-slate-300" />
            <h2 className="text-3xl font-bold">Projets réalisés</h2>
          </div>
          <p className="text-slate-600 dark:text-slate-300 mb-8">
            Sélection de mes réalisations les plus significatives.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <Card key={project.name} className="border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow overflow-hidden">
                <div className="h-1 bg-slate-400 dark:bg-slate-600"></div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.name}</CardTitle>
                  <CardDescription className="font-semibold text-slate-600 dark:text-slate-400">{project.period}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="mx-auto max-w-6xl px-6 py-16 md:px-12">
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="h-8 w-8 text-slate-700 dark:text-slate-300" />
            <h2 className="text-3xl font-bold">Diplômes & Formations</h2>
          </div>
          <p className="text-slate-600 dark:text-slate-300 mb-8">
            Formation d'ingénieur généraliste en développement logiciel.
          </p>
          <div className="grid gap-6 md:grid-cols-2 mb-8">
            {education.map((item) => (
              <Card key={item.title} className="border-slate-200 dark:border-slate-700">
                <CardHeader>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription>
                    <span className="font-semibold text-slate-700 dark:text-slate-300">{item.school}</span>
                    <span className="block text-xs mt-1">{item.period}</span>
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Languages & Interests */}
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-slate-200 dark:border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Languages className="h-5 w-5 text-slate-700 dark:text-slate-300" />
                  Langues
                </CardTitle>
                <CardDescription>Communication internationale</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="font-semibold">Français</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Langue maternelle</p>
                </div>
                <div>
                  <p className="font-semibold">Anglais</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">TOEIC 850/990</p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-slate-200 dark:border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-500" />
                  Atouts & Intérêts
                </CardTitle>
                <CardDescription>Ce qui me motive</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p className="font-semibold">Professionnels</p>
                <p className="text-slate-600 dark:text-slate-400">Autonome  Rigoureux  Autodidacte  Esprit d'équipe</p>
                <p className="font-semibold pt-2">Personnels</p>
                <p className="text-slate-600 dark:text-slate-400">Sport, course à pied, jeux vidéos (FC25, Tekken)</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Footer */}
        <section className="mx-auto max-w-6xl px-6 py-16 md:px-12">
          <div className="bg-slate-900 dark:bg-slate-950 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Prêt à collaborer?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Vous avez un projet en tête? Contactez-moi pour discuter de vos besoins.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-white text-slate-900 hover:bg-slate-100">
                <a href="mailto:adjagbonimaodan@gmail.com" className="gap-2">
                  <AiFillMail className="text-lg" />
                  M'envoyer un email
                </a>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white/20">
                <a href="tel:+33604456449" className="gap-2">
                  <PhoneCall className="text-lg" />
                  06 04 45 64 49
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-200 dark:border-slate-800 py-12 text-center">
          <div className="mx-auto max-w-6xl px-6 md:px-12">
            <div className="mb-8">
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-4">Made by Maodan</p>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">
                Maodan ADJAGBONI
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Ingénieur en développement logiciel 
              </p>
            </div>
            <div className="border-t border-slate-200 dark:border-slate-700 pt-8">
              <p className="text-sm text-slate-600 dark:text-slate-400">© 2026 Maodan ADJAGBONI. Tous droits réservés.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
