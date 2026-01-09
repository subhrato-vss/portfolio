// import { AppBar, Toolbar, Typography, Button } from "@mui/material";


// const sections = ["home", "about", "skills", "experience", "projects", "education", "contact"];


// export default function Navbar() {
//     const scrollTo = (id) => {
//         document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
//     };


//     return (
//         <AppBar position="fixed" sx={{ bgcolor: "rgba(2,6,23,0.8)", backdropFilter: "blur(10px)" }}>
//             <Toolbar>
//                 <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 600 }}>
//                     Subhrato Singh
//                 </Typography>
//                 {sections.map((s) => (
//                     <Button key={s} color="inherit" onClick={() => scrollTo(s)}>
//                         {s.toUpperCase()}
//                     </Button>
//                 ))}
//             </Toolbar>
//         </AppBar>
//     );
// }

import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, Box, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";

const sections = ["home", "about", "skills", "experience", "projects", "education", "contact"];

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      <AppBar position="fixed" sx={{ bgcolor: "rgba(2,6,23,0.8)", backdropFilter: "blur(10px)" }}>
        <Toolbar>
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              fontWeight: 700,
              fontSize: isMobile ? "1rem" : "1.25rem"
            }}
          >
            Subhrato Singh
          </Typography>

          {/* DESKTOP MENU */}
          {!isMobile && sections.map((s) => (
            <Button key={s} color="inherit" onClick={() => scrollTo(s)}>
              {s.toUpperCase()}
            </Button>
          ))}

          {/* MOBILE MENU ICON */}
          {isMobile && (
            <IconButton color="inherit" onClick={() => setOpen(true)}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 240, bgcolor: "#020617", height: "100%", pt: 3 }}>
          {sections.map((s) => (
            <Button
              key={s}
              fullWidth
              sx={{
                justifyContent: "flex-start",
                px: 3,
                py: 1.5,
                color: "#e5e7eb",
                fontWeight: 600
              }}
              onClick={() => scrollTo(s)}
            >
              {s.toUpperCase()}
            </Button>
          ))}
        </Box>
      </Drawer>
    </>
  );
}
