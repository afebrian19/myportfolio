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
  return (
    <section className="py-16 lg:section mt-[500px]" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <div className="flex-1">
            <div>
              <h4 className="text-xl uppercase text-yellow-500 font-medium mb-2 tracking-wide">
                Get in Touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Let's Work <br /> together!
              </h2>
            </div>
          </div>
          {/* WhatsApp link */}
          <div className="flex-1">
            <a
              href="https://wa.me/6285246011055" // Ganti dengan nomor WhatsApp Anda
              className="w-full block border border-yellow-500 bg-transparent py-4 px-6 text-yellow-500 text-center hover:bg-yellow-500 hover:text-white transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact Us on WhatsApp
            </a>
          </div>
        </div>
        {/* Skill Section */}
        <div className="mt-16">
          <h3 className="text-2xl text-yellow-500 font-medium mb-4">
            My Skills
          </h3>
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-wrap justify-center"
          >
            {/* Skill: HTML */}
            <div className="flex flex-col items-center mx-4 mb-8">
              <img
                src={html} // Ganti dengan path gambar HTML
                alt="HTML"
                className="w-24 h-24 rounded-full shadow-lg mb-2"
              />
              <span className="text-white">HTML</span>
            </div>
            {/* Skill: CSS */}
            <div className="flex flex-col items-center mx-4 mb-8">
              <img
                src={css} // Ganti dengan path gambar CSS
                alt="CSS"
                className="w-24 h-24 rounded-full shadow-lg mb-2"
              />
              <span className="text-white">CSS</span>
            </div>
            {/* Skill: JavaScript */}
            <div className="flex flex-col items-center mx-4 mb-8">
              <img
                src={javascript} // Ganti dengan path gambar JavaScript
                alt="JavaScript"
                className="w-24 h-24 rounded-full shadow-lg mb-2"
              />
              <span className="text-white">JavaScript</span>
            </div>
            {/* Skill: PHP */}
            <div className="flex flex-col items-center mx-4 mb-8">
              <img
                src={ci3} // Ganti dengan path gambar PHP
                alt="Codeigniter"
                className="w-24 h-24 rounded-full shadow-lg mb-2"
              />
              <span className="text-white">CodeIgniter</span>
            </div>
            {/* Skill: SQL */}
            <div className="flex flex-col items-center mx-4 mb-8">
              <img
                src={mysql} // Ganti dengan path gambar SQL
                alt="MySQL"
                className="w-24 h-24 rounded-full shadow-lg mb-2"
              />
              <span className="text-white">MySQL</span>
            </div>
            {/* Skill: Next.js */}
            <div className="flex flex-col items-center mx-4 mb-8">
              <img
                src={icon1} // Ganti dengan path gambar Next.js
                alt="Next.js"
                className="w-24 h-24 rounded-full shadow-lg mb-2"
              />
              <span className="text-white">Next.js</span>
            </div>
            <div className="flex flex-col items-center mx-4 mb-8">
              <img
                src={nodejs} // Ganti dengan path gambar Next.js
                alt="Nodejs"
                className="w-24 h-24 rounded-full shadow-lg mb-2"
              />
              <span className="text-white">Node.js</span>
            </div>
            <div className="flex flex-col items-center mx-4 mb-8">
              <img
                src={excel} // Ganti dengan path gambar Next.js
                alt="Next.js"
                className="w-24 h-24 rounded-full shadow-lg mb-2"
              />
              <span className="text-white">Ms. Excel</span>
            </div>
            <div className="flex flex-col items-center mx-4 mb-8">
              <img
                src={ps} // Ganti dengan path gambar Next.js
                alt="Next.js"
                className="w-24 h-24 rounded-full shadow-lg mb-2"
              />
              <span className="text-white">Photoshop</span>
            </div>
            <div className="flex flex-col items-center mx-4 mb-8">
              <img
                src={api} // Ganti dengan path gambar Next.js
                alt="Next.js"
                className="w-24 h-24 rounded-full shadow-lg mb-2"
              />
              <span className="text-white">API</span>
            </div>
            <div className="flex flex-col items-center mx-4 mb-8">
              <img
                src={laravel} // Ganti dengan path gambar Next.js
                alt="Next.js"
                className="w-24 h-24 rounded-full shadow-lg mb-2"
              />
              <span className="text-white">Laravel</span>
            </div>
            <div className="flex flex-col items-center mx-4 mb-8">
              <img
                src={jquery} // Ganti dengan path gambar Next.js
                alt="Next.js"
                className="w-24 h-24 rounded-full shadow-lg mb-2"
              />
              <span className="text-white">jquery</span>
            </div>
            {/* Tambahkan lebih banyak skill sesuai kebutuhan */}
          </motion.div>
        </div>

        {/* Award Section */}
        <div className="mt-16">
          <h3 className="text-2xl text-yellow-500 font-medium mb-4">Award</h3>
          <div className="flex flex-wrap justify-center">
            {/* Award 1 */}
            <div className="mx-4 mb-8 text-center mb-10">
              <img
                src={award} // Ganti dengan path gambar award 1
                alt="Award 1"
                className="w-90 h-80 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-110"
              />
              <h4 className="text-lg text-white-800 font-bold mt-10">
                "Optimalisasi Akses Keuangan Melalui Website Terbaik 2022"
              </h4>{" "}
              {/* Judul di bawah gambar */}
            </div>
            {/* Tambahkan lebih banyak award sesuai kebutuhan */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
