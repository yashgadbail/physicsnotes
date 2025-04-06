import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import styles from "../styles/Home.module.css";
import { prefix } from "../utils/prefix";
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>PhysicsNotes - Home</title>
        <meta name="description" content="Comprehensive physics learning platform" />
        <meta name="copyright" content="© 2024 PhysicsNotes. All rights reserved." />
        <link rel="icon" href={`${prefix}/favicon.ico`} />
      </Head>

      <div className={styles.container}>
        <nav className={styles.nav}>
          <Link href="/physicsnotes" className={styles.navLink}>Home</Link>
          <Link href="/physicsnotes/notes" className={styles.navLink}>Notes</Link>
          <Link href="/physicsnotes/dpp" className={styles.navLink}>DPP</Link>
          <Link href="/physicsnotes/blogs" className={styles.navLink}>Blogs</Link>
          <Link href="/physicsnotes/formula-handbook" className={styles.navLink}>Formulas</Link>
          <Link href="/physicsnotes/exam-preparation" className={styles.navLink}>Exam Prep</Link>
          <Link href="/physicsnotes/login" className={styles.navLink}>Login</Link>
        </nav>
        <Navbar />
        <Hero />
        <Features />

        <footer className={styles.footer}>
          <p>
            PhysicsNotes - Your Complete Guide to Class 11 & 12 Physics
          </p>
        </footer>
      </div>
    </>
  );
};

export default Home;
