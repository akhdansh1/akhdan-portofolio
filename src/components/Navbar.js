import { Link, useLocation } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Education", path: "/education" },
  { name: "Working Experience", path: "/working-experience" },
  { name: "Licenses & Certifications", path: "/licenses-and-certifications" },
  { name: "Organization", path: "/organization" },
  { name: "Skills", path: "/skills" },
  { name: "Honorary Titles & Awards", path: "/honorary-titles-and-awards" },
  { name: "Technologies", path: "/technologies" },
  { name: "Project", path: "/project" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="bg-white border-b border-blue-100 shadow-sm sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        {/* Wrapper: Flex, wrap, spacing */}
        <div className="flex flex-wrap items-center gap-4">
          {/* Logo kiri */}
          <div className="text-xl font-bold text-blue-600 mr-auto">
            Akhdan Profile
          </div>

          {/* Navbar kanan */}
          <ul className="flex flex-wrap justify-end gap-4 text-sm sm:text-base font-medium text-gray-700">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className={`transition-colors duration-200 hover:text-blue-600 ${
                      isActive
                        ? "text-blue-600 font-semibold border-b-2 border-blue-500 pb-0.5"
                        : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
