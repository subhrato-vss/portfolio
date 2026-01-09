import { Box } from "@mui/material";


export default function Footer() {
    return (
        <Box sx={{ textAlign: "center", py: 4, color: "#64748b" }}>
            © {new Date().getFullYear()} Subhrato Singh
        </Box>
    );
}