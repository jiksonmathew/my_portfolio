import { useState } from "react";
import ContactCard from "./ContactCard";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://my-portfolio-k35p.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        alert("✅ Message sent!");
        setFormData({ name: "", email: "", message: "" }); // reset form
      } else {
        alert("❌ Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      alert("⚠️ Error connecting to server.");
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-zinc-900 flex flex-col items-center justify-center px-6 py-16"
    >
      <h2 className="text-4xl font-bold mb-12 text-cyan-400 drop-shadow-[0_0_8px_#06b6d4]">
        Contact
      </h2>

      <div className="grid md:grid-cols-2 gap-12 w-full max-w-6xl">
        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-black p-6 rounded-lg border border-cyan-500 shadow-lg space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-zinc-800 text-white border border-cyan-500 focus:ring-2 focus:ring-cyan-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-zinc-800 text-white border border-cyan-500 focus:ring-2 focus:ring-cyan-400"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-zinc-800 text-white border border-cyan-500 focus:ring-2 focus:ring-cyan-400"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-cyan-500 text-black font-semibold py-3 rounded-lg hover:bg-cyan-400 transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Card */}
        <ContactCard />
      </div>
    </section>
  );
}
