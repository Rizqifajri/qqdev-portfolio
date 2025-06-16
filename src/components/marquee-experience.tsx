import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const experiences = [
  {
    role: "Frontend Engineer",
    company: "PT DOT Indonesia",
    duration: "Nov 2024 - Feb 2025",
    logo: "./logo/dotlogo.png",
  },
  {
    role: "Web Developer Intern",
    company: "Infinite Learning",
    duration: "Feb 2024 - Jul 2024",
    logo: "./logo/infinite-learning.png",
  },
  {
    role: "Frontend Developer",
    company: "UPZ Gunadarma",
    duration: "Mar 2024 - Jul 2024",
    logo: "./logo/logo-universitas-gunadarma.png",
  },
  {
    role: "Lecturer at Informatics Laboratory",
    company: "Gunadarma University",
    duration: "Aug 2023 - June 2025",
    logo: "./logo/logo-labti.png",
  },
];

const firstRow = experiences.slice(0, experiences.length / 2);
const secondRow = experiences.slice(experiences.length / 2);

const ExperienceCard = ({
  logo,
  company,
  role,
  duration,
}: {
  logo: string;
  company: string;
  role: string;
  duration: string;
}) => {
  return (
    <figure
      className={cn(
        "relative min-w-[220px] sm:min-w-[256px] md:min-w-[280px] max-w-xs cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <img
          className="h-8 w-8 rounded-full object-contain"
          alt={`${company} logo`}
          src={logo}
        />
        <figcaption className="text-sm font-medium dark:text-white">
          {company}
        </figcaption>
      </div>

      <div className="flex flex-col mt-4">
        <h3 className="text-base sm:text-lg font-semibold dark:text-white">
          {role}
        </h3>
        <p className="mt-1 text-sm text-gray-400">{duration}</p>
      </div>
    </figure>
  );
};

export function MarqueeExperience() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-6 sm:py-10">
      <Marquee pauseOnHover className="[--duration:40s] gap-4 px-4">
        {firstRow.map((exp, index) => (
          <div key={`${exp.company}-${index}`} className="mx-2">
            <ExperienceCard {...exp} />
          </div>
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:40s] gap-4 px-4">
        {secondRow.map((exp, index) => (
          <div key={`${exp.company}-${index}`} className="mx-2">
            <ExperienceCard {...exp} />
          </div>
        ))}
      </Marquee>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background" />
    </div>
  );
}
