import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import img1 from "../assets/transaksiapp.jpg";
import img2 from "../assets/produkapp.jpg";
import img3 from "../assets/dashboardapp.jpg";

const ProjectInventoryIT = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [img1, img2, img3];

  return (
    <div className="min-h-screen bg-[#0a192f] text-white">
      {/* NAV BACK */}
      <div className="fixed top-6 left-6 z-50">
        <Link
          to="/"
          className="bg-blue-900 hover:bg-blue-700 px-4 py-2 rounded-lg transition-all shadow-lg"
        >
          ← Back
        </Link>
      </div>

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center pt-28 pb-14"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-blue-400">
          Inventory IT System
        </h1>

        <p className="text-gray-300 mt-4 max-w-3xl mx-auto">
          Sistem Inventory IT modern untuk pengelolaan asset, transaksi barang,
          monitoring stok dan dashboard analytics secara realtime.
        </p>
      </motion.div>

      {/* TECH STACK */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="max-w-6xl mx-auto mb-20 px-6"
      >
        <h2 className="text-3xl font-bold mb-6 text-blue-300">
          Tech Stack & Architecture
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* LEFT */}
          <div className="bg-[#112240] p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4 text-blue-400">
              Development Stack
            </h3>

            <ul className="space-y-2 text-gray-300">
              <li>🚀 Laravel 12</li>
              <li>⚡ Bootstrap UI</li>
              <li>🗄 MySQL Database</li>
            </ul>
          </div>

          {/* RIGHT */}
          <div className="bg-[#112240] p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4 text-blue-400">
              System Overview
            </h3>

            <p className="text-gray-300 leading-relaxed">
              Aplikasi Inventory IT dibangun menggunakan Laravel 12 sebagai
              backend API dan business logic. Frontend menggunakan React JS
              dengan TypeScript untuk maintainability dan scalability. Inertia
              JS digunakan untuk menghasilkan SPA experience tanpa perlu API
              client terpisah.
            </p>
          </div>
        </div>
      </motion.div>

      {/* GALLERY */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold mb-10 text-blue-300">
          Application Preview
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer overflow-hidden rounded-xl border border-blue-800"
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={img}
                alt="inventory preview"
                className="w-full h-64 object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* POPUP VIEWER */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex justify-center items-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <motion.img
            initial={{ scale: 0.7 }}
            animate={{ scale: 1 }}
            src={selectedImage}
            alt="popup"
            className="max-h-[90%] max-w-[90%] rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  );
};

export default ProjectInventoryIT;
