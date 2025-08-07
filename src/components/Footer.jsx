import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../assets/logo1.webp";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-white text-gray-800 border-t border-gray-200 mt-10 relative">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo Section */}
        <div className="flex flex-col items-start">
          <img src={logo} alt="Logo" className="w-24" />
          <h2 className="text-xl font-bold">{t("footer.brand.name")}</h2>
          <p className="text-sm">{t("footer.brand.desc")}</p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-lg mb-2">
            {t("footer.contact.title")}
          </h3>
          <p className="text-sm mb-1">{t("footer.contact.text")}</p>
          <p className="text-sm">{t("footer.contact.phone1")}</p>
          <p className="text-sm">{t("footer.contact.phone2")}</p>
          <p className="text-sm">{t("footer.contact.email")}</p>
        </div>

        {/* Localization */}
        <div>
          <h3 className="font-semibold text-lg mb-2">
            {t("footer.location.title")}
          </h3>
          <p className="text-sm">{t("footer.location.line1")}</p>
          <p className="text-sm">{t("footer.location.line2")}</p>
          <p className="text-sm">{t("footer.location.line3")}</p>
          <p className="text-sm">{t("footer.location.line4")}</p>
        </div>

        {/* Short Links */}
        <div>
          <h3 className="font-semibold text-lg mb-2">
            {t("footer.links.title")}
          </h3>
          <ul className="space-y-1 text-sm">
            <li>
              <NavLink to="/service" className="hover:underline">
                {t("footer.links.service")}
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:underline">
                {t("footer.links.about")}
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:underline">
                {t("footer.links.contact")}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
