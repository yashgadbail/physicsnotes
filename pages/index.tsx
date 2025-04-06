import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import styles from "../styles/Home.module.css";
import { prefix } from "../utils/prefix";

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
