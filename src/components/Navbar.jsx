import { useEffect, useRef, useState } from 'react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const sideMenuRef = useRef();

  useEffect(() => {
    // Initialize theme
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }

    // Scroll handler
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openMenu = () => {
    setIsMobileMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    
    if (newIsDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const navLinks = [
    { href: '#top', label: 'Home' },
    { href: '#about', label: 'About me' },
    { href: '#services', label: 'Services' },
    { href: '#work', label: 'My Work' },
    { href: '#contact', label: 'Contact me' }
  ];

  return (
    <>
      <nav 
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-center z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/50 backdrop-blur-lg shadow-sm dark:bg-gray-900/90 dark:shadow-white/20' 
            : ''
        }`}
      >
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 transition-all duration-300 ${
          !isScrolled 
            ? 'bg-white/50 shadow-sm dark:border dark:border-white/30 dark:bg-transparent' 
            : ''
        }`}>
          {navLinks.map((link, index) => (
            <li key={index}>
              <a 
                href={link.href} 
                className="font-Ovo hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="absolute right-5 lg:right-8 xl:right-[8%] flex items-center gap-4">
          <button onClick={toggleTheme} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
            {isDark ? (
              <img src="/assets/sun_icon.png" alt="Light mode" className="w-6" />
            ) : (
              <img src="/assets/moon_icon.png" alt="Dark mode" className="w-6" />
            )}
          </button>

          <a 
            href="#contact" 
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            Contact
            <img src="/assets/arrow-icon.png" alt="Arrow" className="w-3 dark:hidden" />
            <img src="/assets/arrow-icon-dark.png" alt="Arrow" className="w-3 hidden dark:block" />
          </a>

          <button 
            onClick={openMenu}
            className="block md:hidden ml-3 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors"
            aria-label="Open menu"
          >
            <img src="/assets/menu-black.png" alt="Menu" className="w-6 dark:hidden" />
            <img src="/assets/menu-white.png" alt="Menu" className="w-6 hidden dark:block" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        ref={sideMenuRef}
        className={`fixed top-0 bottom-0 right-0 z-50 w-64 bg-rose-50 dark:bg-gray-900 transition-transform duration-500 md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-6">
          <button 
            onClick={closeMenu}
            className="p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded transition-colors"
            aria-label="Close menu"
          >
            <img src="/images/close-black.png" alt="Close" className="w-5 dark:hidden" />
            <img src="/images/close-white.png" alt="Close" className="w-5 hidden dark:block" />
          </button>
        </div>

        <ul className="flex flex-col gap-4 px-8 py-4">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a 
                href={link.href} 
                onClick={closeMenu}
                className="block font-Ovo text-lg hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={closeMenu}
        />
      )}
    </>
  )
}