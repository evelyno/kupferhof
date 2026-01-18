import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import ModernPageHeader from '../components/ModernPageHeader';
import Contact from '../components/Contact';

const About = () => {
    return (
        <>
            <Helmet>
                <title>Über Uns | Kupferhof Rosental</title>
                <meta name="description" content="Lernen Sie das Team hinter dem Kupferhof Rosental kennen. Unsere Philosophie, unsere Geschichte und unsere Leidenschaft für Events." />
                <link rel="canonical" href="https://www.kupferhof-rosental.de/ueber-uns" />
            </Helmet>

            <ModernPageHeader
                title="Über Uns."
                subtitle="Ein Ort mit Geschichte. Ein Team mit Leidenschaft."
            />

            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl font-serif text-rosental-950 mb-8">Unsere Philosophie</h2>
                        <p className="text-stone-600 text-lg leading-relaxed mb-6">
                            Gastfreundschaft ist für uns mehr als nur ein Wort – es ist eine Haltung. Wir verstehen uns nicht nur als Vermieter einer Location, sondern als Gastgeber aus Leidenschaft.
                        </p>
                        <p className="text-stone-600 text-lg leading-relaxed mb-12">
                            Unser Ziel ist es, für jeden Gast eine Atmosphäre zu schaffen, in der er sich willkommen und geborgen fühlt. Wir lieben Details, wir schätzen Qualität und wir leben für den Moment, in dem aus einer Planung ein unvergessliches Erlebnis wird.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mb-20"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
                            alt="Das Team"
                            className="w-full rounded-sm shadow-xl"
                        />
                        <p className="text-sm text-stone-500 mt-4 text-center italic">Das Team des Kupferhof Rosental freut sich auf Sie.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-serif text-rosental-900 mb-4">Historie</h3>
                            <p className="text-stone-600 leading-relaxed">
                                Der Kupferhof Rosental blickt auf eine jahrhundertelange Geschichte zurück. Einst als Produktionsstätte für Messing errichtet, zeugen die Mauern noch heute vom fleißigen Treiben vergangener Epochen.
                                Die sorgfältige Restaurierung hat den industriellen Charme bewahrt und mit moderner Eleganz verbunden.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-serif text-rosental-900 mb-4">Nachhaltigkeit</h3>
                            <p className="text-stone-600 leading-relaxed">
                                Wir handeln verantwortungsbewusst. Regionale Produkte beim Catering, energieeffiziente Technik und ein respektvoller Umgang mit der historischen Bausubstanz sind für uns selbstverständlich.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Contact />
        </>
    );
};

export default About;
