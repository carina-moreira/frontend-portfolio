/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  role: string;
  year: string;
  dribbble?: string;
  overview: string;
  challenge: string;
  solution: string;
  media?: { type: "image" | "video"; src: any; alt?: string }[];
}

import synereMedia from "@/assets/hypnotic/synere/synere.webp";
import synereMediaAntropos from "@/assets/hypnotic/synere/antropos.webp";
import synereMediaMuvv from "@/assets/hypnotic/synere/muvv.webp";
import synereMediaInovocorte from "@/assets/hypnotic/synere/inovocorte.webp";
import hypnoticMedia1 from "@/assets/hypnotic/hypnotic_desktop1.webp";
import hypnoticMedia2 from "@/assets/hypnotic/hypnotic_desktop2.webp";
import hypnoticMedia3 from "@/assets/hypnotic/hypnotic_mobile1.webp";
import hypnoticMedia4 from "@/assets/hypnotic/hypnotic_mobile2.webp";
import vanguardMedia1 from "@/assets/hypnotic/vanguard/vanguard_desktop.webp";
import vanguardMedia2 from "@/assets/hypnotic/vanguard/vanguard_mobile.webp";
import vanguardMedia3 from "@/assets/hypnotic/vanguard/vanguard_mobile-2.webp";
import niupMedia1 from "@/assets/niup/niup_1.webp";
import niupMedia2 from "@/assets/niup/niup_2.webp";
import sheermeMedia1 from "@/assets/sheerme/sheerme1.webp";
import sheermeMedia2 from "@/assets/sheerme/sheerme2.webp";
import sheermeMedia3 from "@/assets/sheerme/sheerme3.webp";
import sheermeMedia4 from "@/assets/sheerme/sheerme4.webp";
import sfMedia1 from "@/assets/sf/sf1.webp";
import sfMedia2 from "@/assets/sf/sf2.webp";
import sfMedia3 from "@/assets/sf/sf3.webp";
import sfMedia4 from "@/assets/sf/sf4.webp";
import sfMedia5 from "@/assets/sf/sf5.webp";

