import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    const isHome = location.pathname === '/';
    // Blog Posts (but not the index) also have a large Hero Image, so they should start transparent/white.
    const isBlogPost = location.pathname.startsWith('/blog/') && location.pathname !== '/blog';

    // Pages that start with a transparent header over a dark hero image
    const isTransparentHeaderPage = isHome || isBlogPost;

    const isDarkText = isScrolled || !isTransparentHeaderPage;

    return (
        <>
            <nav
                className={cn(
                    "fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-12 transition-all duration-300",
                    isScrolled
                        ? "bg-white/90 backdrop-blur-md shadow-sm py-4 text-stone-800"
                        : cn("py-8", isTransparentHeaderPage ? "text-white" : "text-stone-900 bg-transparent")
                )}
            >
                <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
                    <img
                        src="/assets/kupferhof-logo.png"
                        alt="Kupferhof Rosental"
                        className={cn(
                            "h-12 md:h-14 w-auto transition-all",
                            isDarkText ? "" : "brightness-0 invert drop-shadow-lg"
                        )}
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden xl:flex items-center space-x-8 text-sm font-medium tracking-wide">
                    <Link to="/hochzeiten" className="hover:text-rosental-500 transition-colors opacity-90">{t('nav.weddings')}</Link>
                    <Link to="/veranstaltungen" className="hover:text-rosental-500 transition-colors opacity-90">{t('nav.events')}</Link>
                    <Link to="/uebernachten" className="hover:text-rosental-500 transition-colors opacity-90">{t('nav.accommodation')}</Link>
                    <Link to="/kulinarik" className="hover:text-rosental-500 transition-colors opacity-90">{t('nav.catering')}</Link>
                    <Link to="/ueber-uns" className="hover:text-rosental-500 transition-colors opacity-90">{t('nav.about')}</Link>
                    <Link to="/kontakt" className="hover:text-rosental-500 transition-colors opacity-90">{t('nav.contact')}</Link>
                </div>

                <div className="flex items-center space-x-6">
                    {/* Language Switcher */}
                    <div className="hidden md:flex items-center space-x-2 text-xs font-medium uppercase tracking-widest opacity-80">
                        <button onClick={() => changeLanguage('de')} className={cn("hover:text-rosental-500 transition-colors", i18n.language === 'de' && "font-bold underline")}>DE</button>
                        <span>|</span>
                        <button onClick={() => changeLanguage('en')} className={cn("hover:text-rosental-500 transition-colors", i18n.language === 'en' && "font-bold underline")}>EN</button>
                        <span>|</span>
                        <button onClick={() => changeLanguage('fr')} className={cn("hover:text-rosental-500 transition-colors", i18n.language === 'fr' && "font-bold underline")}>FR</button>
                        <span>|</span>
                        <button onClick={() => changeLanguage('nl')} className={cn("hover:text-rosental-500 transition-colors", i18n.language === 'nl' && "font-bold underline")}>NL</button>
                    </div>

                    <Link to="/kontakt" className={cn(
                        "hidden md:block px-6 py-2 rounded-full text-sm font-medium transition-all border",
                        isDarkText
                            ? "bg-rosental-500 text-white border-rosental-500 hover:bg-rosental-600 shadow-sm"
                            : "bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20"
                    )}>
                        Anfrage
                    </Link>

                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={cn(
                            "group p-1 rounded-full transition-colors backdrop-blur-sm z-50 relative xl:hidden",
                            isDarkText ? "hover:bg-rosental-50 text-stone-800" : "hover:bg-white/10 text-white"
                        )}
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={cn(
                    "fixed inset-0 bg-stone-900/95 z-40 flex flex-col items-center justify-center space-y-8 transition-all duration-300",
                    isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
                )}
            >
                <Link to="/hochzeiten" className="text-2xl font-serif text-white hover:text-rosental-400 transition-colors">{t('nav.weddings')}</Link>
                <Link to="/veranstaltungen" className="text-2xl font-serif text-white hover:text-rosental-400 transition-colors">{t('nav.events')}</Link>
                <Link to="/uebernachten" className="text-2xl font-serif text-white hover:text-rosental-400 transition-colors">{t('nav.accommodation')}</Link>
                <Link to="/kulinarik" className="text-2xl font-serif text-white hover:text-rosental-400 transition-colors">{t('nav.catering')}</Link>
                <Link to="/ueber-uns" className="text-2xl font-serif text-white hover:text-rosental-400 transition-colors">{t('nav.about')}</Link>
                <Link to="/kontakt" className="text-2xl font-serif text-white hover:text-rosental-400 transition-colors">{t('nav.contact')}</Link>

                {/* Mobile Lang Switcher */}
                <div className="flex items-center space-x-6 text-white pt-8 border-t border-white/10 w-48 justify-center">
                    <button onClick={() => changeLanguage('de')} className={cn("text-lg hover:text-rosental-400", i18n.language === 'de' && "font-bold text-rosental-400")}>DE</button>
                    <button onClick={() => changeLanguage('en')} className={cn("text-lg hover:text-rosental-400", i18n.language === 'en' && "font-bold text-rosental-400")}>EN</button>
                    <button onClick={() => changeLanguage('fr')} className={cn("text-lg hover:text-rosental-400", i18n.language === 'fr' && "font-bold text-rosental-400")}>FR</button>
                    <button onClick={() => changeLanguage('nl')} className={cn("text-lg hover:text-rosental-400", i18n.language === 'nl' && "font-bold text-rosental-400")}>NL</button>
                </div>
            </div>
        </>
    );
};

export default Navbar;
