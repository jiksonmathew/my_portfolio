import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen bg-black px-6 py-16">
      <h2 className="text-4xl font-bold mb-12 text-center text-cyan-400 drop-shadow-[0_0_8px_#06b6d4]">
        Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-10">
        {[1, 2].map((p) => (
          <motion.div
            key={p}
            className="bg-zinc-900 p-6 rounded-xl shadow-lg border border-cyan-500 hover:shadow-[0_0_20px_#06b6d4]"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={`/assets/project${p}.png`}
              alt={`Project ${p}`}
              className="rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold text-white">Project {p}</h3>
            <div className="flex space-x-6 mt-4">
              <a href="#" className="text-cyan-400 hover:text-white transition">
                Live Demo
              </a>
              <a href="#" className="text-cyan-400 hover:text-white transition">
                Code
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
