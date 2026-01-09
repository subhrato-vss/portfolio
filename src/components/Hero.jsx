import { Container, Typography, Box, Button, Grid, Chip, Stack, useTheme, useMediaQuery } from "@mui/material";
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import { useEffect, useState, useMemo } from "react";
import Profile from "../assets/profile-photo.png";

/* ---------------- Data ---------------- */

const titles = [
    "Full Stack Developer",
    "React & Node.js Specialist",
    "Scalable Web App Builder",
    "Problem Solver",
    "MERN Stack Engineer"
];

const techStack = ["React", "Node.js", "MySQL", "Express", "JWT", "TanStack Query"];

/* ---------------- Component ---------------- */

export default function Hero() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % titles.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    /* -------- Parallax background -------- */
    const { scrollY } = useScroll();
    const yGlow = useTransform(scrollY, [0, 300], [0, 120]);

    /* -------- Tilt effect -------- */
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useTransform(y, [-50, 50], [10, -10]);
    const rotateY = useTransform(x, [-50, 50], [-10, 10]);

    const handleMouseMove = (e) => {
        if (isMobile) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const posX = e.clientX - rect.left - rect.width / 2;
        const posY = e.clientY - rect.top - rect.height / 2;
        x.set(posX / 10);
        y.set(posY / 10);
    };

    const handleMouseLeave = () => {
        if (isMobile) return;
        x.set(0);
        y.set(0);
    };

    return (
        <Box
            id="home"
            sx={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                pt: { xs: 12, md: 10 },
                position: "relative",
                overflow: "hidden"
            }}
        >
            <Particles isMobile={isMobile} />

            {/* BACKGROUND PARALLAX GLOW */}
            <motion.div style={{ y: yGlow }}>
                <Box
                    sx={{
                        position: "absolute",
                        width: { xs: 260, md: 420 },
                        height: { xs: 260, md: 420 },
                        bgcolor: "#38bdf8",
                        filter: { xs: "blur(110px)", md: "blur(160px)" },
                        opacity: 0.15,
                        top: "5%",
                        left: "5%"
                    }}
                />
            </motion.div>

            <Container>
                <Grid container spacing={4} alignItems="center">

                    {/* LEFT CONTENT */}
                    <Grid item xs={12} md={7} textAlign={{ xs: "center", md: "left" }}>
                        <motion.div
                            initial={{ opacity: 0, y: 60 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <Typography variant="h3" sx={{ fontWeight: 800 }}>
                                Hi, I'm{" "}
                                <Box
                                    component="span"
                                    sx={{
                                        background: "linear-gradient(90deg,#38bdf8,#818cf8)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent"
                                    }}
                                >
                                    Subhrato Singh
                                </Box>
                            </Typography>

                            {/* Changing role text */}
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <Typography variant="h5" sx={{ mt: 2, color: "#cbd5f5" }}>
                                    {titles[index]}
                                </Typography>
                            </motion.div>

                            <Typography sx={{ mt: 2, maxWidth: 600, mx: { xs: "auto", md: 0 }, color: "#94a3b8" }}>
                                I design and develop secure, scalable, and high-performance web applications using modern technologies.
                            </Typography>

                            {/* TECH BADGES */}
                            <Stack
                                direction="row"
                                justifyContent={{ xs: "center", md: "flex-start" }}
                                flexWrap="wrap"
                                gap={1.2}
                                sx={{ mt: 3 }}
                            >
                                {techStack.map((tech, i) => (
                                    <motion.div
                                        key={tech}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 + i * 0.1 }}
                                    >
                                        <Chip
                                            label={tech}
                                            sx={{
                                                color: "#e5e7eb",
                                                fontWeight: 500,
                                                background:
                                                    "linear-gradient(135deg, rgba(56,189,248,0.18), rgba(56,189,248,0.05))",
                                                border: "1px solid rgba(56,189,248,0.45)",
                                                boxShadow: "0 0 12px rgba(56,189,248,0.3)"
                                            }}
                                        />
                                    </motion.div>
                                ))}
                            </Stack>

                            {/* BUTTONS */}
                            <Box sx={{ mt: 4, display: "flex", justifyContent: { xs: "center", md: "flex-start" }, gap: 2, flexWrap: "wrap" }}>
                                <Button variant="contained" sx={{ px: 3, py: 1.2 }} href="#projects">
                                    View Projects
                                </Button>
                                <Button variant="outlined" color="inherit" sx={{ px: 3, py: 1.2 }} href="#contact">
                                    Contact Me
                                </Button>
                            </Box>
                        </motion.div>
                    </Grid>

                    {/* RIGHT IMAGE */}
                    <Grid item xs={12} md={5} display="flex" justifyContent="center">
                        {/* <Grid item xs={12} md={5}> */}
                        <Box
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            // sx={{ display: "flex", justifyContent: "center", mt: { xs: 6, md: 0 } }}
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                mt: { xs: 6, md: 0 }
                            }}
                        >
                            <motion.div style={!isMobile ? { rotateX, rotateY, perspective: 1000 } : {}}>
                                <Box
                                    sx={{
                                        position: "relative",
                                        width: { xs: 240, sm: 280, md: 320 },
                                        height: { xs: 330, sm: 380, md: 430 },
                                        display: "flex",
                                        alignItems: "flex-end",
                                        justifyContent: "center"
                                    }}
                                >

                                    {/* SLOW MOVING LIGHT */}
                                    <motion.div
                                        animate={{ x: [0, 40, -40, 0], y: [0, 20, -20, 0] }}
                                        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
                                        style={{
                                            position: "absolute",
                                            width: isMobile ? 200 : 280,
                                            height: isMobile ? 200 : 280,
                                            borderRadius: "50%",
                                            background: "radial-gradient(circle, rgba(56,189,248,0.35), transparent 70%)",
                                            filter: isMobile ? "blur(40px)" : "blur(55px)",
                                            top: "12%",
                                            zIndex: 0
                                        }}
                                    />

                                    {/* SUBTLE GRADIENT RING */}
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
                                        style={{
                                            position: "absolute",
                                            width: isMobile ? 180 : 260,
                                            height: isMobile ? 180 : 260,
                                            borderRadius: "50%",
                                            border: "1px solid rgba(129,140,248,0.35)",
                                            boxShadow: "0 0 40px rgba(56,189,248,0.25)",
                                            top: "14%",
                                            zIndex: 0
                                        }}
                                    />

                                    {/* STUDIO RIM LIGHT */}
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            width: "70%",
                                            height: "90%",
                                            background:
                                                "linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)",
                                            filter: "blur(18px)",
                                            right: "-15%",
                                            bottom: "0%",
                                            zIndex: 1,
                                            pointerEvents: "none"
                                        }}
                                    />

                                    {/* IMAGE */}
                                    <Box
                                        component="img"
                                        src={Profile}
                                        alt="Subhrato Singh"
                                        loading="lazy"
                                        sx={{
                                            height: "100%",
                                            maxHeight: isMobile ? 330 : 430,
                                            objectFit: "contain",
                                            position: "relative",
                                            zIndex: 2,
                                            filter: "drop-shadow(0 28px 45px rgba(0,0,0,0.6))"
                                        }}
                                    />

                                    {/* FLOATING TECH ICONS */}
                                    <FloatingIcon text="⚛️" top="5%" left="-10%" />
                                    <FloatingIcon text="🟢" top="18%" right="-12%" />
                                    <FloatingIcon text="🛢️" bottom="18%" left="-6%" />
                                    <FloatingIcon text="⚡" bottom="6%" right="-4%" />

                                </Box>
                            </motion.div>
                        </Box>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
}

