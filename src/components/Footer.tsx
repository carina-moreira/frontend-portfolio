import { Dribbble, Linkedin, Mail } from "lucide-react";
import { IconButton } from "./ui/icon-button";
import { dribbble, email, linkedIn } from "./data/links";

const FooterSection = () => {
  return (
    <footer className="max-w-3xl p-16 w-full">
      <h2 className="text-3xl md:text-4xl font-headline mb-4">
        Let&apos;s connect
      </h2>
      <div className="flex flex-col gap-8 max-w-md">
        <p className="text-grey text-xs">
          Always open to new ideas, projects, and collaborations. <br />
          Get in touch or connect with me on these platforms.
        </p>
        <div className="flex items-center gap-6">
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
      <div className="mt-8 pt-8 border-t border-border text-xs text-grey flex flex-col items-start gap-4">
        © {new Date().getFullYear()}
        <p className="text-grey mb-8 max-w-md text-xs">
          Built with Next.js and Tailwind CSS, deployed with Vercel.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
