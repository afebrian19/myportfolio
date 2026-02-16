import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, X } from "lucide-react";

import img1 from "../assets/crosingticket.jpg";
import img2 from "../assets/crosingshift.jpg";
import img3 from "../assets/crosingtransaksi.jpg";
import img4 from "../assets/crosingadd.jpg";

const images = [img1, img2, img3, img4];

const ProjectPOS = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="min-h-screen bg-[#0a192f] text-white px-6 py-20 relative overflow-hidden">
      {/* NAV BACK */}
      <Link to="/">
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="fixed top-6 left-6 z-50 backdrop-blur-md bg-[#112240]/70 px-4 py-3 rounded-xl flex items-center gap-2 cursor-pointer shadow-lg hover:bg-blue-900 transition"
        >
          <ArrowLeft size={20} />
          <span className="font-semibold">Back</span>
        </motion.div>
      </Link>

      {/* PROJECT DETAILS */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="max-w-6xl mx-auto mb-20"
      >
        <h2 className="text-3xl font-bold mb-6 text-blue-300">
          Tech Stack & Architecture
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* LEFT SIDE */}
          <div className="bg-[#112240] p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4 text-blue-400">
              Development Stack
            </h3>

            <ul className="space-y-2 text-gray-300">
              <li>🚀 Laravel 12 (Backend Framework)</li>
              <li>⚡ React JS + TypeScript (Frontend SPA)</li>
              <li>🔥 Inertia JS (Bridge Laravel & React)</li>
              <li>🗄 MySQL Database</li>
              <li>🔗 REST API Architecture</li>
            </ul>
          </div>

          {/* RIGHT SIDE */}
          <div className="bg-[#112240] p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4 text-blue-400">
              System Architecture
            </h3>

            <p className="text-gray-300 leading-relaxed">
              Aplikasi POS Crossing River dibangun menggunakan arsitektur modern
              fullstack dimana Laravel 12 digunakan sebagai backend untuk
              authentication, business logic, API management dan database
              handling. Frontend menggunakan React JS dengan TypeScript untuk
              memastikan type safety dan maintainability. Inertia JS digunakan
              sebagai penghubung antara Laravel dan React sehingga menghasilkan
              pengalaman SPA tanpa perlu membuat API client terpisah. Sistem
              menggunakan REST API untuk transaksi realtime, manajemen tiket dan
              monitoring shift operator.
            </p>
          </div>
        </div>
      </motion.div>

      {/* GALLERY */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {images.map((img, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer overflow-hidden rounded-xl border border-white/20"
            onClick={() => setSelectedImage(img)}
          >
            <img
              src={img}
              alt="project"
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* POPUP IMAGE */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex justify-center items-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.7 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.7 }}
              className="relative max-w-5xl p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <X
                className="absolute -top-4 -right-4 cursor-pointer"
                size={30}
                onClick={() => setSelectedImage(null)}
              />

              <img src={selectedImage} alt="popup" className="rounded-xl" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectPOS;
