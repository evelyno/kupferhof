import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';

const Navbar = () => {
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

    const isHome = location.pathname === '/';

    // Determine nav style based on scroll and page
    // If not home, we default to dark text until scrolled (or transparency logic differs)
    // Actually, for the new "white" headers, we always want dark text unless it's dark image background.
    // The user requested "gut zu erkennen".
    // For Home (Hero), it's white text on transparent (scrolling turns to white bg with dark text).
    // For Subpages (ModernPageHeader), it's white bg, so we need dark text immediately.

    const isDarkText = isScrolled || !isHome;

    return (
        <>
            <nav
                className={cn(
                    "fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-12 transition-all duration-300",
                    isScrolled
                        ? "bg-white/90 backdrop-blur-md shadow-sm py-4 text-stone-800"
                        : cn("py-8", isHome ? "text-white" : "text-stone-900 bg-transparent")
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
                <div className="hidden md:flex items-center space-x-10 text-sm font-medium tracking-wide">
                    <Link to="/hochzeiten" className="hover:text-rosental-500 transition-colors opacity-80">Hochzeiten</Link>
                    <Link to="/veranstaltungen" className="hover:text-rosental-500 transition-colors opacity-80">Veranstaltungen</Link>
                    <Link to="/location" className="hover:text-rosental-500 transition-colors opacity-80">Location</Link>
                    <Link to="/kulinarik" className="hover:text-rosental-500 transition-colors opacity-80">Kulinarik</Link>
                    <Link to="/kontakt" className="hover:text-rosental-500 transition-colors opacity-80">Kontakt</Link>
                </div>

                <div className="flex items-center space-x-4">
                    <Link to="/kontakt" className={cn(
                        "hidden md:block px-6 py-2 rounded-full text-sm font-medium transition-all border",
                        isDarkText
                            ? "bg-rosental-500 text-white border-rosental-500 hover:bg-rosental-600 shadow-sm"
                            : "bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20"
                    )}>
                        Anfrage senden
                    </Link>

                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={cn(
                            "group p-1 rounded-full transition-colors backdrop-blur-sm z-50 relative md:hidden",
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
                <Link to="/hochzeiten" className="text-2xl font-serif text-white hover:text-rosental-400 transition-colors">Hochzeiten</Link>
                <Link to="/veranstaltungen" className="text-2xl font-serif text-white hover:text-rosental-400 transition-colors">Veranstaltungen</Link>
                <Link to="/location" className="text-2xl font-serif text-white hover:text-rosental-400 transition-colors">Location</Link>
                <Link to="/kulinarik" className="text-2xl font-serif text-white hover:text-rosental-400 transition-colors">Kulinarik</Link>
                <Link to="/kontakt" className="text-2xl font-serif text-white hover:text-rosental-400 transition-colors">Kontakt</Link>
            </div>
        </>
    );
};

export default Navbar;
