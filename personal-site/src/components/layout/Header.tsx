'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Highlight from '@/components/ui/Highlight';

const navItems = [
  { path: '/journal', label: 'Journal', color: '#4CAF50' },
  { path: '/gallery', label: 'Gallery', color: '#FF9800' },
  { path: '/content', label: 'Content', color: '#9C27B0' },
];

const OPACITY = 0.3;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const currentPath = pathname;

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const nav = document.getElementById('mobile-nav');
      const toggleButton = document.getElementById('mobile-menu-toggle');

      if (isMenuOpen && nav && toggleButton && !nav.contains(target) && !toggleButton.contains(target)) {
        setIsMenuOpen(false);
      }
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMenuOpen]);

  const toggleMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/80 px-4 py-2 backdrop-blur-md">
        <div className="relative flex items-center justify-between">
          <Highlight
            href="/"
            before={currentPath === '/' ? { bgColor: '#2196F3', bgOpacity: OPACITY } : {}}
            after={{ bgColor: '#2196F3', bgOpacity: OPACITY }}>
            Sharqawy
          </Highlight>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 sm:flex">
            {navItems.map(({ path, label, color }) => {
              const isActive = currentPath === path;
              return (
                <Highlight
                  key={path}
                  href={path}
                  before={isActive ? { bgColor: color, bgOpacity: OPACITY } : {}}
                  after={{ bgColor: color, bgOpacity: OPACITY }}>
                  {label}
                </Highlight>
              );
            })}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            id="mobile-menu-toggle"
            className={`relative z-50 sm:hidden ${isMenuOpen ? 'menu-open' : ''}`}
            aria-label="Toggle mobile menu"
            onClick={toggleMenu}>
            <div className="relative h-5 w-6">
              <span className="hamburger-line absolute top-1"></span>
              <span className="hamburger-line absolute top-2.5"></span>
              <span className="hamburger-line absolute top-4"></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        <nav
          id="mobile-nav"
          className={`absolute inset-x-0 top-full z-50 flex w-full origin-top transform flex-col items-start justify-start gap-2 rounded-b-lg border border-gray-200 bg-white/80 px-4 py-6 shadow-lg backdrop-blur-md transition-all duration-200 ${
            isMenuOpen ? 'visible scale-100 opacity-100' : 'invisible scale-90 opacity-0'
          }`}>
          {navItems.map(({ path, label }) => {
            const isActive = currentPath === path;
            return (
              <a
                key={path}
                href={path}
                className={`w-full rounded-lg py-3 text-left text-lg font-medium transition-colors duration-200 ${
                  isActive ? 'bg-gray-100 text-gray-900' : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                }`}>
                {label}
              </a>
            );
          })}
        </nav>
      </header>

      {/* Mobile Menu Backdrop */}
      <div
        id="mobile-backdrop"
        className={`pointer-events-none fixed inset-0 z-30 bg-black/20 backdrop-blur-sm transition-all duration-200 ${
          isMenuOpen ? 'pointer-events-auto visible opacity-100' : 'invisible opacity-0'
        }`}
        onClick={() => setIsMenuOpen(false)}></div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
          .hamburger-line {
            display: block;
            position: absolute;
            height: 2px;
            width: 100%;
            background-color: #1f2937;
            border-radius: 2px;
            transition: all 0.3s ease-in-out;
          }

          /* Hamburger to X animation */
          .menu-open .hamburger-line:nth-child(1) {
            transform: rotate(45deg);
            top: 10px !important;
          }

          .menu-open .hamburger-line:nth-child(2) {
            opacity: 0;
          }

          .menu-open .hamburger-line:nth-child(3) {
            transform: rotate(-45deg);
            top: 10px !important;
          }
        `,
        }}
      />
    </>
  );
};

export default Header;
