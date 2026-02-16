import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

import icon1 from "../assets/nextjs.svg";
import mysql from "../assets/mysl.png";
import javascript from "../assets/javascript.png";
import ci3 from "../assets/ci3.svg";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import nodejs from "../assets/nodejs.svg";
import ps from "../assets/photoshop.svg";
import excel from "../assets/ms-excel.svg";
import award from "../assets/award.jpg";
import api from "../assets/api.svg";
import jquery from "../assets/jquery.svg";
import laravel from "../assets/laravel.svg";

const Contact = () => {
  const skills = [
    { img: html, name: "HTML" },
    { img: css, name: "CSS" },
    { img: javascript, name: "JavaScript" },
    { img: ci3, name: "CodeIgniter" },
    { img: mysql, name: "MySQL" },
    { img: icon1, name: "Next.js" },
    { img: nodejs, name: "Node.js" },
    { img: excel, name: "Ms. Excel" },
    { img: ps, name: "Photoshop" },
    { img: api, name: "API" },
    { img: laravel, name: "Laravel" },
    { img: jquery, name: "jQuery" },
  ];

  return (
    <section className="py-16 lg:section mt-[500px]" id="contact">
      <div className="container mx-auto">
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1">
            <h4 className="text-xl uppercase text-yellow-500 font-medium mb-2 tracking-wide">
              Get in Touch
            </h4>

            <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
              Let's Work <br /> together!
            </h2>
          </div>

          <div className="flex-1">
            <a
              href="https://wa.me/6285246011055"
              className="w-full block border border-yellow-500 bg-transparent py-4 px-6 text-yellow-500 text-center hover:bg-yellow-500 hover:text-white transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact Us on WhatsApp
            </a>
          </div>
        </div>

        {/* SKILLS MODE DEWA */}
        <div className="mt-16">
          <h3 className="text-2xl text-yellow-500 font-medium mb-6">
            My Skills
          </h3>

          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            className="flex flex-wrap justify-center gap-10"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                animate={{
                  opacity: 1,
                  y: [0, -12, 0],
                }}
                transition={{
                  delay: index * 0.1,
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{
                  scale: 1.2,
                  rotate: 5,
                  y: -10,
                  transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                  },
                }}
                className="
                  flex flex-col items-center
                  cursor-pointer
                  relative
                  group
                "
              >
                <img
                  src={skill.img}
                  alt={skill.name}
                  className="
                    w-24 h-24 rounded-full shadow-lg
                    transition-all duration-300
                    group-hover:drop-shadow-[0_0_25px_rgba(255,255,0,0.9)]
                  "
                />

                <span className="text-white mt-2">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* AWARD */}
        <div className="mt-16">
          <h3 className="text-2xl text-yellow-500 font-medium mb-4">Award</h3>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex justify-center"
          >
            <img
              src={award}
              alt="Award"
              className="w-90 h-80 rounded-lg shadow-lg"
            />
          </motion.div>

          <h4 className="text-lg text-center font-bold mt-10">
            "Optimalisasi Akses Keuangan Melalui Website Terbaik 2022"
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Contact;
