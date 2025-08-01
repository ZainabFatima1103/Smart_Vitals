'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative w-full  text-white px-6 py-10"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
        <div className="text-center md:text-left">
          <h1 className="text-lg font-bold FONT bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent ">
            Smart Vitals
          </h1>
          <p className="text-white/70 mt-1">
            Empowering your health journey with smart AI tools.
          </p>
        </div>

        <div className="flex gap-4 text-xl text-white/70">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaTwitter />
          </a>
        </div>
      </div>

      <div className="text-center text-white/50 text-xs mt-8 border-t border-white/10 pt-4">
        © {new Date().getFullYear()} Smart Vitals — All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
