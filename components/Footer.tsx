import styles from "../styles/Footer.module.scss";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
const Footer = () => {
  return (
    <footer>
      <div className={styles.footerRow}>
        <p>Created and Designed by Daniel Coder</p>
      </div>
      <nav className={styles.footerRow}>
        <a>
          <GitHubIcon />
        </a>
        <a>
          <LinkedInIcon />
        </a>
      </nav>
    </footer>
  );
};
export default Footer;
