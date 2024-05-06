"use client";

import { useEffect, useRef } from "react";

export default function Header() {
  const refNav = useRef(null);
  useEffect(() => {
    if (window instanceof Window) {
      const handleScroll = () => {
        const scrollTop = window.scrollY;
        if (scrollTop > 80) {
          refNav.current.classList.add("bg-background", "shadow-nav");
          refNav.current.classList.remove("bg-transparent");
        } else {
          refNav.current.classList.remove("bg-background", "shadow-nav");
          refNav.current.classList.add("bg-transparent");
        }
      };

      if (window instanceof Window) {
        window.addEventListener("scroll", handleScroll);
      }

      return () => {
        if (window instanceof Window) {
          window.removeEventListener("scroll", handleScroll);
        }
      };
    }
  }, []);

  return (
    <header ref={refNav} className="fixed top-0 left-0 w-full py-[1.5rem] px-[10%] bg-transparent flex items-center z-[100] transition duration-[0.5s] justify-items-stretch">
      <a href="#" className="text-[1.5rem] font-[700] cursor-default mr-auto uppercase px-[2rem] py-[0.2rem] bg-transparent shadow-custom rounded-md hover:text-[#666] hover:inner-shadow">
        MI<span className="text-tertiary">DEV</span>
      </a>
      <nav className="flex justify-center w-full">
        <a href="" className="nav-a">
          Home
        </a>
        <a href="" className="nav-a">
          About
        </a>
        <a href="" className="nav-a">
          Services
        </a>
        <a href="" className="nav-a">
          Portfolio
        </a>
        <a href="" className="nav-a">
          testimonial
        </a>
      </nav>
    </header>
  );
}
