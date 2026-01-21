import { Card, CardContent } from "../components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";

import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from "react-icons/si";
import LogoLoop from "../components/LogoLoop";
import LiquidEther from "../components/LiquidEther";


export default function PortfolioHome() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  ];

  return (
    <>
      {/* Full-page LiquidEther Background */}
      <LiquidEther
        colors={['#ffffffff', '#777777ff', '#aaaaaaff']}
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

      {/* Foreground content */}
      <div className="relative z-10 text-neutral-100">

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
                { label: "Projects", href: "#projects" },
                { label: "Contact", href: "#contact" },
              ].map((item) => (
                <div key={item.label} className="group">
                  <a
                    href={item.href}
                    className="relative block px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] text-white/80 rounded-full border border-transparent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300/60 hover:text-white hover:bg-white/10"
                  >
                    <span className="relative z-10">{item.label}</span>
                  </a>
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
              { label: "Projects", href: "#projects" },
              { label: "Contact", href: "#contact" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-4 py-3 text-xs uppercase tracking-[0.22em] text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                onClick={() => setIsNavOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        {/* About Section */}
        <section id="about" className="py-24 border-t border-neutral-800">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold">About Me</h2>
            <p className="mt-6 text-neutral-400">
              I focus on building modern, responsive, and user-centered digital experiences using contemporary tools and frameworks.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 border-t border-neutral-800">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center">Projects</h2>
            <div className="mt-12 grid md:grid-cols-2 gap-8">
              {[1, 2].map((p) => (
                <Card key={p} className="bg-neutral-800/60 border-neutral-700 rounded-2xl">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold">Project Title</h3>
                    <p className="mt-4 text-neutral-400">
                      Short description of the project and its impact.
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <div id="skills" className="p-24" style={{ position: 'relative', overflow: 'hidden'}}>
          <LogoLoop
            logos={techLogos}
            speed={100}
            direction="left"
            logoHeight={60}
            gap={60}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor="#4b4b4bff"
            ariaLabel="Technology partners"
          />
        </div>

        {/* Contact Section */}
        <section id="contact" className="py-24">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold">Get in Touch</h2>
            <p className="mt-4 text-neutral-400">Let’s build something great together.</p>
            <div className="mt-8 flex justify-center gap-6">
              <a href="#"><Github /></a>
              <a href="#"><Linkedin /></a>
              <a href="#"><Mail /></a>
            </div>
          </div>
        </section>

        <footer className="py-6 border-t border-neutral-800 text-center text-sm text-neutral-500">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </footer>
      </div>
    </>
  );
}
