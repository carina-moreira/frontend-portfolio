const interests = [
  { emoji: "👩🏽‍💻", label: "Frontend Development" },
  { emoji: "📐", label: "UI/UX Design" },
  { emoji: "🧩", label: "Reusable UI Components" },
  { emoji: "🎨", label: "Creative coding" },
  { emoji: "📖", label: "Design systems" },
  { emoji: "🪄", label: "Smooth animations" },
  { emoji: "📚", label: "Books" },
  { emoji: "🔍", label: "Micro-interactions" },
  { emoji: "🖼️", label: "Art Galleries" },
  { emoji: "🪩", label: "Live Concerts" },
  { emoji: "✈️", label: "Travel" },
];

import { Tag } from "./ui/tag";

const InterestsSection = () => {
  return (
    <section className="py-16 border-b border-border">
      <h2 className="text-3xl md:text-4xl font-headline mb-8">Interests</h2>
      <div className="flex flex-wrap gap-3">
        {interests.map((interest) => (
          <Tag
            key={interest.label}
            label={`${interest.emoji} ${interest.label}`}
            bgColor="bg-light-grey"
            textColor="text-black"
          />
        ))}
      </div>
    </section>
  );
};

export default InterestsSection;
