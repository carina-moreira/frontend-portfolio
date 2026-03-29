const skills = [
  {
    category: "The fundamentals",
    items: ["HTML", "CSS", "SCSS", "JavaScript", "TypeScript"],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      "React",
      "Next.js",
      "Nuxt.js",
      "Vue",
      "Angular",
      "Tailwind CSS",
      "GSAP",
    ],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "GitHub", "GitLab", "Sanity", "Vercel", "Swagger", "Docker"],
  },
  {
    category: "Management",
    items: ["Trello", "Azure DevOps", "Microsoft Team Foundation Server"],
  },
  {
    category: "Design",
    items: ["Figma", "Framer", "Adobe Illustrator", "Adobe Photoshop"],
  },
];

const SkillsSection = () => {
  return (
    <section className="py-16 border-b border-border">
      <h2 className="text-3xl md:text-4xl font-headline mb-8">Toolbox</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {skills.map((group) => (
          <div key={group.category}>
            <h3 className="text-xs font-body font-semibold uppercase text-grey mb-3">
              {group.category}
            </h3>
            <p className="text-sm text-black">{group.items.join(", ")}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
