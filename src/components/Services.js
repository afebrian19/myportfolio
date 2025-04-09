import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();
  const services = t("services", { returnObjects: true });

  return (
    <section className="section mt-20 md:mt-32 lg:mt-[230px]" id="services">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-y-10 lg:gap-x-10">
          {/* Text Section */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-bottom bg-no-repeat mix-blend-lighten"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-6 font-bold">
              {t("servicesTitle")}
            </h2>
            <h3 className="max-w-[100%] sm:max-w-[500px] text-base sm:text-lg text-white mb-6">
              {t("servicesSubtitle")}
            </h3>
            <button className="btn btn-sm">{t("seeMyWork")}</button>
          </motion.div>

          {/* Services List */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <div className="space-y-10">
              {services.map((service, index) => (
                <div
                  className="flex flex-col lg:flex-row justify-between border-b border-white/20 pb-6"
                  key={index}
                >
                  <div className="lg:max-w-[600px] w-full">
                    <h4 className="text-lg sm:text-xl font-semibold text-white mb-2">
                      {service.name}
                    </h4>
                    <p className="text-white text-sm sm:text-base text-justify">
                      {service.description}
                    </p>
                  </div>
                  <div className="flex justify-start lg:justify-end mt-4 lg:mt-0">
                    <a
                      href="#"
                      className="btn w-9 h-9 flex justify-center items-center"
                    >
                      <BsArrowUpRight />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
