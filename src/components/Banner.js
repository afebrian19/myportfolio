import React from "react";
import Image from "../assets/avatar.svg";
import { FaGithub, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import pdf from "../assets/Cvsaya.pdf";
import { useTranslation } from "react-i18next";

const Banner = () => {
  const { t } = useTranslation();

  const socialLinks = [
    {
      icon: <FaInstagram />,
      link: "https://www.instagram.com/afebrian_19",
    },
    {
      icon: <FaGithub />,
      link: "https://github.com/afebrian19",
    },
    {
      icon: <FaFacebook />,
      link: "https://www.facebook.com/rianprasetio",
    },
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/a-febriansyah-26115515b/",
    },
  ];

  return (
    <section
      className="min-h-[60vh] lg:min-h-[20vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div>
          {/* TEXT */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              className="text-[55px] font-bold leading-[1.1] lg:text-[110px]"
            >
              A <span>FEBRIANSYAH</span>
            </motion.h1>

            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
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
            className="font-secondary max-w-sm mb-8"
          >
            {t("bannerDesc")}
          </motion.p>

          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
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

          {/* SOCIAL ICONS — MODE DEWA */}
          <motion.div className="flex text-[50px] gap-x-8 max-w-max mx-auto lg:mx-0">
            {socialLinks.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 60 }}
                animate={{
                  opacity: 1,
                  y: [0, -10, 0], // floating natural
                }}
                transition={{
                  delay: index * 0.2,
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{
                  scale: 1.4,
                  rotate: 10,
                  y: -8,
                  transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                  },
                }}
                whileTap={{ scale: 0.8 }}
                className="
        relative
        cursor-pointer
        transition-all
        duration-300
        hover:text-yellow-400
        hover:drop-shadow-[0_0_20px_rgba(255,255,0,0.9)]
        before:absolute
        before:-inset-3
        before:rounded-full
        before:opacity-0
        hover:before:opacity-100
        before:bg-yellow-400/10
        before:blur-xl
      "
              >
                {item.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* IMAGE */}
          <div className="hidden">
            <img src={Image} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
