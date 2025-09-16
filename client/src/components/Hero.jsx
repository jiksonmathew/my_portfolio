import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import profilePic from "../assets/jikson.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-center h-screen px-6 pt-24 md:pt-0"
    >
      <div className="text-center md:text-left">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
          I am <span className="text-white">Jikson Mathew</span>
        </h1>
        <TypeAnimation
          sequence={["MERN Stack Developer", 2000, "UI/UX Designer", 2000]}
          wrapper="span"
          repeat={Infinity}
          className="text-2xl md:text-4xl text-cyan-400 drop-shadow-[0_0_10px_#06b6d4]"
        />

        <div className="flex space-x-6 mt-8 justify-center md:justify-start">
          <a
            href="#contact"
            className="bg-cyan-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 transition"
          >
            Hire Me
          </a>
          <a
            href="/assets/resume.pdf"
            download
            className="bg-black border border-cyan-500 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black transition"
          >
            Download Resume
          </a>
        </div>
      </div>

      <motion.img
        src={profilePic}
        alt="Profile"
        className="w-48 h-48 md:w-72 md:h-72 rounded-full border-4 border-cyan-400 mt-10 md:mt-0 md:ml-16 shadow-[0_0_25px_#06b6d4]"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      />
    </section>
  );
}
