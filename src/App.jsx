import React, { Suspense, lazy } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import { motion } from "framer-motion";

// Lazy imports
const SectionSkeleton = lazy(() => import("./components/SectionSkeleton"));
import ScrollProgress from "./components/ScrollProgress";

const Navbar = lazy(() => import("./components/Navbar"));
const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Experience = lazy(() => import("./components/Experience"));
const Projects = lazy(() => import("./components/Projects"));
const Education = lazy(() => import("./components/Education"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

/* ---------------- Animated Loader ---------------- */

function PageLoader() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#0b1120",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
      >
        <CircularProgress size={60} thickness={4} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <Typography sx={{ mt: 3, color: "#94a3b8" }}>
          Loading portfolio...
        </Typography>
      </motion.div>
    </Box>
  );
}

/* ---------------- App ---------------- */

export default function App() {
  return (
    <Box sx={{ bgcolor: "#0b1120", color: "#e5e7eb", fontFamily: "'Inter', sans-serif" }}>
      <Suspense fallback={<PageLoader />}>
        <ScrollProgress />
      
        <Navbar />
        <Hero />

        <Suspense fallback={<SectionSkeleton />}>
          <About />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <Skills />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <Experience />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <Projects />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <Education />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <Contact />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <Footer />
        </Suspense>
      </Suspense>
    </Box>
  );
}
