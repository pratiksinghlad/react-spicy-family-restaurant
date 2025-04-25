import React, { useState, useEffect, memo } from "react";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  scrollToSection: (sectionId: string) => void;
}
interface NavItem {
  id: string;
  label: string;
}

const Navbar: React.FC<NavbarProps> = memo(({ scrollToSection }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const navItems: NavItem[] = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsOpen(false);
  };

  useEffect(() => {
    const sections = navItems.map((item) => document.getElementById(item.id));
    if (!("IntersectionObserver" in window)) return;

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: 0.4,
    };
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    };
    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    sections.forEach((section) => {
      if (section) observer.observe(section);
    });
    return () =>
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
  }, [navItems]);

  return (
    <nav
      className="bg-gray-800 text-white shadow-md sticky top-0 z-50"
      aria-label="Main Navigation"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <img
              src="images/logo.jpeg"
              alt="Interior or exterior view of the restaurant"
              loading="lazy"
              width="50"
              height="50"
              className="w-8 h-8 mr-2 rounded-lg shadow-lg object-cover"
            />
            <button
              className="text-2xl font-bold cursor-pointer hover:text-amber-500 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white rounded"
              onClick={() => handleNavClick("home")}
              aria-label="Spicy Family Restaurant Home"
            >
              Spicy Family Restaurant
            </button>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white ${
                    activeSection === item.id
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                  aria-current={activeSection === item.id ? "page" : undefined}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close main menu" : "Open main menu"}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      <div
        className={`md:hidden absolute top-16 inset-x-0 bg-gray-800 z-40 transition-transform duration-300 ease-in-out ${
          isOpen ? "max-h-screen transform-none" : "max-h-0 -translate-y-full"
        } overflow-hidden`}
        id="mobile-menu"
        aria-hidden={!isOpen}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition duration-300 focus:outline-none focus:ring-2 focus:ring-white ${
                activeSection === item.id
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
              aria-current={activeSection === item.id ? "page" : undefined}
              tabIndex={isOpen ? 0 : -1}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
});
export default Navbar;
