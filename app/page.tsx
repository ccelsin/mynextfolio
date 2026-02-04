"use client";

import Head from "next/head";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineDownload,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import {
  Briefcase,
  Code2,
  GraduationCap,
  MapPin,
  Languages,
  PhoneCall,
  Star,
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
    company: "Capgemini Engineering · Toulouse",
    period: "Mai 2025 - Octobre 2025",
    points: [
      "Conception de modules Frontend WPF et Backend .NET/C#.",
      "Mise en place et maintenance de pipelines CI/CD (GitLab CI, Jenkins, JFrog Artifactory).",
      "Gestion de migrations de base de données et optimisation multithreading.",
      "Contribution à l’intégration continue et aux tests logiciels en environnement Agile/Scrum.",
    ],
  },
  {
    title: "Développeur Fullstack",
    company: "DEFAR SCI · Rouen",
    period: "Juillet 2024 - Septembre 2024",
    points: [
      "Développement web avec Vue.js/Nuxt.js et Spring Boot.",
      "Conception d’API REST sécurisées et documentation Swagger.",
      "Conteneurisation et déploiement des services avec Docker.",
      "Intégration continue GitLab CI et consommation d’API externes (Google Maps).",
    ],
  },
];

const projects = [
  {
    name: "Terrafinder · Plateforme immobilière",
    period: "Déc. 2024 - Fév. 2025",
    description:
      "Application web React + Spring Boot avec environnement Docker et documentation technique complète.",
  },
  {
    name: "GotoEsig · Application de covoiturage",
    period: "Oct. 2024 - Déc. 2025",
    description:
      "Développement Android Java avec Firebase, gestion de l’authentification et des trajets.",
  },
];

const education = [
  {
    title: "Diplôme d'Ingénieur généraliste en Développement Logiciel",
    school: "ESIGELEC · Rouen",
    period: "Sept. 2022 - Juin 2025",
  },
  {
    title: "Cycle Préparatoire ESIGELEC",
    school: "Père Aupiais · Bénin",
    period: "Sept. 2020 - Mai 2022",
  },
];

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Maodan ADJAGBONI · Ingénieur en Développement Logiciel</title>
        <meta
          name="description"
          content="Portfolio de Maodan ADJAGBONI, ingénieur en développement logiciel."
        />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>

      <main className="bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50">
        <section id="hero" className="mx-auto max-w-6xl px-6 py-10 md:px-12">
          <nav className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                Made by Maodan
              </p>
              <h1 className="text-3xl font-bold md:text-4xl">
                Maodan ADJAGBONI
              </h1>
              <p className="mt-2 text-lg text-slate-600 dark:text-slate-300">
                Ingénieur en développement logiciel · Front & Back
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setDarkMode(!darkMode)}
                aria-label="Basculer le thème"
              >
                <BsFillMoonStarsFill className="text-lg" />
              </Button>
              <Button asChild className="gap-2">
                <a href="/CV_Alternance_Maodan_ADJAGBONI.pdf" download>
                  <AiOutlineDownload />
                  Télécharger le CV
                </a>
              </Button>
            </div>
          </nav>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.3fr_1fr]">
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">AWS Solutions Architect</Badge>
                <Badge variant="secondary">Associate</Badge>
                <Badge variant="outline">Disponibilité : Mobilité nationale</Badge>
              </div>
              <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-200">
                Autonome, rigoureux et autodidacte, je conçois des expériences
                numériques robustes et élégantes. Mon objectif : transformer vos
                idées en applications fiables, performantes et maintenables.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild variant="secondary">
                  <a href="mailto:adjagbonimaodan@gmail.com">
                    <AiFillMail className="mr-2" />
                    adjagbonimaodan@gmail.com
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href="tel:+33604456449">
                    <PhoneCall className="mr-2 h-4 w-4" />
                    06 04 45 64 49
                  </a>
                </Button>
              </div>
              <div className="flex items-center gap-4 text-2xl text-slate-600 dark:text-slate-400">
                <a
                  href="https://www.linkedin.com/in/maodan-"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <AiFillLinkedin />
                </a>
                <a
                  href="https://github.com/ccelsin"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <AiFillGithub />
                </a>
                <a href="mailto:adjagbonimaodan@gmail.com" aria-label="Email">
                  <AiFillMail />
                </a>
              </div>
            </div>

            <Card className="border-none bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 text-white shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Contact & Profil</CardTitle>
                <CardDescription className="text-slate-200">
                  Portfolio moderne basé sur vos dernières expériences.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Mobilité nationale · France</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4" />
                  <span>AWS Solutions Architect Associate</span>
                </div>
                <div className="flex items-center gap-2">
                  <Languages className="h-4 w-4" />
                  <span>Français (natif) · Anglais TOEIC 850/990</span>
                </div>
                <Separator className="bg-slate-700" />
                <p className="text-slate-200">
                  Disponible pour des missions fullstack, frontend ou backend.
                  J’apprécie les équipes pluridisciplinaires et la livraison
                  rapide de valeur.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-6xl px-6 py-12 md:px-12">
          <div className="flex items-center gap-3">
            <Code2 className="h-6 w-6 text-slate-500" />
            <h2 className="text-2xl font-semibold">Compétences techniques</h2>
          </div>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            Langages, frameworks et outils maîtrisés pour construire des
            applications modernes et scalables.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary">
                {skill}
              </Badge>
            ))}
          </div>
        </section>

        <section
          id="experience"
          className="mx-auto max-w-6xl px-6 pb-12 md:px-12"
        >
          <div className="flex items-center gap-3">
            <Briefcase className="h-6 w-6 text-slate-500" />
            <h2 className="text-2xl font-semibold">Expériences professionnelles</h2>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {experiences.map((experience) => (
              <Card key={experience.title}>
                <CardHeader>
                  <CardTitle>{experience.title}</CardTitle>
                  <CardDescription>
                    {experience.company} · {experience.period}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc space-y-2 pl-5 text-sm text-slate-600 dark:text-slate-300">
                    {experience.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-6xl px-6 pb-12 md:px-12">
          <div className="flex items-center gap-3">
            <Star className="h-6 w-6 text-slate-500" />
            <h2 className="text-2xl font-semibold">Projets réalisés</h2>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <Card key={project.name}>
                <CardHeader>
                  <CardTitle>{project.name}</CardTitle>
                  <CardDescription>{project.period}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section
          id="education"
          className="mx-auto max-w-6xl px-6 pb-16 md:px-12"
        >
          <div className="flex items-center gap-3">
            <GraduationCap className="h-6 w-6 text-slate-500" />
            <h2 className="text-2xl font-semibold">Diplômes & Formations</h2>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {education.map((item) => (
              <Card key={item.title}>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>
                    {item.school} · {item.period}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1fr]">
            <Card>
              <CardHeader>
                <CardTitle>Langues</CardTitle>
                <CardDescription>Communication internationale</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <p>Français · Langue maternelle</p>
                <p>Anglais · TOEIC 850/990</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Atouts & Centres d’intérêt</CardTitle>
                <CardDescription>Ce qui me motive</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <p>Autonome · Rigoureux · Autodidacte · Esprit d’équipe</p>
                <p>Sport, course à pied, jeux vidéos (FC25, Tekken)</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}
