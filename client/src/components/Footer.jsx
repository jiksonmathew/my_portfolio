export default function Footer() {
  return (
    <footer className="bg-black py-6 text-center border-t border-cyan-500">
      <p className="text-gray-400 text-sm">
        © {new Date().getFullYear()} Jikson Mathew. All rights reserved.
      </p>
    </footer>
  );
}
