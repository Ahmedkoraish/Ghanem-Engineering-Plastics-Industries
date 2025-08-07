import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { TbWorld } from 'react-icons/tb';
import { FiMenu, FiX } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import logo from '../assets/logo1.webp'; 

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
  };

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const linkClass =
    'block px-4 py-2 text-gray-700 hover:text-blue-600 transition';
  const activeClass = 'font-bold text-blue-600 underline';

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4  flex justify-between items-center">
        
        <img src={logo} alt="Logo" className="w-24" />

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-4 items-center">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? `${linkClass} ${activeClass}` : linkClass
            }
          >
            {t('nav.home')}
          </NavLink>
          <NavLink
            to="/service"
            className={({ isActive }) =>
              isActive ? `${linkClass} ${activeClass}` : linkClass
            }
          >
            {t('nav.services')}
          </NavLink>
          {/* <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? `${linkClass} ${activeClass}` : linkClass
            }
          >
            {t('nav.about')}
          </NavLink> */}
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? `${linkClass} ${activeClass}` : linkClass
            }
          >
            {t('nav.contact')}
          </NavLink>
          {/* <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 text-gray-600 hover:text-blue-500"
          >
            <TbWorld className="text-lg" />
            {i18n.language === 'en' ? 'AR' : 'EN'}
          </button> */}
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={toggleMenu}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-sm">
          <nav className="flex flex-col px-4 py-2 space-y-1">
            <NavLink
              onClick={toggleMenu}
              to="/"
              end
              className={({ isActive }) =>
                isActive ? `${linkClass} ${activeClass}` : linkClass
              }
            >
              {t('nav.home')}
            </NavLink>
            <NavLink
              onClick={toggleMenu}
              to="/service"
              className={({ isActive }) =>
                isActive ? `${linkClass} ${activeClass}` : linkClass
              }
            >
              {t('nav.services')}
            </NavLink>
            <NavLink
              onClick={toggleMenu}
              to="/about"
              className={({ isActive }) =>
                isActive ? `${linkClass} ${activeClass}` : linkClass
              }
            >
              {t('nav.about')}
            </NavLink>
            <NavLink
              onClick={toggleMenu}
              to="/contact"
              className={({ isActive }) =>
                isActive ? `${linkClass} ${activeClass}` : linkClass
              }
            >
              {t('nav.contact')}
            </NavLink>
            <button
              onClick={() => {
                toggleLanguage();
                toggleMenu();
              }}
              className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-blue-500"
            >
              <TbWorld className="text-lg" />
              {i18n.language === 'en' ? 'AR' : 'EN'}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
