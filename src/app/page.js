"use client";

import styles from "./page.module.css";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import Footer from "./components/footer/footer";
import AboutMe from "./components/aboutMe/aboutMe";
import Service from "./components/services/service";
import Project from "./components/projects/projects";
import ContactUs from "./components/contactUs/contactUs";
import Testimonials from "./components/testimonials/testimonials";
export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Navbar />
        <Hero />
        <AboutMe />
        <Service />
        <Project />
        <Testimonials/>
        <ContactUs/>
      </main>
      <Footer />
    </>
  );
}
