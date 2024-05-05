"use client";

import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import "boxicons";

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
                <span className="flex items-center justify-center bg-background rounded-[40px] h-full transition w-full group-hover:text-white group-hover:bg-transparent ">More About Me</span>
              </a>
            </div>
          </div>
          <div className="m-auto">
            <img className="max-w-[35rem] h-auto shadow-custom rounded-md w-[30rem] block object-cover" src="/images/home.png" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
