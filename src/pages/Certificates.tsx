import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { ArrowLeft, Award, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import LiquidEther from "../components/LiquidEther";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-48px" },
  transition: { duration: 0.5 },
};

// Replace with your real certificates
const certificates = [
  {
    id: "1",
    title: "Example Certification",
    issuer: "Example Provider",
    date: "2024",
    href: "#",
    credentialId: null as string | null,
  },
  {
    id: "2",
    title: "Another Certification",
    issuer: "Another Provider",
    date: "2023",
    href: "#",
    credentialId: null as string | null,
  },
];

export default function Certificates() {
  return (
    <>
      <LiquidEther
        colors={["#ffffffff", "#777777ff", "#aaaaaaff"]}
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

      <div className="relative z-10 text-neutral-100 font-sans min-h-screen flex flex-col">
        <header className="flex-none border-b border-white/10 bg-black/30 backdrop-blur-xl">
          <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="text-white/80 hover:text-white hover:bg-white/10 -ml-2 rounded-full"
            >
              <Link to="/">
                <ArrowLeft className="mr-2 size-4" />
                Back to home
              </Link>
            </Button>
            <h1 className="font-display text-lg font-semibold text-white">
              Certifications
            </h1>
            <div className="w-24" aria-hidden />
          </div>
        </header>

        <main className="flex-1 flex flex-col justify-center min-h-0 py-12 md:py-16 px-6">
          <div className="max-w-3xl mx-auto w-full">
            <motion.div
              className="text-center mb-10 md:mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-sm uppercase tracking-[0.25em] text-white/50 font-medium flex items-center justify-center gap-2">
                <Award className="size-4" />
                All certificates
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-3">
                Certifications & credentials
              </h2>
              <p className="mt-4 text-neutral-400 text-lg max-w-xl mx-auto">
                Courses and certifications I’ve completed. Click a card to view or verify.
              </p>
            </motion.div>

            <ul className="space-y-5">
              {certificates.map((cert, i) => (
                <motion.li
                  key={cert.id}
                  {...fadeUp}
                  transition={{ delay: i * 0.08 }}
                >
                  <Card className="bg-neutral-900/60 border-neutral-700/50 rounded-2xl overflow-hidden hover:border-neutral-600/50 transition-colors">
                    <CardContent className="p-6 sm:p-8">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div>
                          <h3 className="font-display text-xl font-semibold text-white">
                            {cert.title}
                          </h3>
                          <p className="mt-1 text-neutral-400">
                            {cert.issuer}
                            {cert.date && ` · ${cert.date}`}
                          </p>
                          {cert.credentialId && (
                            <p className="mt-1 text-xs text-white/50 font-mono">
                              ID: {cert.credentialId}
                            </p>
                          )}
                        </div>
                        {cert.href && (
                          <Button
                            asChild
                            variant="ghost"
                            size="sm"
                            className="text-white/80 hover:text-white hover:bg-white/10 shrink-0 rounded-full"
                          >
                            <a
                              href={cert.href}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View credential
                              <ExternalLink className="ml-2 size-4" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.li>
              ))}
            </ul>
          </div>
        </main>
      </div>
    </>
  );
}