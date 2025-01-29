import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { ReactComponent as Logo } from "/src/assets/Logo.svg";

const Header: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>("");

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "#f7f9fc",
        color: "#000",
        width: "90%",
        margin: "0 auto",
        fontFamily: "Epilogue",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Logo Section */}
        <Box display="flex" alignItems="center">
          <IconButton edge="start" color="inherit" sx={{ mr: 1 }}>
            <Logo width={40} height={40} />
          </IconButton>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              fontSize: "24px",
              lineHeight: "36px",
              letterSpacing: "-1px",
            }}
          >
            JobHuntly
          </Typography>

          <Box
            display="flex"
            alignItems="center"
            gap={2}
            marginLeft={4}
            lineHeight={"25.6px"}
          >
            <Typography
              variant="body1"
              sx={{
                fontWeight: 500,
                width: "76px",
                cursor: "pointer",
                fontSize: "16px",
                color: activeLink === "Find Jobs" ? "#1976d2" : "inherit",
                borderBottom:
                  activeLink === "Find Jobs" ? "2px solid #1976d2" : "none",
                paddingBottom: "10px",
              }}
              onClick={() => handleLinkClick("Find Jobs")}
            >
              Find Jobs
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontWeight: 500,
                cursor: "pointer",
                fontSize: "16px",
                color:
                  activeLink === "Browse Companies" ? "#1976d2" : "inherit",
                borderBottom:
                  activeLink === "Browse Companies"
                    ? "2px solid #197699"
                    : "none",
                paddingBottom: "10px",
              }}
              onClick={() => handleLinkClick("Browse Companies")}
            >
              Browse Companies
            </Typography>
          </Box>
        </Box>

        {/* Actions */}
        <Box display="flex" alignItems="center">
          <Button
            color="inherit"
            sx={{
              textTransform: "none",
              width: "92px",
              height: "50px",
              borderRadius: "4px",
              padding: "12px 24px 12px 24px",
              gap: "10px",
            }}
          >
            Login
          </Button>
          <Box
            sx={{
              border: "1px solid  #D6DDEB",
              width: "48px",
              transform: "rotate(-90deg)",
            }}
          ></Box>
          <Button
            variant="contained"
            color="primary"
            sx={{
              textTransform: "none",
              fontWeight: 600,
              boxShadow: "none",
              width: "108px",
              height: "50px",
              gap: "10px",
              padding: "12px 24px 12px 24px",
            }}
          >
            Sign Up
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
