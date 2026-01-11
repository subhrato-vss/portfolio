import { motion } from "framer-motion";
import React, { lazy, Suspense } from 'react'
import { Box, CircularProgress, Typography } from "@mui/material";

// import PageLoader from "./components/PageLoader";
import ScrollToTop from "./components/ScrollToTop";
import SectionSkeleton from "./components/SectionSkeleton";

// ==== Lazy Imports ====
// const Chat = lazy(() => import("./components/Chat"));
const Footer = lazy(() => import("./components/Footer"));
// const Breadcrumb = lazy(() => import("./components/Breadcrumb"));
const MainSection = lazy(() => import("./components/MainSection"));

const App = () => {
  return (
    <>
      <Box sx={{ bgcolor: "#0b1120", color: "#e5e7eb", fontFamily: "'Inter', sans-serif" }}>
        <Suspense fallback={<SectionSkeleton />}>
          {/* <Breadcrumb /> */}

          <MainSection />

          <Footer />

          {/* <Suspense fallback={<SectionSkeleton />}>
            <Chat />
          </Suspense> */}

          <ScrollToTop />
        </Suspense>
      </Box>
    </>
  )
}

export default App