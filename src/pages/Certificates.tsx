import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { ArrowLeft, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "../components/ui/dialog";
import LiquidEther from "../components/LiquidEther";

import cert1 from "../assets/photos/certificates/1.jpg";
import cert2 from "../assets/photos/certificates/2.jpg";

const certificates = [
  {
    id: "1",
    title: ".NET 8 Microservices - DDD, CQRS, Vertical and Clean Architecture",
    imageSrc: cert1,
  },
  {
    id: "2",
    title: ".NET Core Microservices - The Complete Guide (.NET 8 MVC)",
    imageSrc: cert2,
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-48px" },
  transition: { duration: 0.5 },
};

export default function Certificates() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCert, setSelectedCert] =
    useState<(typeof certificates)[0] | null>(null);

  const openModal = (cert: (typeof certificates)[0]) => {
    setSelectedCert(cert);
    setIsModalOpen(true);
  };

  return (
    <>
      {/* Background */}
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

      <div className="relative z-10 text-neutral-100 font-sans min-h-screen flex flex-col">
        {/* Header */}
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

        {/* Main */}
        <main className="flex-1 py-12 md:py-16 px-6">
          <div className="max-w-4xl mx-auto w-full">
            {/* Intro */}
            <motion.div
              className="text-center mb-12"
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
                Courses and certifications I’ve completed. Click a certificate
                to view.
              </p>
            </motion.div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {certificates.map((cert, i) => (
                <motion.div
                  key={cert.id}
                  {...fadeUp}
                  transition={{ delay: i * 0.08 }}
                >
                  <Card
                    onClick={() => openModal(cert)}
                    className="
                      group cursor-pointer
                      rounded-2xl overflow-hidden
                      bg-white/5
                      backdrop-blur-xl
                      border border-white/10
                      shadow-lg shadow-black/30
                      transition-all duration-300
                      hover:bg-white/10
                      hover:border-white/20
                      hover:-translate-y-1
                    "
                  >
                    <CardContent className="p-0">
                      <img
                        src={cert.imageSrc}
                        alt={cert.title}
                        className="
                          w-full aspect-[6/5] object-cover
                          transition-transform duration-300
                          group-hover:scale-[1.03]
                        "
                      />
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </main>

        {/* Modal */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent
            className="
              sm:max-w-3xl
              bg-white/10
              backdrop-blur-2xl
              border border-white/20
              text-white
              rounded-2xl
              shadow-2xl shadow-black/40
            "
          >
            <DialogHeader className="pb-2">
              <DialogTitle className="text-xl md:text-2xl text-center font-semibold">
                {selectedCert?.title}
              </DialogTitle>
            </DialogHeader>

            {selectedCert && (
              <div className="flex flex-col items-center gap-4">
                <img
                  src={selectedCert.imageSrc}
                  alt={selectedCert.title}
                  className="
                    w-full max-h-[75vh]
                    object-contain
                    rounded-xl
                    border border-white/10
                  "
                />
                <p className="text-neutral-400 text-sm text-center">
                  {selectedCert.title}
                </p>
              </div>
            )}

            <DialogClose asChild>
              <Button
                variant="outline"
                className="
                  mt-6 w-full rounded-full
                  border-white/30
                  bg-white/5
                  hover:bg-white/10
                  text-white
                "
              >
                Close
              </Button>
            </DialogClose>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}
