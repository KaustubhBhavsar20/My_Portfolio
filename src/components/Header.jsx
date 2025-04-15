import React, { useEffect } from 'react';

const Header = () => {
  useEffect(() => {
    const header = document.querySelector("[data-header]");
    const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
    const navbarLinks = document.querySelectorAll("[data-nav-link]");
    const backTopBtn = document.querySelector("[data-back-to-top]");

    if (!header || !navToggleBtn || navbarLinks.length === 0) return;

    const toggleNavbar = () => {
      header.classList.toggle("nav-active");
      navToggleBtn.classList.toggle("active");
    };

    const closeNavbar = () => {
      header.classList.remove("nav-active");
      navToggleBtn.classList.remove("active");
    };

    const handleScroll = () => {
      if (window.scrollY >= 100) {
        header.classList.add("active");
        backTopBtn?.classList.add("active");
      } else {
        header.classList.remove("active");
        backTopBtn?.classList.remove("active");
      }
    };

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    navToggleBtn.addEventListener("click", toggleNavbar);
    navbarLinks.forEach(link => link.addEventListener("click", closeNavbar));
    window.addEventListener("scroll", handleScroll);
    backTopBtn.addEventListener("click", scrollToTop);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      navToggleBtn.removeEventListener("click", toggleNavbar);
      navbarLinks.forEach(link => link.removeEventListener("click", closeNavbar));
      backTopBtn.removeEventListener("click", scrollToTop);
    };
  }, []);

  return (
    <>
      <header className="header" data-header id="main-header">
        <div className="container">
          <a href="/" role="button">
            <h1 className="logo">Kaustubh Bhavsar</h1>
          </a>

          <button className="nav-toggle-btn" aria-label="Toggle Menu" data-nav-toggle-btn>
            <ion-icon name="menu-outline" className="menu-icon"></ion-icon>
            <ion-icon name="close-outline" className="close-icon"></ion-icon>
          </button>

          <nav className="navbar container">
            <ul className="navbar-list">
              <li><a href="#home" className="navbar-link" data-nav-link>Home</a></li>
              <li><a href="#about" className="navbar-link" data-nav-link>About</a></li>
              <li><a href="#portfolio" className="navbar-link" data-nav-link>Projects</a></li>
              <li><a href="#skills" className="navbar-link" data-nav-link>Skills</a></li>
              <li><a href="#experience" className="navbar-link" data-nav-link>Experience</a></li>
              <li><a href="#contact" className="navbar-link" data-nav-link>Contact</a></li>
              <li><a href="#achievement" className="navbar-link" data-nav-link>Achievements</a></li>
              <li><a href="https://drive.google.com/file/d/1pQwIETzrjRRnP41xVIGysUwHxP7Ylpjw/view?usp=sharing" target="_blank" className="btn btn-primary blue">Download CV</a></li>
            </ul>
          </nav>
          <button data-back-to-top className="back-to-top" >
            Go to Top
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
