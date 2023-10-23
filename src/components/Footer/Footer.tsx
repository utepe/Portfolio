import { Fragment } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import TwoItemGridCard from "../TwoItemGridCard/TwoItemGridCard";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from '@mui/icons-material/Email';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      {/* TODO change the link */}
      <Link color="inherit" href="https://mui.com/">
        utepe.github.io
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

interface FooterProps {
  title: string;
}

const Footer = ({ title }: FooterProps) => {
  return (
    <Box
      component="footer"
      sx={{ bgcolor: "background.paper", py: "10px", marginTop: "10px" }}
    >
      <Container>
        <TwoItemGridCard
          leftItem={
            <Fragment>
              <Typography variant="h6" gutterBottom>
                {title}
              </Typography>
              <Copyright />
            </Fragment>
          }
          rightItem={
            <Fragment>
              <IconButton
                aria-label="LinkedIn"
                size="large"
                href="https://www.linkedin.com/in/uygur-tepe/"
                target="_blank"
              >
                <LinkedInIcon fontSize="inherit" />
              </IconButton>
              <IconButton
                aria-label="GitHub"
                size="large"
                href="https://github.com/utepe"
                target="_blank"
              >
                <GitHubIcon fontSize="inherit" />
              </IconButton>
              <IconButton
                aria-label="Email"
                size="large"
                href="mailto:uygurtepe@protonmail.com"
              >
                <EmailIcon fontSize="inherit" />
              </IconButton>
            </Fragment>
          }
        />
      </Container>
    </Box>
  );
};

export default Footer;
