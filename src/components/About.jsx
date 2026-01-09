import { Typography } from "@mui/material";
import Section from "./Section";


export default function About() {
  return (
    <Section id="about" title="About Me">
      <Typography textAlign="justify" sx={{ color: "#94a3b8" }}>
        Full Stack Developer with 3 years of experience in designing, building, and deploying scalable web
        applications. Strong expertise in React.js, Node.js, Express.js, and MySQL with hands-on experience in RESTful API development, CRUD operations, JWT-based authentication, and role-based access
        control. Proven ability to create responsive user interfaces, integrate frontend and backend systems, optimize performance, and deliver production-ready solutions across CRM, education, travel, and payroll
        domains.
      </Typography>
    </Section>
  );
}