import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What's your preferred stack?",
    answer:
      "I primarily work with Next.js, React, and Tailwind CSS. On the design side, Figma is my go-to tool. I'm always open to learning new technologies when the project calls for it.",
  },
  {
    question: "Do you do design work too?",
    answer:
      "Absolutely. My background is in design, so I can handle everything from wireframing and prototyping to high-fidelity UI design. I love working across both disciplines.",
  },
  {
    question: "How do you balance design and development?",
    answer:
      "I sit in the middle: I care about visual details and UX flows, but I also think in components, states, and performance. The goal is to keep the experience cohesive while making the codebase scalable.",
  },
  {
    question: "Are you available for freelance or only full-time roles?",
    answer:
      "I’m open to discussing both, depending on scope and timeline. For freelance work, I prefer clearly defined projects with a specific outcome; for full-time roles, I’m most interested in positions that value collaboration between design and engineering.",
  },
  {
    question: "How do you communicate and collaborate with teams?",
    answer:
      "I like to keep communication lightweight but frequent: quick  updates and small reviewable increments of work. I’m comfortable collaborating with designers, product managers, and developers, and I’m used to working from Figma files, design tokens, and component libraries.",
  },
  {
    question: "How do you handle feedback and iteration?",
    answer:
      "I treat feedback as part of the normal loop, not as a sign something went wrong. I like to align on goals first, then iterate in small steps—whether that’s adjusting a layout, refining a transition, or refactoring code—so we can see progress quickly and avoid big, risky changes late in the process.",
  },
];
const FaqSection = () => {
  return (
    <section className="py-16 w-full">
      <h2 className="text-3xl md:text-4xl font-headline mb-8">FAQ</h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border-b-border"
          >
            <AccordionTrigger className="text-left font-body font-medium text-base hover:no-underline">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-grey font-medium leading-relaxed">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FaqSection;
