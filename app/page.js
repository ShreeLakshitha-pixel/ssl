"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
export default function Home() {
  return (
    <main>
 <nav className="navbar">
        <h2><abbr title="S shree Lakshitha">SSL</abbr></h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="home" className="hero">

        <div className="hero-content">
          <h1>Shree Lakshitha S</h1>

          <h3>Web Development & Cybersecurity Learner</h3>

          <p>
            Building websites, exploring cybersecurity,
            and continuously learning new technologies.
          </p>

          <a href="#projects">
            <button>View Work</button>
          </a>
          <a href="RESUME (1).pdf" target="_blank" rel="noopener noreferrer">
             <button>View Resume</button>
          </a>
        </div>

        <Image
          src="/pic.jpeg"
          alt="Profile"
          className="profile-img"
          width={300}
          height={300}
        />

      </section>


      <section id="about" className="section">

        <h2>About Me</h2>

        <p font="Arial"><em>
          I completed my schooling at CEOA MATRIC HR SEC SCHOOL, where I achieved 95% in Class 10 and 94.6% in Class 12. 

          I am currently pursuing a Bachelor of Engineering in Computer Science and Engineering (CSE) at KPR Institute of Engineering and Technology (KPRIET).
          
          I am passionate about Web Development and Cybersecurity, and I enjoy exploring new technologies and building practical projects that enhance my technical skills.
          
          I am continuously learning modern web technologies, including React and Next.js, while also developing my knowledge of cybersecurity concepts and best practices.
          
          My goal is to create secure, user-friendly digital solutions and grow as a skilled software professional through continuous learning and hands-on experience.

        </em></p>

      </section>

      <section id="skills" className="section">

        <h2>Skills</h2>

        <div className="card-container">

          <div className="card">HTML</div>
          <div className="card">CSS</div>
          <div className="card">JavaScript</div>
          <div className="card">Next.js</div>
          <div className="card">Node.js</div>

        </div>

      </section>
 <section id="projects" className="section">

  <h2>Projects</h2>

  <div className="card-container">

    <Link href="/smokevape" className="card-link">
      <div className="card">
        <h3>Smoke & Vape Detection</h3>
        <p>AI-based monitoring project.</p>
      </div>
    </Link>

    <Link href="/networksniffer" className="card-link">
      <div className="card">
        <h3>Network Sniffer</h3>
        <p>Packet analysis tool.</p>
      </div>
    </Link>

    <Link href="/securecoding" className="card-link">
      <div className="card">
        <h3>Secure Coding</h3>
        <p>Cybersecurity awareness platform.</p>
      </div>
    </Link>

  </div>

</section>

      <section id="contact" className="section">

        <h2>Contact</h2>
        <p>Email: lakshitha0506@gmail.com</p>

        <p>GitHub: github.com/ShreeLakshitha</p>

        <p>LinkedIn: linkedin.com/in/Shree lakshitha</p>

      </section>

      <footer>
        © 2026 Shree Lakshitha S
      </footer>

    </main>
  );
}