import React from 'react';
import Navbar from '../components/Navbar';
import CookieConsent from '../components/CookieConsent';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <CookieConsent />

            <main className="flex-grow">
                {children}
            </main>

            <footer className="bg-white pt-20 pb-10 border-t border-rosental-100 relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                        {/* Brand */}
                        <div>
                            <Link to="/" className="inline-block mb-6">
                                <img src="/assets/kupferhof-logo.png" alt="Kupferhof Rosental" className="h-16 w-auto" />
                            </Link>
                            <p className="text-stone-500 text-sm mb-6 leading-relaxed">
                                Kupferhof Rosental.<br />
                                Historisches Ambiente für<br />moderne Begegnungen.
                            </p>
                            <div className="flex space-x-4">
                                <a href="#" className="w-10 h-10 rounded-full bg-rosental-50 flex items-center justify-center text-rosental-500 hover:bg-rosental-100 transition-colors">
                                    <Facebook className="w-4 h-4" />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-rosental-50 flex items-center justify-center text-rosental-500 hover:bg-rosental-100 transition-colors">
                                    <Instagram className="w-4 h-4" />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-rosental-50 flex items-center justify-center text-rosental-500 hover:bg-rosental-100 transition-colors">
                                    <Linkedin className="w-4 h-4" />
                                </a>
                            </div>
                        </div>

                        {/* Menu */}
                        <div>
                            <h4 className="text-stone-900 font-serif font-medium text-lg mb-6">Menu</h4>
                            <ul className="space-y-3">
                                <li><Link to="/hochzeiten" className="text-stone-500 hover:text-rosental-500 transition-colors text-sm">Hochzeiten</Link></li>
                                <li><Link to="/veranstaltungen" className="text-stone-500 hover:text-rosental-500 transition-colors text-sm">Veranstaltungen</Link></li>
                                <li><Link to="/location" className="text-stone-500 hover:text-rosental-500 transition-colors text-sm">Location</Link></li>
                                <li><Link to="/kulinarik" className="text-stone-500 hover:text-rosental-500 transition-colors text-sm">Kulinarik</Link></li>
                                <li><Link to="/kontakt" className="text-stone-500 hover:text-rosental-500 transition-colors text-sm">Kontakt</Link></li>
                                <li><Link to="/blog" className="text-stone-500 hover:text-rosental-500 transition-colors text-sm">Journal</Link></li>
                            </ul>
                        </div>

                        {/* Legal */}
                        <div>
                            <h4 className="text-stone-900 font-serif font-medium text-lg mb-6">Rechtliches</h4>
                            <ul className="space-y-3">
                                <li><Link to="/impressum" className="text-stone-500 hover:text-rosental-500 transition-colors text-sm">Impressum</Link></li>
                                <li><Link to="/datenschutz" className="text-stone-500 hover:text-rosental-500 transition-colors text-sm">Datenschutz</Link></li>
                                <li><Link to="/agb" className="text-stone-500 hover:text-rosental-500 transition-colors text-sm">AGB Events</Link></li>
                                <li><a href="#" className="text-stone-500 hover:text-rosental-500 transition-colors text-sm">Presse</a></li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <h4 className="text-stone-900 font-serif font-medium text-lg mb-6">Kontakt</h4>
                            <ul className="space-y-3">
                                <li className="flex items-center text-stone-500 text-sm">
                                    <Phone className="w-4 h-4 mr-3 text-rosental-400" /> +49 (0) 2402 / 963-0
                                </li>
                                <li className="flex items-center text-stone-500 text-sm">
                                    <Mail className="w-4 h-4 mr-3 text-rosental-400" /> info@kupferhof-rosental.de
                                </li>
                                <li className="flex items-start text-stone-500 text-sm">
                                    <MapPin className="w-4 h-4 mr-3 text-rosental-400 mt-0.5" />
                                    <span>Rathausstrasse 65-69,<br />52222 Stolberg (Rhld.)</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-stone-100 pt-8 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-stone-400 text-xs mb-4 md:mb-0">© {new Date().getFullYear()} Kupferhof Rosental. Alle Rechte vorbehalten.</p>
                        <div className="flex space-x-6 text-sm text-stone-400">
                            <Link to="/agb" className="hover:text-rosental-500 transition-colors">AGB</Link>
                            <Link to="/datenschutz" className="hover:text-rosental-500 transition-colors">Datenschutz</Link>
                            <Link to="/impressum" className="hover:text-rosental-500 transition-colors">Impressum</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
