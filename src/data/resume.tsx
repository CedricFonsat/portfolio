import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Cedric Fonsat",
  initials: "CF",
  url: "https://www.cedric-fonsat.fr/",
  location: "Marseille, FR",
  locationLink: "",
  description:
    "Développeur Full-Stack React Native & Symfony",
  summary:
  "Passionné par le développement web et mobile, je suis un développeur full stack spécialisé en Symfony et React Native Expo. Curieux de nature, j'aime explorer de nouvelles technologies et perfectionner mes compétences pour offrir le meilleur à mes clients.",
  avatarUrl: "/me.png",
  skills: [
    "React Native",
    "Expo",
    "Next.js",
    "Typescript",
    "Node.js",
    "Postgres",
    "Docker",
    "Symfony",
    "Tailwind",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "contact@codefrie.com",
    tel: "+33698868013",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://dub.sh/cedric-fonsat-github",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/cedric-fonsat-linkedin",
        icon: Icons.linkedin,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Hafo Web Solutions",
      href: "https://hafowebsolutions.fr/",
      badges: [],
      location: "Remote",
      title: "Partenaire Associé | Hafo Web Solutions",
      logoUrl: "/hafo.png",
      start: "Mars 2024",
      end: "",
      description:
        "En tant que Partenaire Associé de Hafo Web Solutions, je collabore étroitement avec le Fondateur et Dirigeant pour offrir des solutions web sur mesure aux entreprises. En tant qu'auto-entrepreneur spécialisé en développement web, je mets à profit mon expertise pour co-créer et gérer des projets variés. Cette collaboration nous permet de combiner nos compétences pour offrir des services complets, incluant la création, la refonte, la maintenance de sites web, ainsi que l'optimisation SEO. Ensemble, nous travaillons sous la bannière 'Hafo Web Solutions', tout en respectant la direction de l'agence assurée par le fondateur.",
    },
    {
      company: "Code Frie",
      badges: [],
      href: "https://www.codefrie.com/",
      location: "Remote",
      title: "Fondateur & Développeur Full-Stack",
      logoUrl: "/codefrie.png",
      start: "Novembre 2023",
      end: "",
      description:
        `Creation de site web (Symfony & Twig), Creation d'API, Creation d'animation CSS & JS, Creation Application Mobile de TaskManager, Gestion des Api comme Google API et d'autre, Animation React Native Expo via Reanimated, Gesture Handler & Skia`
      },
      {
        company: "WINTRANS",
        href: "",
        badges: [],
        location: "Remote",
        title: "Développeur Freelance React Native",
        logoUrl: "/wintrans.jpeg",
        start: "Mai 2024",
        end: "Juillet 2024",
        description:
          `Ugrade application existante (update library, project react native a Expo), Ajout de features ( Suppression de historique tout les 30jours, suppression automatique du document apres envoie, et creation d'un historique), Ajout de gestion d'erreur et visibilité sur un dashboard via Bugsnag`
       },
    {
      company: "CIB-PROD",
      href: "",
      badges: [],
      location: "Aubagne, FR",
      title: "Développeur Full-Stack",
      logoUrl: "/cibprod.jpeg",
      start: "Novembre 2022",
      end: "Septembre 2023",
      description:
        `Creation de point API, Gestion et integration Google API, Ajout de features comme authentification via Google sur Dashboard Symfony et React Native, Ajout de features Notification sur React Native, Creation d'un dashboard avec filtrage, pagination pour la gestion des photos d'une application mobile de mode afin de verifier les publications, Creation d'un Searchbar dynamique en Ajax avec l'API gouv pour les villes de France qui sert a entrer des addresse.`,
    },
    {
      company: "Reborn France",
      href: "",
      badges: [],
      location: "Arques-la-Bataille, Normandie, France",
      title: "Développeur Wordpress",
      logoUrl: "/reborn.jpeg",
      start: "Juin 2021",
      end: "Juin 2021",
      description:
        `Refonte d'un site Wordpress avec Divi, Restructuration de la page vitrine avec ajout animation au scroll`
     },
  ],
  education: [
    {
      school: "Ecole Ri7",
      href: "https://ri7.fr/",
      degree: "Bac +3 Concepteur Développeur d'applications",
      logoUrl: "/ri7.jpeg",
      start: "Septembre 2022",
      end: " Septembre 2023",
    },
    {
      school: "IFCASS Dieppe",
      href: "https://www.ifcass.fr/",
      degree: "Certificat d'aptitude professionnelle Technicien d'Intégration et de Développement Web",
      logoUrl: "/ifcass.jpeg",
      start: "Février 2021",
      end: "Juin 2021",
    },
    {
      school: "Lycée Joseph Zobel",
      href: "",
      degree: "Baccalauréat sciences et technologies de l'industrie et du développement durable (STI2D) opt SIN",
      logoUrl: "",
      start: "Septembre 2017",
      end: "Juillet 2018",
    },
  ],
  projects: [
    {
      title: "Code Frie",
      href: "https://www.codefrie.com/",
      dates: "2024",
      active: true,
      description:
        "Site web pour acquisition de client avec formulaire, FAQ, Blog",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.codefrie.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/project-codefrie.png",
      video:
        "",
    },
    {
      title: "Dolist",
      href: "https://apps.apple.com/fr/app/dolist/id6676318516",
      dates: "Septembre 2024",
      active: true,
      description:
        "Application mobile de liste de tâches disponible sur iOS",
      technologies: [
        "Typescript",
        "Zustand",
        "React Native",
        "Expo",
      ],
      links: [
        {
          type: "App Store",
          href: "https://apps.apple.com/fr/app/dolist/id6676318516",
          icon: <Icons.globe className="size-3" />,
        },
        // {
        //   type: "Source",
        //   href: "https://github.com/magicuidesign/magicui",
        //   icon: <Icons.github className="size-3" />,
        // },
      ],
      image: "/project-dolist.png",
      video: "",
    },
    
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  ],
} as const;
