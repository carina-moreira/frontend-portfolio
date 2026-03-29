const AboutSection = () => {
  return (
    <section className="py-16 border-b border-border">
      <h2 className="text-3xl md:text-4xl font-headline mb-6">About me</h2>
      <div className="space-y-4 text-grey leading-relaxed max-w-2xl">
        <p>
          I&apos;m a Frontend Developer with a Bachelor&apos;s degree in
          Communication Design, passionate about building digital products that
          feel as good as they function.
          <br />
          <br />
          I believe great interfaces come from a balance between technical
          execution and understanding how people actually use things. That’s why
          I pay close attention to performance, accessibility and the small
          visual details that shape the overall experience.
          <br />
          <br />
          Over the years, I’ve worked in agencies and product teams, building
          interfaces that are scalable and easy to maintain. I focus on creating
          reusable components and interactions that feel intuitive and
          consistent.
          <br />
          <br />
          My design background helps me collaborate closely with designers,
          translate ideas into code with precision, and contribute proactively
          to the overall product experience.
          <br />
          <br />
          If you&apos;re looking for someone who can bridge design and
          development, write maintainable frontend code, and help craft polished
          digital experiences, I&apos;d be happy to{" "}
          <a
            href="mailto:carinaribeiromoreira@gmail.com"
            className="text-blue hover:underline"
          >
            connect
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
