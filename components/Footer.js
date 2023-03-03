import Link from "next/link";
import styles from "@/styles/Footer.module.css";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Copyright &copy; DJ Event 2023</p>
      <p>
        <Link href="/about">Anout Project</Link>
      </p>{" "}
    </footer>
  );
}
