/* eslint-disable @typescript-eslint/no-explicit-any */
import { projects } from "./data/projects";
import Link from "next/link";
import { Tag } from "./ui/tag";
import Image from "next/image";

const ProjectsSection = () => {
  return (
    <section className="py-16 border-b border-border">
      <h2 className="text-3xl md:text-4xl font-headline mb-8">Projects</h2>
      <div className="space-y-8">
        {projects.map((project: any) => (
          <Link
            key={project.slug}
            href={`/project/${project.slug}`}
            className="flex flex-col group md:flex-row group gap-6 md:gap-4 p-6 -mx-6 rounded-lg hover:bg-hover transition-colors"
          >
            <div className="w-full h-full md:max-w-[245px] rounded-xs overflow-hidden ">
              <Image
                src={project?.media?.[0]?.src}
                alt={project.title}
                width={800}
                height={500}
                className="w-full h-full object-cover"
                loading="lazy"
              ></Image>
            </div>
            <div className="flex flex-col justify-between md:w-[55%]">
              <div className="flex flex-col">
                <div className="flex items-center justify-between gap-4 mb-2 group">
                  <h3 className="text-xl font-body font-medium group-hover:text-blue transition-colors">
                    {project.title}
                  </h3>
                  <span className="flex gap-1.5 lg:opacity-0 lg:translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 ease-out text-blue text-sm shrink-0">
                    <span className="lg:opacity-0">See Detail </span> ↗
                  </span>
                </div>
                <p className="text-grey leading-relaxed mb-3">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag: any) => (
                  <Tag
                    key={tag}
                    label={tag}
                    bgColor="bg-light-grey"
                    textColor="text-black"
                    className="group-hover:bg-white transition-colors duration-400 ease-in-out"
                  />
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
