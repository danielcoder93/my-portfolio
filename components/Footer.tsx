import { Box, Button, Typography } from "@mui/material";
import styles from "../styles/Footer.module.scss";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";
import black from "../public/black.png";
import Image from "next/image";
const Footer = () => {
  return (
    <footer>
      <div className={styles.footerRow}>
      <div className={styles.logo}>
            <Image src={black} alt="LOGO" width="75" height="75" />
          </div>
      <div className={styles.contactContainer}>
      <p>Contact us <br/>
       Dan@createdrevolution.com</p>
        
      </div>
      <div className={styles.contactContainer}>
      <p>Created Revolution <br/> New York, NY </p>
      </div>
      </div>
    </footer>
  );
};
export default Footer;
