import React, { useState, useEffect } from 'react';

const COOKIE_NAME = 'site_auth';
const TARGET_HASH = '87f51f32ec7d828129795ee3c53b4d088e1c6f5e9da3fa7a39e4af52f69b3a73'; // SHA-256 for 'rosental2024'

const AuthWrapper = ({ children }: { children: React.ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    useEffect(() => {
        const checkAuth = () => {
            const match = document.cookie.match(new RegExp('(^| )' + COOKIE_NAME + '=([^;]+)'));
            if (match && match[2] === 'true') {
                setIsAuthenticated(true);
            }
            setIsLoading(false);
        };
        checkAuth();
    }, []);

    const sha256 = async (message: string) => {
        const msgBuffer = new TextEncoder().encode(message);
        const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const hash = await sha256(password);
        if (hash === TARGET_HASH) {
            const date = new Date();
            date.setTime(date.getTime() + (24 * 60 * 60 * 1000)); // 24 hours
            document.cookie = `${COOKIE_NAME}=true; expires=${date.toUTCString()}; path=/; SameSite=Strict`;
            setIsAuthenticated(true);
        } else {
            setError(true);
        }
    };

    if (isLoading) return null;

    if (!isAuthenticated) {
        return (
            <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#faf8f5] font-sans">
                <div className="w-[90%] max-w-[400px] bg-white p-8 rounded-2xl shadow-2xl text-center">
                    <h2 className="text-[#3a2e1f] text-2xl font-bold mb-4 font-serif">Geschützter Bereich</h2>
                    <p className="text-[#6b5539] mb-6">Bitte geben Sie das Passwort ein:</p>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-3 mb-4 border border-[#ccc] rounded-md box-border focus:border-[#b8956d] outline-none"
                            placeholder="Passwort"
                            autoFocus
                        />
                        <button
                            type="submit"
                            className="w-full bg-[#b8956d] text-white border-none p-3 rounded-md cursor-pointer font-bold hover:bg-[#7e6648] transition-colors"
                        >
                            Zugriff anfordern
                        </button>
                        {error && <p className="text-red-500 mt-3 text-sm">Falsches Passwort</p>}
                    </form>
                </div>
            </div>
        );
    }

    return <>{children}</>;
};

export default AuthWrapper;
