// import Head from "next/head";
import Image from "next/image";
import logo from "@/image/logo.png";
import "./navbar.css";
import Link from "next/link";
function Navbar() {
  return (
    <nav className="top-nav-container">
      <div className="logo-container">
        <p>
          {" "}
          <Image src={logo} alt="logo" height={40} width={40} />
          <span>M</span>umair
        </p>
      </div>
      <div className="navbar-container">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <Link href="/#about">About Me</Link>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <button className="btn primary"> Download CV</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
