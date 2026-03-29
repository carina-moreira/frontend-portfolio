import { Dribbble, Linkedin, Mail, FileText } from "lucide-react";
import { Button, LinkButton } from "./ui/button";
import { IconButton } from "./ui/icon-button";
import { dribbble, email, linkedIn } from "./data/links";

const HeroSection = () => {
  return (
    <section className="pb-16 border-b border-border border-border w-full">
      <div className="flex gap-6 w-full">
        <div className="flex flex-col gap-6 space-between h-full">
          <div className="flex flex-col gap-2">
            <p className="uppercase text-grey">Carina Moreira</p>
            <h1 className="text-5xl md:text-6xl lg:text-6xl font-medium font-headline">
              Frontend Developer
            </h1>
            <h2 className="text-5xl md:text-6xl lg:text-6xl text-grey font-headline">
              — Where UX <br />
              <span className="italic">Meets Code</span>
            </h2>
          </div>
          <div className="small-intro">
            With a background in Communication Design and 5+ years of developing
            frontend interfaces, I specialize in turning UX and visual design
            into accessible, high-quality digital products.
          </div>

          <div className="flex items-center gap-4">
            <LinkButton
              href="/assets/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              icon={<FileText size={16} />}
              label="View CV"
              className="rounded-full"
            />

            <div className="flex items-center gap-4 ml-2">
              <IconButton href={dribbble} ariaLabel="Dribbble">
                <Dribbble size={20} />
              </IconButton>
              <IconButton href={linkedIn} ariaLabel="LinkedIn">
                <Linkedin size={20} />
              </IconButton>
              <IconButton
                href={email}
                ariaLabel="Email"
                target="_self"
                rel="noopener noreferrer"
              >
                <Mail size={20} />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
