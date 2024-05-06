"use client";

import { AppContext } from "@/app/page";
import { useContext, useEffect, useRef, useState } from "react";

export default function Header() {
  const { secRefs } = useContext(AppContext);
  const [navItem, setNavItem] = useState([
    {
      name: "Home",
      link: "#Home",
    },
    {
      name: "About",
      link: "#About",
    },
    {
      name: "Services",
      link: "#Services",
    },
    {
      name: "Portfolio",
      link: "#Portfolio",
    },
    {
      name: "Testimonial",
      link: "#Testimonial",
    },
  ]);

  const refNav = useRef(null);
  const navLinks = useRef([]);

  useEffect(() => {
    if (window instanceof Window) {
      const handleScroll = () => {
        const scrollTop = window.scrollY;

        // Scroll active navbar
        secRefs.current.forEach((ref) => {
          let offset = ref.offsetTop - 150;
          let height = ref.offsetHeight;
          let id = ref.getAttribute("id");

          if (scrollTop >= offset && scrollTop < offset + height) {
            navLinks.current.forEach((links) => {
              links.classList.remove("after:scale-x-50", "text-tertiary");
              document.querySelector("header nav a[href*=" + id + "]").classList.add("after:scale-x-50", "text-tertiary");
            });
          }
        });

        // Membuat navbar menjadi sticky disaat di scroll
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
  }, [secRefs]);

  return (
    <header ref={refNav} className="fixed top-0 left-0 w-full py-[1.5rem] px-[10%] bg-transparent flex items-center z-[100] transition duration-[0.5s] justify-items-stretch">
      <a href="#" className="text-[1.5rem] font-[700] cursor-default mr-auto uppercase px-[2rem] py-[0.2rem] bg-transparent shadow-custom rounded-md hover:text-[#666] hover:inner-shadow">
        MI<span className="text-tertiary">DEV</span>
      </a>
      <nav className="flex justify-center w-full">
        {navItem.map((v, i) => (
          <a
            key={i}
            href={v.link}
            ref={(e) => (navLinks.current[i] = e)}
            className={`nav-a after:block after:pb-[0.5rem] after:border-b-[0.2rem] after:border-solid after:border-b-tertiary after:scale-x-0 hover:after:scale-x-50 hover:text-tertiary after:transition-transform after:duration-75 after:ease-linear`}
          >
            {v.name}
          </a>
        ))}
      </nav>
    </header>
  );
}
