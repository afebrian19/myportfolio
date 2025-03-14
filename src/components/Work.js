import React from "react";

import { motion } from "framer-motion";

import img1 from "../assets/webbpr.jpg";
import img2 from "../assets/webabsensi.jpg";
import img3 from "../assets/digitalarsip.jpg";
import img4 from "../assets/cutipegawai.jpg";
import img5 from "../assets/ckpnnetflow.jpg";
import img6 from "../assets/tanggorajo.jpg";

import { fadeIn } from "../variants";

const Work = () => {
  return (
    <section className="section mt-[540px]" id="work">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col lg:flex-row gap-x-10"
        >
          <div className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
            <div>
              <h2 className="h2 leading-tight text-white">My Latest Work</h2>
              <p className="max-w-sm mb-16"></p>
              <button className="btn btn-sm mb-5">View All Projects</button>
            </div>
            {/* Image 1 */}
            <a href="https://bankbprbatanghari.com/" target="_blank">
              <ProjectCard
                imgSrc={img1}
                category="Web Development"
                title="Web Bank Batanghari"
              />
            </a>
            <a href="https://ptbprtanggorajoperseroda.com/" target="_blank">
              <ProjectCard
                imgSrc={img6}
                category="Web Development Bank"
                title="Web Bank Daerah Tanggo Rajo Perseroda"
              />
            </a>
            <ProjectCard
              imgSrc={img2}
              category="Web Development"
              title="Web Absensi"
            />
          </div>
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12"
          >
            {/* Image 2 */}
            <ProjectCard
              imgSrc={img4}
              category="Web Development"
              title="Web Cuti Pegawai"
            />
            <ProjectCard
              imgSrc={img3}
              category="web Development"
              title="Digital Arsip"
            />
            <a
              href="https://www.youtube.com/watch?v=adO5oSCUY1I"
              target="_blank"
            >
              <ProjectCard
                imgSrc={img5}
                category="CKPN NETFLOW PD"
                title="Probability of Default CKPN"
              />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const ProjectCard = ({ imgSrc, category, title }) => {
  return (
    <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl h-64 sm:h-80 md:h-96 flex flex-col justify-center items-center">
      <div className="group-hover:bg-black/60 w-full h-full absolute z-40 transition-all duration-300"></div>
      <img
        className="group-hover:scale-125 transition-all duration-500 object-cover w-full h-full"
        src={imgSrc}
        alt={title}
      />
      <div className="absolute -bottom-full left-4 sm:left-6 md:left-12 group-hover:bottom-24 transition-all duration-500 z-50">
        <span className="text-white text-sm sm:text-base md:text-lg">
          {category}
        </span>
      </div>
      <div className="absolute -bottom-full left-4 sm:left-6 md:left-12 group-hover:bottom-14 transition-all duration-700 z-50">
        <span className="text-2xl sm:text-3xl md:text-4xl text-white">
          {title}
        </span>
      </div>
    </div>
  );
};

export default Work;
