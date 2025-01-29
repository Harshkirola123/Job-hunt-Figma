// import React from "react";
// import Header from "../components/Header";
// import { Outlet } from "react-router-dom";
// import { Box } from "@mui/material";
// import Footer from "../components/Footer";

// function Base() {
//   return (
//     <Box sx={{ width: "100%", height: "100vh" }}>
//       <Header />
//       <Outlet />
//       <Footer />
//     </Box>
//   );
// }

// export default Base;
import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Footer from "../components/Footer";

function Base() {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        overflowX: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Header />
      <Box sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}

export default Base;
