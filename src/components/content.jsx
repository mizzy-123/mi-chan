"use client";

import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import "boxicons";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Content() {
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

  return (
    <>
      {/* Home */}
      <section className="min-h-screen px-[0] pt-[5rem] pb-[3rem] w-full">
        <div className="flex items-center justify-center mt-[3rem] px-[10%] gap-3">
          <div className="m-auto">
            <h3 className="text-[1.5rem] leading-[1.2] font-bold">Hello, It{`'`}s Me</h3>
            <h1 className="text-[3.3rem] font-[800]">
              <span className="text-tertiary">Mi chan desu..</span>
            </h1>
            <h3 className="leading-[1.2] text-[1.5rem] font-bold">
              And I{`'`}m a <span className="text-tertiary" ref={el}></span>
            </h3>
            <p className="py-[1.6rem] text-[0.9rem]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil repudiandae, possimus quo suscipit quia, id dicta consequuntur assumenda ullam eos numquam architecto facere. Aut mollitia sequi ut ipsam ducimus autem.
            </p>
            <div>
              <div>
                {icon.map((v, i) => (
                  <a key={i} href="" className="btn-home" onMouseOver={(e) => handleMouseOver(i, e)} onMouseOut={(e) => handleMouseOut(i, e)}>
                    <box-icon type="logo" name={v.name} color={v.color}></box-icon>
                  </a>
                ))}
              </div>
              <a className="bg-tertiary shadow-custom group rounded-[40px] box-border font-bold block h-[50px] text-[1em] p-[4px] relative no-underline w-[12em] z-[2]" href="#">
                <span className="flex items-center justify-center bg-background rounded-[40px] h-full transition w-full group-hover:text-white group-hover:bg-transparent">More About Me</span>
              </a>
            </div>
          </div>
          <div className="m-auto">
            <img className="max-w-[35rem] h-auto shadow-custom rounded-md w-[30rem] block object-cover" src="/images/home.png" alt="" />
          </div>
        </div>
      </section>

      {/* About me */}
      <section className="min-h-screen px-[0] pt-[5rem] pb-[3rem] w-full">
        <div className="flex items-center justify-center mt-[3rem] px-[10%] gap-9">
          <div data-aos="flip-right" data-aos-duration="1000" className="m-auto">
            <img className="max-w-[35rem] h-auto shadow-custom rounded-t-full rounded-br-full w-[30rem] block object-cover" src="/images/about.png" alt="" />
          </div>
          <div className="m-auto">
            <h2 className="font-bold text-[2.5rem] inline-block mb-[2rem]">
              About <span className="text-tertiary font-[900]">Me</span>
            </h2>
            <h3 className="text-[1.3rem] text-tertiary leading-[1.2] font-[800]">I{`'`}m FullStack Developer</h3>
            <p className="text-[0.9rem] mt-[0.5rem] mx-[0] mb-[2rem]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas id quod perspiciatis aliquid consectetur quaerat suscipit ipsa nostrum nisi veniam voluptatum, iste amet, est similique voluptates, tempore quasi ratione
              adipisci!
            </p>
            <a className="bg-tertiary shadow-custom group rounded-[40px] box-border font-bold block h-[50px] text-[1em] p-[4px] relative no-underline w-[12em] z-[2]" href="#">
              <span className="flex items-center justify-center bg-background rounded-[40px] h-full transition w-full group-hover:text-white group-hover:bg-transparent">More About Me</span>
            </a>
            <div className="flex items-start justify-center gap-[1rem] mt-[3rem]">
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

      {/* Services */}
      <section className="min-h-screen px-[0] pt-[5rem] pb-[3rem] w-full">
        <div className="text-center mb-[6rem]">
          <h2 className="text-[2.5rem] font-bold mt-[50px] inline-block">
            Our <span className="font-[900] text-tertiary">Services</span>
          </h2>
        </div>
      </section>
    </>
  );
}
