export default function NavBarSection() {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
  ];

  return (
    <nav className="bg-white/5 backdrop-blur-md px-5 py-3 rounded-xl shadow-lg border-1 border-white/10 fixed top-0 mt-10 z-9">
      <ul className="flex space-x-4">
        {navLinks.map((link) => (
          <li key={link.name}>
            <a href={link.href} className="text-white">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
