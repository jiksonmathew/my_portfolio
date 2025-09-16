import { FaFacebook, FaLinkedin, FaGithub, FaPhone, FaEnvelope } from "react-icons/fa";

export default function ContactCard() {
  return (
    <div className="bg-black border border-cyan-500 p-6 rounded-lg shadow-lg flex flex-col space-y-6">
      <h3 className="text-2xl font-bold text-cyan-400 mb-4">Get in Touch</h3>
      <a href="tel:+919526121657" className="text-cyan-400 hover:text-white flex items-center space-x-2">
        <FaPhone size={20} />
        <span>+91 9526121657</span>
      </a>
      <a href="mailto:jiksonmathew14@gmail.com" className="text-cyan-400 hover:text-white flex items-center space-x-2">
        <FaEnvelope size={20} />
        <span>jiksonmathew14@gmail.com</span>
      </a>
      <a href="https://facebook.com/gxnmtw" target="_blank" rel="noopener noreferrer"
         className="text-cyan-400 hover:text-white flex items-center space-x-2">
        <FaFacebook size={20} />
        <span>Facebook</span>
      </a>
      <a href="https://linkedin.com/in/jiksonmathew" target="_blank" rel="noopener noreferrer"
         className="text-cyan-400 hover:text-white flex items-center space-x-2">
        <FaLinkedin size={20} />
        <span>LinkedIn</span>
      </a>
      <a href="https://github.com/jiksonmathew" target="_blank" rel="noopener noreferrer"
         className="text-cyan-400 hover:text-white flex items-center space-x-2">
        <FaGithub size={20} />
        <span>GitHub</span>
      </a>
    </div>
  );
}