/* ---------------- Floating Icons ---------------- */

function FloatingIcon({ text, ...style }) {
    return (
        <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 3 + Math.random() * 2 }}
            style={{
                position: "absolute",
                fontSize: 28,
                filter: "drop-shadow(0 0 10px rgba(56,189,248,0.6))",
                ...style
            }}
        >
            {text}
        </motion.div>
    );
}

/* ---------------- Particles ---------------- */

function Particles({ isMobile }) {
    const particles = useMemo(
        () =>
            Array.from({ length: isMobile ? 8 : 18 }).map(() => ({
                size: Math.random() * 6 + 4,
                left: Math.random() * 100,
                top: Math.random() * 100,
                duration: Math.random() * 12 + 10,
                delay: Math.random() * 5
            })),
        [isMobile]
    );

    return (
        <>
            {particles.map((p, i) => (
                <motion.span
                    key={i}
                    initial={{ opacity: 0.2, y: 0 }}
                    animate={{ opacity: [0.2, 0.6, 0.2], y: [0, -60, 0] }}
                    transition={{
                        duration: p.duration,
                        delay: p.delay,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    style={{
                        position: "absolute",
                        width: p.size,
                        height: p.size,
                        borderRadius: "50%",
                        left: `${p.left}%`,
                        top: `${p.top}%`,
                        background: "rgba(56,189,248,0.5)",
                        filter: isMobile ? "blur(1px)" : "blur(2px)",
                        zIndex: 0
                    }}
                />
            ))}
        </>
    );
}
