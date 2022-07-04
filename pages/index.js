import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import About from "./about";
{
  /* <div className={styles.container}> */
}

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Homepage</h1>
      <p>
        Lorem ipsum jfkdfj dfj djflkd jdskf jdkjf kjsfj skjf skjdjdifjei askdj
        kfjd{" "}
      </p>
      <p>
        Lorem ipsum jfkdfj dfj djflkd jdskf jdkjf kjsfj skjf skjdjdifjei askdj
        kfjd{" "}
      </p>
      <Link href="/ninjas">
        <a>See Ninja List</a>
      </Link>
    </div>
  );
}
