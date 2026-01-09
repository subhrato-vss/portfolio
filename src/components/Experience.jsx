import { Card, CardContent, Typography } from "@mui/material";
import Section from "./Section";

const data = [
  { role: "Software Engineer", company: "Veenus Software Solutions", period: "Jun 2024 – Present" },
  { role: "Assistant Software Developer", company: "Veenus Software Solutions", period: "Jul 2021 – Jul 2022" },
  { role: "Intern", company: "VMM Education", period: "Jan 2021 – Jun 2021" }
];

export default function Experience() {
  return (
    <Section id="experience" title="Experience" isMotion={false}>
      {data.map((e, i) => (
        <Card
          key={i}
          sx={{
            mb: 3,
            bgcolor: "#020617",
            border: "1px solid #1e293b"
          }}
        >
          <CardContent>
            <Typography variant="h6" sx={{ color: "#e5e7eb", fontWeight: 600 }}>
              {e.role}
            </Typography>

            <Typography sx={{ color: "#38bdf8", fontWeight: 500 }}>
              {e.company}
            </Typography>

            <Typography sx={{ color: "#94a3b8" }}>
              {e.period}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Section>
  );
}
