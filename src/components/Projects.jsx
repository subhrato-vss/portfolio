import { Card, CardContent, Typography } from "@mui/material";
import Section from "./Section";

const projects = [
    "CRM System – Dubai",
    "University Website",
    "Academics & Conduct Modules",
    "B2B Travel Portal",
    "Payslip Management System"
];

export default function Projects() {
    return (
        <Section id="projects" title="Projects">
            {projects.map((p) => (
                <Card
                    key={p}
                    sx={{
                        mb: 3,
                        bgcolor: "#020617",
                        border: "1px solid #1e293b",
                        transition: "0.3s",
                        "&:hover": {
                            borderColor: "#38bdf8",
                            transform: "translateY(-3px)"
                        }
                    }}
                >
                    <CardContent>
                        <Typography variant="h6" sx={{ color: "#e5e7eb", fontWeight: 600 }}>
                            {p}
                        </Typography>

                        <Typography sx={{ color: "#94a3b8", mt: 0.5 }}>
                            Professional enterprise-level project
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </Section>
    );
}
