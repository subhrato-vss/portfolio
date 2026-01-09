// import { Container, Typography, Divider } from "@mui/material";
// import { motion } from "framer-motion";

// export default function Section({ id, title, children, isMotion = true }) {
//     const MotionWrapper = isMotion ? motion.div : "div";

//     return (
//         <Container id={id} sx={{ py: 10 }}>
//             <MotionWrapper
//                 {...(isMotion && {
//                     initial: { opacity: 0, y: 50 },
//                     whileInView: { opacity: 1, y: 0 },
//                     transition: { duration: 0.7, ease: "easeOut" },
//                     viewport: { once: true, margin: "-80px" }
//                 })}
//             >
//                 <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
//                     {title}
//                 </Typography>

//                 <Divider sx={{ mb: 4, borderColor: "#1e293b" }} />

//                 {children}
//             </MotionWrapper>
//         </Container>
//     );
// }

import { Container, Typography, Divider } from "@mui/material";
import { motion } from "framer-motion";

export default function Section({ id, title, children, isMotion = true }) {
    const MotionWrapper = isMotion ? motion.div : "div";

    return (
        <Container id={id} sx={{ py: 10 }}>
          <MotionWrapper
              {...(isMotion && {
                  initial: { opacity: 0, y: 24, filter: "blur(4px)" },
                  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
                  transition: {
                      duration: 0.9,
                      ease: [0.22, 1, 0.36, 1] // premium easeOut
                  },
                  viewport: { once: true, amount: 0.2 }
              })}
          >
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
                  {title}
              </Typography>

              <Divider sx={{ mb: 4, borderColor: "#1e293b" }} />

              {children}
          </MotionWrapper>
      </Container>
  );
}
