import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import img1 from "../assets/webbpr.jpg";
import img2 from "../assets/webabsensi.jpg";
import img3 from "../assets/digitalarsip.jpg";
import img4 from "../assets/cutipegawai.jpg";
import img5 from "../assets/ckpnnetflow.jpg";
import img6 from "../assets/tanggorajo.jpg";

/* 🔥 Tambahkan gambar baru */
import inventory from "../assets/inventoryit.jpg";
import pos from "../assets/poscrossingriver.jpg";

import { fadeIn } from "../variants";

const Work = () => {
  return (
    <section className="section mt-20 md:mt-40 lg:mt-[540px]" id="work">
      <div className="container mx-auto max-w-7xl px-4">
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              My Latest Work
            </h2>
            <button className="btn btn-sm">View All Projects</button>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* EXTERNAL */}
            <ProjectCard
              imgSrc={img1}
              category="Web Development"
              title="Web Bank Batanghari"
              external="https://bankbprbatanghari.com/"
            />

            <ProjectCard
              imgSrc={img6}
              category="Web Development"
              title="Web Bank Daerah Tanggo Rajo"
              external="https://ptbprtanggorajoperseroda.com/"
            />

            {/* INTERNAL ROUTE */}
            <ProjectCard
              imgSrc={img2}
              category="Web Development"
              title="Web Absensi"
              link="/project-absensi"
            />

            <ProjectCard
              imgSrc={img4}
              category="Web Development"
              title="Web Cuti Pegawai"
              link="/project-cuti"
            />

            <ProjectCard
              imgSrc={img3}
              category="Web Development"
              title="Digital Arsip"
              link="/project-digital-arsip"
            />

            {/* YOUTUBE */}
            <ProjectCard
              imgSrc={img5}
              category="CKPN NETFLOW PD"
              title="Probability of Default CKPN"
              external="https://www.youtube.com/watch?v=adO5oSCUY1I"
            />

            {/* 🔥 PROJECT BARU */}
            <ProjectCard
              imgSrc={inventory}
              category="IT System"
              title="Inventory IT"
              link="/project-inventory-it"
            />

            <ProjectCard
              imgSrc={pos}
              category="POS System"
              title="POS Crossing River"
              link="/project-pos-crossing-river"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ProjectCard = ({ imgSrc, category, title, link, external }) => {
  const content = (
    <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 flex justify-center items-center cursor-pointer">
      <div className="group-hover:bg-black/60 w-full h-full absolute z-40 transition-all duration-300"></div>

      <img
        className="group-hover:scale-110 transition-all duration-500 object-cover w-full h-full"
        src={imgSrc}
        alt={title}
      />

      <div className="absolute -bottom-full left-4 group-hover:bottom-16 transition-all duration-500 z-50">
        <span className="text-white text-sm sm:text-base md:text-lg">
          {category}
        </span>
      </div>

      <div className="absolute -bottom-full left-4 group-hover:bottom-8 transition-all duration-700 z-50">
        <span className="text-xl sm:text-2xl text-white">{title}</span>
      </div>
    </div>
  );

  if (external) {
    return (
      <a href={external} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }

  if (link) {
    return <Link to={link}>{content}</Link>;
  }

  return content;
};

export default Work;
