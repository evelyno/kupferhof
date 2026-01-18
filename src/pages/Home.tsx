import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const Home = () => {
    const { t } = useTranslation();
    return (
        <>
            <Helmet>
                <title>{t('home.seo.title')}</title>
                <meta name="description" content={t('home.seo.description')} />
                <script type="application/ld+json">
                    {`
                    {
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "@id": "https://www.kupferhof-rosental.de/#org",
                        "name": "Kupferhof Rosental",
                        "image": "https://www.kupferhof-rosental.de/assets/images/logo.png",
                        "url": "https://www.kupferhof-rosental.de/",
                        "telephone": "+49 2402 9630",
                        "email": "info@kupferhof-rosental.de",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Rathausstrasse 65-69",
                            "addressLocality": "Stolberg (Rhld.)",
                            "postalCode": "52222",
                            "addressCountry": "DE"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": 50.7667,
                            "longitude": 6.2333
                        },
                        "openingHoursSpecification": [
                            {
                                "@type": "OpeningHoursSpecification",
                                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                                "opens": "09:00",
                                "closes": "17:00"
                            }
                        ],
                        "sameAs": [
                            "https://www.instagram.com/kupferhofrosental",
                            "https://www.facebook.com/kupferhofrosental"
                        ]
                    }
                    `}
                </script>
            </Helmet>
            <Hero />
            <Services />
            <About />
            <Portfolio />
            <Stats />
            <Testimonials />
            <Contact />
        </>
    );
}

export default Home;
