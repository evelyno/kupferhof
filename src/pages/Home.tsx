import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Kupferhof Rosental | Exklusive Eventlocation in Stolberg</title>
                <meta name="description" content="Feiern Sie unvergessliche Hochzeiten und Events im historischen Kupferhof Rosental in Stolberg (Rhld.). Einzigartiges Ambiente für Ihre besonderen Momente." />
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
