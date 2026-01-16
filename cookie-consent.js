// cookie-consent.js
(function () {
    const COOKIE_CONSENT_KEY = 'rosental_cookie_consent';

    function getConsent() {
        return localStorage.getItem(COOKIE_CONSENT_KEY);
    }

    function setConsent(value) {
        localStorage.setItem(COOKIE_CONSENT_KEY, value);
        if (value === 'accepted') {
            loadAnalytics();
        }
        hideBanner();
    }

    function loadAnalytics() {
        // Placeholder for loading analytics scripts if any
        // console.log('Analytics loaded');
    }

    function hideBanner() {
        const banner = document.getElementById('cookie-banner');
        if (banner) banner.style.display = 'none';
    }

    function showBanner() {
        if (document.getElementById('cookie-banner')) return;

        const banner = document.createElement('div');
        banner.id = 'cookie-banner';
        banner.style.cssText = `
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: #fff;
            padding: 20px;
            border-radius: 12px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.15);
            z-index: 10000;
            width: 90%;
            max-width: 600px;
            display: flex;
            flex-direction: column;
            gap: 15px;
            border: 1px solid #e8dcc8;
            font-family: 'Inter', sans-serif;
        `;

        banner.innerHTML = `
            <div style="flex: 1;">
                <h3 style="margin: 0 0 5px 0; font-family: 'Playfair Display', serif; color: #3a2e1f;">Datenschutzeinstellungen</h3>
                <p style="margin: 0; font-size: 0.9rem; color: #6b5539; line-height: 1.5;">
                    Wir nutzen Cookies und ähnliche Technologien, um Ihr Nutzererlebnis zu optimieren. 
                    Einige sind notwendig, andere helfen uns, das Angebot zu verbessern.
                </p>
            </div>
            <div style="display: flex; gap: 10px; justify-content: flex-end;">
                <button id="cookie-reject" style="
                    padding: 8px 16px; 
                    border: 1px solid #b8956d; 
                    background: transparent; 
                    color: #b8956d; 
                    border-radius: 6px; 
                    cursor: pointer;
                    font-size: 0.9rem;
                    transition: all 0.2s;
                ">Nur Essenzielle</button>
                <button id="cookie-accept" style="
                    padding: 8px 16px; 
                    background: #b8956d; 
                    color: white; 
                    border: none; 
                    border-radius: 6px; 
                    cursor: pointer;
                    font-size: 0.9rem;
                    font-weight: 500;
                    box-shadow: 0 2px 10px rgba(184, 149, 109, 0.3);
                ">Alle Akzeptieren</button>
            </div>
        `;

        document.body.appendChild(banner);

        document.getElementById('cookie-accept').onclick = () => setConsent('accepted');
        document.getElementById('cookie-reject').onclick = () => setConsent('rejected');
    }

    window.addEventListener('load', () => {
        if (!getConsent()) {
            showBanner();
        } else {
            if (getConsent() === 'accepted') {
                loadAnalytics();
            }
        }
    });
})();
