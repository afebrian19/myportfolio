import React from "react";

import {} from "react-icons/bs";

import { BsArrowUpRight } from "react-icons/bs";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const services = [
  {
    name: "Fullstack Developer",
    description:
      "With my passion for programming, I develop applications to help the company reach a broader target market through the website, as well as build applications to assist with tasks such as digital archiving, leave management, attendance tracking, and more.",
    link: "learn more",
  },
  {
    name: "Design graphic",
    description:
      "For digital marketing purposes, I am studying graphic design to create promotional content for products and company branding for social media.",
    link: "learn more",
  },
  {
    name: "Data Analyst",
    description:
      "I am interested in data analysis. In my role as an administrator, I manage data for the company's needs and prepare monthly reports, including working on CKPN SAK EP for banking. I utilize Excel to manage the data and visualize it in the form of diagrams and charts.",
    link: "learn more",
  },
  {
    name: "Digital Marketing",
    description:
      "I am interested in the world of digital marketing. I manage social media, analyze data, handle product branding, increase website traffic, and develop promotional plans for products through digital channels.",
    link: "learn more",
  },
];

const Services = () => {
  return (
    <section className="section mt-[230px]" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1  lg:bg-bottom bg-no-repeat mix-blend-lighten lg:px-12 mb"
          >
            <h2 className="font-size-60px text-5xl text-white mb-6">
              What I do
            </h2>
            <h3 className=" max-w-[455px] mb-2  ">
              i'm a fullstack developer with over 4 year of experience.
            </h3>
            <button className="btn btn-sm">See My Work</button>
          </motion.div>
          {/* service */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <div className="mt-10">
              {services.map((service, index) => {
                const { name, description, link } = service;
                return (
                  <div
                    className="border-b border-white/20 h-[240px] mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[370px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col ml-auto">
                      <a
                        href="#"
                        className="btn w-9 h-9 mb-[41px] flex justify-center items-center"
                      >
                        <BsArrowUpRight />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
