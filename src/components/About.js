import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({ threshold: 0.5 });

  return (
    <section className="section aboutscr" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1  bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
          ></motion.div>

          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2">{t("aboutTitle")}</h2>
            <h3 className="h3">{t("aboutSubtitle")}</h3>
            <p className="mb-1">{t("aboutDesc")}</p>

            <div className="flex gap-x-3 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary mr-2">
                  {inView ? <CountUp start={0} end={4} duration={4} /> : 0}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  {t("experience")}
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary mr-2">
                  {inView ? <CountUp start={0} end={13} duration={4} /> : 0}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  {t("projects")}
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary mr-2">
                  {inView ? <CountUp start={0} end={3} duration={4} /> : 0}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  {t("bankExp")}
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary mr-2">
                  {inView ? <CountUp start={0} end={1} duration={4} /> : 0}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  {t("award")}
                </div>
              </div>
            </div>
          </motion.div>

          <div className="flex gap-x-8 items-center">
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
              href="https://wa.me/6285246011055"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gradient btn-link ml-4"
            >
              {t("cv")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
