import { Fade } from "react-awesome-reveal";
import {
  SiNodedotjs,
  SiTypescript,
  SiNestjs,
  SiPython,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiBootstrap,
  SiTailwindcss,
  SiReact,
  SiVuedotjs,
  SiAwslambda,
  SiAmazondynamodb,
  SiDocker,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiGit,
  SiGithub,
  SiGrafana,
  SiPostman,
} from "react-icons/si";
import {
  HiOutlineServerStack,
  HiOutlineCloud,
  HiOutlineCircleStack,
  HiOutlineSquares2X2,
  HiOutlineEye,
  HiOutlineGlobeAlt,
  HiOutlineWrenchScrewdriver,
  HiOutlineCodeBracket,
} from "react-icons/hi2";

const categories = [
  {
    title: "Backend",
    icon: HiOutlineServerStack,
    skills: ["Node.js", "TypeScript", "NestJS", "Python", "REST APIs"],
    icons: [SiNodedotjs, SiTypescript, SiNestjs, SiPython, null],
  },
  {
    title: "Frontend",
    icon: HiOutlineCodeBracket,
    skills: ["HTML", "CSS", "JavaScript", "Bootstrap 5", "Tailwind", "React", "Vue"],
    icons: [SiHtml5, SiCss3, SiJavascript, SiBootstrap, SiTailwindcss, SiReact, SiVuedotjs],
  },
  {
    title: "Cloud & Infra",
    icon: HiOutlineCloud,
    skills: ["AWS Lambda", "DynamoDB", "S3", "Serverless Framework", "Docker"],
    icons: [SiAwslambda, SiAmazondynamodb, null, null, SiDocker],
  },
  {
    title: "Bases de Datos",
    icon: HiOutlineCircleStack,
    skills: ["PostgreSQL", "MySQL", "Redis"],
    icons: [SiPostgresql, SiMysql, SiRedis],
  },
  {
    title: "Arquitectura",
    icon: HiOutlineSquares2X2,
    skills: ["Microservicios", "Event-Driven", "DDD", "Pub/Sub"],
    icons: [null, null, null, null],
  },
  {
    title: "Observabilidad",
    icon: HiOutlineEye,
    skills: ["Grafana", "AWS CloudWatch", "Investigación de incidentes"],
    icons: [SiGrafana, null, null],
  },
  {
    title: "Dominio",
    icon: HiOutlineGlobeAlt,
    skills: ["Pagos", "Préstamos digitales", "Riesgo crediticio", "Wallets", "Crypto-fiat"],
    icons: [null, null, null, null, null],
  },
  {
    title: "Herramientas",
    icon: HiOutlineWrenchScrewdriver,
    skills: ["Git", "GitHub", "Postman", "HubSpot CRM"],
    icons: [SiGit, SiGithub, SiPostman, null],
  },
];

export function Skills() {
  return (
    <div className="bg-[var(--c-bg-alt)] text-[var(--c-text)] py-20 px-6 md:px-10 lg:px-28" id="skills">
      <Fade triggerOnce>
        <h2 className="text-center font-sans text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-[var(--c-text-h)]">
          🛠️ Skills
        </h2>
        <p className="text-center text-[var(--c-text-40)] font-sans text-sm max-w-xl mx-auto mb-16 tracking-wide">
          Stack técnico con el que trabajo día a día
        </p>
      </Fade>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-6xl mx-auto">
        {categories.map((cat, i) => {
          const CategoryIcon = cat.icon;
          return (
            <Fade key={i} triggerOnce direction="up" delay={i * 100}>
              <div className="bg-[var(--c-bg-card)] backdrop-blur-xl border border-[var(--c-border)] rounded-2xl p-5">
                <h3 className="flex items-center gap-2 text-xs font-medium text-[var(--c-text-40)] uppercase tracking-widest mb-5 font-sans">
                  <CategoryIcon className="text-sm" />
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, j) => {
                    const Icon = cat.icons[j];
                    return (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1.5 text-xs text-[var(--c-text-60)] bg-[var(--c-bg-card)] border border-[var(--c-border)] px-3 py-1 rounded-full"
                      >
                        {Icon && <Icon className="text-xs text-[var(--c-text-40)]" />}
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </div>
            </Fade>
          );
        })}
      </div>
    </div>
  );
}
