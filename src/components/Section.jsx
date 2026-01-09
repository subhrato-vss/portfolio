import { Container, Typography, Divider } from "@mui/material";
import { motion } from "framer-motion";


export default function Section({ id, title, children }) {
    return (
        <Container id={id} sx={{ py: 10 }}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true, margin: "-80px" }}
            >
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>{title}</Typography>
                <Divider sx={{ mb: 4, borderColor: "#1e293b" }} />
                {children}
            </motion.div>
        </Container>
    );
}