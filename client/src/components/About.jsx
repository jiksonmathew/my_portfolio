export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 bg-black"
    >
      <div className="max-w-3xl text-center">
        <h2 className="text-4xl font-bold mb-6 text-cyan-400 drop-shadow-[0_0_8px_#06b6d4]">
          About Me
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          I am <span className="text-white font-semibold">Jikson Mathew</span>, a
          passionate{" "}
          <span className="text-cyan-400 font-semibold">Full Stack Developer</span>.
          I specialize in building scalable and efficient web applications using the{" "}
          <span className="text-cyan-400 font-semibold">MERN stack (MongoDB, Express.js, React, Node.js)</span>.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          With a strong foundation in{" "}
          <span className="text-cyan-400 font-semibold">React</span> and modern
          JavaScript, I create interactive and responsive UIs that provide seamless
          user experiences. I enjoy implementing{" "}
          <span className="text-cyan-400 font-semibold">RESTful APIs</span>,
          managing databases, and optimizing applications for scalability and
          performance.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          Beyond coding, I am passionate about{" "}
          <span className="text-cyan-400 font-semibold">problem solving</span>,
          learning new technologies, and contributing to open-source projects. My
          goal is to build{" "}
          <span className="text-cyan-400 font-semibold">
            robust, maintainable, and scalable solutions
          </span>{" "}
          that help businesses and users thrive in the digital world.
        </p>
      </div>
    </section>
  );
}
