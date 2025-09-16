import React from "react";

export default function Navbar(){
  const links = ["home","projects","uiux","certifications","about","contact"];
  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-b from-black/90 to-black/70 border-b border-black/40">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <div className="text-xl font-bold text-white">YourName</div>
        <ul className="hidden md:flex items-center space-x-6 text-sm text-gray-300">
          {links.map(l=> <li key={l}><a href={`#${l}`} className="hover:text-blue-400 capitalize">{l}</a></li>)}
        </ul>
        <div className="md:hidden">
          {/* simple mobile nav anchor list — you can replace with a menu if needed */}
          <a href="#projects" className="text-sm text-gray-300">Projects</a>
        </div>
      </div>
    </nav>
  )
}
