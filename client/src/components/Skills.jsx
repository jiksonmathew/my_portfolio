import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaReact,
  FaNodeJs,
  FaFigma,
  FaGitAlt,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss } from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 size={40} className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt size={40} className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs size={40} className="text-yellow-400" /> },
    { name: "Bootstrap", icon: <FaBootstrap size={40} className="text-purple-500" /> },
    { name: "MongoDB", icon: <SiMongodb size={40} className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress size={40} className="text-gray-300" /> },
    { name: "React", icon: <FaReact size={40} className="text-cyan-400" /> },
    { name: "Node.js", icon: <FaNodeJs size={40} className="text-green-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={40} className="text-sky-400" /> },
    { name: "UI/UX Design", icon: <FaFigma size={40} className="text-pink-500" /> },
    { name: "Git", icon: <FaGitAlt size={40} className="text-red-500" /> },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen px-6 py-16 bg-black text-white flex flex-col items-center"
    >
      <h2 className="text-4xl font-bold mb-12 text-cyan-400 drop-shadow-[0_0_8px_#06b6d4]">
        Skills
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 w-full max-w-5xl">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center bg-zinc-900 p-6 rounded-lg border border-cyan-500 shadow-lg hover:shadow-[0_0_20px_#06b6d4] transform hover:scale-105 transition"
          >
            {skill.icon}
            <h3 className="mt-3 text-lg font-semibold">{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
