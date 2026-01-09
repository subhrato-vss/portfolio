import { Box, Chip, Typography, Card, CardContent, Button, Stack } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import PhoneIcon from "@mui/icons-material/Phone";
import DownloadIcon from "@mui/icons-material/Download";
import { motion } from "framer-motion";

import Resume from "../assets/Subhrato_Singh_resume.pdf";
import Section from "./Section";

const MotionChip = motion(Chip);
const MotionCard = motion(Card);

export default function Contact() {
    return (
        <Section id="contact" title="Contact">

            {/* FLOATING CTA CARD */}
            <MotionCard
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                sx={{
                    bgcolor: "#020617",
                    border: "1px solid #1e293b",
                    maxWidth: 650,
                    mx: "auto",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.4)"
                }}
            >
                <CardContent sx={{ textAlign: "center" }}>
                    <Typography variant="h5" sx={{ color: "#e5e7eb", fontWeight: 700 }}>
                        Let's build something great 🚀
                    </Typography>

                    <Typography sx={{ color: "#94a3b8", mt: 1, mb: 3 }}>
                        Open to full-time roles and freelance opportunities.
                    </Typography>

                    {/* CONTACT CHIPS */}
                    <Stack direction="row" justifyContent="center" flexWrap="wrap" gap={2}>

                        <ChipBox icon={<EmailIcon />} label="subhratosingh@gmail.com" />
                        <ChipBox icon={<PhoneIcon />} label="+91 81988 50602" />

                        <SocialChip
                            icon={<LinkedInIcon />}
                            label="LinkedIn"
                            link="https://www.linkedin.com/in/subhrato-singh/"
                        />

                        <SocialChip
                            icon={<GitHubIcon />}
                            label="GitHub"
                            link="https://github.com/subhrato-vss"
                        />

                    </Stack>

                    {/* DOWNLOAD RESUME */}
                    <Box sx={{ mt: 4 }}>
                        <Button
                            variant="contained"
                            startIcon={<DownloadIcon />}
                            href={Resume}
                            download
                            sx={{
                                bgcolor: "#38bdf8",
                                color: "#020617",
                                fontWeight: 600,
                                px: 4,
                                py: 1.2,
                                borderRadius: "10px",
                                "&:hover": {
                                    bgcolor: "#0ea5e9"
                                }
                            }}
                        >
                            Download Resume
                        </Button>
                    </Box>
                </CardContent>
            </MotionCard>
        </Section>
    );
}

/* ---------------- Small Reusable Components ---------------- */

function ChipBox({ icon, label }) {
    return (
        <Chip
            icon={icon}
            label={label}
            sx={{
                bgcolor: "#020617",
                color: "#e5e7eb",
                border: "1px solid #1e293b",
                fontWeight: 500
            }}
        />
    );
}

function SocialChip({ icon, label, link }) {
    return (
        <MotionChip
            whileHover={{ scale: 1.08, y: -3 }}
            transition={{ type: "spring", stiffness: 300 }}
            icon={icon}
            label={label}
            component="a"
            href={link}
            target="_blank"
            clickable
            sx={{
                bgcolor: "#020617",
                color: "#e5e7eb",
                border: "1px solid #1e293b",
                fontWeight: 500,
                "&:hover": {
                    borderColor: "#38bdf8",
                    color: "#38bdf8"
                }
            }}
        />
    );
}
