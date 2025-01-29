import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  Link,
  IconButton,
} from "@mui/material";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  SportsBasketball,
} from "@mui/icons-material";

const Footer: React.FC = () => {
  return (
    <Box sx={{ bgcolor: "#161b22", color: "white", p: 4, width: "98%" }}>
      <Grid container spacing={4}>
        {/* Brand Info */}
        <Grid item xs={12} sm={3}>
          <Typography variant="h6" fontWeight="bold">
            JobHuntly
          </Typography>
          <Typography variant="body2" sx={{ mt: 1, color: "gray" }}>
            Great platform for the job seeker that is passionate about startups.
            Find your dream job easier.
          </Typography>
        </Grid>

        {/* About Links */}
        <Grid item xs={12} sm={2}>
          <Typography fontWeight="bold">About</Typography>
          <Box sx={{ mt: 1 }}>
            {["Companies", "Pricing", "Terms", "Advice", "Privacy Policy"].map(
              (text) => (
                <Typography
                  key={text}
                  variant="body2"
                  sx={{ color: "gray", mt: 1 }}
                >
                  <Link href="#" color="inherit" underline="none">
                    {text}
                  </Link>
                </Typography>
              )
            )}
          </Box>
        </Grid>

        {/* Resources Links */}
        <Grid item xs={12} sm={2}>
          <Typography fontWeight="bold">Resources</Typography>
          <Box sx={{ mt: 1 }}>
            {["Help Docs", "Guide", "Updates", "Contact Us"].map((text) => (
              <Typography
                key={text}
                variant="body2"
                sx={{ color: "gray", mt: 1 }}
              >
                <Link href="#" color="inherit" underline="none">
                  {text}
                </Link>
              </Typography>
            ))}
          </Box>
        </Grid>

        {/* Subscription */}
        <Grid item xs={12} sm={5}>
          <Typography fontWeight="bold">Get job notifications</Typography>
          <Typography variant="body2" sx={{ mt: 1, color: "gray" }}>
            The latest job news, articles, sent to your inbox weekly.
          </Typography>
          <Box sx={{ display: "flex", mt: 2 }}>
            <TextField
              placeholder="Email Address"
              variant="outlined"
              size="small"
              sx={{ bgcolor: "white", flex: 1, borderRadius: 0 }}
            />
            <Button variant="contained" sx={{ bgcolor: "#5a49e9", ml: 1 }}>
              Subscribe
            </Button>
          </Box>
        </Grid>
      </Grid>

      <Box
        sx={{ mt: 4, borderTop: "1px solid gray", pt: 2, textAlign: "center" }}
      >
        <Typography variant="body2" sx={{ color: "gray" }}>
          2021 @ JobHuntly. All rights reserved.
        </Typography>

        {/* Social Icons */}
        <Box sx={{ mt: 2 }}>
          {[Facebook, Instagram, SportsBasketball, LinkedIn, Twitter].map(
            (Icon, index) => (
              <IconButton key={index} sx={{ color: "gray", mx: 0.5 }}>
                <Icon />
              </IconButton>
            )
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
