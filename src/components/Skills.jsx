import { Box, Chip, Typography } from "@mui/material";
import Section from "./Section";


const skills = {
    Frontend: ["React", "Next.js", "JavaScript", "HTML", "CSS", "Material UI", "Tailwind"],
    Backend: ["Node.js", "Express", "JWT", "RBAC"],
    Database: ["MySQL", "Sequelize", "Indexing"],
    Tools: ["Git", "GitHub", "Postman", "Deployment"]
};


export default function Skills() {
    return (
        <Section id="skills" title="Technical Skills" isMotion={false}>
            {Object.keys(skills).map((group) => (
                <Box key={group} sx={{ mb: 3 }}>
                    <Typography sx={{ fontWeight: 600, mb: 1 }}>{group}</Typography>
                    <Box color="white" sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                        {skills[group].map((s) => (
                            <Chip
                                key={s}
                                label={s}
                                sx={{
                                    color: "#e5e7eb",
                                    fontWeight: 500,
                                    px: 1,

                                    background: "linear-gradient(135deg, rgba(56,189,248,0.15), rgba(56,189,248,0.05))",
                                    border: "1px solid rgba(56,189,248,0.4)",
                                    boxShadow: "0 0 10px rgba(56,189,248,0.25)",

                                    transition: "all 0.3s ease",

                                    "&:hover": {
                                        transform: "translateY(-2px)",
                                        boxShadow: "0 0 18px rgba(56,189,248,0.45)",
                                        background: "linear-gradient(135deg, rgba(56,189,248,0.25), rgba(56,189,248,0.08))",
                                    }
                                }}
                            />

                        ))}
                    </Box>
                </Box>
            ))}
        </Section>
    );
}