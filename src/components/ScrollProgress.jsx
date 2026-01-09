import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
    const { scrollYProgress } = useScroll();

    return (
        <motion.div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                height: 3,
                background: "linear-gradient(90deg,#38bdf8,#818cf8)",
                transformOrigin: "0%",
                scaleX: scrollYProgress,
                zIndex: 2000
            }}
        />
    );
}
