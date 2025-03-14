import React from "react";

import CountUp from "react-countup";

import { useInView } from "react-intersection-observer";

import { motion } from "framer-motion"; // 3.1.0

import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section aboutscr" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          {/* image */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1  bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
          ></motion.div>
          {/* img */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2">About me</h2>
            <h3 className="h3">
              "I am the head of the Information Technology section at a bank for
              three years."
            </h3>
            <p className="mb-1">
              A graduate with a Bachelor's degree in Computer Science and over 3
              years of experience in the IT field. I possess strong technical
              skills, am innovative, and am always eager to learn new things
              related to the IT industry. I am accustomed to working both as
              part of a team and independently to achieve company goals.
              Additionally, I have excellent experience with programming
              languages such as HTML, PHP, and MySQL databases. I have developed
              various applications, including a banking information system for
              Bank Perekonomian Rakyat and an internal digital transformation
              system for the bank.
            </p>
            {/* stat */}
            <div className="flex gap-x-3 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary mr-2">
                  {inView ? <CountUp start={0} end={4} duration={4} /> : 0}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br /> Experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary mr-2">
                  {inView ? <CountUp start={0} end={13} duration={4} /> : 0}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br /> Complete
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary mr-2">
                  {inView ? <CountUp start={0} end={3} duration={4} /> : 0}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br /> Experience as IT of BANK
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary mr-2">
                  {inView ? <CountUp start={0} end={1} duration={4} /> : 0}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Award <br /> OJK
                </div>
              </div>
            </div>
          </motion.div>
          <div className="flex gap-x-8 items-center">
            <button className="btn btn-lg text-black">
              <a
                href="https://wa.me/6285246011055" // Ganti dengan nomor WhatsApp Anda
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact me
              </a>
            </button>
            <a
              href="https://wa.me/6285246011055" // Ganti dengan nomor WhatsApp Anda
              target="_blank"
              rel="noopener noreferrer"
              className="text-gradient btn-link ml-4"
            >
              MY CURRICULUM VITAE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