export const projects: Project[] = [
  {
    slug: "synere-group",
    title: "Synere Group",
    description:
      "Developed and adapted multiple websites within the Synere Group ecosystem, extending a unified design and code base across brands.",
    tags: ["Next.js", "GSAP", "Tailwind CSS"],
    role: "Frontend Developer",
    year: "2025",
    overview:
      "The Synere Group includes multiple brands with distinct identities and content needs. The goal was to build a scalable frontend solution that could support multiple websites while maintaining a consistent foundation across the ecosystem.",
    challenge:
      "Balancing consistency and flexibility at scale. From a frontend perspective, the main challenge was designing a component architecture that could be reused across projects while still supporting brand-specific variations. Each site required unique layouts, animations, and content structures, without introducing duplication or breaking the shared system. Maintaining performance, clean code organization, and long-term maintainability across multiple codebases was also a key concern.",
    solution:
      "I built the websites using a shared frontend foundation based on Next.js and a reusable component system styled with Tailwind CSS. Components were designed to be highly configurable, allowing variations through props, composition, and design tokens rather than duplication. This made it possible to adapt layouts and UI patterns to each brand while keeping the codebase consistent and scalable. I also implemented smooth, performant animations using GSAP, ensuring they enhanced the experience without compromising load times or responsiveness. Overall, this approach enabled faster development cycles, easier maintenance, and a cohesive user experience across all platforms.",
    media: [
      {
        type: "image",
        src: synereMedia,
        alt: "Synere Group - Synere",
      },
      {
        type: "image",
        src: synereMediaAntropos,
        alt: "Synere Group - Antropos",
      },
      {
        type: "image",
        src: synereMediaMuvv,
        alt: "Synere Group - Muvv",
      },
      {
        type: "image",
        src: synereMediaInovocorte,
        alt: "Synere Group - Inovocorte",
      },
    ],
  },
  {
    slug: "hypnotic-digital-agency",
    title: "Hypnotic Digital Agency",
    description:
      "Built the agency’s own website, showcasing bold design, smooth interactions, and strong visual identity.",
    tags: ["Next.js", "GSAP", "Tailwind CSS"],
    role: "Frontend Developer",
    year: "2025",
    overview:
      "Hypnotic Agency is a digital creative agency specializing in strategy, design, and technology. The website serves as both a portfolio and a statement piece, blending aesthetics with smooth motion. My goal was to bring this concept to life through precise layout execution and fluid interactions.",
    challenge:
      "Delivering a visually complex, animation-heavy interface without compromising performance or usability. From a frontend perspective, this meant ensuring smooth animations across devices, maintaining responsiveness, and preserving accessibility and SEO best practices. Additionally, handling scroll-based interactions, timing, and transitions while keeping the experience fast and stable required careful optimization and clean implementation",
    solution:
      "I developed the website using Next.js, focusing on performance, structure, and scalability from the ground up. Animations were implemented with GSAP ensuring they run smoothly without blocking rendering or affecting user experience. Built fully responsive layouts using Tailwind CSS, translating the design system into reusable patterns while maintaining pixel accuracy across breakpoints. Additionally, ensured the site achieved strong performance metrics through structured semantic HTML and SEO. The final result is a fast, fluid, and visually engaging experience that reflects the agency’s creative identity while remaining technically robust.",
    media: [
      {
        type: "image",
        src: hypnoticMedia1,
        alt: "Hypnotic Digital Agency",
      },

      {
        type: "image",
        src: hypnoticMedia2,
        alt: "Hypnotic Digital Agency",
      },
      {
        type: "image",
        src: hypnoticMedia3,
        alt: "Hypnotic Digital Agency",
      },

      {
        type: "image",
        src: hypnoticMedia4,
        alt: "Hypnotic Digital Agency",
      },
    ],
  },
  {
    slug: "vanguard-signature",
    title: "Vanguard Signature",
    description:
      "Developed a premium website uniting refined design and smooth interactivity, recognized with an Awwwards Honorable Mention",
    tags: ["Next.js", "GSAP", "Tailwind CSS"],
    role: "Frontend Developer",
    year: "2025",
    overview:
      "Vanguard Signature is a luxury real estate brand that combines architecture, art, and lifestyle. The website was conceived as an immersive presentation piece, blending elegant visuals with subtle motion and responsive performance. My role was to realize the design vision through precise and engaging frontend development.",
    challenge:
      "The project required translating a highly detailed creative concept into a performant and responsive web experience. The goal was to achieve visual perfection and animation fluidity without sacrificing load time, accessibility, or SEO optimization.",
    solution:
      "I developed the website using Next.js, structuring the application to support performance, scalability, and SEO from the start. Animations were built with GSAP, focusing on smoothness and control: using optimized timelines and minimizing layout thrashing to ensure consistent performance across devices. I implemented responsive, pixel-accurate layouts with Tailwind CSS, maintaining design fidelity while adapting to different screen sizes and resolutions. To improve performance, I optimized images and assets, reduced unnecessary JavaScript, and ensured efficient rendering strategies. Accessibility and semantic structure were also considered throughout the implementation. The result is a polished, high-performance experience that delivers on both visual quality and technical excellence, contributing to its recognition with an Awwwards Honorable Mention.",
    media: [
      {
        type: "image",
        src: vanguardMedia1,
        alt: "Vanguard Signature",
      },

      {
        type: "image",
        src: vanguardMedia2,
        alt: "Vanguard Signature",
      },
      {
        type: "image",
        src: vanguardMedia3,
        alt: "Vanguard Signature",
      },
    ],
  },
  {
    slug: "niup-technologies",
    title: "Niup Technologies",
    description:
      "Developed web applications powered by a no-code platform, focusing on scalable frontend implementation, dynamic interfaces, and consistent user experiences.",
    tags: ["Angular", "React", "TypeScript", "SCSS"],
    role: "Frontend Developer",
    year: "2022 - 2024",
    overview:
      "Boxbuilder is a no-code platform that enables businesses to create custom web solutions through a visual interface. My role focused on building web applications on top of this platform, translating configurations into responsive, user-friendly interfaces, while also contributing to UX improvements within the platform itself.",
    challenge:
      "Working within the constraints of a no-code system while delivering high-quality frontend experiences. From a frontend perspective, this meant handling dynamically generated structures and ensuring the resulting interfaces were performant, accessible, and consistent. At the same time, improving the UX of the platform required understanding both user needs and technical limitations.",
    solution:
      "I developed and optimized web applications powered by the platform, ensuring responsive layouts, consistent UI patterns, and reliable performance across different use cases. I worked with reusable components and predefined structures, adapting them to meet specific product requirements while maintaining coherence across projects. In parallel, I contributed to the platform’s UX design, helping improve usability, clarity, and overall user flow. This collaboration between frontend implementation and UX thinking helped create more intuitive outputs and a smoother experience for both builders and end users.",
    media: [
      {
        type: "image",
        src: niupMedia1,
        alt: "Niup Technologies",
      },

      {
        type: "image",
        src: niupMedia2,
        alt: "Niup Technologies",
      },
    ],
  },
  {
    slug: "student-finance",
    title: "Student Finance",
    description:
      "Enhanced product usability and visual design through UI/UX improvements across new and existing features.",
    tags: ["Figma"],
    role: "UI/UX Designer",
    year: "2020",
    overview:
      "StudentFinance helps individuals access education through income share agreements, providing a bridge between learners and education providers. My work contributed to improving the platform’s usability and overall visual consistency, ensuring a clear and engaging interface for users.",
    challenge:
      "The design system required updates to support new features while maintaining consistency across different product areas.",
    solution:
      "I delivered detailed UI designs for product screens, applying and evolving the existing design language through refined styling, interaction states, and layout adjustments. By improving clarity and hierarchy, I helped create a more intuitive experience that aligns with StudentFinance’s brand and product goals.",
    media: [
      {
        type: "image",
        src: sfMedia1,
        alt: "Student Finance",
      },

      {
        type: "image",
        src: sfMedia2,
        alt: "Student Finance",
      },
      {
        type: "image",
        src: sfMedia3,
        alt: "Student Finance",
      },

      {
        type: "image",
        src: sfMedia4,
        alt: "Student Finance",
      },
      {
        type: "image",
        src: sfMedia5,
        alt: "Student Finance",
      },
    ],
  },
  {
    slug: "sheerme",
    title: "SheerMe",
    description:
      "Developed responsive frontends that brought the brand’s digital platform and design vision to life.",
    tags: ["HTML", "CSS", "Javascript"],
    role: "Frontend Developer",
    year: "2020",
    overview:
      "SheerME is a wellness and beauty booking platform that connects users with professionals through an intuitive and visually appealing online experience. My role was to implement frontend features that translated design mockups into interactive web pages.",
    challenge:
      "The main challenge was maintaining design accuracy across a variety of devices and browsers. The platform needed to feel consistent and fast, regardless of screen size or environment, while keeping the codebase modular and maintainable for future updates.",
    solution:
      "I developed pixel-perfect pages using HTML, SCSS, and JavaScript, implementing responsive layouts. I ensured cross-browser compatibility, creating a polished and interactive experience for users.",
    media: [
      {
        type: "image",
        src: sheermeMedia1,
        alt: "SheerMe",
      },

      {
        type: "image",
        src: sheermeMedia2,
        alt: "SheerMe",
      },
      {
        type: "image",
        src: sheermeMedia3,
        alt: "SheerMe",
      },

      {
        type: "image",
        src: sheermeMedia4,
        alt: "SheerMe",
      },
    ],
  },
];
