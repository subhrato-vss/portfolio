import { Typography } from "@mui/material";
import Section from "./Section";


export default function Education() {
    return (
        <Section id="education" title="Education" isMotion={false}>
            <Typography>MCA – Amritsar Group of Colleges (2022–2024)</Typography>
            <Typography sx={{ mt: 1 }}>BCA – DAV College, Amritsar (2015–2018)</Typography>
            <Typography sx={{ mt: 1 }}>Certification – Full Stack Development (VMM Education)</Typography>
        </Section>
    );
}