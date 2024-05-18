"use client";

import { useContext, useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import "boxicons";
import AOS from "aos";
import "aos/dist/aos.css";
import { AppContext } from "@/app/page";
import ScrollReveal from "scrollreveal";

export default function Content() {
  const { secRefs } = useContext(AppContext);
  const el = useRef(null);
  const [icon, setIcon] = useState([
    {
      name: "facebook-circle",
      color: "#fa87df",
    },
    {
      name: "instagram-alt",
      color: "#fa87df",
    },
    {
      name: "whatsapp",
      color: "#fa87df",
    },
    {
      name: "tiktok",
      color: "#fa87df",
    },
  ]);

  const dataTabLayout = [
    {
      name: "All",
      images: [
        {
          image: "/images/michan.png",
        },
        {
          image: "/images/manifestasi.png",
        },
        {
          image: "/images/ukm.png",
        },
        {
          image: "/images/s_homecare.png",
        },
        {
          image: "/images/freshop.png",
        },
        {
          image: "/images/design2.png",
        },
        {
          image: "/images/design4.png",
        },
        {
          image: "/images/a1.png",
        },
        {
          image: "/images/a2.png",
        },
        {
          image: "/images/a3.png",
        },
      ],
    },
    {
      name: "Web Develop",
      images: [
        {
          image: "/images/michan.png",
        },
        {
          image: "/images/ukm.png",
        },
        {
          image: "/images/manifestasi.png",
        },
        {
          image: "/images/s_homecare.png",
        },
        {
          image: "/images/freshop.png",
        },
      ],
    },
    {
      name: "Web Design",
      images: [
        {
          image: "/images/design2.png",
        },
        {
          image: "/images/design4.png",
        },
      ],
    },
    {
      name: "App Develop",
      images: [
        {
          image: "/images/a1.png",
        },
        {
          image: "/images/a2.png",
        },
        {
          image: "/images/a3.png",
        },
      ],
    },
  ];

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Fullstack Developer", "Mobile Developer"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  useEffect(() => {
    // Pindahkan semua akses `window` ke sini
    const handleLoad = () => {
      AOS.init();
    };

    if (window instanceof Window) {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      if (window instanceof Window) {
        window.removeEventListener("load", handleLoad);
      }
    };
  }, []); // Runs only once on client-side

  //   Handle icon hover boxicon issue
  const handleMouseOver = (index, e) => {
    const dataIcon = icon.map((v, i) => {
      if (i === index) {
        return { ...v, color: "#fff" };
      } else {
        return v;
      }
    });

    setIcon(dataIcon);
  };

  const handleMouseOut = (index, e) => {
    const dataIcon = icon.map((v, i) => {
      if (i === index) {
        return { ...v, color: "#fa87df" };
      } else {
        return v;
      }
    });
    setIcon(dataIcon);
  };

  const [activeIndex, setActiveIndex] = useState(0);
  function tabLayout(e, i) {
    e.preventDefault();
    setActiveIndex(i);
  }

  const homeH3 = useRef([]);
  const homeImg = useRef(null);
  const homeH1 = useRef(null);
  const homeP = useRef(null);
  const homeIcon = useRef(null);
  const homeBtn = useRef(null);

  const aboutRight = useRef([]);
  const aboutH2 = useRef(null);

  const portTop = useRef(null);
  const portBottom = useRef(null);

  useEffect(() => {
    const sr = ScrollReveal({
      distance: "200px",
      duration: 3500,
      delay: 200,
      reset: true,
    });

    homeH3.current.forEach((ref) => {
      sr.reveal(ref, { origin: "top" });
    });
    sr.reveal(homeImg.current, { origin: "right" });
    sr.reveal(homeH1.current, { origin: "left" });
    sr.reveal(homeP.current, { origin: "left" });
    sr.reveal(homeIcon.current, { origin: "right" });
    sr.reveal(homeBtn.current, { origin: "right" });

    sr.reveal(aboutH2.current, { origin: "top" });

    aboutRight.current.forEach((ref) => {
      sr.reveal(ref, { origin: "right" });
    });

    sr.reveal(portBottom.current, { origin: "bottom" });
    sr.reveal(portTop.current, { origin: "top" });
  }, []);

  return (
    <>
      {/* Home */}
      <section ref={(el) => (secRefs.current[0] = el)} id="Home" className="min-h-screen px-[0] pt-[5rem] pb-[3rem] w-full">
        <div className="flex items-center justify-center mt-[3rem] px-[10%] gap-3">
          <div className="m-auto">
            <h3 className="text-[1.5rem] leading-[1.2] font-bold" ref={(e) => (homeH3.current[0] = e)}>
              Hello, It{`'`}s Me
            </h3>
            <h1 className="text-[3.3rem] font-[800]" ref={homeH1}>
              <span className="text-tertiary">Mi chan dev..</span>
            </h1>
            <h3 className="leading-[1.2] text-[1.5rem] font-bold" ref={(e) => (homeH3.current[1] = e)}>
              And I{`'`}m a <span className="text-tertiary" ref={el}></span>
            </h3>
            <p className="py-[1.6rem] text-[0.9rem]" ref={homeP}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil repudiandae, possimus quo suscipit quia, id dicta consequuntur assumenda ullam eos numquam architecto facere. Aut mollitia sequi ut ipsam ducimus autem.
            </p>
            <div>
              <div ref={homeIcon}>
                {icon.map((v, i) => (
                  <a key={i} href="" className="btn-home" onMouseOver={(e) => handleMouseOver(i, e)} onMouseOut={(e) => handleMouseOut(i, e)}>
                    <box-icon type="logo" name={v.name} color={v.color}></box-icon>
                  </a>
                ))}
              </div>
              <a ref={homeBtn} className="bg-tertiary shadow-custom group rounded-[40px] box-border font-bold block h-[50px] text-[1em] p-[4px] relative no-underline w-[12em] z-[2]" href="#">
                <span className="flex items-center justify-center bg-background rounded-[40px] h-full transition w-full group-hover:text-white group-hover:bg-transparent">More About Me</span>
              </a>
            </div>
          </div>
          <div className="m-auto" ref={homeImg}>
            <img className="max-w-[35rem] h-auto shadow-custom rounded-md w-[30rem] block object-cover" src="/images/home.png" alt="" />
          </div>
        </div>
      </section>

      {/* About me */}
      <section ref={(el) => (secRefs.current[1] = el)} id="About" className="min-h-screen px-[0] pt-[5rem] pb-[3rem] w-full">
        <div className="flex items-center justify-center mt-[3rem] px-[10%] gap-9">
          <div data-aos="flip-right" data-aos-duration="1000" className="m-auto">
            <img className="max-w-[35rem] h-auto shadow-custom rounded-t-full rounded-br-full w-[30rem] block object-cover" src="/images/about.png" alt="" />
          </div>
          <div className="m-auto">
            <h2 ref={aboutH2} className="font-bold text-[2.5rem] inline-block mb-[2rem]">
              About <span className="text-tertiary font-[900]">Me</span>
            </h2>
            <h3 ref={(e) => (aboutRight.current[0] = e)} className="text-[1.3rem] text-tertiary leading-[1.2] font-[800]">
              I{`'`}m FullStack Developer
            </h3>
            <p ref={(e) => (aboutRight.current[1] = e)} className="text-[0.9rem] mt-[0.5rem] mx-[0] mb-[2rem]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas id quod perspiciatis aliquid consectetur quaerat suscipit ipsa nostrum nisi veniam voluptatum, iste amet, est similique voluptates, tempore quasi ratione
              adipisci!
            </p>
            <a ref={(e) => (aboutRight.current[2] = e)} className="bg-tertiary shadow-custom group rounded-[40px] box-border font-bold block h-[50px] text-[1em] p-[4px] relative no-underline w-[12em] z-[2]" href="#">
              <span className="flex items-center justify-center bg-background rounded-[40px] h-full transition w-full group-hover:text-white group-hover:bg-transparent">Latest Project</span>
            </a>
            <div ref={(e) => (aboutRight.current[3] = e)} className="flex items-start justify-center gap-[1rem] mt-[3rem]">
              <div className="relative">
                <div className="h-[160px] w-[160px] p-[20px] shadow-nav rounded-full">
                  <div className="h-[120px] w-[120px] rounded-full flex items-center justify-center inner-shadow">
                    <h4 className="font-bold">Next Js</h4>
                  </div>
                </div>
                <svg className="absolute top-0 left-0" xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                  <defs>
                    <linearGradient id="GradientColor">
                      <stop offset="0%" stopColor="#9b2fff" />
                      <stop offset="100%" stopColor="#ff2f48" />
                    </linearGradient>
                  </defs>
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    strokeLinecap="round"
                    className="fill-none stroke-[url(#GradientColor)] stroke-[20px]"
                    style={{
                      strokeDasharray: "472",
                      strokeDashoffset: "130",
                    }}
                  />
                </svg>
              </div>
              <div className="relative">
                <div className="h-[160px] w-[160px] p-[20px] shadow-nav rounded-full">
                  <div className="h-[120px] w-[120px] rounded-full flex items-center justify-center inner-shadow">
                    <h4 className="font-bold">Laravel</h4>
                  </div>
                </div>
                <svg className="absolute top-0 left-0" xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                  <defs>
                    <linearGradient id="GradientColor">
                      <stop offset="0%" stopColor="#9b2fff" />
                      <stop offset="100%" stopColor="#ff2f48" />
                    </linearGradient>
                  </defs>
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    strokeLinecap="round"
                    className="fill-none stroke-[url(#GradientColor)] stroke-[20px]"
                    style={{
                      strokeDasharray: "472",
                      strokeDashoffset: "80",
                    }}
                  />
                </svg>
              </div>
              <div className="relative">
                <div className="h-[160px] w-[160px] p-[20px] shadow-nav rounded-full">
                  <div className="h-[120px] w-[120px] rounded-full flex items-center justify-center inner-shadow">
                    <h4 className="font-bold">Android</h4>
                  </div>
                </div>
                <svg className="absolute top-0 left-0" xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                  <defs>
                    <linearGradient id="GradientColor">
                      <stop offset="0%" stopColor="#9b2fff" />
                      <stop offset="100%" stopColor="#ff2f48" />
                    </linearGradient>
                  </defs>
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    strokeLinecap="round"
                    className="fill-none stroke-[url(#GradientColor)] stroke-[20px]"
                    style={{
                      strokeDasharray: "472",
                      strokeDashoffset: "100",
                    }}
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Project */}
      <section ref={(el) => (secRefs.current[2] = el)} id="Portfolio" className="min-h-screen px-[0] pt-[5rem] pb-[3rem] w-full">
        <div className="text-center mb-[6rem]">
          <h2 ref={portTop} className="text-[2.5rem] font-bold mt-[50px] inline-block">
            Latest <span className="font-[900] text-tertiary">Project</span>
          </h2>
          <div ref={portBottom} className="flex items-center justify-center mt-[3rem] px-[10%] gap-9">
            <div className="grid grid-cols-1fr-3fr gap-8 w-full">
              <div className="flex flex-col gap-[1.5rem]">
                {dataTabLayout.map((v, i) => (
                  <button
                    onClick={(e) => tabLayout(e, i)}
                    key={i}
                    className={`py-[0.8rem] px[2.2rem] text-[0.9rem] transition-all duration-75 ease-in relative cursor-pointer overflow-hidden ${activeIndex === i ? "text-tertiary" : "text-[#212121]"} font-bold shadow-custom`}
                  >
                    {v.name}
                  </button>
                ))}
              </div>
              {dataTabLayout.map((e, i) => (
                <div key={i} className={`${activeIndex === i ? "grid" : "hidden"} grid-cols-3 gap-[0.5rem] overflow-hidden transition-all duration-75 ease-in scale-blur`}>
                  {e.images.map((v, i) => (
                    <img key={i} className="relative overflow-hidden transition-all duration-[0.2s] ease-in animate-scale hover:scale-105" src={v.image} alt="" />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Me */}
      <section ref={(el) => (secRefs.current[3] = el)} id="Contact" className="min-h-screen px-[0] pt-[5rem] pb-[3rem] w-full">
        <div className="text-center mb-[6rem]">
          <h2 className="text-[2.5rem] font-bold mt-[50px] inline-block">
            Contact <span className="font-[900] text-tertiary">Me</span>
          </h2>
          <div data-aos-delay="500" className="flex justify-center gap-4 mt-6">
            <div className="py-[1.2rem] px-[2.2rem] shadow-custom text-center rounded-md">
              <box-icon name="home-alt" color="#fa87df" class="w-10 h-10 mb-[1rem]"></box-icon>
              <h4 className="text-[1.4rem] font-bold">Address</h4>
              <div className="font-[500]">Semarang, East Java - Indonesia</div>
            </div>
            <div className="py-[1.2rem] px-[2.2rem] shadow-custom text-center rounded-md">
              <box-icon type="solid" color="#fa87df" name="phone" class="w-10 h-10 mb-[1rem]"></box-icon>
              <h4 className="text-[1.4rem] font-bold">Phone Number</h4>
              <div className="font-[500]">+6282141765353</div>
            </div>
            <div className="py-[1.2rem] px-[2.2rem] shadow-custom text-center rounded-md">
              <box-icon name="envelope" type="solid" color="#fa87df" class="w-10 h-10 mb-[1rem]"></box-icon>
              <h4 className="text-[1.4rem] font-bold">Email</h4>
              <div className="font-[500]">mizzy12342@gmail.com</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
