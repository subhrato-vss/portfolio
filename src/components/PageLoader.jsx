import { motion } from "framer-motion";
import { Box, CircularProgress, Typography } from "@mui/material";

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

export default PageLoader;