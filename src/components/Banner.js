import React from "react";
import Image from "../assets/avatar.svg";
import { FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import pdf from "../assets/Cvsaya.pdf";
import { useTranslation } from "react-i18next";

const Banner = () => {
  const { t } = useTranslation();

  return (
    <section
      className="min-h-[60vh] lg:min-h-[20vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div>
          {/* text */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[1.1] lg:text-[110px]"
            >
              A <span>FEBRIANSYAH</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-4 text-[30px] lg:text-[60px] lg:mb-16 font-secondary font-semibold uppercase leading-[1]"
            >
              <span className=" text-white mr-4">{t("iAm")}</span>
              <TypeAnimation
                sequence={[
                  t("role1"),
                  2000,
                  t("role2"),
                  2000,
                  t("role3"),
                  2000,
                  t("role4"),
                  2000,
                ]}
                speed={50}
                className="text-yellow-400"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
          </div>
          <motion.p
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="font-secondary max-w-sm mb-8"
          >
            {t("bannerDesc")}
          </motion.p>
          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex max-w-max gap-x-6 items-center mb-12 max-auto lg:mx-0"
          >
            <button className="btn btn-lg text-black">
              <a
                href="https://wa.me/6285246011055"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("contactMe")}
              </a>
            </button>
            <a
              href={pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gradient btn-link ml-4"
            >
              {t("myCv")}
            </a>
          </motion.div>
          {/* sosmed */}
          <motion.div
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex text-[50px] gap-x-6 max-w-max mx-auto lg:mx-0"
          >
            <a href="https://www.instagram.com/afebrian_19" target="_blank">
              <FaInstagram />
            </a>
            <a href="https://github.com/afebrian19" target="_blank">
              <FaGithub />
            </a>
            <a href="https://www.facebook.com/rianprasetio" target="_blank">
              <FaFacebook />
            </a>
          </motion.div>

          {/* image */}
          <div className="hidden">
            <img src={Image} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
