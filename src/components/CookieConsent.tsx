import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const COOKIE_CONSENT_KEY = 'rosental_cookie_consent';

const CookieConsent = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
        if (!consent) {
            setShow(true);
        } else if (consent === 'accepted') {
            // Initialize analytics if/when we have them
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
        setShow(false);
        // Initialize analytics
    };

    const handleReject = () => {
        localStorage.setItem(COOKIE_CONSENT_KEY, 'rejected');
        setShow(false);
    };

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:max-w-md"
                >
                    <div className="bg-white rounded-xl shadow-2xl p-6 border border-stone-100 ring-1 ring-black/5">
                        <h3 className="font-serif text-lg text-stone-800 mb-2">Datenschutzeinstellungen</h3>
                        <p className="text-stone-600 text-sm mb-6 leading-relaxed">
                            Wir nutzen Cookies, um Ihr Nutzererlebnis zu verbessern. Einige sind notwendig, andere helfen uns, unser Angebot zu optimieren.
                        </p>
                        <div className="flex justify-end gap-3">
                            <button
                                onClick={handleReject}
                                className="px-4 py-2 text-sm text-stone-500 hover:text-stone-700 transition-colors"
                            >
                                Nur Essenzielle
                            </button>
                            <button
                                onClick={handleAccept}
                                className="px-4 py-2 bg-rosental-500 hover:bg-rosental-600 text-white rounded-md text-sm font-medium shadow-md shadow-rosental-500/20 transition-all hover:shadow-lg hover:shadow-rosental-500/30"
                            >
                                Alle Akzeptieren
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CookieConsent;
