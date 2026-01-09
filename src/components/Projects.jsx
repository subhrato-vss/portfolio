import { Box, Typography, IconButton, Chip, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import { useState, useEffect, useMemo } from "react";
import { useTheme } from "@mui/material/styles";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Section from "./Section";

/* ---------------- DATA ---------------- */

const projects = [
    {
        title: "University Website",
        desc: "High-traffic university portal with admin-managed content and scalable APIs.",
        img: "/projects/university.png",
        tech: ["React", "Node", "MySQL"]
    },
    {
        title: "CRM System - Dubai",
        desc: "Enterprise CRM handling 100-200 daily leads with secure role-based workflows.",
        img: "/projects/crm.png",
        tech: ["React", "TanStack Query", "Zustand"]
    },
    {
        title: "Academics & Conduct Modules",
        desc: "Academic system managing 3,000+ students and 200 staff members.",
        img: "/projects/academics.png",
        tech: ["React", "RBAC", "Material UI"]
    },
    {
        title: "B2B Travel Portal",
        desc: "Admin panel for agents, bookings, markups, cancellations, and reports.",
        img: "/projects/travel.png",
        tech: ["React", "Tailwind CSS", "TanStack Query"]
    },
    {
        title: "Payslip Management System",
        desc: "Automated payroll and payslip system for 150+ employees.",
        img: "/projects/payslip.png",
        tech: ["Node", "MySQL", "JWT"]
    }
];

/* ---------------- COMPONENT ---------------- */

export default function Projects() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

    const cardsPerView = isMobile ? 1 : isTablet ? 2 : 3;

    /* ---------- CLONES ---------- */
    const slides = useMemo(() => {
        const start = projects.slice(-cardsPerView);
        const end = projects.slice(0, cardsPerView);
        return [...start, ...projects, ...end];
    }, [cardsPerView]);

    const [index, setIndex] = useState(cardsPerView);
    const [animate, setAnimate] = useState(true);

    const total = projects.length;

    const next = () => {
        setAnimate(true);
        setIndex((p) => p + 1);
    };

    const prev = () => {
        setAnimate(true);
        setIndex((p) => p - 1);
    };

    /* ---------- LOOP FIX ---------- */
    useEffect(() => {
        if (index >= total + cardsPerView) {
            setTimeout(() => {
                setAnimate(false);
                setIndex(cardsPerView);
            }, 600);
        }

        if (index < cardsPerView) {
            setTimeout(() => {
                setAnimate(false);
                setIndex(total + cardsPerView - 1);
            }, 600);
        }
    }, [index, total, cardsPerView]);

    /* ---------- KEYBOARD ---------- */
    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === "ArrowRight") next();
            if (e.key === "ArrowLeft") prev();
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    });

    return (
        <Section id="projects" title="Featured Projects" isMotion={false}>
            <Box sx={{ position: "relative", maxWidth: 1200, mx: "auto", px: 1 }}>

                {/* LEFT */}
                <IconButton onClick={prev} sx={navStyle("left")}>
                    <ArrowBackIosNewIcon sx={{ fontSize: 20 }} />
                </IconButton>

                {/* RIGHT */}
                <IconButton onClick={next} sx={navStyle("right")}>
                    <ArrowForwardIosIcon sx={{ fontSize: 20 }} />
                </IconButton>

                {/* VIEWPORT */}
                <Box sx={{ overflow: "hidden" }}>
                    <motion.div
                        animate={{ x: `-${index * (100 / cardsPerView)}%` }}
                        transition={animate ? { duration: 0.6, ease: [0.22, 1, 0.36, 1] } : { duration: 0 }}
                        style={{ display: "flex" }}
                    >
                        {slides.map((project, i) => (
                            <Box
                                key={i}
                                sx={{
                                    flex: `0 0 ${100 / cardsPerView}%`,
                                    px: 1,
                                    boxSizing: "border-box"
                                }}
                            >
                                <ProjectCard project={project} />
                            </Box>
                        ))}
                    </motion.div>
                </Box>
            </Box>
        </Section>
    );
}

/* ---------------- CARD ---------------- */

function ProjectCard({ project }) {
    return (
        <Box
            sx={{
                bgcolor: "#020617",
                border: "1px solid #1e293b",
                borderRadius: 3,
                overflow: "hidden",
                height: "100%",
                transition: "0.3s",
                "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 10px 30px rgba(17,102,139,0.18)"
                }
            }}
        >
            <Box
                component="img"
                src={project.img}
                alt={project.title}
                loading="lazy"
                sx={{
                    width: "100%",
                    height: 170,
                    objectFit: "cover"
                }}
            />

            <Box sx={{ p: 2.2 }}>
                <Typography sx={{ fontWeight: 700, color: "#e5e7eb", fontSize: 16 }}>
                    {project.title}
                </Typography>

                <Typography sx={{ color: "#94a3b8", fontSize: 13.5, mt: 0.7, lineHeight: 1.5 }}>
                    {project.desc}
                </Typography>

                <Box sx={{ mt: 1.4, display: "flex", gap: 0.7, flexWrap: "wrap" }}>
                    {project.tech.map((t) => (
                        <Chip
                            key={t}
                            label={t}
                            size="small"
                            sx={{
                                color: "#38bdf8",
                                bgcolor: "rgba(56,189,248,0.08)",
                                border: "1px solid rgba(56,189,248,0.3)"
                            }}
                        />
                    ))}
                </Box>
            </Box>
        </Box>
    );
}

/* ---------------- STYLES ---------------- */

const navStyle = (side) => ({
    position: "absolute",
    top: "50%",
    [side]: -18,
    transform: "translateY(-50%)",
    bgcolor: "rgba(2,6,23,0.9)",
    border: "1px solid rgba(56,189,248,0.6)",
    boxShadow: "0 0 18px rgba(56,189,248,0.35)",
    zIndex: 10,
    color: "#38bdf8",
    "&:hover": {
        bgcolor: "rgba(2,6,23,1)",
        boxShadow: "0 0 28px rgba(56,189,248,0.6)",
        borderColor: "#38bdf8",
        transform: "translateY(-50%) scale(1.08)"
    }
});
