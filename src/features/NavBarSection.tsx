export default function NavBarSection() {
  const navLinks = [
    { name: "Up", href: "#up" },
    { name: "About", href: "#about" },
    { name: "Try here", href: "#tryhere" },
    { name: "Log in", href: "#login" },
    { name: "Sign up", href: "#signup", isPrimary: true},
  ];

  return (
    <nav className="bg-white/5 backdrop-blur-md px-2 py-4 rounded-xl shadow-lg border-1 border-white/10 fixed top-0 mt-10 z-9">
      <ul className="flex gap-12">
        {navLinks.map((link) => (
          <li key={link.name}>
            <a href={link.href} className={`text-white font-medium ${link.isPrimary ? "bg-white/20 px-3 py-2 rounded-lg border-1 border-white/40 backdrop-blur-2xl hover:bg-white/40": ""} transition-all`}>
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
