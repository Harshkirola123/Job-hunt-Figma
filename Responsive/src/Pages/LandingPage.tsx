import {
  Box,
  Button,
  Container,
  Grid,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { ReactComponent as Image1 } from "../assets/BlueLine.svg";
import { ReactComponent as Search } from "../assets/search.svg";
import { ReactComponent as LocationIcon } from "../assets/location.svg";
import { ReactComponent as CompanyIcon } from "../assets/Featured Company.svg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import DesignServicesOutlinedIcon from "@mui/icons-material/DesignServicesOutlined";
import JobCategoryCard from "../components/Card";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";

const LandingPage: React.FC = () => {
  return (
    <Paper
      elevation={0}
      sx={{
        backgroundColor: "#f7f9fc",
        color: "#000",
        width: "85%",
        margin: "6.25rem auto",
        padding: "2rem",
      }}
    >
      <Box
        sx={{
          width: "33.3125rem",
          fontWeight: 600,
          fontSize: "4.5rem",
          lineHeight: "4.95rem",
          color: "#25324B",
          fontFamily: "Clash Display",
        }}
      >
        Discover
        <br /> more than{" "}
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: "4.5rem",
            lineHeight: "4.95rem",
            color: "#26A4FF",
          }}
        >
          5000+ Jobs
        </Typography>
      </Box>
      <Image1 />
      <Box>
        <Typography
          variant="body1"
          sx={{
            fontWeight: 400,
            fontFamily: "Epilogue",
            lineHeight: "2.25rem",
            fontSize: "1.4375rem",
            opacity: "70%",
            color: "#515B6F",
          }}
        >
          Great platform for the job seeker that searching for new career
          heights and passionate about startups.
        </Typography>
        <Container
          sx={{
            backgroundColor: "#fff",
            // boxShadow: "0px 79px 128px 0px #C0C0C017",
            marginTop: "2rem",
            marginLeft: "0",
            borderRadius: "0.5rem",
            padding: "1rem",
          }}
        >
          {/* Flexbox Container */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between", // Ensures horizontal alignment
              padding: "1rem 0",
              width: "53.35rem",
            }}
          >
            {/* Search Bar */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flex: 1,
                maxWidth: "18rem",
                height: "3.5625rem",
                paddingLeft: "0.75rem",
                border: "none",
              }}
            >
              <Search style={{ marginRight: "0.5rem" }} />
              <TextField
                placeholder="Job title or keyword"
                variant="standard"
                fullWidth
                InputProps={{ disableUnderline: true }}
                sx={{ borderBottom: "1px solid #ccc", paddingBottom: "0.8rem" }}
              />
            </Box>

            {/* Location Selector */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flex: 1,
                maxWidth: "20rem",
                height: "3.5625rem",
                padding: "0 0.75rem",
                gap: "0.5rem",
                border: "none",
              }}
            >
              <LocationIcon />
              <TextField
                select
                variant="standard"
                fullWidth
                defaultValue="Florence, Italy"
                InputProps={{
                  disableUnderline: true,
                  style: {
                    fontSize: "1rem",
                    borderBottom: "1px solid #ccc",
                    paddingBottom: "0.7rem",
                  },
                }}
              >
                <MenuItem value="Florence, Italy">Florence, Italy</MenuItem>
                <MenuItem value="Paris, France">Paris, France</MenuItem>
                <MenuItem value="Berlin, Germany">Berlin, Germany</MenuItem>
                <MenuItem value="New York, USA">New York, USA</MenuItem>
                <MenuItem value="Tokyo, Japan">Tokyo, Japan</MenuItem>
                <MenuItem value="Sydney, Australia">Sydney, Australia</MenuItem>
              </TextField>
            </Box>

            {/* Search Button */}
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#4640DE",
                color: "#fff",
                flex: "0 0 auto",
                height: "3.5625rem",
                padding: "0.875rem 1.5rem",
                fontWeight: "700",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#1565c0",
                },
                fontSize: "1.2rem",
                borderRadius: "0.5rem",
              }}
            >
              Search my job
            </Button>
          </Box>
          <Typography
            sx={{
              margin: "0.625rem 0",
              fontWeight: 400,
              fontSize: "1rem",
              lineHeight: "1.5rem",
              color: "#202430",
              opacity: "80%",
            }}
          >
            Popular : UI Designer, UX Researcher, Android, Admin
          </Typography>
        </Container>
        <Box
          sx={{
            width: "90rem",
            height: "12.313rem",
            paddingTop: "3rem",
            paddingLeft: "1rem",
            gap: "2rem",
          }}
        >
          <Typography
            sx={{
              margin: "0.625rem 0",
              fontWeight: 400,
              fontSize: "1.125rem",
              lineHeight: "1.8rem",
              color: "#202430",
              opacity: "50%",
              marginBottom: "3rem",
            }}
          >
            Companies we helped grow
          </Typography>
          <CompanyIcon />
        </Box>
      </Box>
      <Container sx={{ marginLeft: 0 }}>
        <Box
          sx={{
            display: "flex", // Ensure items are in a row
            // alignItems: "center", // Vertically align the text and button
            justifyContent: "space-between", // Add space between the text and button
          }}
        >
          <Typography
            sx={{
              fontWeight: "600",
              fontSize: "3rem",
              lineHeight: "3.4rem",
              color: "#25324B",
            }}
          >
            Explore by <span style={{ color: "#26A4FF" }}>category</span>
          </Typography>

          {/* Show All Jobs Section */}
          <Button
            sx={{
              display: "flex",
              width: "12rem",
              height: "3.9rem",
              alignItems: "center",
              textTransform: "none", // Ensures text stays as is
              fontWeight: "600",
              fontSize: "1rem",
              color: "#4640DE", // Button text color
              borderRadius: "0.5rem",
              padding: "0.5rem 1rem",
              "&:hover": {
                backgroundColor: "#26A4FF",
                color: "#fff", // Changes text color on hover
                borderColor: "#26A4FF",
              },
            }}
          >
            Show All Jobs
            <ArrowForwardIcon sx={{ marginLeft: "0.5rem" }} />{" "}
            {/* Right arrow */}
          </Button>
        </Box>
        {/* <Box sx={{ padding: 2 }}>
          <JobCategoryCard name={"Design"} info={"235"}>
            <DesignServicesOutlinedIcon fontSize="large" />
          </JobCategoryCard>
          <JobCategoryCard name={"Sales"} info={"756"}>
            <DesignServicesOutlinedIcon fontSize="large" />
          </JobCategoryCard>
          <JobCategoryCard name={"Marketing"} info={"140"}>
            <DesignServicesOutlinedIcon fontSize="large" />
          </JobCategoryCard>
          <JobCategoryCard name={"Finance"} info={"325"}>
            <PaymentsOutlinedIcon fontSize="large" />
          </JobCategoryCard>
          <JobCategoryCard name={"Technology"} info={"436"}>
            <DesignServicesOutlinedIcon fontSize="large" />
          </JobCategoryCard>
          <JobCategoryCard name={"Engineering"} info={"542"}>
            <DesignServicesOutlinedIcon fontSize="large" />
          </JobCategoryCard>
          <JobCategoryCard name={"Business"} info={"211"}>
            <DesignServicesOutlinedIcon fontSize="large" />
          </JobCategoryCard>
          <JobCategoryCard name={"HumanResourse"} info={"346"}>
            <GroupsOutlinedIcon fontSize="large" />
          </JobCategoryCard>
        </Box> */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 4,
            padding: 2,
          }}
        >
          {[
            {
              name: "Design",
              info: "235",
              icon: <DesignServicesOutlinedIcon fontSize="large" />,
            },
            {
              name: "Sales",
              info: "756",
              icon: <DesignServicesOutlinedIcon fontSize="large" />,
            },
            {
              name: "Marketing",
              info: "140",
              icon: <DesignServicesOutlinedIcon fontSize="large" />,
            },
            {
              name: "Finance",
              info: "325",
              icon: <PaymentsOutlinedIcon fontSize="large" />,
            },
            {
              name: "Technology",
              info: "436",
              icon: <DesignServicesOutlinedIcon fontSize="large" />,
            },
            {
              name: "Engineering",
              info: "542",
              icon: <DesignServicesOutlinedIcon fontSize="large" />,
            },
            {
              name: "Business",
              info: "211",
              icon: <DesignServicesOutlinedIcon fontSize="large" />,
            },
            {
              name: "Human Resource",
              info: "346",
              icon: <GroupsOutlinedIcon fontSize="large" />,
            },
          ].map((job, index) => (
            <Box
              key={index}
              sx={{
                flex: "1 1 calc(25% - 32px)", // 25% width minus gap
                minWidth: "250px", // Ensures responsiveness
                display: "flex",
                justifyContent: "center",
              }}
            >
              <JobCategoryCard name={job.name} info={job.info}>
                {job.icon}
              </JobCategoryCard>
            </Box>
          ))}
        </Box>
      </Container>
    </Paper>
  );
};

export default LandingPage;
