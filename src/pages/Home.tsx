import { Card, CardContent, CardFooter } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Github, Linkedin, Mail, ArrowRight, ExternalLink, Award } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiDotnet, SiHtml5, SiCss3, SiJavascript, SiAngular, SiRubyonrails, SiNodedotjs, SiUnity, SiFlutter, SiDart, SiVuedotjs, SiPostgresql } from "react-icons/si";
import LiquidEther from "../components/LiquidEther";
import HeroBg from '../assets/photos/anime.jpg'; // Replace with your actual local image path

// Wrapper so tech logos use the same color as the site theme (white/neutral)
const ThemedIcon = ({ children }: { children: React.ReactNode }) => (
  <span className="text-white/75 [&_svg]:size-12 [&_svg]:inline-block" aria-hidden>
    {children}
  </span>
);

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-48px" },
  transition: { duration: 0.5 },
};

export default function PortfolioHome() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const techLogos = [
    { node: <ThemedIcon><SiReact /></ThemedIcon>, title: "React", href: "https://react.dev" },
    { node: <ThemedIcon><SiTailwindcss /></ThemedIcon>, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <ThemedIcon><SiDotnet /></ThemedIcon>, title: "C#", href: "https://learn.microsoft.com/en-us/dotnet/csharp/" },
    { node: <ThemedIcon><SiHtml5 /></ThemedIcon>, title: "HTML", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { node: <ThemedIcon><SiCss3 /></ThemedIcon>, title: "CSS", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { node: <ThemedIcon><SiJavascript /></ThemedIcon>, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { node: <ThemedIcon><SiTypescript /></ThemedIcon>, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <ThemedIcon><SiAngular /></ThemedIcon>, title: "Angular", href: "https://angular.io" },
    { node: <ThemedIcon><SiNextdotjs /></ThemedIcon>, title: "Next.js", href: "https://nextjs.org" },
    { node: <ThemedIcon><SiRubyonrails /></ThemedIcon>, title: "Ruby on Rails", href: "https://rubyonrails.org" },
    { node: <ThemedIcon><SiNodedotjs /></ThemedIcon>, title: "Node.js", href: "https://nodejs.org" },
    { node: <ThemedIcon><SiUnity /></ThemedIcon>, title: "Unity", href: "https://unity.com" },
    { node: <ThemedIcon><SiFlutter /></ThemedIcon>, title: "Flutter", href: "https://flutter.dev" },
    { node: <ThemedIcon><SiDart /></ThemedIcon>, title: "Dart", href: "https://dart.dev" },
    { node: <ThemedIcon><SiVuedotjs /></ThemedIcon>, title: "Vue.js", href: "https://vuejs.org" },
    { node: <ThemedIcon><SiPostgresql /></ThemedIcon>, title: "SQL", href: "https://en.wikipedia.org/wiki/SQL" },
  ];

  const projects = [
    {
      title: "Cedrik Manual Website",
      description: "A Cybersecurity Education through Responsive Integrated Knowledge is a capstone project designed to address the gaps in traditional cybersecurity education.",
      tags: ["Radix UI", "TypeScript", "API", "shadcn/ui"],
      href: "https://cedrik-user-manual-webite.vercel.app/",
      live: true,
    },
    {
      title: "Auspicia",
      description: "Consultation and Management System for Auspicia, a company that provides consultation services.",
      tags: ["Radix UI", "TypeScript", "API", "shadcn/ui"],
      href: "https://auspicia-gamma.vercel.app/",
      live: true,
    },
    {
      title: "Manila Explorer",
      description: "A travel website that provides information about tourist spots in Manila, Philippines.",
      tags: ["React 18", "React-Leaflet","TypeScript", "Custom CSS"],
      href: "https://manila-explorer.vercel.app/",
      live: true,
    },
  ];

  return (
    <>
      <LiquidEther
        colors={["#B100FF", "#6A00FF", "#B100FF"]}
        mouseForce={20}
        cursorSize={100}
        isViscous
        viscous={30}
        iterationsViscous={32}
        iterationsPoisson={32}
        resolution={0.5}
        isBounce={false}
        autoDemo
        autoSpeed={0.5}
        autoIntensity={2.2}
        takeoverDuration={0.25}
        autoResumeDelay={3000}
        autoRampDuration={0.6}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <div className="relative z-10 text-neutral-100 font-sans">

        {/* Navbar */}
        <nav
          aria-label="Section navigation"
          className="fixed top-4 left-1/2 -translate-x-1/2 z-40"
        >
          <div className="flex items-center gap-2 bg-black/40 border border-white/10 backdrop-blur-xl rounded-full px-3 py-2 shadow-[0_12px_30px_rgba(0,0,0,0.35)]">
            <button
              type="button"
              className="md:hidden px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] text-white/80 rounded-full border border-white/10 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300/60"
              aria-expanded={isNavOpen}
              aria-controls="cedrik-nav-menu"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              Menu
            </button>
            <div className="hidden md:flex items-center gap-2">
              {[
                { label: "Home", href: "#home" },
                { label: "About", href: "#about" },
                { label: "Skills", href: "#skills" },
                { label: "Certifications", href: "#certifications"},
                { label: "Projects", href: "#projects" },
                { label: "Contact", href: "#contact" },
              ].map((item) => (
                <div key={item.label} className="group">
                  {"external" in item && item.external ? (
                    <Link
                      to={item.href}
                      className="relative block px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] text-white/80 rounded-full border border-transparent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300/60 hover:text-white hover:bg-white/10"
                    >
                      <span className="relative z-10">{item.label}</span>
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      className="relative block px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] text-white/80 rounded-full border border-transparent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300/60 hover:text-white hover:bg-white/10"
                    >
                      <span className="relative z-10">{item.label}</span>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div
            id="cedrik-nav-menu"
            className={`md:hidden mt-2 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-xl shadow-[0_18px_40px_rgba(0,0,0,0.4)] overflow-hidden ${isNavOpen ? "block" : "hidden"}`}
          >
            {[
              { label: "Home", href: "#home" },
              { label: "About", href: "#about" },
              { label: "Skills", href: "#skills" },
              { label: "Certifications", href: "#certifications"},
              { label: "Projects", href: "#projects" },
              { label: "Contact", href: "#contact" },
            ].map((item) =>
              "external" in item && item.external ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className="block px-4 py-3 text-xs uppercase tracking-[0.22em] text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                  onClick={() => setIsNavOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-3 text-xs uppercase tracking-[0.22em] text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                  onClick={() => setIsNavOpen(false)}
                >
                  {item.label}
                </a>
              )
            )}
          </div>
        </nav>

        {/* Hero */}
        <section
          id="home"
          className="min-h-screen flex items-start justify-center px-6 py-20 md:py-28 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HeroBg})` }}
        >
          <motion.div
            className="max-w-xl mx-auto text-left ml-0 md:ml-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-white/60 mb-4 font-medium">
              Developer & Designer
            </p>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white">
              ENMA
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-neutral-300 max-w-xl leading-relaxed">
              I build modern, responsive digital experiences with clean code and thoughtful design.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-white text-black hover:bg-white/90 font-medium px-6"
              >
                <a href="#projects">
                  View work <ArrowRight className="ml-2 size-4" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full bg-white/10 text-white border border-white/40 px-6"
              >
                <a href="#contact">Get in touch</a>
              </Button>
            </div>
          </motion.div>
        </section>

        {/* About */}
        <section id="about" className="min-h-screen flex flex-col justify-center border-t border-white/10 py-20 md:py-28">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <motion.h2
              className="font-display text-3xl md:text-4xl font-bold text-white"
              {...fadeUp}
            >
              About Me
            </motion.h2>
            <motion.p
              className="mt-6 text-neutral-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
              {...fadeUp}
            >
              I focus on building modern, responsive, and user-centered digital experiences.
              I combine strong front-end skills with an eye for design, using contemporary
              tools and frameworks to ship products that are fast, accessible, and a joy to use.
            </motion.p>
          </div>
        </section>

        {/* Skills */}
        <section
          id="skills"
          className="min-h-screen flex flex-col justify-center border-t border-white/10 py-20 md:py-28"
        >
          <div className="max-w-4xl mx-auto px-6 w-full">
            <motion.p
              className="text-center text-sm uppercase tracking-[0.25em] text-white/50 mb-8 md:mb-12 font-medium"
              {...fadeUp}
            >
              Skills & Technologies
            </motion.p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-center">
              {techLogos.map((tech, i) => (
                <motion.a
                  key={tech.title}
                  href={tech.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  viewport={{ once: true }}
                >
                  <div className="p-4 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
                    {tech.node}
                  </div>
                  <span className="text-sm text-white/80 group-hover:text-white">{tech.title}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section id="certifications" className="min-h-screen flex flex-col justify-center border-t border-white/10 py-20 md:py-28">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <motion.div
              className="flex items-center justify-center gap-2 text-white/50 mb-4"
              {...fadeUp}
            >
              <Award className="size-5" aria-hidden />
              <span className="text-sm uppercase tracking-[0.25em] font-medium">
                Certifications
              </span>
            </motion.div>
            <motion.h2
              className="font-display text-3xl md:text-4xl font-bold text-white"
              {...fadeUp}
            >
              Certifications & credentials
            </motion.h2>
            <motion.p
              className="mt-4 text-neutral-400 text-lg leading-relaxed"
              {...fadeUp}
            >
              Courses and certifications I’ve completed. View or verify any credential.
            </motion.p>
            <motion.div {...fadeUp} className="mt-10">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full bg-white/10 text-white border border-white/40 px-6"
              >
                <Link to="/certificates">
                  View all certificates
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="min-h-screen flex flex-col justify-center border-t border-white/10 py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-6 w-full">
            <motion.h2
              className="font-display text-3xl md:text-4xl font-bold text-center text-white"
              {...fadeUp}
            >
              Selected Projects
            </motion.h2>
            <p className="mt-3 text-center text-neutral-400 max-w-xl mx-auto">
              A few things I’ve built recently.
            </p>
            <div className="mt-10 md:mt-14 grid md:grid-cols-2 gap-6 md:gap-8">
              {projects.map((p, i) => (
                <motion.div key={p.title} {...fadeUp} transition={{ delay: i * 0.1 }}>
                  <Card className="h-full bg-neutral-900/60 border-neutral-700/50 rounded-2xl overflow-hidden hover:border-neutral-600/50 transition-colors">
                    <CardContent className="p-8">
                      <h3 className="font-display text-xl font-semibold text-white">
                        {p.title}
                      </h3>
                      <p className="mt-4 text-neutral-400 leading-relaxed">
                        {p.description}
                      </p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {p.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-white/80"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                      <Button
                        asChild
                        variant="ghost"
                        size="sm"
                        className="text-white/80 hover:text-white hover:bg-white/10 -ml-2"
                      >
                        <a href={p.href} target="_blank" rel="noopener noreferrer">
                          {p.live ? "View live" : "View project"}{" "}
                          <ExternalLink className="ml-1.5 size-3.5" />
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
<section id="contact" className="min-h-screen flex flex-col justify-center border-t border-white/10 py-20 md:py-28">
  <div className="max-w-2xl mx-auto px-6 text-center">
    <motion.h2
      className="font-display text-3xl md:text-4xl font-bold text-white"
      {...fadeUp}
    >
      Get in Touch
    </motion.h2>
    <motion.p
      className="mt-4 text-neutral-400 text-lg md:text-xl"
      {...fadeUp}
    >
      Have a project in mind or want to say hi? I’d love to hear from you.
    </motion.p>

    <motion.div
      className="mt-10 flex flex-wrap justify-center gap-4"
      {...fadeUp}
    >
      <Button
        asChild
        size="lg"
        className="rounded-full bg-white text-black hover:bg-white/90"
      >
        <a href="mailto:hello@example.com">
          <Mail className="mr-2 size-4" />
          Say hello
        </a>
      </Button>

      <div className="flex gap-4">
        <a
          href="https://github.com/enmamaarin"          // ← Replace with your actual GitHub URL
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="p-3 rounded-full border border-white/20 text-white/80 hover:text-white hover:bg-white/10 hover:border-white/30 transition-colors"
        >
          <Github className="size-5" />
        </a>

        <a
          href="https://www.linkedin.com/in/lenard-peregil-aa31933a5/"      // ← Replace with your actual LinkedIn URL
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="p-3 rounded-full border border-white/20 text-white/80 hover:text-white hover:bg-white/10 hover:border-white/30 transition-colors"
        >
          <Linkedin className="size-5" />
              </a>
            </div>
        </motion.div>
            </div>
        </section>

        <footer className="py-6 border-t border-white/10 text-center">
          <p className="text-sm text-neutral-500">
            © {new Date().getFullYear()} Peregil. All rights reserved.
          </p>
          <a
            href="#home"
            className="mt-2 inline-block text-xs uppercase tracking-widest text-white/40 hover:text-white/70 transition-colors"
          >
            Back to top
          </a>
        </footer>
      </div>
    </>
  );
}